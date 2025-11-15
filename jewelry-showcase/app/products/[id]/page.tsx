'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { products, getProductById } from '@/data/products';
import Header from '@/components/Layout/Header';

// Dynamically import 3D components
const ProductViewer3D = dynamic(() => import('@/components/3D/ProductViewer3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Loading 3D Viewer...</p>
      </div>
    </div>
  ),
});

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const product = getProductById(productId);

  const [selectedMaterial, setSelectedMaterial] = useState<'yellow-gold' | 'rose-gold' | 'white-gold'>(
    product?.materials.default || 'yellow-gold'
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.specifications.sizes?.[0] || ''
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-gold-500 text-white rounded-full font-semibold hover:bg-gold-600 transition-all"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const materialLabels = {
    'yellow-gold': 'Yellow Gold',
    'rose-gold': 'Rose Gold',
    'white-gold': 'White Gold',
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8 flex items-center gap-2 text-gray-600">
          <button onClick={() => router.push('/')} className="hover:text-gold-600">
            Home
          </button>
          <span>/</span>
          <button onClick={() => router.push('/')} className="hover:text-gold-600">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}s
          </button>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: 3D Viewer */}
          <div className="relative">
            <div className="sticky top-24 h-[600px]">
              <ProductViewer3D
                productId={product.id}
                category={product.category}
                material={selectedMaterial}
              />
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="space-y-6">
            {/* Product Title & Price */}
            <div>
              {product.isFeatured && (
                <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-full mb-3">
                  ⭐ Featured
                </span>
              )}
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{product.shortDescription}</p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gold-600">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-gray-500">inclusive of all taxes</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-700 font-medium">In Stock</span>
                  <span className="text-gray-500 text-sm">• Crafted to order in {product.craftingTime}</span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-red-700 font-medium">Currently Unavailable</span>
                </>
              )}
            </div>

            <div className="border-t border-gray-200 pt-6">
              {/* Material Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Select Material
                </label>
                <div className="flex gap-3">
                  {product.materials.available.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                        selectedMaterial === material
                          ? 'border-gold-500 bg-gold-50'
                          : 'border-gray-200 hover:border-gold-300'
                      }`}
                    >
                      <div className="text-center">
                        <div
                          className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                            material === 'yellow-gold'
                              ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                              : material === 'rose-gold'
                              ? 'bg-gradient-to-br from-rose-300 to-rose-400'
                              : 'bg-gradient-to-br from-gray-200 to-gray-300'
                          }`}
                        />
                        <span className="text-sm font-medium text-gray-900">
                          {materialLabels[material]}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector (if applicable) */}
              {product.specifications.sizes && product.specifications.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-semibold text-gray-900">
                      Select Size
                    </label>
                    <button className="text-sm text-gold-600 hover:text-gold-700 font-medium">
                      Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {product.specifications.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all font-medium ${
                          selectedSize === size
                            ? 'border-gold-500 bg-gold-50 text-gold-700'
                            : 'border-gray-200 hover:border-gold-300 text-gray-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-gold-500 flex items-center justify-center font-semibold"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-gold-500 flex items-center justify-center font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-8 py-4 bg-gold-500 text-white rounded-full font-semibold text-lg hover:bg-gold-600 transition-all hover:scale-105 shadow-lg">
                  Request Inquiry
                </button>
                <button className="w-full px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition-all">
                  Book Consultation
                </button>
                <button className="w-full px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-gold-500 hover:text-gold-600 transition-all">
                  Add to Wishlist ♡
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Certified Hallmark</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Lifetime Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Free Resizing</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Insured Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-gray-200 pt-12">
          <div className="max-w-4xl">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Metal</dt>
                    <dd className="text-lg font-semibold text-gray-900 mt-1">
                      {product.specifications.metal}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Purity</dt>
                    <dd className="text-lg font-semibold text-gray-900 mt-1">
                      {product.specifications.purity}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Weight</dt>
                    <dd className="text-lg font-semibold text-gray-900 mt-1">
                      {product.specifications.weight}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Dimensions</dt>
                    <dd className="text-lg font-semibold text-gray-900 mt-1">
                      {product.specifications.dimensions}
                    </dd>
                  </div>
                  {product.specifications.stones && (
                    <div className="col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Stones</dt>
                      <dd className="text-lg font-semibold text-gray-900 mt-1">
                        {product.specifications.stones}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products
              .filter((p) => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => router.push(`/products/${relatedProduct.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square bg-gradient-to-br from-gold-100 to-green-100 rounded-2xl mb-4 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-70 transition-opacity">
                      <div className="text-6xl">
                        {relatedProduct.category === 'ring' && '💍'}
                        {relatedProduct.category === 'necklace' && '📿'}
                        {relatedProduct.category === 'bracelet' && '⚜️'}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <button className="px-6 py-3 bg-white text-gold-600 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{relatedProduct.specifications.metal}</p>
                  <p className="text-gold-600 font-bold text-lg">
                    ₹{relatedProduct.price.toLocaleString('en-IN')}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
