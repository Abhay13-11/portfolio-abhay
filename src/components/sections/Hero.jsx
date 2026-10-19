import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowUpRight, Download, Terminal, ChevronDown } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import TerminalHUD from '../ui/TerminalHUD';
import { useAudio } from '../ui/AudioController';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../ui/Icons';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { playClick } = useAudio();

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* TOP STATUS BAR */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-surface/80 border border-cyber-border mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
          <span className="font-mono text-xs text-cyber-textMuted tracking-wider">
            STATUS: <span className="text-cyber-green font-semibold">AVAILABLE FOR SDE ROLES</span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="font-mono text-xs text-cyber-cyan hidden sm:inline">
            GL BAJAJ • CGPA {portfolioData.telemetry.cgpa}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & INTRODUCTION */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-cyber-green shadow-cyber-green p-0.5 bg-cyber-dark">
                  <img
                    src={portfolioData.personal.avatar}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 p-1 bg-cyber-dark border border-cyber-green rounded-full text-cyber-green">
                  <ShieldCheck size={14} />
                </span>
              </div>

              <div>
                <span className="font-mono text-xs text-cyber-cyan uppercase tracking-widest block">
                  Identity // SDE & Systems
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
                  {portfolioData.personal.name}
                </h1>
              </div>
            </div>

            {/* DYNAMIC ROLE ROTATOR */}
            <div className="h-10 flex items-center">
              <span className="font-mono text-xs text-slate-400 mr-2">&gt; specialization:</span>
              <span className="font-mono text-lg sm:text-2xl font-bold text-cyber-green text-glow-green transition-all duration-300">
                {portfolioData.personal.roles[roleIndex]}
              </span>
            </div>

            {/* TAGLINE & BIO */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Pursuing <span className="text-white font-semibold">B.Tech (Hons) CSE in Cyber Security</span> at GL Bajaj (CGPA: 8.69). 
              Crafting high-throughput MERN applications like <span className="text-cyber-cyan font-mono">DeadlineAI</span>, 
              architecting digital rehab in <span className="text-cyber-cyan font-mono">Prehab360</span>, and sharpening algorithmic speed with <span className="text-cyber-green font-mono">550+ LeetCode problems</span> (1697 Contest Rating).
            </p>

            {/* ACTION CTA ROW */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={() => playClick()}
                className="px-6 py-3 rounded-xl bg-cyber-green text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 hover:shadow-cyber-green transition-all flex items-center gap-2 group"
              >
                <span>EXPLORE WORK</span>
                <span className="group-hover:translate-x-1 transition-transform">↘</span>
              </a>

              <a
                href="#contact"
                onClick={() => playClick()}
                className="px-6 py-3 rounded-xl bg-cyber-surface/80 border border-cyber-border text-white font-mono text-xs uppercase tracking-wider hover:border-cyber-green hover:text-cyber-green transition-all flex items-center gap-2"
              >
                <span>CONTACT DIRECTLY</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                download
                onClick={() => playClick()}
                className="px-4 py-3 rounded-xl bg-cyber-surface/40 border border-cyber-border text-slate-400 hover:text-white hover:border-slate-400 font-mono text-xs transition-all flex items-center gap-2"
                title="Download Official Resume PDF"
              >
                <Download size={14} />
                <span className="hidden sm:inline">RESUME</span>
              </a>
            </div>

            {/* SOCIAL PROFILES ROW */}
            <div className="flex items-center gap-4 pt-4 border-t border-cyber-border/60">
              <span className="font-mono text-xs text-cyber-textMuted uppercase">Verified Links:</span>
              
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-surface/60 border border-cyber-border hover:border-cyber-green hover:text-cyber-green font-mono text-xs text-slate-300 transition-all"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-surface/60 border border-cyber-border hover:border-cyber-cyan hover:text-cyber-cyan font-mono text-xs text-slate-300 transition-all"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>

              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-surface/60 border border-cyber-border hover:border-cyber-violet hover:text-cyber-violet font-mono text-xs text-slate-300 transition-all"
              >
                <LeetCodeIcon size={14} />
                <span>LeetCode (1697)</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE TERMINAL HUD */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-3 -right-3 text-[10px] font-mono text-cyber-green px-2 py-0.5 rounded bg-cyber-surface border border-cyber-border z-10 hidden sm:block">
                LIVE_HUD // NODE.01
              </div>
              <TerminalHUD />
            </div>
          </div>

        </div>

      </div>

      {/* SCROLL DOWN INDICATOR */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] text-cyber-textMuted tracking-widest">SYSTEM_STREAM</span>
        <ChevronDown size={16} className="text-cyber-green animate-bounce" />
      </div>
    </section>
  );
}
