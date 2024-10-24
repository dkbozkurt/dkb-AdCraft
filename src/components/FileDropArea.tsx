import React, { useState, useRef } from 'react'
import { Folder, X, Loader } from 'lucide-react'

const FileDropArea: React.FC = () => {
    const [folder, setFolder] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const items = e.dataTransfer.items
        if (items) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i].webkitGetAsEntry()
                if (item && item.isDirectory) {
                    handleFolder(item as FileSystemDirectoryEntry)
                    break
                }
            }
        }
    }

    const handleFolder = async (folderEntry: FileSystemDirectoryEntry) => {
        setIsLoading(true)
        try {
            const hasPackageJson = await checkForPackageJson(folderEntry)
            if (hasPackageJson) {
                setFolder(folderEntry.name)
                localStorage.setItem('selectedFolder', folderEntry.name)
            } else {
                alert('Selected folder does not contain a package.json file in its subdirectories.')
            }
        } catch (error) {
            console.error('Error processing folder:', error)
            alert('Error processing folder. Please try again.')
        }
        setIsLoading(false)
    }

    const checkForPackageJson = (entry: FileSystemDirectoryEntry): Promise<boolean> => {
        return new Promise((resolve) => {
            let found = false
            const reader = entry.createReader()
            const readEntries = () => {
                reader.readEntries((entries) => {
                    for (let i = 0; i < entries.length; i++) {
                        if (entries[i].isFile && entries[i].name === 'package.json') {
                            found = true
                            break
                        } else if (entries[i].isDirectory) {
                            checkForPackageJson(entries[i] as FileSystemDirectoryEntry).then((result) => {
                                if (result) found = true
                            })
                        }
                    }
                    if (!found && entries.length > 0) {
                        readEntries()
                    } else {
                        resolve(found)
                    }
                })
            }
            readEntries()
        })
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files[0]) {
            handleFolder(files[0] as unknown as FileSystemDirectoryEntry)
        }
    }

    const removeFolder = () => {
        setFolder(null)
        localStorage.removeItem('selectedFolder')
    }

    return (
        <div className="relative mb-4">
            <h2 className="absolute -top-3 left-2 z-10 px-2 text-white text-sm font-bold">
                Select Path or Drag and Drop
            </h2>
            <div
                className={`relative border-4 border-dashed border-white rounded-2xl p-8 text-center cursor-pointer ${folder ? 'border-opacity-0' : 'border-opacity-100'
                    }`}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={handleClick}
            >
                {isLoading ? (
                    <div className="flex items-center justify-center">
                        <Loader className="animate-spin text-white mr-2" />
                        <p className="text-white">Processing folder...</p>
                    </div>
                ) : folder ? (
                    <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-2">
                        <div className="flex items-center">
                            <Folder className="text-white mr-2" />
                            <p className="text-white">{folder}</p>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); removeFolder(); }} className="text-white hover:text-red-500">
                            <X />
                        </button>
                    </div>
                ) : (
                    <p className="text-white">Drop your folder here or click to select</p>
                )}
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                className="hidden"
                webkitdirectory="true"
                directory="true"
            />
        </div>
    )
}

export default FileDropArea