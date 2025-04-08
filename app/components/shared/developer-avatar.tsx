"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  BrainCircuit, 
  FileText, 
  ArrowRight, 
  ExternalLink, 
  Github,
  Sparkles,
  Laptop,
  Server
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Skills data
const skills = [
  {
    title: "Frontend Development",
    icon: Code,
    description: "Building responsive and interactive user interfaces",
    color: "#3B82F6"
  },
  {
    title: "Generative AI Apps",
    icon: BrainCircuit,
    description: "Creating intelligent applications powered by machine learning and AI.",
    color: "#8B5CF6"
  },
  {
    title: "Technical Documentation",
    icon: FileText,
    description: "Crafting comprehensive and clear documentation for complex systems.",
    color: "#EC4899"
  },
  {
    title: "Full Stack Development",
    icon: Laptop,
    description: "End-to-end development from database design to frontend implementation.",
    color: "#06B6D4"
  },
  {
    title: "Cloud Solutions",
    icon: Server,
    description: "Designing and implementing scalable cloud-based architectures.",
    color: "#F59E0B"
  }
];

export function DeveloperAvatar({ className = "" }: { className?: string }) {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile column */}
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative mb-6">
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-violet-600 to-pink-500 w-full h-full rounded-2xl -z-10" />
            <div className="relative overflow-hidden rounded-xl aspect-square bg-gradient-to-tr from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border-4 border-white dark:border-slate-800 shadow-xl">
              <Image
                src="/images/profile-image.jpg"
                alt="Developer Profile"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Badge className="bg-gradient-to-r from-violet-600 to-pink-600 text-white border-0 mr-2">
                      Full Stack
                    </Badge>
                    <Badge className="bg-white/80 text-indigo-900 border-0">
                      <Sparkles className="h-3.5 w-3.5 mr-1" /> 5+ Years
                    </Badge>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Shahroze Tariq
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-5">
              A passionate developer creating exceptional digital experiences with 
              modern technologies. Specializing in full-stack development with a keen eye for UI/UX design.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
              >
                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-indigo-600 dark:text-indigo-400 border-indigo-600/30 dark:border-indigo-400/30"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-indigo-600 dark:text-indigo-400 border-indigo-600/30 dark:border-indigo-400/30"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.h3 
            variants={fadeIn}
            className="text-xl font-semibold mb-4"
          >
            Expertise & Skills
          </motion.h3>

          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="relative"
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div 
                className={`
                  p-4 rounded-lg border border-slate-200 dark:border-slate-700 
                  ${activeSkill === index ? 'shadow-md bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-900/60'}
                  transition-all duration-300 hover:shadow-md hover:bg-white dark:hover:bg-slate-800 cursor-pointer
                `}
                style={{
                  borderLeft: `4px solid ${skill.color}`
                }}
              >
                <div className="flex items-start">
                  <div 
                    className="p-2 rounded-md mr-3 mt-1" 
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <skill.icon style={{ color: skill.color }} className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{skill.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-3"
                  initial={{ width: 0 }}
                  animate={{ width: activeSkill === index ? '100%' : '30%' }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 