import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import DarkModeToggle from './components/DarkModeToggle'

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 shadow-sm z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-display">Walters Data Solutions</h1>
          <nav className="flex items-center">
            <ul className="flex space-x-6 mr-6">
              <li><a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a></li>
              <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Services</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a></li>
            </ul>
            <DarkModeToggle />
          </nav>
        </div>
      </header>
      <main className="pt-20">
        <Home />
        <About />
        <Services />
        <ContactForm />
      </main>
      <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-center p-6">
        <div className="container mx-auto">
          <p>© 2024 Walters Data Solutions LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
