import React from 'react'
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} Encuadrado. All rights reserved.
        </div>
      </footer>
    </div>
  )
} 