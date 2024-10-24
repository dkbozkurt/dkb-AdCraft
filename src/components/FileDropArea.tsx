import React, { useState } from 'react'

const FileDropArea: React.FC = () => {
    const [file, setFile] = useState<File | null>(null)

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const droppedFile = e.dataTransfer.files[0]
        setFile(droppedFile)
    }

    return (
        <div
            className="relative border-4 border-dashed border-white rounded-2xl p-8 text-center cursor-pointer mb-4"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <h2 className="absolute -top-3 left-2 bg-jd-green px-2 text-white text-sm font-bold">Select Path or Drag and Drop</h2>
            <p className="text-white">
                {file ? file.name : 'Drop your file here or click to select'}
            </p>
        </div>
    )
}

export default FileDropArea