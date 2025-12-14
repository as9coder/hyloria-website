import React, { useState } from 'react';
import { Copy, Check, MessageCircle } from 'lucide-react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "hyloria.net";

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/image.png" 
          alt="Hyloria Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-4 border border-emerald-500/30 backdrop-blur-sm">
            Upcoming Hytale Server
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white font-serif tracking-tight drop-shadow-lg mb-2">
            HYLORIA
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light mb-8">
            Embark on a journey through the fractured lands. A new era of adventure awaits.
          </p>
        </div>

        <div className="mb-12">
          <p className="text-emerald-400 font-bold tracking-widest uppercase mb-4 text-sm">Official Release Of Hytale</p>
          <Countdown targetDate="2026-01-13T00:00:00" />
        </div>

        <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
          {/* Prominent IP Box */}
          <div className="relative group w-full">
            <div className={`absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500 ${copied ? 'opacity-100 animate-pulse' : ''}`}></div>
            <button 
              onClick={handleCopy}
              className="relative w-full bg-slate-900/90 backdrop-blur-sm border border-slate-700 hover:border-emerald-500/50 rounded-xl py-6 px-8 flex items-center justify-between transition-all group-hover:transform group-hover:scale-[1.01]"
            >
              <div className="text-left flex flex-col">
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Server Address</span>
                <span className="text-3xl md:text-5xl font-mono font-bold text-white tracking-wide drop-shadow-md">{serverIP}</span>
              </div>
              <div className={`p-4 rounded-xl transition-all duration-300 ${copied ? 'bg-emerald-500 text-white rotate-0' : 'bg-slate-800 text-emerald-500 group-hover:bg-emerald-500/20 group-hover:text-white'}`}>
                {copied ? <Check className="w-8 h-8" /> : <Copy className="w-8 h-8" />}
              </div>
            </button>
            <div className={`absolute -top-14 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-slate-900 px-6 py-2 rounded-lg font-bold shadow-lg transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
              IP Copied!
            </div>
          </div>

          {/* Discord Button */}
          <a 
            href="https://discord.gg/4SjqTDAQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto min-w-[200px]"
          >
            <button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 hover:-translate-y-1">
              <MessageCircle className="w-6 h-6 fill-white" />
              <span className="text-lg">Join Discord Community</span>
            </button>
          </a>
        </div>
        
        <div className="mt-16 text-slate-400 text-sm">
          <p>Release Date: <span className="text-white font-bold">January 13, 2026</span></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;