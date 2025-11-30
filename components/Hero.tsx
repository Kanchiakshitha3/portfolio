import React from 'react';
import { Mail, Download, Phone, Linkedin, Github } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full pt-28 pb-24 md:pt-32 md:pb-32 flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* Avatar Circle */}
      <div className="mb-8 relative">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
          <span className="text-4xl md:text-5xl font-bold text-white tracking-wider">KA</span>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 dark:text-white">
        Kanchi Akshitha
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl text-slate-500 mb-6 font-medium dark:text-slate-300">
        Computer Science Student & Full-Stack Developer
      </h2>

      {/* Bio Description */}
      <p className="max-w-2xl text-slate-600 text-base md:text-lg leading-relaxed mb-10 dark:text-slate-400">
        Passionate about solving real-world problems through scalable, user-centric technology. Experienced in AI, full-stack development, and machine learning.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
        <a 
          href="#contact"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors min-w-[160px] shadow-sm"
        >
          <Mail size={18} />
          <span>Get In Touch</span>
        </a>
        
        <a 
          href="https://drive.google.com/file/d/1VXbhHSGUbjDVs4SePWjwx9rePes4AXk5/view" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors min-w-[180px] bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          <Download size={18} />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-8 text-slate-400">
        <a href="mailto:kanchiakshitha444@gmail.com" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400" aria-label="Email">
          <Mail size={24} />
        </a>
       
        <a href="https://www.linkedin.com/in/kanchi-akshitha-8a8017288" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400" aria-label="LinkedIn">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/Kanchiakshitha3" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400" aria-label="GitHub">
          <Github size={24} />
        </a>
      </div>

    </section>
  );
};

export default Hero;