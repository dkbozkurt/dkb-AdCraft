import React, { useState } from 'react'

const TextAreas: React.FC = () => {
    const [textInputs, setTextInputs] = useState(['', '', '', ''])

    const handleTextChange = (index: number, value: string) => {
        const newInputs = [...textInputs]
        newInputs[index] = value
        setTextInputs(newInputs)
    }

    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            {textInputs.map((text, index) => (
                <div key={index} className="relative">
                    <h3 className="absolute -top-3 left-2 bg-jd-green px-2 text-white text-sm font-bold z-10">Text Area {index + 1}</h3>
                    <textarea
                        className="w-full h-24 p-2 rounded-xl bg-red-300 bg-opacity-50 text-white placeholder-white resize"
                        value={text}
                        onChange={(e) => handleTextChange(index, e.target.value)}
                        placeholder={`Enter text for area ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    )
}

export default TextAreas