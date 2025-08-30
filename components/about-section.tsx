"use client";

import { motion } from 'framer-motion';
import { Globe, Zap, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Available worldwide with multi-language support"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays private and secure"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Built by Muslims for the Muslim community"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-900 dark:to-emerald-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            About VismifyTools
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              VismifyTools is designed to bring essential Islamic tools together for Muslims worldwide. 
              Our mission is to make Islamic practices more accessible through modern technology while 
              maintaining the authenticity and accuracy of Islamic teachings.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              We believe that technology should serve faith, not replace it. Every tool is crafted with 
              care, tested for accuracy, and designed to enhance your spiritual journey.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-poppins font-semibold mb-3 text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}