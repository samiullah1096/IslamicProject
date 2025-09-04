"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface EnhancedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  animated?: boolean;
  className?: string;
}

export function EnhancedLogo({ 
  size = 'md', 
  showText = true, 
  animated = true,
  className = '' 
}: EnhancedLogoProps) {
  const sizeClasses = {
    sm: { icon: 'w-6 h-6', text: 'text-lg', container: 'space-x-2' },
    md: { icon: 'w-8 h-8', text: 'text-xl', container: 'space-x-2' },
    lg: { icon: 'w-12 h-12', text: 'text-3xl', container: 'space-x-3' },
    xl: { icon: 'w-16 h-16', text: 'text-4xl', container: 'space-x-4' }
  };

  const { icon, text, container } = sizeClasses[size];

  return (
    <motion.div 
      className={`flex items-center ${container} ${className}`}
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={animated ? { scale: 1.05 } : {}}
    >
      {/* Logo Icon */}
      <motion.div 
        className={`${icon} relative`}
        whileHover={animated ? { rotate: 360 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Main Logo Shape */}
        <div className={`${icon} bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-400 opacity-0"
            animate={animated ? { opacity: [0, 0.3, 0] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Islamic Geometric Pattern */}
          <svg 
            className="w-1/2 h-1/2 text-white relative z-10" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
          </svg>
          
          {/* Sparkle Effect */}
          {animated && (
            <motion.div
              className="absolute top-1 right-1"
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
            >
              <Sparkles className="w-2 h-2 text-white" />
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <motion.div
          initial={animated ? { opacity: 0, x: -20 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={`font-poppins font-bold ${text} bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent`}>
            VismifyTools
          </span>
          {size === 'lg' || size === 'xl' ? (
            <motion.div
              className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide"
              initial={animated ? { opacity: 0 } : {}}
              animate={animated ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Essential Islamic Tools
            </motion.div>
          ) : null}
        </motion.div>
      )}
    </motion.div>
  );
}