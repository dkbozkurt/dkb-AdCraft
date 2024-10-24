import React from 'react'
import NetworkOption from './NetworkOption'
import { networkOptions } from '../data'

type NetworkSelectionAreaProps = {
    selectedNetworks: string[]
    setSelectedNetworks: React.Dispatch<React.SetStateAction<string[]>>
}

const NetworkSelectionArea: React.FC<NetworkSelectionAreaProps> = ({
    selectedNetworks,
    setSelectedNetworks
}) => {
    const handleNetworkSelect = (networkID: string) => {
        setSelectedNetworks(prev =>
            prev.includes(networkID)
                ? prev.filter(id => id !== networkID)
                : [...prev, networkID]
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
                            key={network.networkID}
                            {...network}
                            isSelected={selectedNetworks.includes(network.networkID)}
                            onSelect={handleNetworkSelect}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NetworkSelectionArea
