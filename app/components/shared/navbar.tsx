"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleSectionInView = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionInView);
    
    // Initial check
    handleScroll();
    handleSectionInView();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionInView);
    };
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // For # links, prevent default and do smooth scrolling manually
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          href="/"
          className="font-bold text-2xl accent-title relative"
          aria-label="Shahroze K.S - Home"
        >
          <span className="relative z-10">Shahroze K.S</span>
          <motion.div 
            className="absolute -inset-1 rounded-md bg-indigo-100/50 dark:bg-indigo-900/20 -z-0" 
            layoutId="logo-highlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`transition-colors relative animate-underline ${
                activeSection === link.href.replace('#', '') 
                  ? "text-indigo-600 dark:text-indigo-400 font-medium" 
                  : "text-zinc-700 hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-400"
              }`}
              aria-current={activeSection === link.href.replace('#', '') ? "page" : undefined}
            >
              {link.label}
              {activeSection === link.href.replace('#', '') && (
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                  layoutId="navbar-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          <ThemeSwitch />
          <Button asChild className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shine-effect">
            <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
              <span className="relative z-10">Hire Me</span>
            </Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        <div className="flex items-center md:hidden space-x-4 flex-1 justify-start">
          <Link
            href="/"
            className="font-bold text-xl accent-title relative"
            aria-label="Shahroze K.S - Home"
          >
            <span className="relative z-10">Shahroze K.S</span>
            <motion.div 
              className="absolute -inset-1 rounded-md bg-indigo-100/50 dark:bg-indigo-900/20 -z-0" 
              layoutId="logo-highlight-mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <ThemeSwitch />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu" className="relative">
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-zinc-900 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="font-bold text-2xl accent-title mb-1">Shahroze K.S</div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Full Stack Developer</p>
                </div>
                <nav className="flex flex-col p-6 space-y-6 flex-grow" aria-label="Mobile Navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-xl flex items-center group transition-colors ${
                        activeSection === link.href.replace('#', '') 
                          ? "text-indigo-600 dark:text-indigo-400 font-medium" 
                          : "text-zinc-700 hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-400"
                      }`}
                      aria-current={activeSection === link.href.replace('#', '') ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="ml-auto h-5 w-5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                      {activeSection === link.href.replace('#', '') && (
                        <motion.div 
                          layoutId="mobile-indicator"
                          className="absolute left-0 w-1 h-8 bg-indigo-500 rounded-r-md"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  ))}
                </nav>
                <div className="p-6 border-t border-zinc-200 dark:border-zinc-800">
                  <Button asChild className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700">
                    <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
                      Hire Me
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 