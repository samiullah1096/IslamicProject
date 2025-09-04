"use client";

import { motion, useInView } from 'framer-motion';
import { Clock, Compass, Shield, Calculator, BookOpen, Heart, Star, Users, ArrowRight, Zap, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const tools = [
  {
    icon: Clock,
    title: "Prayer Times",
    description: "Ultra-accurate prayer times with GPS precision, multiple calculation methods, and beautiful Adhan notifications.",
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.1,
    features: ["GPS Accuracy", "Multiple Methods", "Adhan Alerts", "Offline Support"],
    users: "250K+"
  },
  {
    icon: Compass,
    title: "Qibla Finder",
    description: "Find the exact direction of Kaaba with advanced GPS technology and beautiful compass interface.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2,
    features: ["GPS Precision", "3D Compass", "AR Mode", "Calibration"],
    users: "180K+"
  },
  {
    icon: Shield,
    title: "Halal Checker",
    description: "AI-powered halal verification with comprehensive ingredient database and barcode scanning.",
    gradient: "from-purple-500 to-violet-500",
    delay: 0.3,
    features: ["AI Powered", "Barcode Scan", "Ingredient DB", "Instant Results"],
    users: "320K+"
  },
  {
    icon: Calculator,
    title: "Zakat Calculator",
    description: "Calculate Zakat obligations with precision based on authentic Islamic jurisprudence and current Nisab.",
    gradient: "from-amber-500 to-orange-500",
    delay: 0.4,
    features: ["Sharia Compliant", "Live Nisab", "Multi Currency", "Detailed Report"],
    users: "95K+"
  },
  {
    icon: BookOpen,
    title: "Quran Reader",
    description: "Read and listen to the Holy Quran with 50+ reciters, multiple translations, and study tools.",
    gradient: "from-rose-500 to-pink-500",
    delay: 0.5,
    features: ["50+ Reciters", "Multi Language", "Study Tools", "Bookmarks"],
    users: "420K+"
  },
  {
    icon: Heart,
    title: "Dhikr Counter",
    description: "Digital tasbih with beautiful themes, vibration feedback, and progress tracking for daily dhikr.",
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.6,
    features: ["Custom Themes", "Haptic Feedback", "Progress Track", "Goal Setting"],
    users: "150K+"
  },
  {
    icon: Star,
    title: "Islamic Calendar",
    description: "Complete Hijri calendar with important Islamic dates, events, and prayer time integration.",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.7,
    features: ["Hijri Dates", "Islamic Events", "Prayer Integration", "Reminders"],
    users: "200K+"
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Connect with Muslims worldwide, share experiences, and grow together in faith and knowledge.",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.8,
    features: ["Global Network", "Study Groups", "Q&A Forum", "Islamic Learning"],
    users: "75K+"
  }
];

export function ToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-emerald-50/30 to-blue-50/50 dark:from-slate-950/50 dark:via-emerald-950/30 dark:to-blue-950/50" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
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
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                Premium Islamic Tools Collection
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
              Islamic Tools
            </span>
            <br />
            <span className="text-gray-700 dark:text-gray-300">
              Collection
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Everything you need for your daily Islamic practices, designed with cutting-edge technology 
            and traditional Islamic values. Trusted by Muslims in 195+ countries.
          </motion.p>
        </motion.div>

        {/* Enhanced Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: tool.delay,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -12, 
                rotateY: 5,
                scale: 1.02
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 dark:border-slate-700/30 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-700 group-hover:border-emerald-300 dark:group-hover:border-emerald-600 overflow-hidden">
                
                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Floating Particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${tool.gradient} rounded-full opacity-0 group-hover:opacity-60`}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + i * 10}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}

                {/* Enhanced Icon */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${tool.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <tool.icon className="w-10 h-10 text-white relative z-10" />
                  
                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute top-2 right-2"
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-white" />
                  </motion.div>
                </motion.div>

                {/* User Count Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: tool.delay + 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tool.users} users
                </motion.div>

                {/* Enhanced Content */}
                <motion.h3
                  className="text-2xl font-poppins font-bold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: tool.delay + 0.2 }}
                >
                  {tool.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: tool.delay + 0.4 }}
                >
                  {tool.description}
                </motion.p>

                {/* Feature Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: tool.delay + 0.5 }}
                >
                  {tool.features.map((feature, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      className="text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Enhanced CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: tool.delay + 0.6 }}
                >
                  <Button 
                    className={`w-full bg-gradient-to-r ${tool.gradient} hover:shadow-xl text-white rounded-2xl shadow-lg transition-all duration-500 group/btn relative overflow-hidden`}
                    size="lg"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center justify-center font-semibold">
                      Launch Tool
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>

                {/* Enhanced Glow Effect */}
                <motion.div 
                  className={`absolute -inset-1 bg-gradient-to-r ${tool.gradient} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl -z-10`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 dark:from-emerald-500/20 dark:via-blue-500/20 dark:to-purple-500/20 backdrop-blur-xl rounded-3xl p-12 border border-emerald-200/30 dark:border-emerald-700/30 shadow-2xl max-w-4xl mx-auto"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <h3 className="text-3xl sm:text-4xl font-poppins font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Ready to Transform Your Islamic Journey?
            </h3>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join half a million Muslims who have already enhanced their daily practices with our premium tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 hover:from-emerald-600 hover:via-blue-600 hover:to-purple-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500"
                >
                  Start Using Tools Now
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-10 py-6 text-xl font-bold rounded-2xl border-2 border-emerald-300 dark:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-500"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>100% Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>Available Worldwide</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-purple-500" />
                <span>Lightning Fast</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}