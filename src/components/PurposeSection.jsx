import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: "💎", // Diamond icon for premium quality
      title: "Delivering Excellence",
      description: "Ahmad Raza handpicks and mentors a diverse team of specialists to deliver unmatched quality in every project"
    },
    {
      icon: "🔄", // Sync icon for collaboration
      title: "Seamless Collaboration",
      description: "We adapt to your workflow and business rhythm, ensuring our solutions integrate perfectly with your operations"
    }
  ];

  return (
    <section id="about" className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-12"
        >
          <motion.div variants={fadeIn('right', 0.3)}>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              className="text-sm text-purple-600 font-medium mb-4 tracking-wider"
            >
              AHMAD RAZA'S APPROACH
            </motion.div>
            <motion.h2 
              variants={textVariant(0.5)}
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              Transforming visions into digital reality
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl hover:shadow-sm transition-all"
              >
                <motion.div 
                  variants={fadeIn('right', 0.4 * (index + 1))}
                  className="w-14 h-14 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 text-2xl"
                >
                  {feature.icon}
                </motion.div>
                <motion.div variants={fadeIn('left', 0.4 * (index + 1))}>
                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="text-xl font-semibold text-gray-900 mb-3"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeIn('up', 0.4)}
                    className="text-gray-600 leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;