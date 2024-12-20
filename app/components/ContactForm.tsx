'use client'

import { useState, FormEvent, useRef, useEffect } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import { useTheme } from 'next-themes'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setMounted(true)
    setKey(prevKey => prevKey + 1) // Force re-render of reCAPTCHA when theme changes
  }, [theme])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const captchaValue = recaptchaRef.current?.getValue()
    if (!captchaValue) {
      setStatus('error')
      alert('Please complete the reCAPTCHA')
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, captcha: captchaValue }),
      })

      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        recaptchaRef.current?.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white font-display">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <ReCAPTCHA
                key={key}
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                theme={theme === 'dark' ? 'dark' : 'light'}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 disabled:opacity-50"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded-md">
              Thank you for your message. We&apos;ll get back to you soon!
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 rounded-md">
              There was an error sending your message. Please try again later.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
