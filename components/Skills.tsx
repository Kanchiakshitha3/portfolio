import React, { useState } from 'react';
import { Code2, Globe, Database } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'languages' | 'frameworks' | 'tools'>('languages');

  const languages: Skill[] = [
    { name: 'Java', percentage: 90 },
    { name: 'Python', percentage: 85 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'C++', percentage: 80 },
    { name: 'C', percentage: 75 },
  ];

  const frameworks: Skill[] = [
    { name: 'React.js', percentage: 90 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Express', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 95 },
  ];

   const tools: Skill[] = [
    { name: 'Git/GitHub', percentage: 90 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'VS Code', percentage: 95 },
    { name: 'Google Gemini', percentage: 75 },
     { name: 'stackblitz', percentage: 60 },
  ];

  const getActiveSkills = () => {
      switch(activeTab) {
          case 'languages': return languages;
          case 'frameworks': return frameworks;
          case 'tools': return tools;
          default: return languages;
      }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 dark:text-white">
          Technical Skills
        </h2>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
            <div className="bg-slate-100 p-1 rounded-xl flex flex-col sm:flex-row dark:bg-slate-800">
                <button
                    onClick={() => setActiveTab('languages')}
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'languages' 
                        ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-blue-400' 
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                >
                    <Code2 size={18} />
                    Languages
                </button>
                <button
                     onClick={() => setActiveTab('frameworks')}
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'frameworks' 
                        ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-blue-400' 
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                >
                    <Globe size={18} />
                    Web & Frameworks
                </button>
                <button
                     onClick={() => setActiveTab('tools')}
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'tools' 
                        ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-blue-400' 
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                >
                    <Database size={18} />
                    Tools & Databases
                </button>
            </div>
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {getActiveSkills().map((skill) => (
                <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                        <span className="text-slate-500 text-sm font-medium dark:text-slate-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 dark:bg-slate-800">
                        <div 
                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.percentage}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;