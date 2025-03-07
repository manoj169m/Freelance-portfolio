import { LinkedinIcon, Mail, Phone } from 'lucide-react'
import React from 'react'
import { Linkedin } from 'react-feather'

export default function Contacts() {
  return (
    <div className="max-w-md mx-auto backdrop-blur-sm bg-black/40 p-8 rounded-lg shadow-xl border border-gray-800">
    <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
      <Mail className="h-8 w-8 text-indigo-400 animate-pulse" />
      Contact Me
    </h1>
    <div className="space-y-6">
      {/* Email Link */}
      <div className="flex items-center gap-4">
        <Mail className="h-6 w-6 text-indigo-400" />
        <a
          href="mailto:manoj16935@gmail.com"
          className="text-white hover:text-indigo-400 transition duration-300"
        >
         mail
        </a>
      </div>

      {/* Phone Link */}
      <div className="flex items-center gap-4">
        <Phone className="h-6 w-6 text-indigo-400" />
        <a
          href="tel:+91 9080536574"
          className="text-white hover:text-indigo-400 transition duration-300"
        >
          +91 9080536574
        </a>
      </div>

      {/* Instagram Link */}
      <div className="flex items-center gap-4">
        <LinkedinIcon className="h-6 w-6 text-indigo-400" />
        <a
          href="https://www.linkedin.com/in/mano-bharathi-b-157982223/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 transition duration-300"
        >
          Mano Bharathi
        </a>
      </div>
    </div>
  </div>
  )
}
