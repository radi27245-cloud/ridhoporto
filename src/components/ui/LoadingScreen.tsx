import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Zap, Shield, Trophy } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [showCrosshair, setShowCrosshair] = useState(false);

  const loadingSteps = [
    { text: 'Loading Assets...', progress: 20 },
    { text: 'Connecting to Server...', progress: 40 },
    { text: 'Loading Game Data...', progress: 60 },
    { text: 'Preparing Weapons...', progress: 80 },
    { text: 'Ready to Play!', progress: 100 }
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text);
        setProgress(loadingSteps[currentStep].progress);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowCrosshair(true);
          setTimeout(onComplete, 1000);
        }, 500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center"
      >
        {/* Gaming Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid-pattern w-full h-full" />
          </div>
          
          {/* Floating Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center">
          {/* Gaming Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center relative">
              <Target className="w-12 h-12 text-white" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-green-400 border-t-transparent rounded-full"
              />
            </div>
          </motion.div>

          {/* Gaming Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-orbitron font-black mb-4"
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              RZM
            </span>
            <span className="text-white ml-2">GAMING</span>
          </motion.h1>

          {/* Loading Progress */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-80 mx-auto mb-6"
          >
            <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
            <div className="text-center mt-2">
              <span className="text-green-400 font-bold">{progress}%</span>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-xl text-gray-300 font-medium mb-8"
          >
            {loadingText}
          </motion.p>

          {/* Gaming Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto"
          >
            {[
              { icon: Target, label: 'Accuracy', value: '98%' },
              { icon: Zap, label: 'Speed', value: 'Fast' },
              { icon: Shield, label: 'Defense', value: 'Strong' },
              { icon: Trophy, label: 'Wins', value: '1000+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 + index * 0.1, type: "spring" }}
                className="text-center p-3 bg-black/30 rounded-lg border border-green-400/20"
              >
                <stat.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-xs text-gray-400">{stat.label}</div>
                <div className="text-sm font-bold text-white">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Crosshair Effect */}
        <AnimatePresence>
          {showCrosshair && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="relative">
                <div className="w-8 h-8 border-2 border-green-400 rounded-full">
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="absolute inset-0 border border-green-400 rounded-full opacity-50"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gaming Sound Effect Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-4 right-4 text-green-400 text-sm"
        >
          🔊 Audio Ready
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;






