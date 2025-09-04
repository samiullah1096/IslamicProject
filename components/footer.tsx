"use client";

import { motion, useInView } from 'framer-motion';
import { Heart, Github, Twitter, Mail, Globe, Shield, Zap, Star, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EnhancedLogo } from '@/components/enhanced-logo';
import { useRef } from 'react';

const footerLinks = {
  tools: [
    { name: 'Prayer Times', href: '/prayer-times' },
    { name: 'Qibla Finder', href: '/qibla-finder' },
    { name: 'Halal Checker', href: '/halal-checker' },
    { name: 'Zakat Calculator', href: '/zakat-calculator' },
    { name: 'Quran Reader', href: '/quran-reader' },
    { name: 'Islamic Calendar', href: '/islamic-calendar' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'Islamic Scholars', href: '/scholars' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/support' },
    { name: 'Community Forum', href: '/community' },
    { name: 'API Documentation', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'Feedback', href: '/feedback' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Security', href: '/security' },
  ]
};

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/VismifyTools', color: 'hover:text-blue-400' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/vismifytools', color: 'hover:text-gray-400' },
  { icon: Mail, label: 'Email', href: 'mailto:support@vismifytools.com', color: 'hover:text-emerald-400' },
  { icon: Globe, label: 'Website', href: 'https://vismifytools.com', color: 'hover:text-purple-400' },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900 text-white overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/10 via-blue-600/10 to-purple-600/10"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(139,92,246,0.1) 100%)',
              'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 50%, rgba(236,72,153,0.1) 100%)',
              'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.1) 50%, rgba(16,185,129,0.1) 100%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full filter blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <EnhancedLogo size="lg" animated={true} className="mb-6" />
            
            <motion.p
              className="text-gray-300 leading-relaxed mb-6 text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Muslims worldwide with cutting-edge Islamic tools. 
              Built with love, precision, and deep respect for Islamic traditions.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { icon: Shield, text: "Secure" },
                { icon: Zap, text: "Fast" },
                { icon: Star, text: "Trusted" }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <badge.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h4 className="text-xl font-poppins font-bold mb-6 text-white capitalize">
                {category === 'tools' ? 'Islamic Tools' : category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 font-medium block"
                      whileHover={{ x: 8, color: '#6EE7B7' }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Arabic Section */}
        <motion.div
          className="text-center mb-12 py-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h3 className="text-4xl sm:text-5xl font-amiri font-bold mb-4 bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              بارك الله فيكم
            </h3>
            <p className="text-xl text-gray-300 font-medium">
              May Allah bless you all
            </p>
            <motion.p
              className="text-lg text-gray-400 mt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Thank you for being part of our global Muslim community
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 flex items-center space-x-2 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <span>© 2025 VismifyTools. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-red-400 fill-current" />
              </motion.div>
              <span>for the Ummah.</span>
            </motion.p>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Button
                variant="ghost"
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="mr-2">Back to Top</span>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Additional Legal Info */}
          <motion.div
            className="mt-8 pt-6 border-t border-white/5 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <p className="text-gray-500 text-sm leading-relaxed max-w-4xl mx-auto">
              VismifyTools is committed to providing accurate Islamic tools based on authentic sources. 
              All prayer times and religious calculations are verified by qualified Islamic scholars. 
              For specific religious guidance, please consult your local Islamic authority.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Floating Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 z-50 flex items-center justify-center"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}