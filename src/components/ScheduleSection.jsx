import scheduleImage from '../assets/stats.jpeg'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ScheduleSection = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-gray-50 rounded-3xl"
    >
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-24">
        {/* Image Section */}
        <motion.div 
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.img 
            variants={fadeIn('up', 0.4)}
            src={scheduleImage} 
            alt="Ahmad Raza's productivity dashboard" 
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span 
            variants={fadeIn('up', 0.4)}
            className="text-purple-600 font-semibold tracking-wider"
          >
            PRODUCTIVITY ENGINEERED
          </motion.span>
          <motion.h2 
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight"
          >
            Ahmad Raza's Time Optimization <br />
            Framework
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 mb-8 text-lg"
          >
            My systematic approach revolutionizes how you manage time, automate scheduling, and maximize daily productivity. Experience seamless calendar integration tailored to your business rhythm.
          </motion.p>
          
          <motion.div
            variants={fadeIn('up', 0.7)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Book Consultation
            </motion.button>
            <motion.a 
              href="#" 
              className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all self-center"
            >
              How it works
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ScheduleSection