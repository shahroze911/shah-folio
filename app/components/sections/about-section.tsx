"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2,
  Rocket,
  Lightbulb,
  Heart,
  Download,
  Coffee,
  Music,
  Book,
  Camera,
  Globe,
  Sparkles
} from 'lucide-react';
import Link from "next/link";

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

const timelineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const interests = [
  {
    title: "Coffee Enthusiast",
    description: "Exploring different coffee brewing methods and flavors",
    icon: <Coffee className="h-5 w-5" />,
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Music Lover",
    description: "Playing guitar and discovering new genres",
    icon: <Music className="h-5 w-5" />,
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Bookworm",
    description: "Reading tech books and sci-fi novels",
    icon: <Book className="h-5 w-5" />,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Photography",
    description: "Capturing moments and landscapes in my free time",
    icon: <Camera className="h-5 w-5" />,
    color: "from-red-500 to-rose-600"
  },
  {
    title: "Open Source",
    description: "Contributing to and maintaining open source projects",
    icon: <Code2 className="h-5 w-5" />,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Travel",
    description: "Exploring new places and experiencing different cultures",
    icon: <Globe className="h-5 w-5" />,
    color: "from-cyan-500 to-teal-600"
  }
];

const milestones = [
  {
    year: "2023",
    title: "Full Stack Development",
    description: "Mastered modern web technologies and frameworks",
    icon: <Code2 className="h-5 w-5" />,
    color: "from-blue-500 to-indigo-600"
  },
  {
    year: "2022",
    title: "Cloud & AI Integration",
    description: "Started working with cloud platforms and AI technologies",
    icon: <Rocket className="h-5 w-5" />,
    color: "from-purple-500 to-pink-600"
  },
  {
    year: "2021",
    title: "UI/UX Design",
    description: "Developed expertise in creating beautiful user interfaces",
    icon: <Lightbulb className="h-5 w-5" />,
    color: "from-amber-500 to-orange-600"
  },
  {
    year: "2020",
    title: "First Professional Role",
    description: "Started my journey as a professional developer",
    icon: <Heart className="h-5 w-5" />,
    color: "from-red-500 to-rose-600"
  }
];

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-20 bg-white dark:bg-zinc-900/80 overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/20 pointer-events-none"
      />
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-100/20 dark:bg-indigo-900/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-violet-100/20 dark:bg-violet-900/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold accent-title">
            About Me
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="divider-gradient w-24 mx-auto my-4"
          />
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
            Get to know more about who I am, my journey, and what drives me as a developer
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Story & Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Story Card */}
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50/50 dark:from-zinc-900 dark:to-indigo-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shrink-0">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div className="text-justify">
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
                        My Story
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        Hello! I&apos;m Shahroze Kamran Sahotra, a Modern Full Stack Developer based in Islamabad, Pakistan.         
                        With over 5 years of hands-on experience, I specialize in delivering comprehensive documentation and visualizations for efficient software development.
                      </p>                      
                      <p className="text-zinc-600 dark:text-zinc-400">
                      Crafting standout websites and apps, I leverage cloud platforms to deploy AI models, enhancing business operations and user experiences. 
                      I&apos;m passionate about creating elegant solutions to complex problems.
                      </p>                      
                                          </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                My Journey
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-violet-600" />
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={timelineVariants}
                    className="relative pl-12 pb-8 last:pb-0"
                  >
                    <div className="absolute left-3 top-1 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600" />
                    <div className="absolute left-2 top-0 w-5 h-5 rounded-full bg-white dark:bg-zinc-900" />
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white mb-2`}>
                      {milestone.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {milestone.year} - {milestone.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {milestone.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interests & Download */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Interests Grid */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
                Beyond Coding
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${interest.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          {interest.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                          {interest.title}
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {interest.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download Resume Card */}
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-indigo-500 to-violet-600">
                <CardContent className="p-6 text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Want to know more?
                  </h3>
                  <p className="mb-4 opacity-90">
                    Download my resume to learn about my skills, experience, and achievements
                  </p>
                  <Button 
                    asChild 
                    className="bg-white text-indigo-600 hover:bg-indigo-50"
                  >
                    <Link href="/resume.pdf" download>
                      Download Resume
                      <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 