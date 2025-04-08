"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, X, Code2, Layout, Smartphone, FileText, Sparkles, Star, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

// Enhanced animations with more dynamic effects
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
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

// Enhanced card variants with smoother animations
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

// Enhanced categories with more vibrant icons and colors
const categories = [
  { 
    id: 'all', 
    label: 'All Projects', 
    icon: <Layout className="h-4 w-4" />, 
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    glowColor: "shadow-amber-500/20 dark:shadow-amber-500/10"
  },
  { 
    id: 'web', 
    label: 'Web Development', 
    icon: <Code2 className="h-4 w-4" />, 
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    glowColor: "shadow-blue-500/20 dark:shadow-blue-500/10"
  },
  { 
    id: 'app', 
    label: 'Applications', 
    icon: <Smartphone className="h-4 w-4" />, 
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    glowColor: "shadow-emerald-500/20 dark:shadow-emerald-500/10"
  },
  { 
    id: 'documentation', 
    label: 'Documentation', 
    icon: <FileText className="h-4 w-4" />, 
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    glowColor: "shadow-purple-500/20 dark:shadow-purple-500/10"
  }
];

// Enhanced image hover variants with smoother animations
const imageHoverVariants = {
  rest: { 
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

// Portfolio project data with enhanced colors
const projects = [
  {
    id: 1,
    title: "Online Patient Appointment System",
    category: "web",
    demoImage: "/images/portfolio/appointment-system.jpg",
    placeholderColor: "#4F46E5",
    gradientColor: "from-indigo-500 to-violet-600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Twilio", "Sentry", "Appwrite"],
    description: "A comprehensive patient appointment system built with modern web technologies. The application allows patients to schedule, reschedule, and cancel appointments with healthcare providers. Features include real-time notifications, a responsive dashboard, patient records management, and seamless integration with multiple APIs.",
    features: [
      "User authentication and role-based access control",
      "Interactive appointment calendar with availability slots",
      "Automated SMS/email appointment reminders",
      "Secure patient information storage",
      "Provider availability management"
    ],
    demoLink: "https://appointment-system-demo.vercel.app",
    githubLink: "https://github.com/shahroze911/patient-appointment",
    year: 2023
  },
  {
    id: 2,
    title: "Human Resource Management System",
    category: "web",
    demoImage: "/images/portfolio/hrms.jpg",
    placeholderColor: "#2563EB",
    gradientColor: "from-blue-500 to-indigo-600",
    tags: ["ASP.Net MVC", "HTML", "CSS", "Javascript", "GraphQL", "Microsoft SQL Server"],
    description: "A comprehensive HRMS that streamlines key HR functions including recruitment, employee management, payroll, and performance tracking. Built with ASP.NET MVC and Microsoft SQL Server, the system features a GraphQL API for flexible data querying and a responsive frontend for optimal UX across devices.",
    features: [
      "Employee profile management",
      "Attendance tracking with reporting",
      "Payroll processing and tax calculations",
      "Performance evaluation workflows",
      "Leave management system"
    ],
    githubLink: "https://github.com/shahroze911/hrms-system",
    year: 2022
  },
  {
    id: 3,
    title: "Quiz Management System",
    category: "web",
    demoImage: "/images/portfolio/quiz-system.jpg",
    placeholderColor: "#9333EA",
    gradientColor: "from-purple-500 to-pink-600",
    tags: ["ASP.NET MVC", "SQL Server", "Angular", "Entity Framework", "Azure Deployment"],
    description: "An interactive quiz management platform designed for educational institutions that allows instructors to create, manage, and grade quizzes while providing students with an engaging assessment experience. The system includes features like randomized question selection, timed assessments, and detailed analytics for instructors.",
    features: [
      "Custom quiz creation with multiple question types",
      "Randomized question pools",
      "Automated grading and feedback",
      "Detailed analytics for instructors",
      "Student performance tracking"
    ],
    githubLink: "https://github.com/shahroze911/quiz-system",
    year: 2022
  },
  {
    id: 4,
    title: "Selecto - Sales Analysis App",
    category: "app",
    demoImage: "/images/portfolio/sales-analysis.jpg",
    placeholderColor: "#16A34A",
    gradientColor: "from-emerald-500 to-teal-600",
    tags: ["Java", "Firebase", "Mobile App", "Analytics", "Material Design", "Realtime Database"],
    description: "Selecto is a powerful mobile application developed in Java with Firebase integration that provides comprehensive sales analytics for businesses. The app visualizes sales trends, identifies top-performing products, and offers forecasting capabilities to help make data-driven decisions.",
    features: [
      "Real-time sales metrics and dashboards",
      "Product performance ranking",
      "Regional sales comparison",
      "Trend analysis and visualization",
      "Customizable reporting"
    ],
    year: 2021
  },
  {
    id: 5,
    title: "UML Diagram Tool for AWS Services",
    category: "documentation",
    demoImage: "/images/portfolio/uml-diagram.jpg",
    placeholderColor: "#EA580C",
    gradientColor: "from-amber-500 to-orange-600",
    tags: ["UML", "AWS", "draw.io", "Technical Documentation", "Cloud Architecture"],
    description: "A specialized UML diagramming tool that helps architects and developers design and document AWS infrastructure. The tool includes custom AWS service shapes, relationship templates, and best practice guidelines to ensure accurate and comprehensive documentation of cloud solutions.",
    features: [
      "AWS-specific shape library",
      "Automated connection validation",
      "Architecture pattern templates",
      "Export capabilities in multiple formats",
      "Collaboration features for team environments"
    ],
    year: 2023
  }
];

// 3D tilt effect component
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: "preserve-3d",
        transform: "perspective(1000px)"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PortfolioSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const dialogContentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleOpenProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };
  
  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="portfolio" className="relative py-20 bg-gradient-to-b from-white to-indigo-50/30 dark:from-zinc-900/80 dark:to-indigo-950/20 overflow-hidden">
      {/* Enhanced decorative elements with more vibrant colors and animations */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-100/70 to-transparent dark:from-indigo-900/30 pointer-events-none"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-200/30 dark:bg-indigo-800/20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-violet-200/30 dark:bg-violet-800/20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-amber-200/20 dark:bg-amber-800/10 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-emerald-200/20 dark:bg-emerald-800/10 blur-2xl animate-pulse"></div>
      
      {/* Floating elements for more visual interest */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 animate-float"></div>
      <div className="absolute top-3/4 right-1/3 w-12 h-12 rounded-full bg-violet-400/20 dark:bg-violet-600/20 animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full bg-amber-400/20 dark:bg-amber-600/20 animate-float-reverse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-amber-500 dark:text-amber-400 animate-pulse" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              Featured Projects
            </h2>
            <Sparkles className="h-5 w-5 text-amber-500 dark:text-amber-400 animate-pulse" />
          </motion.div>
          <motion.div variants={fadeInUp} className="divider-gradient w-24 mx-auto my-4"></motion.div>
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
            Explore my recent projects showcasing modern web development, mobile applications, and technical documentation.
          </motion.p>
        </motion.div>

        {/* Enhanced filter buttons with animations and vibrant colors */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant={filter === category.id ? 'default' : 'outline'} 
                onClick={() => setFilter(category.id)}
                className={`rounded-full px-6 ${
                  filter === category.id 
                    ? `bg-gradient-to-r ${category.color} hover:opacity-90 text-white shadow-md ${category.glowColor}` 
                    : `border-indigo-200 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 ${category.bgColor}`
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.icon}
                  {category.label}
                </span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid with enhanced interactivity */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              // Loading skeleton with enhanced animation
              Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-[400px] rounded-lg bg-zinc-100 dark:bg-zinc-800 animate-pulse"
                />
              ))
            ) : (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  className="group relative cursor-pointer"
                  onClick={() => handleOpenProject(project)}
                >
                  <TiltCard className="h-full">
                    <Card className="h-full overflow-hidden border-0 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        {/* Project Image with smoother hover effect */}
                        <div className="relative h-48 overflow-hidden">
                          <div 
                            className="absolute inset-0" 
                            style={{ 
                              background: `linear-gradient(135deg, ${project.placeholderColor}80, ${project.placeholderColor})` 
                            }}
                          />
                          <motion.div
                            variants={imageHoverVariants}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                            className="relative h-full"
                          >
                            <Image
                              src={project.demoImage}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-300"
                            />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Project category badge with smoother hover */}
                          <motion.div 
                            className="absolute top-3 right-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Badge 
                              variant="secondary"
                              className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 border-0 shadow-sm"
                            >
                              {project.category === 'web' && 'Web'}
                              {project.category === 'app' && 'App'}
                              {project.category === 'documentation' && 'Docs'}
                            </Badge>
                          </motion.div>
                          
                          {/* Year badge with smoother hover */}
                          <motion.div 
                            className="absolute top-3 left-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Badge 
                              variant="outline"
                              className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 border-0 shadow-sm"
                            >
                              {project.year}
                            </Badge>
                          </motion.div>
                          
                          {/* View details button with smoother hover */}
                          <motion.div 
                            className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button 
                              size="sm" 
                              variant="secondary"
                              className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 border-0 shadow-sm shine-effect"
                            >
                              <ArrowUpRight className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                          </motion.div>
                        </div>

                        {/* Project Info with smoother hover */}
                        <motion.div 
                          className="p-6"
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <div className="mb-4">
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
                              {project.description}
                            </p>
                          </div>

                          {/* Tags with enhanced styling and interactivity */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.slice(0, 3).map((tag, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge 
                                  variant="secondary"
                                  className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40"
                                >
                                  {tag}
                                </Badge>
                              </motion.div>
                            ))}
                            {project.tags.length > 3 && (
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge 
                                  variant="outline"
                                  className="bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700"
                                >
                                  +{project.tags.length - 3} more
                                </Badge>
                              </motion.div>
                            )}
                          </div>

                          {/* Actions with enhanced styling and interactivity */}
                          <div className="flex items-center gap-3">
                            {project.demoLink && (
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full"
                              >
                                <Button 
                                  asChild 
                                  variant="default" 
                                  size="sm" 
                                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shine-effect"
                                >
                                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Live Demo
                                  </Link>
                                </Button>
                              </motion.div>
                            )}
                            {project.githubLink && (
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full"
                              >
                                <Button 
                                  asChild 
                                  variant="outline" 
                                  size="sm" 
                                  className="w-full shine-effect"
                                >
                                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4 mr-2" />
                                    Code
                                  </Link>
                                </Button>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Project Details Dialog with solid background */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-zinc-900 border-0 shadow-2xl" ref={dialogContentRef}>
            <DialogClose className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <X className="h-5 w-5" />
            </DialogClose>
            
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="h-56 md:h-72 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center rounded-md mb-4 overflow-hidden relative">
                  <div 
                    className="absolute inset-0 flex items-center justify-center" 
                    style={{ 
                      background: `linear-gradient(135deg, ${selectedProject.placeholderColor}80, ${selectedProject.placeholderColor})` 
                    }}
                  >
                    <div className="text-white font-bold text-5xl drop-shadow-md">
                      {selectedProject.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  
                  {/* Project category and year badges */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge 
                      variant="secondary"
                      className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 border-0 shadow-sm"
                    >
                      {selectedProject.category === 'web' && 'Web Development'}
                      {selectedProject.category === 'app' && 'Mobile Application'}
                      {selectedProject.category === 'documentation' && 'Technical Documentation'}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 border-0 shadow-sm"
                    >
                      {selectedProject.year}
                    </Badge>
                  </div>
                </div>
                
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4 my-4">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-500" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                      Project Overview
                    </span>
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">{selectedProject.description}</p>
                  
                  <h3 className="text-lg font-medium flex items-center gap-2 pt-2">
                    <Zap className="h-5 w-5 text-amber-500" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                      Key Features
                    </span>
                  </h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    {selectedProject.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-3"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="pt-2">
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                      <Code2 className="h-5 w-5 text-amber-500" />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                        Technologies
                      </span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800/40 transition-colors"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end mt-6">
                  {selectedProject.githubLink && (
                    <Button variant="outline" size="sm" asChild className="shine-effect relative overflow-hidden">
                      <Link href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github size={16} />
                        GitHub Repository
                      </Link>
                    </Button>
                  )}
                  {selectedProject.demoLink && (
                    <Button size="sm" asChild className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shine-effect relative overflow-hidden">
                      <Link href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
} 