"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Shield, 
  Zap,
  Star,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

const skillCategories = [
  {
    title: "Technical Proficiency",
    icon: <Code2 className="h-6 w-6" />,
    description: "Advanced knowledge of modern development technologies and frameworks",
    metrics: [
      { label: "Problem Solving", value: 95 },
      { label: "Code Quality", value: 90 },
      { label: "Technical Documentation", value: 85 },
      { label: "System Architecture", value: 88 }
    ],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Development Speed",
    icon: <Zap className="h-6 w-6" />,
    description: "Efficient development practices and rapid prototyping capabilities",
    metrics: [
      { label: "Rapid Prototyping", value: 92 },
      { label: "Agile Methodologies", value: 88 },
      { label: "Time Management", value: 90 },
      { label: "Task Prioritization", value: 85 }
    ],
    color: "from-yellow-500 to-amber-600"
  },
  {
    title: "Project Management",
    icon: <Target className="h-6 w-6" />,
    description: "Strong project management and team collaboration skills",
    metrics: [
      { label: "Team Leadership", value: 85 },
      { label: "Project Planning", value: 90 },
      { label: "Resource Management", value: 88 },
      { label: "Risk Assessment", value: 87 }
    ],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Quality Assurance",
    icon: <Award className="h-6 w-6" />,
    description: "Comprehensive testing and quality assurance practices",
    metrics: [
      { label: "Test Coverage", value: 92 },
      { label: "Bug Detection", value: 90 },
      { label: "Performance Testing", value: 88 },
      { label: "Security Testing", value: 85 }
    ],
    color: "from-purple-500 to-pink-600"
  }
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-zinc-900/80 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/20 pointer-events-none"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-100/20 dark:bg-indigo-900/10 blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-violet-100/20 dark:bg-violet-900/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold accent-title">
            Skills & Metrics
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="divider-gradient w-24 mx-auto my-4"
          />
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
            Measurable skills and performance metrics across different aspects of development
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              className="cursor-pointer"
            >
              <Card className={`h-full overflow-hidden transition-all duration-300 ${
                activeCategory === index ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        {category.description}
                      </p>
                      <motion.div
                        initial={false}
                        animate={{ height: activeCategory === index ? 'auto' : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4">
                          {category.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                  {metric.label}
                                </span>
                                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                                  {metric.value}%
                                </span>
                              </div>
                              <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${metric.value}%` }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                  className={`h-full bg-gradient-to-r ${category.color}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                      <Button
                        variant="ghost"
                        className="mt-4 group"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCategory(activeCategory === index ? null : index);
                        }}
                      >
                        {activeCategory === index ? (
                          <>
                            Hide Metrics
                            <TrendingUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                          </>
                        ) : (
                          <>
                            View Metrics
                            <TrendingUp className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 