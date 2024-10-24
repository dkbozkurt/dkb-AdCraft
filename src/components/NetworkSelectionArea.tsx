import React from 'react'

const NetworkSelectionArea: React.FC = () => {
    const squares = Array(80).fill(null) // Adjust the number of squares as needed

    return (
        <div className="flex flex-wrap mb-8 -mt-4 sm:mt-0">
            <h2 className="text-white text-ml font-bold mb-1 px-4 text-lg">
                Network Options
            </h2>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 h-[500px] max-h-[500px] overflow-y-auto">
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