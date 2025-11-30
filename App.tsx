import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      
      <footer className="py-12 bg-white border-t border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            
           

           
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Kanchi Akshitha. All rights reserved.</p>
        <div className="mb-8 text-center">
               
                <div className="flex flex-wrap justify-center gap-3">
                    {['Painting', 'Origami', 'Cooking', 'Travelling'].map((hobby) => (
                        <span key={hobby} className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-sm font-medium hover:bg-white hover:shadow-sm transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700">
                            {hobby}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;