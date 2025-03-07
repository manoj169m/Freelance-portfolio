import { Folder } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
      <Folder className="h-8 w-8 text-indigo-400 animate-pulse" />
      My Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-black/60 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
        <h3 className="text-xl font-bold text-white mb-4">Grocery Shop Application</h3>
        <p className="text-gray-300 mb-4">A full-stack e-commerce platform built with the MERN stack.</p>
    <Link href='https://668d30400dd7fa5593ada64a--candid-kataifi-5abc33.netlify.app/' target='blank'>  <button className="px-4 py-2 bg-indigo-600/80 text-white rounded-md hover:bg-indigo-700 transition duration-300">
          View Project
        </button></Link>    
      </div>
      <div className="bg-black/60 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
        <h3 className="text-xl font-bold text-white mb-4">Google Gemini Clone</h3>
        <p className="text-gray-300 mb-4">A ReactJS front-end implementation of Google's Gemini interface.</p>
     <Link href='https://unrivaled-unicorn-80e1df.netlify.app/' target='blank'>   <button className="px-4 py-2 bg-indigo-600/80 text-white rounded-md hover:bg-indigo-700 transition duration-300" >
          View Project
        </button></Link>
      </div>
      <div className="bg-black/60 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
        <h3 className="text-xl font-bold text-white mb-4">Memory Cards Game</h3>
        <p className="text-gray-300 mb-4">A Simple Card game built with React.</p>
     <Link href='https://66a0fa2d1f4d2823f56959aa--melodious-bienenstitch-50ec9e.netlify.app/' target='blank'>   <button className="px-4 py-2 bg-indigo-600/80 text-white rounded-md hover:bg-indigo-700 transition duration-300" >
          View Project
        </button></Link>
      </div>
    </div>
  </div>
  )
}
