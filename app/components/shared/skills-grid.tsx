import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  Database, 
  Globe, 
  Layers, 
  Smartphone, 
  Server, 
  Zap, 
  BarChart, 
  Briefcase,
  Library,
  GitBranch,
  Monitor,
  PenTool,
  Settings
} from 'lucide-react';

// Define the structure for skill items
interface SkillItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: number; // 1-5 for proficiency level
  color: string;
}

// Organize skills by category
const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    color: 'from-indigo-600 to-violet-600',
    icon: <Monitor className="h-5 w-5" />,
    skills: [
      { 
        name: 'React', 
        icon: <Zap className="h-4 w-4" />, 
        level: 5,
        description: 'Building complex, interactive UIs with React, Redux, and modern Hooks',
        color: '#61DAFB'
      },
      { 
        name: 'Next.js', 
        icon: <Zap className="h-4 w-4" />, 
        level: 5,
        description: 'Server-side rendering, static generation, and full-stack React applications',
        color: '#000000'
      },
      { 
        name: 'TypeScript', 
        icon: <Code className="h-4 w-4" />, 
        level: 4,
        description: 'Type-safe JavaScript development with interfaces and generics',
        color: '#3178C6'
      },
      { 
        name: 'TailwindCSS', 
        icon: <PenTool className="h-4 w-4" />, 
        level: 5,
        description: 'Utility-first CSS framework for rapid UI development',
        color: '#06B6D4'
      },
      { 
        name: 'CSS/SCSS', 
        icon: <PenTool className="h-4 w-4" />, 
        level: 4,
        description: 'Creating responsive layouts and animations with modern CSS',
        color: '#1572B6'
      },
      { 
        name: 'HTML5', 
        icon: <Code className="h-4 w-4" />, 
        level: 5,
        description: 'Semantic markup, accessibility, and modern web standards',
        color: '#E34F26'
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    color: 'from-emerald-600 to-teal-600',
    icon: <Server className="h-5 w-5" />,
    skills: [
      { 
        name: 'Node.js', 
        icon: <Server className="h-4 w-4" />, 
        level: 4,
        description: 'Building scalable server-side applications and APIs',
        color: '#339933'
      },
      { 
        name: 'Express', 
        icon: <Server className="h-4 w-4" />, 
        level: 4,
        description: 'Fast, unopinionated, minimalist web framework for Node.js',
        color: '#000000'
      },
      { 
        name: 'MongoDB', 
        icon: <Database className="h-4 w-4" />, 
        level: 4,
        description: 'NoSQL database management with Mongoose ODM',
        color: '#47A248'
      },
      { 
        name: 'PostgreSQL', 
        icon: <Database className="h-4 w-4" />, 
        level: 3,
        description: 'Relational database design and management',
        color: '#336791'
      },
      { 
        name: 'REST APIs', 
        icon: <Globe className="h-4 w-4" />, 
        level: 5,
        description: 'Designing and implementing RESTful services',
        color: '#FF5733'
      },
      { 
        name: 'GraphQL', 
        icon: <Layers className="h-4 w-4" />, 
        level: 3,
        description: 'Query language for APIs and runtime for fulfilling queries',
        color: '#E535AB'
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile',
    color: 'from-orange-600 to-amber-600',
    icon: <Smartphone className="h-5 w-5" />,
    skills: [
      { 
        name: 'React Native', 
        icon: <Smartphone className="h-4 w-4" />, 
        level: 4,
        description: 'Cross-platform mobile application development',
        color: '#61DAFB'
      },
      { 
        name: 'Expo', 
        icon: <Smartphone className="h-4 w-4" />, 
        level: 4,
        description: 'Framework and platform for universal React applications',
        color: '#000020'
      },
      { 
        name: 'Mobile UI', 
        icon: <PenTool className="h-4 w-4" />, 
        level: 4,
        description: 'Responsive design patterns for mobile interfaces',
        color: '#FF5722'
      },
      { 
        name: 'Push Notifications', 
        icon: <Zap className="h-4 w-4" />, 
        level: 3,
        description: 'Implementing cross-platform push notification systems',
        color: '#4285F4'
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps',
    color: 'from-blue-600 to-sky-600',
    icon: <Settings className="h-5 w-5" />,
    skills: [
      { 
        name: 'Git', 
        icon: <GitBranch className="h-4 w-4" />, 
        level: 5,
        description: 'Version control, branching strategies, and collaborative workflows',
        color: '#F05032'
      },
      { 
        name: 'Docker', 
        icon: <Layers className="h-4 w-4" />, 
        level: 3,
        description: 'Containerization of applications for consistent deployment',
        color: '#2496ED'
      },
      { 
        name: 'CI/CD', 
        icon: <Zap className="h-4 w-4" />, 
        level: 3,
        description: 'Continuous integration/deployment pipelines with GitHub Actions',
        color: '#4CAF50'
      },
      { 
        name: 'AWS', 
        icon: <Server className="h-4 w-4" />, 
        level: 3,
        description: 'Cloud infrastructure including S3, EC2, and Lambda functions',
        color: '#FF9900'
      },
      { 
        name: 'Vercel', 
        icon: <Zap className="h-4 w-4" />, 
        level: 4,
        description: 'Deployment and hosting platform for static sites and Serverless Functions',
        color: '#000000'
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Other',
    color: 'from-fuchsia-600 to-pink-600',
    icon: <Briefcase className="h-5 w-5" />,
    skills: [
      { 
        name: 'Agile', 
        icon: <BarChart className="h-4 w-4" />, 
        level: 4,
        description: 'Agile methodologies including Scrum and Kanban',
        color: '#0073B7'
      },
      { 
        name: 'UI/UX Design', 
        icon: <PenTool className="h-4 w-4" />, 
        level: 3,
        description: 'User interface and experience design principles',
        color: '#FF3366'
      },
      { 
        name: 'Testing', 
        icon: <Code className="h-4 w-4" />, 
        level: 3,
        description: 'Unit and integration testing with Jest and Testing Library',
        color: '#C21325'
      },
      { 
        name: 'Documentation', 
        icon: <Library className="h-4 w-4" />, 
        level: 4,
        description: 'Technical writing and documentation best practices',
        color: '#7F52FF'
      }
    ]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  // Toggle skill description visibility
  const toggleSkill = (skillName: string) => {
    if (expandedSkill === skillName) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(skillName);
    }
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveCategory}>
        <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-6 bg-zinc-100/70 dark:bg-zinc-800/70 rounded-full p-1 overflow-x-auto max-w-fit mx-auto">
          {skillCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className={`rounded-full flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all data-[state=active]:shadow-lg ${
                activeCategory === category.id 
                  ? `data-[state=active]:bg-gradient-to-r data-[state=active]:${category.color} data-[state=active]:text-white` 
                  : 'data-[state=inactive]:dark:text-zinc-400'
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="outline-none ring-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover="hover"
                  className="h-full"
                >
                  <Card 
                    className="group h-full overflow-hidden cursor-pointer bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-all"
                    style={{ 
                      borderLeft: `3px solid ${skill.color}`,
                      borderTop: `1px solid ${skill.color}20`
                    }}
                    onClick={() => toggleSkill(skill.name)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div 
                            className="flex items-center justify-center w-6 h-6 rounded-md text-white" 
                            style={{ backgroundColor: skill.color }}
                          >
                            {skill.icon}
                          </div>
                          <h3 className="font-medium">{skill.name}</h3>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-1.5 h-6 mx-0.5 rounded-full ${
                                i < skill.level 
                                  ? 'bg-gradient-to-b from-indigo-500 to-violet-500 scale-y-100' 
                                  : 'bg-zinc-200 dark:bg-zinc-700 scale-y-75'
                              } transition-all group-hover:scale-y-100`}
                              style={{
                                transitionDelay: `${i * 50}ms`,
                                transformOrigin: 'bottom'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {expandedSkill === skill.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-xs text-zinc-700 dark:text-zinc-300 mt-2 bg-zinc-50 dark:bg-zinc-900/50 p-2 rounded-md border border-zinc-200 dark:border-zinc-700"
                          >
                            {skill.description}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
} 