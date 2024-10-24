import React from 'react'

const NetworkSelectionArea: React.FC = () => {
    const squares = Array(20).fill(null) // Adjust the number of squares as needed

    return (
        <div className="mb-4">
            <h2 className="text-white text-ml font-bold mb-2">Square Zone</h2>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 h-40 overflow-y-auto">
                <div className="flex flex-wrap">
                    {squares.map((_, index) => (
                        <div
                            key={index}
                            className="w-16 h-16 bg-white bg-opacity-50 m-2 rounded-md"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NetworkSelectionArea