'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Header from '@/components/Layout/Header';
import CallbackModal from '@/components/Forms/CallbackModal';
import { getFeaturedProducts } from '@/data/products';

// Dynamically import 3D components to avoid SSR issues
const Hero3D = dynamic(() => import('@/components/Hero/Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center gradient-green-gold">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white text-xl">Loading Experience...</p>
      </div>
    </div>
  ),
});

export default function Home() {
  const router = useRouter();
  const featuredProducts = getFeaturedProducts();
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  return (
    <main className="relative">
      <Header onInquireClick={() => setIsCallbackModalOpen(true)} />

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />

      {/* Hero Section with 3D */}
      <Hero3D />

      {/* Brand Story Section */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-gradient-gold">
                Crafted with Passion
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                For over three generations, we&apos;ve been crafting timeless pieces
                that celebrate life&apos;s most precious moments. Each piece of jewelry
                is meticulously handcrafted by our master artisans, combining
                traditional techniques with contemporary design.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to excellence is reflected in every detail—from
                the selection of the finest 22K gold to the precision of each
                setting. We don&apos;t just create jewelry; we create heirlooms.
              </p>
              <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105">
                Our Story
              </button>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-gold-100 to-green-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                  <p className="text-gold-600 font-medium">Artisan Craftsmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-200 rounded-full blur-3xl opacity-20" />
      </section>

      {/* Collections Section */}
      <section className="relative py-24 px-6 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-gradient-gold mb-4">Our Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of exquisite jewelry pieces,
              each one a masterpiece of design and craftsmanship.
            </p>
          </div>

          {/* Collection Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rings', icon: '💍', description: 'Symbol of eternal love' },
              { name: 'Necklaces', icon: '📿', description: 'Elegance around your neck' },
              { name: 'Bracelets', icon: '⚜️', description: 'Grace on your wrist' },
            ].map((collection, index) => (
              <div
                key={collection.name}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Shimmer Effect */}
                <div className="shimmer" />

                <div className="relative z-10">
                  <div className="text-6xl mb-4">{collection.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{collection.description}</p>
                  <button className="text-gold-600 font-semibold hover:text-gold-700 transition-colors flex items-center gap-2">
                    Explore
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-gradient-gold mb-4">Featured Pieces</h2>
            <p className="text-xl text-gray-600">
              Our most exquisite creations, handpicked for you
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => router.push(`/products/${product.id}`)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square bg-gradient-to-br from-gold-100 to-green-100 rounded-2xl mb-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-70 transition-opacity">
                    <div className="text-6xl">
                      {product.category === 'ring' && '💍'}
                      {product.category === 'necklace' && '📿'}
                      {product.category === 'bracelet' && '⚜️'}
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-gold-600 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                  {product.isFeatured && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2">{product.specifications.metal}</p>
                <p className="text-gold-600 font-bold text-lg">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 gradient-green-gold overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-white mb-6">
            Begin Your Journey
          </h2>
          <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
            Schedule a private consultation with our jewelry experts to find
            or create your perfect piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsCallbackModalOpen(true)}
              className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-gold-50 transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </button>
            <button
              onClick={() => setIsCallbackModalOpen(true)}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Request Callback
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold-400/20 rounded-full blur-2xl" />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient-gold mb-4">LUXE</h3>
              <p className="text-gray-400">
                Crafting timeless elegance since 1950
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Rings</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Necklaces</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Bracelets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LUXE Jewelry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
