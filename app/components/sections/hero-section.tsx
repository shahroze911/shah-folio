"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin,
  Mail, 
  Code, 
  Server, 
  Sparkles, 
  Award, 
  Briefcase, 
  Globe, 
  Download,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const typingVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const techTags = [
  "I build Web Apps",
  "I build Mobile Apps",
  "I build AI Tools",
  "I build Cloud Solutions",
  "I build APIs",
  "I build UI/UX"
];

const stats = [
  { icon: <Briefcase className="h-5 w-5" />, value: 5, label: "Years Experience" },
  { icon: <Code className="h-5 w-5" />, label: "Projects Completed", value: 30 },
  { icon: <Server className="h-5 w-5" />, label: "Happy Clients", value: 10 },
  
];

const socialLinks = [
  { 
    icon: <Github className="h-12 w-12" />, 
    href: "https://github.com/shahroze911", 
    label: "GitHub", 
    color: "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800" 
  },
  { 
    icon: <Linkedin className="h-10 w-10" />, 
    href: "https://linkedin.com/in/shahroze-kamran-sahotra", 
    label: "LinkedIn", 
    color: "text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" 
  },
  { 
    icon: <Mail className="h-10 w-10" />, 
    href: "mailto:sksahotra911@gmail.com", 
    label: "Email", 
    color: "text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20" 
  },
  
  
];

export function HeroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Initialize state variables
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [greeting, setGreeting] = useState("");
  const [statsValues, setStatsValues] = useState(stats.map(() => 0));

  // Handle mounting state and motion hooks
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!mounted) return;

    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    // Animate stats
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    const increment = stats.map(stat => stat.value / steps);

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(timer);
        setStatsValues(stats.map(stat => stat.value));
        return;
      }
      setStatsValues(prev => prev.map((val, i) => val + increment[i]));
      currentStep++;
    }, interval);

    return () => clearInterval(timer);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const typingInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTagIndex((prev) => (prev + 1) % techTags.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(typingInterval);
  }, [mounted]);

  if (!mounted) {
    return (
      <section
        ref={sectionRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center py-20 bg-white dark:bg-zinc-900/80 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Loading...</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 bg-white dark:bg-zinc-900/80 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div 
              variants={fadeInUp} 
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant="outline" className="px-4 py-1 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors">
                <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
                {greeting}! I&apos;m Available for Freelance Work
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Hi, I&apos;m{" "}
              <span className="accent-title bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-600 animate-gradient">
                Shahroze Kamran Sahotra
              </span>
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="relative h-8 mb-6 overflow-hidden">
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-zinc-700 dark:text-zinc-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {isTyping ? (
                  <motion.span
                    variants={typingVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {techTags[currentTagIndex]}
                  </motion.span>
                ) : (
                  <span className="inline-block">{techTags[currentTagIndex]}</span>
                )}
                <span className="inline-block w-1 h-6 ml-1 bg-indigo-600 dark:bg-indigo-400 animate-blink"></span>
              </motion.h2>
            </motion.div>                        
            <motion.p 
              variants={fadeInUp} 
              className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0"
              whileHover={{ scale: 1.02 }}
            >
              Let&apos;s build something amazing together!
            </motion.p>

            {/* Redesigned Stats Grid */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      {stat.icon}
                    </div>
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                    {Math.round(statsValues[index])}+
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button 
                asChild 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
              >
                <Link href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group hover:border-indigo-500 transition-colors"
              >
                <Link href="#contact">
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group hover:border-indigo-500 transition-colors"
              >
                <Link href="/resume.pdf" download>
                  Download Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    asChild 
                    variant="ghost" 
                    size="icon" 
                    className={`rounded-full ${social.color}`}
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Profile Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
                <Image
                  src="/images/p2.png"
                  alt="Shahroze Kamran"
                  fill
                  className="object-cover"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/80 to-violet-600/80 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                  whileHover={{ opacity: 0.9 }}
                >
                  <div className="text-center text-white px-4">
                    <p className="font-semibold mb-2">Modern Full Stack Developer</p>
                    <p className="text-sm">Based in Islamabad, Pakistan</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.button
          onClick={handleScrollToNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
          </motion.div>
        </motion.button>
      </div>
    </motion.section>
  );
} 