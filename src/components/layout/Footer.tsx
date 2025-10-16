import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { socialLinks } from '@/data/personal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    Github,
    Linkedin,
    Instagram,
    Twitter
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          {/* Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-3 mb-2">
              <img 
                src="/logo.svg" 
                alt="Rdho Zaenal Mustaqim Logo" 
                className="w-8 h-8"
              />
              <div>
                <p className="text-gray-400 font-semibold">
                  &copy; {currentYear} Rdho Zaenal Mustaqim
                </p>
                <p className="text-sm text-gray-500">
                  SMK Negeri 1 Liwa - TJKT Angkatan 20
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Built with ❤️ using React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap];
              
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 group"
                >
                  <IconComponent className="w-5 h-5 text-white group-hover:text-dark-950 transition-colors duration-300" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <h4 className="font-semibold text-white mb-2">Education</h4>
              <p>SMK Negeri 1 Liwa</p>
              <p>Teknik Jaringan Komputer dan Telekomunikasi</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Location</h4>
              <p>Lampung Barat, Indonesia</p>
              <p>Angkatan 20</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Interests</h4>
              <p>Gaming, Programming</p>
              <p>Networking, Technology</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

