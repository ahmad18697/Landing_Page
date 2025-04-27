import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Mehta",
    company: "TechNova Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Ahmad Raza transformed our digital presence completely. His web development skills delivered a platform that increased our conversions by 140% in just three months.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "UrbanDesign Studio",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Working with Ahmad was a game-changer. His automation solutions saved us 20+ hours weekly, allowing our team to focus on creative work rather than repetitive tasks.",
  },
  {
    id: 3,
    name: "Arjun Patel",
    company: "FinEdge Capital",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "The security infrastructure Ahmad implemented protected us from multiple cyber attacks. His proactive monitoring gives us peace of mind in our digital operations.",
  },
  {
    id: 4,
    name: "Neha Gupta",
    company: "EduGrowth Academy",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "Ahmad's digital strategy increased our student enrollment by 300% through targeted campaigns and conversion optimization. His data-driven approach delivers real results.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "HealthPlus Clinics",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    text: "Our patient management system developed by Ahmad streamlined our operations so effectively that we've expanded to two new locations this year alone.",
  },
  {
    id: 6,
    name: "Ananya Reddy",
    company: "GreenHarvest Organics",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    text: "Ahmad's e-commerce solution helped us scale from local to national distribution. His ongoing support ensures our platform runs smoothly during peak sales periods.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 max-w-7xl mx-auto bg-gray-50 rounded-3xl">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Client Success Stories
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Don't just take our word for it - hear what industry leaders say about working with Ahmad Raza
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col hover:shadow-md transition-shadow"
              >
                <motion.div 
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-20 h-20 mx-auto mb-6"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-4 border-purple-100"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeIn('up', 0.4 * (index + 1))}
                  className="flex justify-center mb-4"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span 
                      key={starIndex} 
                      variants={fadeIn('up', 0.1 * starIndex)}
                      className="text-amber-400 text-xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h3 
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-1 text-gray-900"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.5 * (index + 1))}
                  className="text-purple-600 text-sm mb-5"
                >
                  {testimonial.company}
                </motion.p>
                <motion.p 
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-600 flex-grow"
                >
                  "{testimonial.text}"
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-12"
        >
          <motion.button 
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;