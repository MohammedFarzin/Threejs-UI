'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  productInterest: z.string().min(1, 'Please select a product'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.enum(['email', 'phone', 'whatsapp']),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  productName?: string;
  onSuccess?: () => void;
}

export default function InquiryForm({ productName, onSuccess }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      productInterest: productName || '',
      preferredContact: 'email',
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Inquiry submitted:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();

    if (onSuccess) {
      onSuccess();
    }

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Request an Inquiry
        </h2>
        <p className="text-gray-600">
          Fill out the form below and our jewelry experts will contact you within 24 hours.
        </p>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="font-semibold text-green-900">Inquiry Submitted Successfully!</h3>
            <p className="text-sm text-green-700 mt-1">
              Thank you for your interest. We&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.name
                ? 'border-red-300 focus:border-red-500'
                : 'border-gray-200 focus:border-gold-500'
            } outline-none`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.email
                ? 'border-red-300 focus:border-red-500'
                : 'border-gray-200 focus:border-gold-500'
            } outline-none`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.phone
                ? 'border-red-300 focus:border-red-500'
                : 'border-gray-200 focus:border-gold-500'
            } outline-none`}
            placeholder="+91 9876543210"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Product Interest Field */}
        <div>
          <label htmlFor="productInterest" className="block text-sm font-semibold text-gray-900 mb-2">
            Product of Interest *
          </label>
          <select
            {...register('productInterest')}
            id="productInterest"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.productInterest
                ? 'border-red-300 focus:border-red-500'
                : 'border-gray-200 focus:border-gold-500'
            } outline-none`}
          >
            <option value="">Select a product</option>
            <option value="Eternal Elegance Ring">Eternal Elegance Ring</option>
            <option value="Royal Crown Ring">Royal Crown Ring</option>
            <option value="Celestial Cascade Necklace">Celestial Cascade Necklace</option>
            <option value="Heritage Lotus Necklace">Heritage Lotus Necklace</option>
            <option value="Infinity Bangle Bracelet">Infinity Bangle Bracelet</option>
            <option value="Custom Design">Custom Design</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {errors.productInterest && (
            <p className="mt-1 text-sm text-red-600">{errors.productInterest.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.message
                ? 'border-red-300 focus:border-red-500'
                : 'border-gray-200 focus:border-gold-500'
            } outline-none resize-none`}
            placeholder="Tell us about your requirements, preferred budget, or any specific questions..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Preferred Contact Method *
          </label>
          <div className="flex gap-4">
            {[
              { value: 'email', label: 'Email', icon: '📧' },
              { value: 'phone', label: 'Phone', icon: '📞' },
              { value: 'whatsapp', label: 'WhatsApp', icon: '💬' },
            ].map((method) => (
              <label
                key={method.value}
                className="flex-1 relative cursor-pointer"
              >
                <input
                  {...register('preferredContact')}
                  type="radio"
                  value={method.value}
                  className="peer sr-only"
                />
                <div className="px-4 py-3 rounded-lg border-2 border-gray-200 peer-checked:border-gold-500 peer-checked:bg-gold-50 transition-all text-center">
                  <div className="text-2xl mb-1">{method.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{method.label}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gold-500 text-white rounded-full font-semibold text-lg hover:bg-gold-600 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            'Submit Inquiry'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
}
