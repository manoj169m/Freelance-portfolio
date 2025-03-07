'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Portfolio from '../cards/Portfolio';
import { Home, User, Folder, Mail, ArrowUpCircle ,Phone,Linkedin } from 'lucide-react';
import About from '../cards/About';
import Projects from '../cards/Projects';
import Contacts from '../cards/Contacts';


export default function Model() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Define sections with icons for cleaner code
  const sections = [
    { id: 'welcome', label: 'Welcome', icon: <Home className="h-5 w-5" /> },
    { id: 'about', label: 'About', icon: <User className="h-5 w-5" /> },
    { id: 'projects', label: 'Projects', icon: <Folder className="h-5 w-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> }
  ];

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle tab change
  const handleTabChange = (value) => {
    const index = sections.findIndex(section => section.id === value);
    setActiveIndex(index);
    
    // Programmatically change slide when tab is clicked
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  // Handle Swiper slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Animation classes based on active slide
  const getAnimationClass = (index) => {
    return activeIndex === index ? 'animate-fade-in opacity-100' : 'opacity-0 transition-opacity duration-500';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden relative">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[EffectFade]}
          effect="fade"
          slidesPerView={1}
          speed={700}
          onSlideChange={handleSlideChange}
          className="h-full w-full"
        >
                    <SwiperSlide className="flex items-center justify-center bg-black overflow-y-auto">
            <div className={`w-full h-full flex items-center justify-center ${getAnimationClass(0)}`}>
              <Portfolio />
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="flex items-center justify-center bg-black overflow-y-auto">
            <div className={`container mx-auto px-4 py-16 ${getAnimationClass(1)}`}>
              <About/>
             
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="flex items-center justify-center bg-black overflow-y-auto">
            <div className={`container mx-auto px-4 py-16 ${getAnimationClass(2)}`}>
             <Projects/>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="flex items-center justify-center bg-black overflow-y-auto">
            <div className={`container mx-auto px-4 py-16 ${getAnimationClass(3)}`}>
          <Contacts/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Tabs
          value={sections[activeIndex].id}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="flex w-full justify-around bg-black/80 backdrop-blur-md shadow-lg shadow-black/50 border-t border-gray-800">
            {sections.map((section, idx) => (
              <TabsTrigger 
                key={section.id} 
                value={section.id} 
                className={`text-white py-4 px-2 transition-all duration-300 flex flex-col items-center justify-center gap-1
                  ${activeIndex === idx ? 
                    'text-indigo-300 scale-110' : 
                    'hover:text-indigo-300'}`}
              >
                <span className="hidden md:block">{section.label}</span>
                <span className={`md:hidden ${activeIndex === idx ? 'animate-pulse' : ''}`}>
                  {section.icon}
                </span>
                <span className="md:hidden text-xs">{section.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-indigo-600/80 p-2 rounded-full text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50 hover:scale-110"
        >
          <ArrowUpCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}