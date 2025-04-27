import React from 'react'
import { BsStack, BsShieldCheck } from 'react-icons/bs'
import { HiLightBulb, HiOutlineChartSquareBar } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-purple-600" />,
      title: "Web Development",
      description: "Custom, high-performance websites built with cutting-edge technologies for seamless user experiences.",
      link: "#web-development"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-500" />,
      title: "Digital Strategy", 
      description: "Data-driven marketing plans that increase visibility and drive measurable business growth.",
      link: "#digital-strategy"
    },
    {
      icon: <HiOutlineChartSquareBar className="w-8 h-8 text-teal-500" />,
      title: "Business Automation",
      description: "Streamline operations with smart systems that save time and reduce human error.",
      link: "#automation"
    },
    {
      icon: <BsShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Security Solutions",
      description: "Comprehensive protection for your digital assets with enterprise-grade security protocols.",
      link: "#security"
    }
  ]

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-3xl">
     <motion.div 
      variants={fadeIn('up', 0.3)}
      className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
     >
       {/* Header */}
       <motion.div 
        variants={fadeIn('right', 0.4)}
        className="md:w-1/3"
       >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ahmad Raza's <br />Expert Solutions
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.5)}
          className="text-gray-600 text-lg mb-6"
        >
          Tailored services designed to elevate your digital presence and operational efficiency
        </motion.p>
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="space-y-4 mb-8"
        >
          <motion.div 
            variants={fadeIn('right', 0.7)}
            className="flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-600"></div>
            </div>
            <span className="text-gray-700 font-medium">Custom-built solutions</span>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.8)}
            className="flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-600"></div>
            </div>
            <span className="text-gray-700 font-medium">Proven methodologies</span>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.9)}
            className="flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-600"></div>
            </div>
            <span className="text-gray-700 font-medium">Ongoing support</span>
          </motion.div>
        </motion.div>
        <motion.button 
          variants={fadeIn('up', 1.0)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg"
        >
          Start Your Project
        </motion.button>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={fadeIn('left', 0.4)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            whileHover={{ y: -5 }}
            className="bg-white cursor-pointer rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="mb-5 w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center"
            >
              {service.icon}
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-xl font-semibold mb-3 text-gray-900"
            >
              {service.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.5 * (index + 1))}
              className="text-gray-600 mb-5 leading-relaxed"
            >
              {service.description}
            </motion.p>
            <motion.a 
              variants={fadeIn('up', 0.6 * (index + 1))}
              href={service.link}
              className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center gap-2"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
     </motion.div>
    </section>
  )
}

export default ServicesSection