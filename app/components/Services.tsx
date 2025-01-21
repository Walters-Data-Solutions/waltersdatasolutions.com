import { Database, Brain, Cloud, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    { name: "Data Engineering", description: "Design and implement automated data pipelines that scale seamlessly with your business needs.", icon: Database },
    { name: "Data Science", description: "Extract insights from data, build predictive models, and develop generative AI solutions to inform decision-making.", icon: Brain },
    { name: "Cloud Infrastructure", description: "Design, implement, and manage cloud-based data platforms to enable greater flexibility and potential.", icon: Cloud },
    { name: "Technology Evaluation", description: "Assess current technologies, provide mentoring, and train staff on cutting-edge data practices.",icon: Lightbulb },
      ]

    return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white font-display">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-gray-600"
            >
              <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white font-display">{service.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

