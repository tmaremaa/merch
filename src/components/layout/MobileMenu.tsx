"use client"

import React from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <nav className="mt-8 space-y-4">
            <Link href="/funcionalidades" className="block py-2 text-lg font-medium hover:text-gray-600">
              Funcionalidades
            </Link>
            <Link href="/soluciones" className="block py-2 text-lg font-medium hover:text-gray-600">
              Soluciones
            </Link>
            <Link href="/precio" className="block py-2 text-lg font-medium hover:text-gray-600">
              Precio
            </Link>
            <Link href="/mas" className="block py-2 text-lg font-medium hover:text-gray-600">
              Más
            </Link>
            <hr className="my-4" />
            <Link href="/ingresar" className="block py-2 text-lg font-medium hover:text-gray-600">
              Ingresar
            </Link>
            <Link href="/empezar" className="block py-2 text-lg font-medium text-white bg-blue-600 rounded-full text-center hover:bg-blue-700">
              Empieza ahora
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
} 