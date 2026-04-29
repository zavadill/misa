"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 🚫 lock scroll když je menu otevřené
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'h-15 bg-white/80 backdrop-blur-md shadow-sm'
            : 'h-18 bg-white'
        }`}
      >
        <nav className='flex flex-row items-center h-full justify-between max-w-7xl mx-auto px-5'>
          
          {/* LEFT */}
          <div className='flex flex-row items-center gap-10'>
            <Link href={"/"}>Logo</Link>

            {/* desktop menu */}
            <div className='hidden md:flex flex-row gap-5'>
              <Link href={""}>Service</Link>
              <Link href={""}>Agency</Link>
              <Link href={""}>Case study</Link>
              <Link href={""}>Resources</Link>
              <Link href={""}>Contact</Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className='flex items-center gap-5'>
            <Link
              className={`px-5 py-2 shadow-sm rounded-full ${
                scrolled ? "" : "border-gray-300 border"
              } hidden md:block`}
              href={""}
            >
              Get started
            </Link>

            {/* 🍔 hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1 z-50"
            >
              <span className={`w-6 h-[2px] bg-black transition ${menuOpen && "rotate-45 translate-y-[6px]"}`}></span>
              <span className={`w-6 h-[2px] bg-black transition ${menuOpen && "opacity-0"}`}></span>
              <span className={`w-6 h-[2px] bg-black transition ${menuOpen && "-rotate-45 -translate-y-[6px]"}`}></span>
            </button>
          </div>
        </nav>
      </div>

      {/* 📱 FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 bg-white z-40 flex items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-5 text-4xl font-semibold">
          <Link href={""} onClick={() => setMenuOpen(false)}>Service</Link>
          <Link href={""} onClick={() => setMenuOpen(false)}>Agency</Link>
          <Link href={""} onClick={() => setMenuOpen(false)}>Case study</Link>
          <Link href={""} onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link href={""} onClick={() => setMenuOpen(false)}>Contact</Link>

          <Link
            href={""}
            onClick={() => setMenuOpen(false)}
            className=" px-8 py-3 bg-pink-500 text-white/80 shadow-sm rounded-full"
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar