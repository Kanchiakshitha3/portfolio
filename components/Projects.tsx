import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X, Smartphone, Layers, Brain, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  badgeColorClass: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  points: string[];
  year: string;
  image: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const projects: Project[] = [
    {
        id: 1,
        title: "Comparative Analysis of CNN and GAN Models for Image Steganography",
        category: "Deep Learning",
        badgeColorClass: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
        shortDescription: "Deep learning models for secure image data hiding and steganography performance.",
        fullDescription: "A comprehensive research project analyzing the efficacy of Convolutional Neural Networks (CNN) and Generative Adversarial Networks (GAN) for image steganography. The project focused on hiding secure data within images while maintaining high visual quality and resistance to steganalysis.",
        techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Google Colab"],
        points: [
            "Led a 4-member team to develop CNN and GAN-based steganography models.",
            "Evaluated performance using accuracy, payload capacity, and image quality metrics (PSNR, SSIM).",
            "Presented results in a structured technical report with visualizations."
        ],
        year: "4 Months",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Cyber/Code abstract
        githubUrl: "https://github.com/Kanchiakshitha3/Comparative-Analysis-of-LSB-CNN-GAN-inSteganography.git"
    },
    {
        id: 2,
        title: "Hospital Readmission Prediction for Diabetic Patients",
        category: "Machine Learning",
        badgeColorClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
        shortDescription: "Predictive modeling to identify high-risk diabetic patients and improve care.",
        fullDescription: "A healthcare analytics project aimed at reducing hospital readmission rates for diabetic patients. By analyzing patient records and clinical factors, the model identifies high-risk individuals, allowing healthcare providers to intervene proactively.",
        techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn", "Jupyter Notebook"],
        points: [
            "Performed EDA and implemented ML models (KNN, SVM, Decision Trees, Random Forest).",
            "Tuned hyperparameters using GridSearchCV to optimize performance.",
            "Evaluated models using accuracy, precision, recall, F1-score, and ROC-AUC."
        ],
        year: "4 Months",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Medical/Tablet
        githubUrl: "https://github.com/Kanchiakshitha3/Hospital_readmission-176.git"
    },
    {
        id: 3,
        title: "Administrative AI Agent For Non-Teaching Tasks",
        category: "Ongoing • AI Agent",
        badgeColorClass: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        shortDescription: "Agentic AI assistant designed to automate administrative workflows for educators.",
        fullDescription: "An intelligent administrative assistant designed specifically for the education sector. This AI agent leverages LLMs to handle routine non-teaching tasks, such as scheduling, compliance reporting, and record-keeping, freeing up educators to focus on students.",
        techStack: ["LangChain", "OpenAPI", "FastAPI", "Flask"],
        points: [
            "Designed an Agentic AI administrative assistant to automate non-teaching tasks.",
            "Implemented LangChain for handling routine communications and workflow automation.",
            "Integrated FastAPI/Flask with university systems for scheduling and record-keeping.",
            "Reduced administrative workload, enabling educators to focus on teaching."
        ],
        year: "Ongoing",
        image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Office/AI
        githubUrl: "https://github.com/Kanchiakshitha3/Aministrive_ai.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 dark:text-white">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-slate-800 dark:border-slate-700 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
                >
                    {/* Image Area */}
                    <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                           <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-all duration-300">
                             View Details
                           </span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-3">
                            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-md ${project.badgeColorClass}`}>
                                {project.category}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">{project.year}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-400 line-clamp-3 mb-4 flex-grow">
                            {project.shortDescription}
                        </p>

                        <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto dark:text-blue-400">
                          Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-64 flex-shrink-0">
               <img 
                 src={selectedProject.image} 
                 alt={selectedProject.title} 
                 className="w-full h-full object-cover"
               />
               <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
               >
                 <X size={20} />
               </button>
               
               {/* Ribbon Title Style */}
               <div className="absolute bottom-4 left-0 bg-yellow-400 text-slate-900 px-6 py-2 shadow-lg max-w-[90%]">
                 <h3 className="text-sm sm:text-base font-bold truncate">
                    {selectedProject.title}
                 </h3>
               </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto">
               <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
                    {selectedProject.category}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
               </div>

               <div className="mb-6">
                 <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3">Key Highlights</h4>
                 <ul className="space-y-2">
                    {selectedProject.points.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                            {point}
                        </li>
                    ))}
                 </ul>
               </div>

               <div>
                 <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3">Technology Stack</h4>
                 <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
                            {tech}
                        </span>
                    ))}
                 </div>
               </div>
            </div>

            {/* Modal Footer */}
            <div className="p-0 flex border-t border-slate-100 dark:border-slate-800">
                <a 
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 flex items-center justify-center gap-2 bg-black text-white hover:bg-slate-800 transition-colors font-medium text-sm dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Github size={18} />
                  GITHUB
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-4 flex items-center justify-center gap-2 bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors font-medium text-sm dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  <X size={18} />
                  CLOSE
                </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
export default Projects;