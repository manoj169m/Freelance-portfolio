import Image from 'next/image';
import React from 'react';

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0">
          <div className="p-1 rounded-full border-2 border-gray-200 shadow-lg">
            <div className="rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40">
              <Image 
                src="/mano.jpg" 
                alt="mano" 
                width={160} 
                height={160} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Hello, I'm <span className="text-white">Mano</span>
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
          As an aspiring React.js Developer, I am seeking a challenging position where I can apply my strong expertise in
JavaScript, CSS, HTML, and React.js to create dynamic, scalable, and high-performance web applications. With
hands-on experience working with modern React tools, I am eager to contribute my skills to building efficient
and innovative front-end solutions. I possess excellent troubleshooting and debugging abilities, coupled with
strong project management skills, making me a valuable asset in any fast-paced development environment.          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Passionate about leveraging my skills to contribute to innovative and dynamic projects. Seeking opportunities to grow and excel in a collaborative team environment.
          </p>
          
          {/* <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-300">
              View Projects
            </button>
            <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition duration-300">
              Contact Me
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}