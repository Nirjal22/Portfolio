import React from 'react'

const mouseScrollIcon = () => {
    return (
        <div className="flex flex-col items-center absolute bottom-6 left-1/2 transform -translate-x-1/2">
            {/* Mouse outline */}
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
                {/* Animated scroll dot */}
                <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
            </div>
            {/* Scroll text */}
            <p className="text-white mt-2 text-sm tracking-widest">SCROLL</p>
        </div>
    )
}

export default mouseScrollIcon