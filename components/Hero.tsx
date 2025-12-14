import React, { useState } from 'react';
import { Copy, Check, MessageCircle, BookOpen } from 'lucide-react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const serverIP = "hyloria.net";

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/image.png" 
          alt="Hyloria Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo/Title */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-serif tracking-tight drop-shadow-2xl mb-4">
            HYLORIA
          </h1>
          <p className="text-xl md:text-2xl text-emerald-400 font-semibold">
            Hytale Server
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-12">
          <p className="text-emerald-400 font-bold tracking-widest uppercase mb-4 text-lg">Hytale Releases In</p>
          <Countdown targetDate="2026-01-13T00:00:00" />
        </div>

        {/* Server IP */}
        <div className="mb-8 w-full max-w-2xl mx-auto">
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500 ${copied ? 'opacity-100 animate-pulse' : ''}`}></div>
            <button 
              onClick={handleCopy}
              className="relative w-full bg-slate-900/90 backdrop-blur-sm border border-slate-700 hover:border-emerald-500/50 rounded-xl py-6 px-8 flex items-center justify-between transition-all group-hover:transform group-hover:scale-[1.01]"
            >
              <div className="text-left flex flex-col">
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Server IP</span>
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
        </div>

        {/* Buttons Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto mb-8">
          {/* Discord Button */}
          <a 
            href="https://discord.gg/4SjqTDAQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 hover:-translate-y-1">
              <MessageCircle className="w-6 h-6 fill-white" />
              <span className="text-lg">Join Our Discord</span>
            </button>
          </a>

          {/* Store Button */}
          <button className="w-full md:w-auto bg-slate-700 text-slate-400 font-bold py-4 px-8 rounded-xl cursor-not-allowed opacity-60">
            Store - Coming Soon
          </button>

          {/* Story Button */}
          <button 
            onClick={() => setShowStory(!showStory)}
            className="w-full md:w-auto bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:-translate-y-1"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-lg">{showStory ? 'Hide' : 'Read'} Story</span>
          </button>
        </div>

        {/* Story Section (Toggleable) */}
        {showStory && (
          <div className="mt-12 max-w-3xl mx-auto bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-2xl p-8 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/hyloria.png" 
                alt="Hyloria Shield Logo" 
                className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-50 mb-6">
              What is <span className="text-emerald-500">Hyloria</span>?
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 leading-relaxed">
              Hyloria is a fun server for Hytale! Play mini-games, survive with friends, and have a great time. We're making it awesome for everyone!
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <span>🎮</span> Fun Games
                </h3>
                <p className="text-slate-400">Play exciting mini-games with your friends!</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <span>🗺️</span> Survival Mode
                </h3>
                <p className="text-slate-400">Build, explore, and survive together. More cool stuff coming soon!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;