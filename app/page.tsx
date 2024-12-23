import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import DarkModeToggle from './components/DarkModeToggle'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 shadow-sm z-10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-display mb-4 sm:mb-0">Walters Data Solutions</h1>
          <nav className="flex items-center flex-col sm:flex-row">
            <ul className="flex space-x-4 sm:space-x-6 mb-4 sm:mb-0 sm:mr-6">
              <li><a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a></li>
              <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Services</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a></li>
            </ul>
            <DarkModeToggle />
          </nav>
        </div>
      </header>
      <main className="pt-32 sm:pt-20">
        <h1 className="sr-only">Walters Data Solutions - Expert Data Consulting in Sports</h1>
        <Home />
        <About />
        <Services />
        <ContactForm />
      </main>
      <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Walters Data Solutions</h2>
              <p>Using our experience in efficient cloud infrastructure,
               data processing and automation to drive your business forward</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
                <li><Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
                <li><Link href="#services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link></li>
                <li><Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p>Email: ty@waltersdatasolutions.com</p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/ty-walters" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">https://www.linkedin.com/in/ty-walters</a></p>
              <p>GitHub: <a href="https://github.com/orgs/Walters-Data-Solutions" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">https://github.com/orgs/Walters-Data-Solutions</a></p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>© {new Date().getFullYear()} Walters Data Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
