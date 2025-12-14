import React from 'react';
import { Sword, Users, Map, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sword className="w-8 h-8 text-amber-400" />,
      title: "Fun Games",
      desc: "Play exciting mini-games with your friends!"
    },
    {
      icon: <Map className="w-8 h-8 text-emerald-400" />,
      title: "Survival Mode",
      desc: "Build, explore, and survive together. More cool stuff coming soon!"
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors group">
              <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
