import React from 'react'
import { Check } from 'lucide-react'
import { NetworkData } from '../data'

interface NetworkOptionProps extends NetworkData {
    onSelect: (networkName: string) => void;
}

const NetworkOption: React.FC<NetworkOptionProps> = ({ networkName, logoPath, isSelected, isEnable, onSelect }) => {
    return (
        <div
            className={`w-40 h-40 m-2 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${isEnable
                    ? isSelected
                        ? 'bg-white bg-opacity-80'
                        : 'bg-white bg-opacity-50 hover:bg-opacity-60'
                    : 'bg-gray-400 bg-opacity-30 cursor-not-allowed'
                }`}
            onClick={() => isEnable && onSelect(networkName)}
        >
            <div className="relative w-40 h-40 mb-2">
                <img src={logoPath} alt={networkName} />
            </div>
            <p className="text-center text-white font-semibold">{networkName}</p>
            {isEnable && (
                <div
                    className={`w-6 h-6 mt-2 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-green-500 bg-green-500' : 'border-white'
                        }`}
                >
                    {isSelected && <Check className="text-white" size={16} />}
                </div>
            )}
        </div>
    )
}

export default NetworkOption