import Image from 'next/image'
import { Linkedin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white font-display">About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
            <Image
              src="headshot.jpg"
              alt="Ty Walters"
              fill={true}
            />
          </div>
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400 font-display">Ty Walters</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Ty Walters is serving as a Senior Data Scientist at University of Pittsburgh Athletics.
               His background includes significant contributions to both the business and
               performance sides of the sports and entertainment industry.
                On the business side, Ty has driven initiatives focused on ticket sales and customer insights,
                 while on the performance side, he has worked closely with player performance
                 data to optimize player acquisition.
            </p>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              With technical expertise, a deep understanding of cloud technologies and the unique challenges of sports and entertainment,
              Ty empowers organizations to enhance their data capabilities and
              leverage innovative technology to help organizations
               redefine what’s possible, make their workflows more efficient, and enable them to focus on what truly matters.
            </p>
            <a 
              href="https://www.linkedin.com/in/ty-walters"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <Linkedin className="w-6 h-6 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

