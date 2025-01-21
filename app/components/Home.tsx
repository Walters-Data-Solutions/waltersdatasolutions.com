export default function Home() {
  return (
    <section id="home" className="py-32 md:py-48">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white font-display">
          Building the Backbone of Your Data-Driven Future
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Let our expertise in cloud infrastructure, data processing, and automation help you achieve your business goals
        </p>
        <a 
          href="#contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

