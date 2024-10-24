import React from 'react'

const ConfirmButton: React.FC = () => {
    return (
        <div className="flex justify-center -mb-6">
            <button className="px-12 py-4 bg-[#052e2e] text-white rounded-full hover:bg-green-600 transition-colors">
                CONFIRM
            </button>
        </div>
    )
}

export default ConfirmButton