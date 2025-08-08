import Link from 'next/link'
import React, { memo } from 'react'
import DarkMode from './darkMode'

interface NavProps {
  href: string
  label: string
}

function Nav({ href, label }: NavProps) {
  return (
    <li className='m-4 text-white dark:text-primary
     hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-lg hover:underline'>
      <Link href={href}>{label}</Link>
    </li>
  )
}

const Navbar = () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Skills', href: '/skills' },
    { label: 'Testimonial', href: '/testimonial' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <div className="relative">
      <nav className="bg-primary text-white
       dark:bg-primary-dark dark:text-black relative overflow-hidden h-16 flex items-center">
        <ul className="flex justify-center flex-1">
          {items.map((item, index) => (
            <Nav key={index} href={item.href} label={item.label} />
          ))}
        </ul>
        <span className="mr-7">
          <DarkMode />
        </span>
      </nav>
    </div>
  )
}

export default memo(Navbar)
