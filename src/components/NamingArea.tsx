import React from 'react'
import { productNames, creativeTypes, countryCodes } from '../data'

type NamingAreaProps = {
    creativeName: string
    setCreativeName: React.Dispatch<React.SetStateAction<string>>
    productName: string
    setProductName: React.Dispatch<React.SetStateAction<string>>
    creativeType: string
    setCreativeType: React.Dispatch<React.SetStateAction<string>>
    geo: string
    setGeo: React.Dispatch<React.SetStateAction<string>>
}

const NamingArea: React.FC<NamingAreaProps> = ({
    creativeName,
    setCreativeName,
    productName,
    setProductName,
    creativeType,
    setCreativeType,
    geo,
    setGeo
}) => {
    const handleCreativeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[\s_]/g, '')
        setCreativeName(value)
    }

    const handleProductNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductName(e.target.value === 'Custom' ? '' : e.target.value)
    }

    return (
        <div className="flex flex-wrap -mx-2 sm:mb-0">
            <div className="w-full sm:w-4/12 px-2 mb-8 sm:mb-10 md:mb-4">
                <div className="relative">
                    <label className="absolute -top-6 left-3 px-1 text-white text-ml font-bold">
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

            <div className="w-full sm:w-3/12 px-2 mb-8 sm:mb-10 m:mb-4">
                <div className="relative">
                    <label className="absolute -top-6 left-3 px-1 text-white text-ml font-bold">
                        Product Name
                    </label>
                    <select
                        value={productName || 'Custom'}
                        onChange={handleProductNameChange}
                        className="w-full p-3 rounded-xl bg-white bg-opacity-20 text-white border border-white border-opacity-50 appearance-none"
                    >
                        <option value="Custom">Enter or select product</option>
                        {productNames.filter(name => name !== 'Custom').map((name) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="w-full sm:w-3/12 px-2 mb-8 sm:mb-10 md:mb-4">
                <div className="relative">
                    <label className="absolute -top-6 left-3 px-1 text-stone-100 text-ml font-bold">
                        Creative Type
                    </label>
                    <select
                        value={creativeType}
                        onChange={(e) => setCreativeType(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white bg-opacity-20 text-white border border-white border-opacity-50 appearance-none"
                    >
                        {creativeTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="w-full sm:w-2/12 px-2 mb-8 sm:mb-10 md:mb-4">
                <div className="relative">
                    <label className="absolute -top-6 left-3 px-1 text-white text-ml font-bold">
                        GEO
                    </label>
                    <select
                        value={geo}
                        onChange={(e) => setGeo(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white bg-opacity-20 text-white border border-white border-opacity-50 appearance-none"
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
