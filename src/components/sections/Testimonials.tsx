import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import Card from '@/components/ui/Card';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      name: 'Gaming Squad Leader',
      role: 'Team Captain - Valorant Squad',
      content: 'Rdho adalah teammate yang luar biasa! Strategic thinking dan leadership-nya membuat tim kami selalu menang. Dia selalu siap membantu dan mengajari strategi baru.',
      rating: 5,
      avatar: 'GS'
    },
    {
      name: 'Streaming Partner',
      role: 'Content Creator & Streamer',
      content: 'Berkolaborasi dengan Rdho dalam streaming sangat menyenangkan. Dia punya personality yang menarik dan skill gaming yang impressive. Audience selalu suka dengan kontennya.',
      rating: 5,
      avatar: 'SP'
    },
    {
      name: 'Gaming Community',
      role: 'Local Gaming Community',
      content: 'Rdho adalah member yang sangat aktif di komunitas gaming kami. Dia selalu berbagi tips, mengorganisir tournament, dan membantu member baru. True gamer spirit!',
      rating: 5,
      avatar: 'GC'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-500/5 to-accent-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Gaming Community
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Apa kata gaming community tentang saya
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="relative hover-glow">
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
