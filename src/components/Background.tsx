import React from 'react'

const Background: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-jd-green to-jd-green-light p-4">
            <div className="relative w-full max-w-screen-2xl h-[80vh] bg-white bg-opacity-40 backdrop-blur-xl rounded-xl shadow-lg border border-white border-opacity-20">
                {/* <h1 className="absolute -top-4 left-4 bg-white px-4 py-1 text-2xl font-bold text-gray-800 rounded-full shadow-md">
                    AdCraft
                </h1> */}
                <div className="p-8 h-full overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Background