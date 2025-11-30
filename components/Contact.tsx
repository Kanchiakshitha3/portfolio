import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 dark:text-white">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">Let's Connect</h3>
            <p className="text-slate-600 mb-8 leading-relaxed dark:text-slate-300">
              I'm always interested in discussing new opportunities, innovative projects, and collaborations. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <a href="mailto:kanchiakshitha444@gmail.com" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400 group">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors dark:bg-slate-800 dark:group-hover:bg-slate-700 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                <span className="text-lg font-medium">kanchiakshitha444@gmail.com</span>
              </a>

              <a href="tel:+917032726070" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400 group">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors dark:bg-slate-800 dark:group-hover:bg-slate-700 dark:text-blue-400">
                  <Phone size={24} />
                </div>
                <span className="text-lg font-medium">+91 8074920272</span>
              </a>

              <a href="https://www.linkedin.com/in/kanchi-akshitha-8a8017288" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400 group">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors dark:bg-slate-800 dark:group-hover:bg-slate-700 dark:text-blue-400">
                  <Linkedin size={24} />
                </div>
                <span className="text-lg font-medium">LinkedIn Profile</span>
              </a>

              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                  <MapPin size={24} />
                </div>
                <span className="text-lg font-medium">Guntur, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm dark:bg-slate-800 dark:border-slate-700">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
              <p className="text-slate-500 mt-2 dark:text-slate-400">I'll get back to you as soon as possible</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2 dark:text-slate-200">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2 dark:text-slate-200">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2 dark:text-slate-200">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:focus:ring-blue-900"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                 <Send size={18} />
                 Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;