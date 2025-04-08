"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link 
              href="/" 
              className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text"
            >
              Shahroze K.S
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Modern Full Stack Developer and Applied Cloud Generative AI Engineer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-3">
              <Link 
                href="https://www.linkedin.com/in/shahroze-kamran-sahotra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-700 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link 
                href="https://github.com/shahroze911" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-700 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </Link>
              <Link 
                href="mailto:sksahotra911@gmail.com"
                className="text-zinc-700 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </Link>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {currentYear} Shahroze Kamran Sahotra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 