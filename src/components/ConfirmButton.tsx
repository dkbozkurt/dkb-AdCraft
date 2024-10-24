import React from 'react'

const ConfirmButton: React.FC = () => {
    return (
        <div className="flex justify-end">
            <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                Confirm
            </button>
        </div>
    )
}

export default ConfirmButton