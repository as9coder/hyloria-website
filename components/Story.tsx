import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-slate-800/50 aspect-[4/5] flex items-center justify-center p-8">
              <img 
                src="/hyloria.png" 
                alt="Hyloria Shield Logo" 
                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 leading-tight">
              What is <span className="text-emerald-500">Hyloria</span>?
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
            
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              Hyloria is a fun server for Hytale! Play mini-games, survive with friends, and have a great time. We're making it awesome for everyone!
            </p>
            
            <div className="pt-4">
              <a 
                href="https://discord.gg/4SjqTDAQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 font-bold uppercase tracking-widest text-sm hover:text-emerald-300 transition-colors flex items-center gap-2 group"
              >
                Join Us!
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;