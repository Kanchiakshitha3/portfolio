import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

const Education: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Vignan University",
      duration: "2022 - 2026",
      description: "Currently pursuing a B.Tech in Computer Science and Engineering with a CGPA of 7.7/10."
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      duration: "2020 - 2022",
      description: "Completed Intermediate (MPC) with a CGPA of 9.5/10."
    },
    {
      degree: "Schooling",
      institution: "Sri Chaitanya School",
      duration: "2019 - 2020",
      description: "Completed SSC with a CGPA of 10.0/10."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 dark:text-white">
          Education
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-[30%] top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {educationList.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-0">
                
                {/* Left Column: Degree & Date (Desktop: Right aligned, 30% width) */}
                <div className="md:w-[30%] md:text-right md:pr-12 flex flex-col md:items-end">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    {item.duration}
                  </p>
                </div>

                {/* Center Column: Icon (Desktop only) */}
                <div className="hidden md:flex absolute left-[30%] -ml-6 w-12 h-12 rounded-full bg-slate-800 dark:bg-slate-700 items-center justify-center text-white z-10 border-4 border-gray-50 dark:border-slate-900">
                  <GraduationCap size={20} />
                </div>

                {/* Mobile Icon (Visible only on mobile) */}
                <div className="md:hidden flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center text-white">
                        <GraduationCap size={18} />
                    </div>
                    <div>
                         <span className="block text-lg font-bold text-slate-800 dark:text-white">{item.degree}</span>
                         <span className="text-sm text-slate-500 dark:text-slate-400">{item.duration}</span>
                    </div>
                </div>

                {/* Right Column: Institution & Details (Desktop: Left aligned, 70% width) */}
                <div className="md:w-[70%] md:pl-12">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-1">
                    {item.institution}
                  </h3>
                  
                  {/* Separator Line */}
                  <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 mb-4 rounded-full"></div>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;