import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white font-display">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="w-full max-w-xs flex justify-center lg:justify-start">
              <div className="w-full max-w-[256px] aspect-square relative rounded-full overflow-hidden shadow-lg">
              <Image
                src="headshot.jpg"
                alt="Ty Walters"
                fill={true}
              />
            </div>
          </div>
          <div className="max-w-2xl w-full text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400 font-display">Ty Walters</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
             Ty Walters is a Senior Data Scientist with experience working across multiple professional and
             collegiate sports organizations. He has led data initiatives in ticket sales
             while also leveraging player performance data to optimize player acquisition.
            </p>
             <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
             A Kansas City, Missouri native now living in Phoenix, Arizona,
             Ty combines technical expertise with industry knowledge to help organizations enhance their
             data capabilities and embrace innovation, enabling them to focus on what truly matters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <a
                href="https://www.linkedin.com/in/tywalters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-6 h-6 mr-2" />
                Connect on LinkedIn
              </a>
              <a
                href="mailto:ty@waltersdatasolutions.com"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <Mail className="w-6 h-6 mr-2" />
                ty@waltersdatasolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

