import React from 'react';
import { Twitter, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-white mb-2">HYLORIA</h2>
            <p className="text-slate-500 text-sm">
              &copy; 2026 Hyloria Network. Not affiliated with Hytale or Hypixel Studios.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-red-500 transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
