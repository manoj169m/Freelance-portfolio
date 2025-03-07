import { User, Briefcase, Code, Calendar, ArrowRight } from 'lucide-react'
import React from 'react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
        <User className="h-6 w-6 md:h-8 md:w-8 text-indigo-400 animate-pulse" />
        About Me
      </h1>
      <div className="mt-6 md:mt-10 mb-6 md:mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2">
          <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-indigo-400" />
          Professional Experience
        </h2>
        
        <div className="relative pl-4 md:pl-6 border-l-2 border-indigo-500/30 ml-2 md:ml-4">
          {/* Experience card 1 */}
          <div className="bg-black/50 p-4 md:p-6 rounded-lg border border-gray-700 hover:border-indigo-500/40 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 mb-5 md:mb-6 transform hover:-translate-y-1">
            <div className="absolute -left-3 md:-left-4 top-5 md:top-6 bg-indigo-600 p-1 md:p-2 rounded-full shadow-lg shadow-indigo-600/20">
              <Code className="h-4 w-4 md:h-5 md:w-5 text-white" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Software Trainee</h3>
              <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-0">
                <Calendar className="h-3 w-3 md:h-4 md:w-4 text-indigo-400" />
                <span className="text-gray-300 text-xs md:text-sm">October 2024 - January</span>
              </div>
            </div>
            
            <h4 className="text-indigo-300 text-sm md:text-base font-medium mb-3 md:mb-4">Techvation, Tiruchirappalli</h4>
            
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-1 md:gap-2">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">Gained hands-on experience in <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">TypeScript</span>, building dynamic applications and improving code efficiency.</p>
              </li>
              <li className="flex items-start gap-1 md:gap-2">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">Adapted to startup demands by engaging in both development and cold calling, developing a well-rounded skill set in tech and client interaction.</p>
              </li>
              <li className="flex items-start gap-1 md:gap-2">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">Collaborated with cross-functional teams to deliver scalable solutions within tight deadlines.</p>
              </li>
            </ul>
            
            <div className="mt-4 md:mt-6 flex flex-wrap gap-1 md:gap-2">
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">Next.js</span>
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">TypeScript</span>
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">React</span>
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">Client Relations</span>
            </div>
          </div>

          {/* Experience card 2 */}
          <div className="bg-black/50 p-4 md:p-6 rounded-lg border border-gray-700 hover:border-indigo-500/40 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 mb-5 md:mb-6 transform hover:-translate-y-1">
            <div className="absolute -left-3 md:-left-4 top-5 md:top-6 bg-indigo-600 p-1 md:p-2 rounded-full shadow-lg shadow-indigo-600/20">
              <Code className="h-4 w-4 md:h-5 md:w-5 text-white" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">MERN FullStack Developer Internship
              </h3>
              <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-0">
                <Calendar className="h-3 w-3 md:h-4 md:w-4 text-indigo-400" />
                <span className="text-gray-300 text-xs md:text-sm">January 2024 - July 2023</span>
              </div>
            </div>
            
            <h4 className="text-indigo-300 text-sm md:text-base font-medium mb-3 md:mb-4">Kgisl, Kovai</h4>
            
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-1 md:gap-2">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">Completed an intensive training program
focused on MERN stack development, covering
both front-end and back-end technologies.</p>
              </li>
              <li className="flex items-start gap-1 md:gap-2">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">Gained hands-on experience with MongoDB,
Express.js, React.js, and Node.js, developing a
strong foundation in full-stack development.</p>
              </li>
              <li className="flex items-start gap-1 md:gap-2">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">Developed proficiency in server-side
programming, database management, and
RESTful API integration, enhancing technical
skills.</p>
              </li>
            </ul>
            
            <div className="mt-4 md:mt-6 flex flex-wrap gap-1 md:gap-2">
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">Teamwork</span>
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">Client Interaction</span>
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">MNC Culture</span>
            </div>
          </div>

          {/* experiences card 3 */}
          <div className="bg-black/50 p-4 md:p-6 rounded-lg border border-gray-700 hover:border-indigo-500/40 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 mb-5 md:mb-6 transform hover:-translate-y-1">
            <div className="absolute -left-3 md:-left-4 top-5 md:top-6 bg-indigo-600 p-1 md:p-2 rounded-full shadow-lg shadow-indigo-600/20">
              <Code className="h-4 w-4 md:h-5 md:w-5 text-white" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Process Associate</h3>
              <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-0">
                <Calendar className="h-3 w-3 md:h-4 md:w-4 text-indigo-400" />
                <span className="text-gray-300 text-xs md:text-sm">April 2023 - December 2023</span>
              </div>
            </div>
            
            <h4 className="text-indigo-300 text-sm md:text-base font-medium mb-3 md:mb-4">Tata Consultancy Services (TCS), Chennai</h4>
            
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-1 md:gap-2">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">Optimized data entry processes, reducing processing time by 30% and improving data accuracy.</p>
              </li>
              <li className="flex items-start gap-1 md:gap-2">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">Streamlined communication channels between departments, enhancing collaboration and reducing response time by 25%.</p>
              </li>
              <li className="flex items-start gap-1 md:gap-2">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">Implemented quality control measures, resulting in a 20% decrease in errors and improving overall workflow efficiency.</p>
              </li>
            </ul>
            
            <div className="mt-4 md:mt-6 flex flex-wrap gap-1 md:gap-2">
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">Teamwork</span>
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">Client Interaction</span>
              <span className="bg-indigo-900/40 text-indigo-300 text-xs px-2 md:px-3 py-1 rounded-full border border-indigo-800">MNC Culture</span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-base md:text-lg text-gray-300 leading-relaxed">
        With a background in computer science and several years of practical experience,
        I've honed my skills in React, Node.js, Express, and MongoDB. I'm constantly learning
        new technologies and best practices to create efficient, scalable, and maintainable applications.
      </p>
    </div>
  )
}