"use client"

import React from 'react'
import Image from 'next/image'
import Layout from '../components/layout/Layout'

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    description: "Engineered for everyday excellence",
    image: "/images/product1.png",
  },
  {
    id: 2,
    name: "Urban Hoodie",
    price: 59.99,
    description: "Refined comfort. Redefined style.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Designer Cap",
    price: 24.99,
    description: "Precision crafted. Perfectly fitted.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=60",
  }
]

export default function Home() {
  const handleBuyNow = (productId: number) => {
    console.log(`Buying product ${productId}`)
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-white py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">
            Merch.
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto mb-8">
            Designed to perfection.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative h-96 mb-8 bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                  <div className="space-y-4">
                    <p className="text-xl">${product.price}</p>
                    <button
                      onClick={() => handleBuyNow(product.id)}
                      className="bg-black text-white w-full py-3 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-500 text-sm">
                Free shipping on all orders.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-500 text-sm">
                Crafted with exceptional materials.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">2-Year Warranty</h3>
              <p className="text-gray-500 text-sm">
                Coverage for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Designed with the planet in mind.
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Our commitment to be carbon neutral by 2030 means making every product with the environment in mind.
          </p>
          <a href="/environment" className="text-blue-600 hover:underline">
            Learn more about our environmental goals →
          </a>
        </div>
      </section>
    </Layout>
  )
}
