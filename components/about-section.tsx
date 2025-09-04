"use client";

import { motion, useInView } from 'framer-motion';
import { Globe, Zap, Shield, Heart, Award, Users, Star, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Available in 195+ countries with support for 15+ languages and RTL text for Arabic and Urdu.",
    gradient: "from-emerald-500 to-teal-500",
    stats: "195+ Countries"
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized for sub-second loading with advanced caching, CDN delivery, and progressive enhancement.",
    gradient: "from-blue-500 to-cyan-500",
    stats: "<1s Load Time"
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your data stays private with end-to-end encryption, no tracking, and GDPR compliance.",
    gradient: "from-purple-500 to-violet-500",
    stats: "100% Private"
  },
  {
    icon: Heart,
    title: "Built with Love",
    description: "Crafted by practicing Muslims who understand the needs of the global Ummah community.",
    gradient: "from-rose-500 to-pink-500",
    stats: "500K+ Users"
  }
];

const achievements = [
  { icon: Award, label: "Google Play Editor's Choice", year: "2024" },
  { icon: Star, label: "App Store Featured App", year: "2024" },
  { icon: Users, label: "ProductHunt #1 Product", year: "2024" },
  { icon: Sparkles, label: "Halal Certification", year: "2025" }
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-blue-50/60 to-purple-50/80 dark:from-slate-900/80 dark:via-emerald-950/60 dark:to-blue-950/80" />
      
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 backdrop-blur-xl px-6 py-3 rounded-full border border-emerald-200/50 dark:border-emerald-700/50">
              <Heart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                Our Story & Mission
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-gray-800 via-emerald-600 to-blue-600 dark:from-gray-100 dark:via-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
              About VismifyTools
            </span>
          </motion.h2>
          
          <motion.div
            className="max-w-5xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
              VismifyTools was born from a simple vision: to bring essential Islamic tools together 
              for Muslims worldwide through modern technology.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission is to make Islamic practices more accessible, accurate, and beautiful while 
              maintaining the authenticity and sanctity of Islamic teachings. Every tool is crafted with 
              meticulous attention to detail and tested for accuracy by Islamic scholars.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              We believe that technology should serve faith, not replace it. That's why we've created 
              a platform that enhances your spiritual journey while respecting Islamic values and traditions.
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group relative"
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: feature.delay || index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 dark:border-slate-700/30 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-700 overflow-hidden">
                
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Stats Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.stats}
                </motion.div>

                {/* Enhanced Icon */}
                <motion.div
                  className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
                  whileHover={{ 
                    rotate: 360, 
                    scale: 1.1,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <feature.icon className="w-12 h-12 text-white relative z-10" />
                </motion.div>

                <motion.h3
                  className="text-2xl font-poppins font-bold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-500"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {feature.description}
                </motion.p>

                {/* Glow Effect */}
                <motion.div 
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl -z-10`}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h3 className="text-3xl font-poppins font-bold mb-8 text-gray-800 dark:text-gray-100">
            Recognition & Awards
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {achievement.label}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {achievement.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}