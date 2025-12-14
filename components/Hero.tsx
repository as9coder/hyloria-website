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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif tracking-tight drop-shadow-2xl mb-4">
            HYLORIA
          </h1>
          <p className="text-xl md:text-2xl text-emerald-400 font-semibold tracking-wide">
            Hytale Server
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-12">
          <p className="text-emerald-400 font-bold tracking-[0.25em] uppercase mb-5 text-sm">Hytale Releases In</p>
          <Countdown targetDate="2026-01-13T00:00:00" />
        </div>

        {/* Server IP */}
        <div className="mb-8 w-full max-w-2xl mx-auto">
          <div className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-60 blur group-hover:opacity-100 transition duration-300 ${copied ? 'opacity-100' : ''}`}></div>
            <button 
              onClick={handleCopy}
              className="relative w-full bg-slate-900 border-2 border-transparent rounded-xl py-5 px-8 flex items-center justify-between transition-all duration-300 group-hover:scale-[1.02]"
            >
              <div className="text-left flex flex-col">
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">Server IP</span>
                <span className="text-3xl md:text-5xl font-mono font-bold text-white tracking-wider">{serverIP}</span>
              </div>
              <div className={`p-3.5 rounded-lg transition-all duration-300 ${copied ? 'bg-emerald-500 text-white scale-110' : 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-500/20'}`}>
                {copied ? <Check className="w-7 h-7" /> : <Copy className="w-7 h-7" />}
              </div>
            </button>
            <div className={`absolute -top-14 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-slate-900 px-5 py-2.5 rounded-lg font-semibold shadow-xl transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
              ✓ IP Copied!
            </div>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto mb-8">
          {/* Discord Button */}
          <a 
            href="https://discord.com/invite/PRwGcBSYmF" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="group w-full bg-gradient-to-r from-[#7289DA] to-[#5865F2] hover:from-[#5865F2] hover:to-[#4752C4] text-white font-semibold py-3 px-7 rounded-lg flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              <span className="text-base">Join Discord</span>
            </button>
          </a>

          {/* Story Button */}
          <button 
            onClick={() => setShowStory(!showStory)}
            className="w-full sm:w-auto bg-transparent border-2 border-slate-700 hover:border-slate-600 hover:bg-slate-800/30 text-slate-200 font-semibold py-3 px-7 rounded-lg flex items-center justify-center gap-2.5 transition-all duration-300"
          >
            <span className="text-base">{showStory ? 'Hide Info' : 'Learn More'}</span>
          </button>
        </div>

        {/* Store Button - Separate and Smaller */}
        <div className="w-full max-w-xs mx-auto mb-8">
          <button className="w-full bg-slate-800/40 border border-slate-700/50 text-slate-500 font-medium py-2.5 px-6 rounded-lg cursor-not-allowed text-sm opacity-60">
            Store Coming Soon
          </button>
        </div>

        {/* Story Section (Toggleable) */}
        {showStory && (
          <div className="mt-12 max-w-3xl mx-auto bg-slate-900/95 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 md:p-10 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="w-28 h-28 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <img 
                  src="/hyloria.png" 
                  alt="Hyloria Shield Logo" 
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 text-center">
              What is <span className="text-emerald-400">Hyloria</span>?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10 max-w-2xl mx-auto">
              Hyloria is a fun server for Hytale! Play mini-games, survive with friends, and have a great time. We're making it awesome for everyone!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="text-xl font-bold text-amber-400 mb-2">Fun Games</h3>
                <p className="text-slate-300">Play exciting mini-games with your friends!</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-4xl mb-3">🗺️</div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Survival Mode</h3>
                <p className="text-slate-300">Build, explore, and survive together. More cool stuff coming soon!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;