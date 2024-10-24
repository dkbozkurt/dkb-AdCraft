import React, { useState } from 'react'
import NetworkOption from './NetworkOption.tsx'
import { networkOptions } from '../data'

const NetworkSelectionArea: React.FC = () => {
    const [selectedNetworks, setSelectedNetworks] = useState<string[]>([])

    const handleNetworkSelect = (networkName: string) => {
        setSelectedNetworks(prev =>
            prev.includes(networkName)
                ? prev.filter(name => name !== networkName)
                : [...prev, networkName]
        )
    }

    return (
        <div className="flex flex-col flex-grow mb-5 -mt-4 sm:-mt-6">
            <h2 className="text-white text-ml font-bold mb-1 px-4 text-lg">
                Network Options
            </h2>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 h-[20vh] sm:h-[40vh] md:h-[30vh] lg:h-[20vw] max-h-[500px] overflow-y-auto">
                <div className="flex flex-wrap justify-center">
                    {networkOptions.map((network) => (
                        <NetworkOption
                            key={network.networkName}
                            {...network}
                            isSelected={selectedNetworks.includes(network.networkName)}
                            onSelect={handleNetworkSelect}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NetworkSelectionArea