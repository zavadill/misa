"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'h-15 bg-white/70 backdrop-blur-md'
          : 'h-18 bg-white'
      }`}
    >
      <nav className='flex flex-row items-center h-full justify-between max-w-7xl mx-auto px-5'>
        <div className='gap-15 flex flex-row'>
          <Link href={"/"}>
            Logo
          </Link>
          <div className='flex flex-row gap-5'>
            <Link href={""}>Service</Link>
            <Link href={""}>Agency</Link>
            <Link href={""}>Case study</Link>
            <Link href={""}>Resources</Link>
            <Link href={""}>Contact</Link>
          </div>
        </div>
        <Link className='px-5 py-2 border border-gray-200 shadow-sm rounded-full' href={""}>
          Get started
        </Link>
      </nav>
    </div>
  )
}

export default Navbar