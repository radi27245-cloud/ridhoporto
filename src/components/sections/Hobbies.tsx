import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { hobbies } from '@/data/personal';
import { Gamepad2, Monitor, Cpu, Users } from 'lucide-react';
import Card from '@/components/ui/Card';
import { cn } from '@/lib/utils';

const Hobbies: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const iconMap = {
    Gamepad2,
    Monitor,
    Cpu,
    Users
  };

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
    <section id="hobbies" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-accent-500/5 to-secondary-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Hobbies & Interests
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Aktivitas yang saya sukai di waktu luang
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {hobbies.map((hobby, index) => {
            const IconComponent = iconMap[hobby.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="text-center hover-glow relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-3 gradient-text">
                      {hobby.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                      {hobby.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {hobby.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.3 + index * 0.1 + tagIndex * 0.05 
                          }}
                          className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full border border-primary-500/30"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gaming Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="text-center">
            <h3 className="text-2xl font-bold mb-8 gradient-text">
              Gaming Achievements
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-gray-400">Hours Gaming</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-400">Games Mastered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">Platinum</div>
                <div className="text-gray-400">Achievement Level</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-400">Gaming Spirit</div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;

