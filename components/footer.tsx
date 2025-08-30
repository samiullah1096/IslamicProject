"use client";

import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Arabic Greeting */}
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
              جزاک اللہُ خیراً
            </h3>
            <p className="text-lg text-gray-300">
              May Allah reward you with goodness
            </p>
          </motion.div>

          {/* Logo and Description */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-poppins font-bold text-2xl">VismifyTools</span>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Empowering Muslims worldwide with modern Islamic tools. 
              Built with love for the Ummah.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Github, label: 'GitHub', href: '#' },
              { icon: Twitter, label: 'Twitter', href: '#' },
              { icon: Mail, label: 'Contact', href: '#' },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-5 h-5" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {['Privacy Policy', 'Terms of Service', 'FAQ', 'Support'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© 2025 VismifyTools. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>for the Ummah.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}