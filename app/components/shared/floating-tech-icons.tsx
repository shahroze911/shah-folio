"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  FaReact, FaNode, FaPython, FaDocker, FaAws, FaMicrosoft
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss
} from "react-icons/si";

// Define tech skills with metadata
const techSkills = [
  { 
    name: "React", 
    icon: FaReact, 
    color: "#61DAFB", 
    category: "frontend",
    level: 90,
    description: "Building interactive UIs with React and its ecosystem"
  },
  { 
    name: "Next.js", 
    icon: SiNextdotjs, 
    color: "#000000", 
    category: "frontend",
    level: 85,
    description: "Server-side rendering and static site generation"
  },
  { 
    name: "TypeScript", 
    icon: SiTypescript, 
    color: "#3178C6", 
    category: "language",
    level: 85,
    description: "Type-safe JavaScript development"
  },
  { 
    name: "Node.js", 
    icon: FaNode, 
    color: "#339933", 
    category: "backend",
    level: 80,
    description: "Building scalable server-side applications"
  },
  { 
    name: "Python", 
    icon: FaPython, 
    color: "#3776AB", 
    category: "language",
    level: 75,
    description: "Data processing and backend development"
  },
  { 
    name: "Tailwind", 
    icon: SiTailwindcss, 
    color: "#06B6D4", 
    category: "frontend",
    level: 90,
    description: "Rapid UI development with utility classes"
  },
  { 
    name: "Docker", 
    icon: FaDocker, 
    color: "#2496ED", 
    category: "devops",
    level: 70,
    description: "Containerization for consistent deployments"
  },
  { 
    name: "AWS", 
    icon: FaAws, 
    color: "#FF9900", 
    category: "cloud",
    level: 75,
    description: "Cloud infrastructure and serverless solutions"
  },
  { 
    name: "Azure", 
    icon: FaMicrosoft, 
    color: "#0078D4", 
    category: "cloud",
    level: 80,
    description: "Microsoft cloud platform expertise"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface TechCardProps {
  skill: typeof techSkills[0];
  isExpanded: boolean;
  toggleExpand: () => void;
}

function TechSkillCard({ skill, isExpanded, toggleExpand }: TechCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate a darker shade for the progress bar background
  const getBackgroundColor = (color: string) => {
    return `${color}30`; // Adding 30 for 30% opacity
  };
  
  return (
    <motion.div
      variants={item}
      className="relative"
      layoutId={`card-container-${skill.name}`}
      onClick={toggleExpand}
    >
      <div 
        ref={cardRef}
        className={`
          bg-white dark:bg-zinc-800 rounded-xl p-4 h-full
          border border-zinc-200 dark:border-zinc-700
          shadow-sm hover:shadow-md transition-all cursor-pointer
          ${isExpanded ? 'shadow-lg ring-2 ring-offset-2 ring-offset-white dark:ring-offset-zinc-900 dark:ring-zinc-700' : ''}
        `}
        style={{
          borderLeft: `4px solid ${skill.color}`,
        }}
      >
        <div className="flex items-center">
          <div 
            className="h-10 w-10 rounded-lg flex items-center justify-center mr-3"
            style={{ backgroundColor: `${skill.color}20` }}
          >
            <skill.icon 
              size={24} 
              style={{ color: skill.color }} 
              className="drop-shadow-sm"
            />
          </div>
          <div>
            <h3 className="font-bold text-zinc-800 dark:text-zinc-100">{skill.name}</h3>
            <Badge 
              variant="outline" 
              className="mt-1 text-xs"
              style={{ color: skill.color, borderColor: `${skill.color}50` }}
            >
              {skill.category}
            </Badge>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between mb-1 text-xs text-zinc-500 dark:text-zinc-400">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div 
            className="h-2 rounded-full w-full overflow-hidden"
            style={{ backgroundColor: getBackgroundColor(skill.color) }}
          >
            <motion.div 
              className="h-2 rounded-full" 
              style={{ backgroundColor: skill.color }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
          </div>
        </div>
        
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-sm text-zinc-600 dark:text-zinc-300"
          >
            <p>{skill.description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function FloatingTechIcons({ className = "" }: { className?: string }) {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { value: "all", label: "All Skills" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "language", label: "Languages" },
    { value: "cloud", label: "Cloud" },
    { value: "devops", label: "DevOps" },
  ];
  
  const filteredSkills = selectedCategory === "all" 
    ? techSkills 
    : techSkills.filter(skill => skill.category === selectedCategory);
  
  return (
    <div className={`w-full py-6 ${className}`}>
      <div className="flex justify-center mb-6 flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category.value}
            variant={selectedCategory === category.value ? "default" : "outline"}
            className={`px-4 py-1.5 text-sm cursor-pointer transition-all hover:scale-105 ${selectedCategory === category.value ? 'bg-gradient-to-r from-violet-600 to-indigo-600' : ''}`}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.label}
          </Badge>
        ))}
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        key={selectedCategory} // This forces re-render of grid when category changes
      >
        {filteredSkills.map((skill) => (
          <TechSkillCard 
            key={skill.name}
            skill={skill}
            isExpanded={expandedSkill === skill.name}
            toggleExpand={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
          />
        ))}
      </motion.div>
    </div>
  );
} 