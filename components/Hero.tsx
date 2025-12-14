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
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white font-serif tracking-tight drop-shadow-2xl mb-6">
            HYLORIA
          </h1>
          <p className="text-2xl md:text-3xl text-emerald-400 font-semibold tracking-wide">
            Hytale Server
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-16">
          <p className="text-emerald-400 font-bold tracking-[0.3em] uppercase mb-6 text-base">Hytale Releases In</p>
          <Countdown targetDate="2026-01-13T00:00:00" />
        </div>

        {/* Server IP */}
        <div className="mb-10 w-full max-w-2xl mx-auto">
          <div className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300 ${copied ? 'opacity-100' : ''}`}></div>
            <button 
              onClick={handleCopy}
              className="relative w-full bg-slate-900 border-2 border-transparent rounded-2xl py-8 px-10 flex items-center justify-between transition-all duration-300 group-hover:scale-[1.02]"
            >
              <div className="text-left flex flex-col">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Server IP Address</span>
                <span className="text-4xl md:text-6xl font-mono font-bold text-white tracking-wider">{serverIP}</span>
              </div>
              <div className={`p-5 rounded-xl transition-all duration-300 ${copied ? 'bg-emerald-500 text-white scale-110' : 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-500/20'}`}>
                {copied ? <Check className="w-9 h-9" /> : <Copy className="w-9 h-9" />}
              </div>
            </button>
            <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-slate-900 px-6 py-3 rounded-xl font-bold shadow-2xl transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
              ✓ IP Copied!
            </div>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full max-w-4xl mx-auto mb-8">
          {/* Discord Button */}
          <a 
            href="https://discord.gg/4SjqTDAQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:flex-1"
          >
            <button className="group w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-5 px-10 rounded-xl flex items-center justify-center gap-4 transition-all duration-300 shadow-xl shadow-[#5865F2]/30 hover:shadow-[#5865F2]/50 hover:scale-105">
              <MessageCircle className="w-7 h-7" />
              <span className="text-lg tracking-wide">Join Discord</span>
            </button>
          </a>

          {/* Story Button */}
          <button 
            onClick={() => setShowStory(!showStory)}
            className="w-full md:flex-1 bg-amber-600 hover:bg-amber-500 text-white font-bold py-5 px-10 rounded-xl flex items-center justify-center gap-4 transition-all duration-300 shadow-xl shadow-amber-900/30 hover:shadow-amber-900/50 hover:scale-105"
          >
            <BookOpen className="w-7 h-7" />
            <span className="text-lg tracking-wide">{showStory ? 'Hide' : 'Our'} Story</span>
          </button>

          {/* Store Button */}
          <button className="w-full md:flex-1 bg-slate-800 border-2 border-slate-700 text-slate-400 font-bold py-5 px-10 rounded-xl cursor-not-allowed flex items-center justify-center gap-4 opacity-50">
            <span className="text-lg tracking-wide">Store - Coming Soon</span>
          </button>
        </div>

        {/* Story Section (Toggleable) */}
        {showStory && (
          <div className="mt-16 max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-lg border-2 border-slate-700/50 rounded-3xl p-10 md:p-12 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="w-40 h-40 bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <img 
                  src="/hyloria.png" 
                  alt="Hyloria Shield Logo" 
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-center">
              What is <span className="text-emerald-400">Hyloria</span>?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 leading-relaxed text-center mb-12 max-w-2xl mx-auto">
              Hyloria is a fun server for Hytale! Play mini-games, survive with friends, and have a great time. We're making it awesome for everyone!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold text-amber-400 mb-3">Fun Games</h3>
                <p className="text-slate-300 text-lg">Play exciting mini-games with your friends!</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">Survival Mode</h3>
                <p className="text-slate-300 text-lg">Build, explore, and survive together. More cool stuff coming soon!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;