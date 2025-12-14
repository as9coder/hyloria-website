import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-emerald-500 selection:text-white font-sans">
      
      {/* Navigation Overlay */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tighter text-white">
            <span className="text-emerald-500">H</span>YLORIA
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-slate-300">
            <a href="#hero" className="hover:text-emerald-400 transition-colors">HOME</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">STORY</a>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg font-bold text-sm transition-colors">
            STORE
          </button>
        </div>
      </nav>

      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="about">
          <Story />
        </div>

        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;