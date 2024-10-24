import React, { useState } from 'react'

const Squares: React.FC = () => {
    const [squares, setSquares] = useState(Array(9).fill(false))

    const toggleSquare = (index: number) => {
        const newSquares = [...squares]
        newSquares[index] = !newSquares[index]
        setSquares(newSquares)
    }

    return (
        <div className="relative bg-black bg-opacity-50 p-4 rounded-xl mb-4">
            <h3 className="absolute -top-3 left-2 bg-jd-green px-2 text-white text-sm font-bold">Squares</h3>
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
    )
}

export default Squares