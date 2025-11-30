import React from 'react';
import { Star, Medal, BadgeCheck, Ribbon } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 dark:text-white">
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Achievements */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-8 dark:text-white flex items-center gap-2">
              Achievements & Leadership
            </h3>
            
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="text-blue-600 mt-1">
                  <Ribbon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg dark:text-white">Event Coordinator</h4>
                  <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">
                    "Mahotsav" National-level Cultural Fest, Vignan University
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="text-blue-600 mt-1">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg dark:text-white"> Recognized as a National Semi-Finalist </h4>
                  <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">
                    Flipkart Grid 7.0
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="text-blue-600 mt-1">
                  <Medal size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg dark:text-white">Medal Winner</h4>
                  <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">
                    Leadership and teamwork in technical events
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-8 dark:text-white flex items-center gap-2">
              Certifications
            </h3>

            <div className="space-y-6">
              {/* Cert 1 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <BadgeCheck size={20} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-900 text-lg dark:text-white">Google Cloud - Generative AI</h4>
                  <p className="text-slate-600 text-sm font-medium dark:text-slate-300">Google Cloud</p>
                  <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">24 badges, 45-hour practical training</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300">
                    2024
                  </span>
                </div>
              </div>

              {/* Cert 2 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <BadgeCheck size={20} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-900 text-lg dark:text-white">Cisco CCNA + Packet Tracer</h4>
                  <p className="text-slate-600 text-sm font-medium dark:text-slate-300">Cisco</p>
                  <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">Routing, Subnet, IPv4/6</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300">
                    2024
                  </span>
                </div>
              </div>

               {/* Cert 3 */}
               <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <BadgeCheck size={20} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-900 text-lg dark:text-white"> Preliminary English Test (B1)</h4>
                  <p className="text-slate-600 text-sm font-medium dark:text-slate-300"> Cambridge Assessment English</p>
                  <p className="text-slate-500 text-sm mt-1 dark:text-slate-400"> proficient in reading, writing, speaking,
 and listening</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300">
                    2022
                  </span>
                </div>
              </div>


                 <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <BadgeCheck size={20} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-900 text-lg dark:text-white"> E-Business, Leadership and Team Effectiveness, Data Structures Using Java</h4>
                  <p className="text-slate-600 text-sm font-medium dark:text-slate-300">NPTEL</p>
                  <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">Leadershipskills,Java</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300">
                    2024
                  </span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;