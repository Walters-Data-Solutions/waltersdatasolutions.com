import { Database, Brain, Cloud } from 'lucide-react'

export default function Services() {
  const services = [
    { name: "Data Engineering", description: "Design and implement automated data pipelines that scale seamlessly with your business needs.", icon: Database },
    { name: "Data Science", description: "Extract insights from data and build predictive models in addition to generative AI models to drive decisions.", icon: Brain },
    { name: "Cloud Infrastructure", description: "Implement and manage cloud-based data platforms that unlock greater flexibility and potential.", icon: Cloud }
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white font-display">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-gray-600">
              <service.icon className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white font-display">{service.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

