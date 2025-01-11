"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Encuadrado Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold">Encuadrado</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/funcionalidades" className="hover:text-gray-600 font-medium">
            Funcionalidades
          </Link>
          <Link href="/soluciones" className="hover:text-gray-600 font-medium">
            Soluciones
          </Link>
          <Link href="/precio" className="hover:text-gray-600 font-medium">
            Precio
          </Link>
          <Link href="/mas" className="hover:text-gray-600 font-medium">
            Más
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/ingresar" className="hover:text-gray-600 font-medium">
            Ingresar
          </Link>
          <Link href="/empezar" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Empieza ahora
          </Link>
        </div>

        {/* Mobile Menu Button (right side) */}
        <div className="md:hidden">
          <Link href="/empezar" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm">
            Empieza ahora
          </Link>
        </div>

        {/* Mobile Menu Modal */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      </div>
    </header>
  )
} 