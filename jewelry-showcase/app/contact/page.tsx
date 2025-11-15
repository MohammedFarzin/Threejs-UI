'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Layout/Header';
import InquiryForm from '@/components/Forms/InquiryForm';
import CallbackModal from '@/components/Forms/CallbackModal';

export default function ContactPage() {
  const router = useRouter();
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-green-50 to-gold-50">
      <Header onInquireClick={() => setIsCallbackModalOpen(true)} />

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question about our jewelry or want to create something custom?
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <InquiryForm
            onSuccess={() => {
              setTimeout(() => router.push('/'), 3000);
            }}
          />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
              <a href="tel:+919876543210" className="text-gold-600 font-semibold hover:text-gold-700">
                +91 98765 43210
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Drop us a line anytime</p>
              <a href="mailto:info@luxejewelry.com" className="text-green-600 font-semibold hover:text-green-700">
                info@luxejewelry.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Come see our collection</p>
              <p className="text-gray-700 font-medium">
                123 Luxury Lane<br />
                Mumbai, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-gold-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="font-semibold text-xl mb-2">Monday - Saturday</h3>
              <p className="text-gold-100">10:00 AM - 8:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Sunday</h3>
              <p className="text-gold-100">11:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
