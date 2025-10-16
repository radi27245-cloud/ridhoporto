import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, GraduationCap, Send } from 'lucide-react';
import { contactInfo, socialLinks } from '@/data/personal';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { FormData } from '@/types';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

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

  const onSubmit = async (_data: FormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Message sent successfully!', {
        duration: 4000,
        style: {
          background: 'linear-gradient(135deg, #00d4ff, #8338ec)',
          color: 'white',
          borderRadius: '12px',
        }
      });
      
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: Phone,
      title: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`
    },
    {
      icon: MapPin,
      title: 'Location',
      value: contactInfo.location,
      href: '#'
    },
    {
      icon: GraduationCap,
      title: 'School',
      value: contactInfo.school,
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Mari berkolaborasi dan berbagi ide
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Contact Information
            </h3>
            
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                href={item.href}
                className="block"
              >
                <Card className="flex items-center space-x-4 hover-glow cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.value}</p>
                  </div>
                </Card>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6"
            >
              <h4 className="text-lg font-semibold mb-4 gradient-text">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-300"
                  >
                    <span className="text-white font-semibold text-sm">
                      {social.name.charAt(0)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="hover-glow">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    {...register('message', { required: 'Message is required' })}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full hover-lift"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

