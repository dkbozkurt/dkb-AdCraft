import React from 'react'

type ConfirmButtonProps = {
    creativeName: string
    productName: string
    creativeType: string
    geo: string
    selectedNetworks: string[]
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
    creativeName,
    productName,
    creativeType,
    geo,
    selectedNetworks
}) => {
    const handleConfirm = () => {
        selectedNetworks.forEach(networkID => {
            const message = `${creativeName}_${productName}_Responsive_${creativeType}_01_${networkID}_${geo}`
            console.log(message)
        })
    }

    return (
        <div className="flex justify-center -mb-6">
            <button
                className="px-12 py-4 bg-[#052e2e] text-white rounded-full hover:bg-opacity-50 transition-colors"
                onClick={handleConfirm}
            >
                Confirm
            </button>
        </div>
    )
}

export default ConfirmButton