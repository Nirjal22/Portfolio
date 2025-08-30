'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  // Toggle dark mode
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDark(true)
    }
  }

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200
     dark:hover:bg-gray-700 transition">
      {isDark ? (
        <Image src="/images/moon.svg" alt="dark Mode" width={30} height={30} />
      ) : (
        <Image src="/images/sun.svg" alt="light Mode" width={30} height={30} />
      )}
    </button>
  )
}

export default DarkMode
