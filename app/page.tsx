import Image from 'next/image'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import DarkModeToggle from './components/DarkModeToggle'

export default function Page() {
  return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 shadow-sm z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between">
              <Image
                src="full_logo.png"
                alt="Walters Data Solutions Logo"
                width={1126}
                height={519}
                className="w-[256px] h-[65px] object-contain"
              />
            <nav className="flex flex-col md:flex-row items-center">
              <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-4 md:mb-0 md:mr-6">
                <li><a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a></li>
                <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a></li>
                <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Services</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a></li>
              </ul>
              <DarkModeToggle />
            </nav>
          </div>
        </div>
      </header>
      <main className="pt-32 sm:pt-20">
        <Home />
        <About />
        <Services />
        <ContactForm />
      </main>
      <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-center p-6">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Walters Data Solutions LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
