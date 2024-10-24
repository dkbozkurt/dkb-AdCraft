import React, { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { productNames, creativeTypes, countryCodes } from '../data'

const NamingArea: React.FC = () => {
    const [creativeName, setCreativeName] = useState('')
    const [productName, setProductName] = useState('')
    const [creativeType, setCreativeType] = useState('Playable')
    const [geo, setGeo] = useState('ALL')
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
    const productInputRef = useRef<HTMLInputElement>(null)

    const handleCreativeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[\s_]/g, '')
        setCreativeName(value)
    }

    const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(e.target.value)
        setIsProductDropdownOpen(false)
    }

    const handleProductSelect = (name: string) => {
        setProductName(name)
        setIsProductDropdownOpen(false)
        productInputRef.current?.focus()
    }

    return (
        <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full sm:w-4/12 px-2 mb-4">
                <div className="relative">
                    <label className="absolute -top-6 left-2 px-1 text-white text-ml font-bold">
                        Creative Name
                    </label>
                    <input
                        type="text"
                        value={creativeName}
                        onChange={handleCreativeNameChange}
                        className="w-full p-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white border border-white border-opacity-50 placeholder-opacity-50"
                        placeholder="Enter creative name"
                    />
                </div>
            </div>

            <div className="w-full sm:w-3/12 px-2 mb-4">
                <div className="relative">
                    <label className="absolute -top-6 left-2 px-1 text-white text-ml font-bold">
                        Product Name
                    </label>
                    <div className="relative">
                        <input
                            ref={productInputRef}
                            type="text"
                            value={productName}
                            onChange={handleProductNameChange}
                            className="w-full p-3 pr-8 rounded-xl bg-white bg-opacity-20 text-white placeholder-white border border-white border-opacity-50 placeholder-opacity-50"
                            placeholder="Enter or select product"
                        />
                        <button
                            onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                        >
                            <ChevronDown />
                        </button>
                    </div>
                    {isProductDropdownOpen && (
                        <ul className="absolute z-10 w-full mt-1 bg-white bg-opacity-90 border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto ">
                            {productNames.map((name) => (
                                <li
                                    key={name}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                                    onClick={() => handleProductSelect(name)}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="w-full sm:w-3/12 px-2 mb-4">
                <div className="relative">
                    <label className="absolute -top-6 left-2 px-1  text-stone-100 text-ml font-bold">
                        Creative Type
                    </label>
                    <select
                        value={creativeType}
                        onChange={(e) => setCreativeType(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white bg-opacity-20 text-white border border-white border-opacity-50"
                    >
                        {creativeTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="w-full sm:w-2/12 px-2 mb-4">
                <div className="relative">
                    <label className="absolute -top-6 left-2 px-1 text-white text-ml font-bold">
                        GEO
                    </label>
                    <select
                        value={geo}
                        onChange={(e) => setGeo(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white bg-opacity-20 text-white border border-white border-opacity-50"
                    >
                        {countryCodes.map((code) => (
                            <option key={code} value={code}>
                                {code}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default NamingArea