import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '@/data/personal';
import Card from '@/components/ui/Card';
import { cn } from '@/lib/utils';

const Skills: React.FC = () => {
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

  const SkillBar: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => {
    const [width, setWidth] = React.useState(0);

    React.useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          setWidth(skill.level);
        }, 500);
        return () => clearTimeout(timer);
      }
    }, [inView, skill.level]);

    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-primary-500 font-semibold">{skill.level}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative"
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Gaming Skills & Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Kemampuan gaming dan keahlian yang saya miliki
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="hover-glow">
                <h3 className="text-xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      <SkillBar skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
            <Card className="text-center">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Favorite Gaming Platforms
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'PC Gaming', level: 95 },
                  { name: 'Mobile Gaming', level: 85 },
                  { name: 'Console', level: 80 },
                  { name: 'VR Gaming', level: 70 }
                ].map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {platform.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-1">{platform.name}</h4>
                    <p className="text-sm text-gray-400">{platform.level}%</p>
                  </motion.div>
                ))}
              </div>
            </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

