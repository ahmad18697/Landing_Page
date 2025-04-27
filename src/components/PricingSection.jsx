import { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1)
  
  // Calculate prices in INR based on product count
  const basicPrice = Math.round(2999 * (productCount / 50))
  const premiumPrice = Math.round(5999 * (productCount / 50))

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Affordable Plans for Every Business
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Ahmad Raza's flexible pricing scales with your business needs
        </motion.p>
        
        <motion.div 
          variants={fadeIn('up', 0.4)}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Basic Plan */}
          <motion.div 
            variants={fadeIn('right', 0.5)}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <motion.h3 
              variants={fadeIn('up', 0.6)}
              className="text-xl text-purple-600 font-medium mb-2"
            >
              Basic Plan
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.7)}
              className="text-3xl font-bold mb-4"
            >
              ₹{basicPrice.toLocaleString('en-IN')}/mo
            </motion.p>
            <motion.ul 
              variants={fadeIn('up', 0.8)}
              className="space-y-2 text-gray-600"
            >
              <li>• Up to {productCount} products</li>
              <li>• 24/7 customer support</li>
              <li>• Basic analytics dashboard</li>
              <li>• Email assistance</li>
            </motion.ul>
          </motion.div>
          
          {/* Premium Plan */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            className="bg-white p-8 rounded-xl shadow-md border-2 border-purple-500 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <motion.h3 
                  variants={fadeIn('up', 0.6)}
                  className="text-xl text-purple-600 font-medium mb-2"
                >
                  Premium Plan
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.7)}
                  className="text-3xl font-bold mb-4"
                >
                  ₹{premiumPrice.toLocaleString('en-IN')}/mo
                </motion.p>
              </div>
              <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Popular</span>
            </div>
            <motion.ul 
              variants={fadeIn('up', 0.8)}
              className="space-y-2 text-gray-600"
            >
              <li>• Up to {productCount} products</li>
              <li>• Priority 24/7 support</li>
              <li>• Advanced analytics</li>
              <li>• Dedicated account manager</li>
              <li>• API access</li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.8)}
          className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-sm"
        >
          <motion.p 
            variants={fadeIn('up', 0.9)}
            className="text-center font-medium text-gray-700 mb-2"
          >
            Customize for {productCount} {productCount === 1 ? 'product' : 'products'}
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 1.0)}
            className="relative px-4 py-2"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">1</span>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-purple-200 rounded-full appearance-none cursor-pointer accent-purple-600"
              />
              <span className="text-sm text-gray-500">50</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn('up', 1.1)}
            className="text-center mt-8"
          >
            <motion.button 
              variants={fadeIn('up', 1.2)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium shadow-lg shadow-purple-100"
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PricingSection