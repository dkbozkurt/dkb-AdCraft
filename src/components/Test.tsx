import React, { useState } from 'react'

export default function Test() {
    const [file, setFile] = useState<File | null>(null)
    const [textInputs, setTextInputs] = useState(['', '', '', ''])
    const [squares, setSquares] = useState(Array(9).fill(false))

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const droppedFile = e.dataTransfer.files[0]
        setFile(droppedFile)
    }

    const handleTextChange = (index: number, value: string) => {
        const newInputs = [...textInputs]
        newInputs[index] = value
        setTextInputs(newInputs)
    }

    const toggleSquare = (index: number) => {
        const newSquares = [...squares]
        newSquares[index] = !newSquares[index]
        setSquares(newSquares)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="w-full max-w-4xl p-8 m-4 backdrop-blur-lg bg-white bg-opacity-20 rounded-3xl shadow-xl">
                <div className="space-y-6">
                    {/* File drop area */}
                    <div
                        className="border-4 border-dashed border-white rounded-2xl p-8 text-center cursor-pointer"
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <h2 className="text-xl font-bold text-white mb-2">Select Path or Drag and Drop</h2>
                        {file ? file.name : 'Drop your file here or click to select'}
                    </div>

                    {/* Text areas */}
                    <div className="grid grid-cols-2 gap-4">
                        {textInputs.map((text, index) => (
                            <div key={index} className="relative">
                                <h3 className="absolute top-0 left-0 text-sm font-bold text-white m-1">Text Area {index + 1}</h3>
                                <textarea
                                    className="w-full h-24 p-2 rounded-xl bg-red-300 bg-opacity-50 text-white placeholder-white"
                                    value={text}
                                    onChange={(e) => handleTextChange(index, e.target.value)}
                                    placeholder={`Enter text for area ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Squares area */}
                    <div className="relative bg-black bg-opacity-50 p-4 rounded-xl">
                        <h3 className="absolute top-0 left-0 text-sm font-bold text-white m-1">Squares</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {squares.map((isActive, index) => (
                                <div
                                    key={index}
                                    className={`w-full pt-[100%] rounded-lg cursor-pointer ${isActive ? 'bg-white' : 'bg-gray-600'}`}
                                    onClick={() => toggleSquare(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Confirm button */}
                    <div className="flex justify-end">
                        <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}