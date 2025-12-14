import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-emerald-500 selection:text-white font-sans">
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;