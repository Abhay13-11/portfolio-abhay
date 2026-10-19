import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Card3D from '../canvas/Card3D';
import { ExternalLink, Cpu, Layers, Sparkles, CheckCircle, Terminal } from 'lucide-react';
import { useAudio } from '../ui/AudioController';
import { GithubIcon } from '../ui/Icons';

export default function Projects() {
  const { playClick } = useAudio();

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-cyber-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-green uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-green inline-block animate-pulse" />
              01 // FEATURED_SYSTEMS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Production Code &amp; <span className="text-cyber-green text-glow-green">Engineered Systems</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-md">
            No cookie-cutter templates. Real production debugging, full-stack architectures, live API integrations, and algorithmic simulations.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => {
            const isFeatured = idx === 0;
            return (
              <Card3D 
                key={project.id} 
                maxTilt={6}
                className={isFeatured ? "lg:col-span-2" : ""}
              >
                <div className={`p-6 sm:p-8 rounded-2xl bg-cyber-dark/85 border border-cyber-border/80 hover:border-cyber-green/50 backdrop-blur-xl transition-all h-full flex flex-col justify-between group shadow-cyber-card ${
                  isFeatured ? 'border-cyber-green/40' : ''
                }`}>
                  
                  {/* CARD HEADER */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-500 font-bold">
                          SYSTEM_0{idx + 1}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-semibold ${
                          project.badge === 'PRODUCTION' 
                            ? 'bg-cyber-green/15 text-cyber-green border border-cyber-green/30' 
                            : project.badge === 'ACTIVE DEV'
                            ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30'
                            : 'bg-cyber-violet/15 text-cyber-violet border border-cyber-violet/30'
                        }`}>
                          {project.badge}
                        </span>
                      </div>

                      <span className="font-mono text-[11px] text-cyber-textMuted">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-cyber-green transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-mono text-xs text-cyber-cyan mt-1 mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>

                    {/* KEY ARCHITECTURAL WORK & HIGHLIGHTS */}
                    <div className="space-y-2 mb-6 p-4 rounded-xl bg-cyber-surface/60 border border-cyber-border/60">
                      <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Terminal size={12} className="text-cyber-green" />
                        Engineering Highlights &amp; Solved Roadblocks:
                      </div>
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-cyber-green mt-0.5">▹</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* TECH STACK CHIPS */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md font-mono text-xs bg-cyber-surface border border-cyber-border text-slate-300 group-hover:border-slate-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CARD ACTIONS */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-cyber-border/60">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playClick()}
                        className="px-4 py-2 rounded-lg bg-cyber-green text-black font-mono font-bold text-xs uppercase hover:bg-emerald-400 hover:shadow-cyber-green transition-all flex items-center gap-1.5"
                      >
                        <ExternalLink size={13} />
                        <span>Live Deployment</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playClick()}
                        className="px-4 py-2 rounded-lg bg-cyber-surface border border-cyber-border text-white font-mono text-xs uppercase hover:border-cyber-green hover:text-cyber-green transition-all flex items-center gap-1.5"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub Repository</span>
                      </a>
                    )}
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
