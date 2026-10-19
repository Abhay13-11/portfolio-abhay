import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Card3D from '../canvas/Card3D';
import { Layers, ShieldCheck, Terminal, Database, Sparkles, Cloud } from 'lucide-react';
import { useAudio } from '../ui/AudioController';

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const { skillClusters } = portfolioData;
  const { playClick } = useAudio();

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Core Languages': return Terminal;
      case 'Cyber Security & Systems': return ShieldCheck;
      case 'Full-Stack Development': return Layers;
      case 'Databases & Storage': return Database;
      case 'AI & Intelligence': return Sparkles;
      case 'Cloud & Dev Environment': return Cloud;
      default: return Terminal;
    }
  };

  const filteredClusters = activeCategory === 'ALL'
    ? skillClusters
    : skillClusters.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-cyber-border/70 bg-cyber-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-cyber-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-green uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-green inline-block animate-pulse" />
              04 // TECHNICAL_CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Technical Toolbox &amp; <span className="text-cyber-green text-glow-green">Systems Stack</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-md">
            Categorized strictly by demonstrated project implementation, academic coursework, and competitive problem-solving.
          </p>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => { playClick(); setActiveCategory('ALL'); }}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
              activeCategory === 'ALL'
                ? 'bg-cyber-green text-black font-bold shadow-cyber-green'
                : 'bg-cyber-surface/70 border border-cyber-border text-slate-300 hover:border-slate-500'
            }`}
          >
            [ALL_DOMAINS]
          </button>

          {skillClusters.map((cluster) => (
            <button
              key={cluster.category}
              onClick={() => { playClick(); setActiveCategory(cluster.category); }}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs tracking-wider transition-all ${
                activeCategory === cluster.category
                  ? 'bg-cyber-cyan text-black font-bold shadow-cyber-neon'
                  : 'bg-cyber-surface/70 border border-cyber-border text-slate-300 hover:border-slate-500'
              }`}
            >
              {cluster.category}
            </button>
          ))}
        </div>

        {/* SKILLS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClusters.map((cluster, idx) => {
            const Icon = getCategoryIcon(cluster.category);
            return (
              <Card3D key={cluster.category} maxTilt={6}>
                <div className="p-6 rounded-2xl bg-cyber-dark/80 border border-cyber-border hover:border-cyber-green/40 backdrop-blur-xl h-full flex flex-col justify-between group shadow-cyber-card">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-cyber-surface border border-cyber-border text-cyber-green group-hover:border-cyber-green transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-[10px] text-slate-500">
                        CLUSTER.0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-4 group-hover:text-cyber-green transition-colors">
                      {cluster.category}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {cluster.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md font-mono text-xs bg-cyber-surface/80 border border-cyber-border/80 text-slate-200 group-hover:border-cyber-green/30 transition-all hover:bg-cyber-surfaceHover cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-cyber-border/40 font-mono text-[10px] text-slate-500 flex justify-between">
                    <span>{cluster.skills.length} TECHNOLOGIES</span>
                    <span className="text-cyber-green">ACTIVE</span>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

      </div>
    </section>
  );
}
