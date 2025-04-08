"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaDocker, 
  FaGithub, FaDatabase, FaMicrosoft, FaAws, FaCloud
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiOpenai, 
  SiGooglecloud, SiPostgresql, SiAppwrite
} from "react-icons/si";
import { Briefcase, GraduationCap } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ResumeSection() {
  const workExperience = [
    {
      title: "Software Developer",
      company: "Federal Government Organization",
      period: "11/2022 — Present",
      responsibilities: [
        "Software Design and Development",
        "Problem Solving and Debugging",
        "System Architecture & Documentation",
        "Version Control and Collaboration",
        "Security and Data Protection"
      ]
    },
    {
      title: "Senior Admin Assistant",
      company: "Sehat Sahulat Program-Head Office",
      period: "04/2022 — 08/2022",
      responsibilities: [
        "E-Health Solutions",
        "Software Management",
        "Software Testing",
        "User Management & Queries"
      ]
    }
  ];

  const education = [
    {
      degree: "BS Computer Sciences",
      institution: "National University of Computer and Emerging Sciences Faisalabad",
      period: "2017 — 2021",
      courses: [
        "Data Structures & OOP",
        "Web Development",
        "Artificial Intelligence",
        "Database Management",
        "Operating Systems & Computer Networks"
      ]
    }
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "SQL Server", icon: <FaDatabase className="text-red-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Microsoft .Net", icon: <FaMicrosoft className="text-purple-600" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-green-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
    { name: "AWS", icon: <FaCloud className="text-orange-600" /> },
    { name: "Azure", icon: <FaCloud className="text-blue-600" /> },
    { name: "GCP", icon: <SiGooglecloud className="text-red-600" /> },
    { name: "Appwrite", icon: <SiAppwrite className="text-pink-600" /> }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-zinc-600 dark:text-zinc-400">My professional journey and qualifications</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-800"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  <h4 className="font-semibold text-lg">{job.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-1">{job.company}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">{job.period}</p>
                  <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-800"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-1">{edu.institution}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">{edu.period}</p>
                  <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                    {edu.courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="mt-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
              <span className="text-lg font-bold">3</span>
            </div>
            <h3 className="text-2xl font-semibold">Core Competencies</h3>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {skills.map((skill, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-sm text-center font-medium">{skill.name}</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{skill.name}</h4>
                      <p className="text-sm">
                        Proficient in using {skill.name} for professional development.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 