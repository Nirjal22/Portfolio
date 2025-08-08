'use client'
import React, { memo } from 'react'
import MouseScrollIcon from './mouseScrollIcon'
import Image from 'next/image'
import { motion } from 'framer-motion'

const FirstPage = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <Image
                src="/images/imgBackground.jpg"
                alt="background image"
                fill
                className="object-cover blur-lg"
                priority
            />
            <div className="absolute inset-0 flex items-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <motion.h1
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold"
                >
                    I'm <span className="text-red-600 m-2">Nirjal Bista.</span> Coding is fun!
                </motion.h1>
            </div>

            <MouseScrollIcon />
        </div>
    )
}

export default memo(FirstPage)
