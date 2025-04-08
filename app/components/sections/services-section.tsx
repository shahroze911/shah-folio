"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
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

const services = [
  {
    title: "Web Development",
    icon: <Globe className="h-6 w-6" />,
    description: "Custom web applications built with modern technologies and best practices.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Friendly",
      "Cross-browser Compatibility"
    ],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "Native Performance",
      "Cross-platform Development",
      "Push Notifications",
      "Offline Support"
    ],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Backend Development",
    icon: <Database className="h-6 w-6" />,
    description: "Robust and scalable backend solutions for your applications.",
    features: [
      "API Development",
      "Database Design",
      "Authentication & Authorization",
      "Cloud Integration"
    ],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Security Solutions",
    icon: <Shield className="h-6 w-6" />,
    description: "Comprehensive security measures to protect your applications.",
    features: [
      "Security Audits",
      "Vulnerability Testing",
      "Data Encryption",
      "Compliance Standards"
    ],
    color: "from-red-500 to-rose-600"
  }
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 bg-white dark:bg-zinc-900/80 overflow-hidden">
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
            Services I'm Offering
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="divider-gradient w-24 mx-auto my-4"
          />
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
            Comprehensive solutions tailored to your needs, delivered with excellence and innovation.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedService(selectedService === index ? null : index)}
              className="cursor-pointer"
            >
              <Card className={`h-full overflow-hidden transition-all duration-300 ${
                selectedService === index ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        {service.description}
                      </p>
                      <motion.div
                        initial={false}
                        animate={{ height: selectedService === index ? 'auto' : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                              <CheckCircle className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                      <Button
                        variant="ghost"
                        className="mt-4 group"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add your action here
                        }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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