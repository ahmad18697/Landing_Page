import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from '../assets/hero-image.jpeg'

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          {/* Star badge */}
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-purple-600 group-hover:scale-110 transition-transform">★</span>
            <span className="text-sm font-medium">Ahmad Raza's Growth Formula</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Ahmad Raza accelerates growth for{' '}
          <span className="text-purple-600 relative inline-block">
            Startups to Enterprises
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-200/60"></span>
          </span>
          <span className="inline-block ml-2 animate-pulse">🚀</span>
        </motion.h1>

        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Ahmad Raza delivers premium leads, sales training, and conversion tools — all streamlined under one simple service.
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          {/* Email Form */}
          <input
            type="email"
            placeholder="Work with Ahmad Raza"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-gray-600"
          />
          <button className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-purple-100 active:scale-95">
            →
          </button>
        </motion.div>
      </div>

      {/* Right Column - Image */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 relative flex justify-center"
      >
        <div className="relative w-full max-w-[300px] lg:max-w-[500px] -mt-16 md:-mt-24">
          <img
            src={heroImage}
            alt="Ahmad Raza's Professional Services"
            className="rounded-2xl relative z-20 w-full hover:scale-105 transition-transform duration-500 shadow-2xl"
          />
          <div className="absolute top-5 left-5 w-full h-full bg-purple-100 rounded-2xl z-0 blur-lg opacity-30"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;
