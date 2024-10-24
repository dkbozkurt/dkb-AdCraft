import React, { useState } from 'react'
import { productNames, creativeTypes, countryCodes } from '../data'

const NamingArea: React.FC = () => {
    const [creativeName, setCreativeName] = useState('')
    const [productName, setProductName] = useState('')
    const [creativeType, setCreativeType] = useState('Playable')
    const [geo, setGeo] = useState('ALL')

    const handleCreativeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[\s_]/g, '')
        setCreativeName(value)
    }

    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="relative">
                <h3 className="absolute -top-3 left-2 z-10 px-2 text-white text-sm font-bold bg-jd-green">Creative Name</h3>
                <input
                    type="text"
                    value={creativeName}
                    onChange={handleCreativeNameChange}
                    className="w-full p-2 rounded-xl bg-white bg-opacity-20 text-white placeholder-white"
                    placeholder="Enter creative name"
                />
            </div>

            <div className="relative">
                <h3 className="absolute -top-3 left-2 z-10 px-2 text-white text-sm font-bold bg-jd-green">Product Name</h3>
                <select
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full p-2 rounded-xl bg-white bg-opacity-20 text-white"
                >
                    <option value="">Select a product</option>
                    {productNames.map((name) => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                {productName === 'Custom' && (
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full mt-2 p-2 rounded-xl bg-white bg-opacity-20 text-white placeholder-white"
                        placeholder="Enter custom product name"
                    />
                )}
            </div>

            <div className="relative">
                <h3 className="absolute -top-3 left-2 z-10 px-2 text-white text-sm font-bold bg-jd-green">Creative Type</h3>
                <select
                    value={creativeType}
                    onChange={(e) => setCreativeType(e.target.value)}
                    className="w-full p-2 rounded-xl bg-white bg-opacity-20 text-white"
                >
                    {creativeTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            <div className="relative">
                <h3 className="absolute -top-3 left-2 z-10 px-2 text-white text-sm font-bold bg-jd-green">GEO</h3>
                <select
                    value={geo}
                    onChange={(e) => setGeo(e.target.value)}
                    className="w-full p-2 rounded-xl bg-white bg-opacity-20 text-white"
                >
                    {countryCodes.map((code) => (
                        <option key={code} value={code}>
                            {code}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default NamingArea