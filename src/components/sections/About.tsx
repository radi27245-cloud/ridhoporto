import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, aboutSections, stats } from '@/data/personal';
import Card from '@/components/ui/Card';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-500/5 to-accent-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Mengenal lebih dekat tentang saya
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {aboutSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover-glow">
                  <h3 className="text-xl font-bold mb-3 gradient-text">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover-glow">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="font-orbitron text-3xl font-black gradient-text mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  Education
                </h4>
                <p className="text-gray-300">
                  {personalInfo.school}
                </p>
                <p className="text-sm text-gray-400">
                  {personalInfo.major}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  Location
                </h4>
                <p className="text-gray-300">
                  {personalInfo.location}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  Status
                </h4>
                <p className="text-gray-300">
                  Active Student
                </p>
                <p className="text-sm text-gray-400">
                  {personalInfo.batch}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

