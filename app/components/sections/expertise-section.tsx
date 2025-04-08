"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  CheckCircle,
  ChevronDown,
  ChevronUp
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

const expertiseAreas = [
  {
    title: "Web Development",
    icon: <Globe className="h-6 w-6" />,
    description: "Building modern, responsive web applications with cutting-edge technologies.",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "RESTful APIs",
      "Web Performance"
    ],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    description: "Creating cross-platform mobile applications with native performance.",
    skills: [
      "React Native",
      "Flutter",
      "iOS & Android",
      "Mobile UI/UX",
      "Push Notifications",
      "App Store Optimization"
    ],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Backend Development",
    icon: <Database className="h-6 w-6" />,
    description: "Designing scalable and secure backend solutions for modern applications.",
    skills: [
      "Node.js & Express",
      "Python & Django",
      "Database Design",
      "API Development",
      "Authentication",
      "Cloud Services"
    ],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "DevOps & Security",
    icon: <Shield className="h-6 w-6" />,
    description: "Implementing robust security measures and efficient deployment pipelines.",
    skills: [
      "CI/CD",
      "Docker & Kubernetes",
      "AWS & Azure",
      "Security Best Practices",
      "Monitoring & Logging",
      "Infrastructure as Code"
    ],
    color: "from-red-500 to-rose-600"
  }
];

export function ExpertiseSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="expertise" className="relative py-20 bg-white dark:bg-zinc-900/80 overflow-hidden">
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
            Areas of Expertise
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="divider-gradient w-24 mx-auto my-4"
          />
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
            Specialized in delivering high-quality solutions across multiple domains
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              className="cursor-pointer"
            >
              <Card className={`h-full overflow-hidden transition-all duration-300 ${
                expandedCard === index ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${area.color} text-white`}>
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        {area.description}
                      </p>
                      <motion.div
                        initial={false}
                        animate={{ height: expandedCard === index ? 'auto' : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2">
                          {area.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                              <CheckCircle className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
                              {skill}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                      <Button
                        variant="ghost"
                        className="mt-4 group"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(expandedCard === index ? null : index);
                        }}
                      >
                        {expandedCard === index ? (
                          <>
                            Show Less
                            <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                          </>
                        ) : (
                          <>
                            View Skills
                            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
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