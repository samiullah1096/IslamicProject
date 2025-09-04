"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-blue-500/20 to-purple-600/30 dark:from-emerald-600/40 dark:via-blue-600/30 dark:to-purple-700/40"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(59,130,246,0.2) 50%, rgba(139,92,246,0.3) 100%)',
              'linear-gradient(135deg, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.2) 50%, rgba(236,72,153,0.3) 100%)',
              'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(236,72,153,0.2) 50%, rgba(16,185,129,0.3) 100%)',
              'linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(59,130,246,0.2) 50%, rgba(139,92,246,0.3) 100%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Interactive Mouse Follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />

        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/30 rounded-full mix-blend-multiply filter blur-xl"
          style={{ y: y1 }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl"
          style={{ y: y2 }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-80 h-80 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Enhanced Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/80 dark:bg-emerald-300/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center mb-8"
        >
          <motion.div
            className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 backdrop-blur-xl px-6 py-3 rounded-full border border-emerald-200/50 dark:border-emerald-700/50 shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </motion.div>
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              Trusted by 500K+ Muslims Worldwide
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-poppins font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.span 
            className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 200%' }}
          >
            VismifyTools
          </motion.span>
          <motion.span 
            className="block text-gray-800 dark:text-gray-100 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Essential Islamic Tools
          </motion.span>
          <motion.span 
            className="block text-4xl sm:text-5xl lg:text-6xl text-gray-600 dark:text-gray-400 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            for Modern Muslims
          </motion.span>
        </motion.h1>

        {/* Enhanced Description */}
        <motion.div
          className="mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            The world's most comprehensive Islamic platform with ultra-accurate Prayer Times, 
            GPS Qibla Finder, AI-powered Halal Checker, and more.
          </p>
          <motion.p 
            className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Join half a million Muslims who trust VismifyTools for their daily Islamic practices.
          </motion.p>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 hover:from-emerald-600 hover:via-blue-600 hover:to-purple-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 group relative overflow-hidden"
              onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center">
                Explore Islamic Tools
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-6 text-xl font-bold rounded-2xl border-2 border-emerald-300 dark:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-500 backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Statistics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { icon: Users, number: "500K+", label: "Active Muslims", color: "from-emerald-500 to-teal-500" },
            { icon: Zap, number: "99.9%", label: "Uptime Guarantee", color: "from-blue-500 to-cyan-500" },
            { icon: Globe, number: "195+", label: "Countries Served", color: "from-purple-500 to-pink-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div 
                className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {['Featured on ProductHunt', 'Google Play Editor\'s Choice', 'App Store Featured', 'Halal Certified'].map((badge, index) => (
            <motion.div
              key={index}
              className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50"
              whileHover={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-emerald-400 dark:border-emerald-300 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-emerald-400 dark:bg-emerald-300 rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}