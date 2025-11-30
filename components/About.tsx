import React from 'react';
import { MapPin, GraduationCap, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 dark:text-white">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Bio */}
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">
                    Hello! I'm Kanchi Akshitha
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed dark:text-slate-300">
                    I'm a motivated Computer Science undergraduate with a strong foundation in software engineering, AI, and full-stack development. Currently pursuing my B.Tech at Vignan University with a GPA of 7.7/10.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed dark:text-slate-300">
                    I'm passionate about creating innovative solutions that make a real impact. My experience spans from building AI-powered applications to developing secure messaging platforms and implementing machine learning models for real-world problems.
                </p>
                
                <div className="flex flex-wrap gap-3">
                    {['Problem Solver', 'Team Leader', 'AI Enthusiast', 'Full-Stack Developer'].map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-800 text-sm font-medium rounded-full dark:bg-slate-800 dark:text-slate-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right Column: Details */}
            <div className="space-y-6 md:pl-10 mt-4 md:mt-0">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                         <MapPin size={24} />
                    </div>
                    <div className="pt-1">
                        <p className="text-lg font-medium text-slate-900 dark:text-white">Guntur, India</p>
                    </div>
                </div>
                
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                         <GraduationCap size={24} />
                    </div>
                    <div className="pt-1">
                        <p className="text-lg font-medium text-slate-900 dark:text-white">B.Tech CSE, Vignan University</p>
                    </div>
                </div>

                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                         <Star size={24} />
                    </div>
                    <div className="pt-1">
                        <p className="text-lg font-medium text-slate-900 dark:text-white">GPA: 7.7/10</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default About;