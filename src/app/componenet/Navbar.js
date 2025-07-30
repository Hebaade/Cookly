'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = (path) =>
    pathname === path
      ? 'text-white bg-blue-600 px-3 py-1 rounded block'
      : 'text-blue-600 hover:bg-blue-100 px-3 py-1 rounded block'

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          🍲 Cookly
        </Link>

        {/* Hamburger icon */}
        <button
          className="md:hidden text-blue-700 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Links (desktop) */}
        <ul className="hidden md:flex gap-4">
          <li>
            <Link href="/" className={linkClass('/')}>
          Home
            </Link>
          </li>
          <li>
            <Link href="/rescipes" className={linkClass('/rescipes')}>
              Recipes
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass('/about')}>
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <li>
            <Link href="/" className={linkClass('/')} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/rescipes" className={linkClass('/rescipes')} onClick={() => setIsOpen(false)}>
              Recipes
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass('/about')} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
