"use client";

import { motion } from 'framer-motion';
import { Clock, Compass, Shield, Calculator, BookOpen, Heart, Star, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tools = [
  {
    icon: Clock,
    title: "Prayer Times",
    description: "Accurate prayer times for your location with Adhan notifications and Qibla direction.",
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.1
  },
  {
    icon: Compass,
    title: "Qibla Finder",
    description: "Find the exact direction of Kaaba from anywhere in the world with GPS precision.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "Halal Checker",
    description: "Verify if food products and ingredients are Halal with our comprehensive database.",
    gradient: "from-purple-500 to-violet-500",
    delay: 0.3
  },
  {
    icon: Calculator,
    title: "Zakat Calculator",
    description: "Calculate your Zakat obligations with precision based on Islamic jurisprudence.",
    gradient: "from-amber-500 to-orange-500",
    delay: 0.4
  },
  {
    icon: BookOpen,
    title: "Quran Reader",
    description: "Read and listen to the Holy Quran with multiple translations and reciters.",
    gradient: "from-rose-500 to-pink-500",
    delay: 0.5
  },
  {
    icon: Heart,
    title: "Dhikr Counter",
    description: "Digital tasbih for your daily dhikr and remembrance of Allah with beautiful themes.",
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.6
  },
  {
    icon: Star,
    title: "Islamic Calendar",
    description: "Hijri calendar with important Islamic dates and events for the entire year.",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.7
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with Muslims worldwide and share your Islamic journey with others.",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.8
  }
];

export function ToolsSection() {
  return (
    <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Islamic Tools Collection
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need for your daily Islamic practices, designed with modern technology and traditional values.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tool.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-emerald-200 dark:group-hover:border-emerald-700">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${tool.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <tool.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-poppins font-semibold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                  {tool.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    Use Tool
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Button>
                </motion.div>

                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            More tools coming soon! Join our community for updates.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
            >
              Get Notified
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}