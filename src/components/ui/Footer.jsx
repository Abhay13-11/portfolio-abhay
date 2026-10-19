import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { useAudio } from './AudioController';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Footer() {
  const { playClick } = useAudio();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cyber-border/80 bg-cyber-dark py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-cyber-border/60">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyber-surface border border-cyber-green text-cyber-green font-mono font-bold flex items-center justify-center text-xs">
              ASC
            </div>
            <div>
              <span className="font-display font-bold text-white text-sm">
                {portfolioData.personal.name}
              </span>
              <p className="font-mono text-[11px] text-slate-500">
                GL Bajaj • B.Tech CSE (Cyber Security) • 2024 - 2028
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-slate-400 hover:text-cyber-green hover:border-cyber-green transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={portfolioData.personal.leetcode}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-slate-400 hover:text-cyber-violet hover:border-cyber-violet transition-all"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-surface border border-cyber-border text-cyber-green font-mono text-xs hover:bg-cyber-green hover:text-black transition-all ml-4"
              title="Return to Top"
            >
              <ArrowUp size={13} />
              <span>TOP</span>
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 font-mono text-[11px] gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={12} className="text-cyber-green" />
            <span>AUTHENTIC DATA ONLY • ZERO FABRICATED METRICS • CGPA: 8.69</span>
          </div>
          <div>
            ENGINEERED WITH REACT 18 + THREE.JS + TAILWIND CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
