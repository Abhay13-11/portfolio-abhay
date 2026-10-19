import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Card3D from '../canvas/Card3D';
import { Flame, Trophy, ExternalLink, Code2, CheckCircle2, GitPullRequest, Binary } from 'lucide-react';
import { useAudio } from '../ui/AudioController';

export default function DsaArena() {
  const { dsaArena, personal } = portfolioData;
  const { playClick } = useAudio();

  return (
    <section id="dsa" className="py-24 relative z-10 border-t border-cyber-border/70 bg-cyber-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-cyber-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan uppercase tracking-widest mb-2">
              <Binary size={14} className="text-cyber-cyan animate-pulse" />
              02 // DSA_COMPUTATIONAL_ENGINE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Algorithmic Depth &amp; <span className="text-cyber-cyan text-glow-cyan">Problem Solving</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-md">
            Rigorous algorithmic training, contest rating benchmarks, and daily competitive execution across C++ STL and optimal data structures.
          </p>
        </div>

        {/* TOP STATS BANNER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <Card3D maxTilt={6}>
            <div className="p-6 rounded-2xl bg-cyber-surface/70 border border-cyber-green/40 shadow-cyber-green/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-slate-400 uppercase">Total Solved</span>
                <div className="text-4xl font-extrabold text-cyber-green font-mono mt-1">
                  {dsaArena.totalSolved}
                </div>
                <span className="font-mono text-[11px] text-slate-400">LeetCode Data Structures</span>
              </div>
              <div className="p-4 rounded-xl bg-cyber-green/10 text-cyber-green border border-cyber-green/30">
                <Flame size={28} />
              </div>
            </div>
          </Card3D>

          <Card3D maxTilt={6}>
            <div className="p-6 rounded-2xl bg-cyber-surface/70 border border-cyber-cyan/40 shadow-cyber-neon flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-slate-400 uppercase">Contest Rating</span>
                <div className="text-4xl font-extrabold text-cyber-cyan font-mono mt-1">
                  {dsaArena.contestRating}
                </div>
                <span className="font-mono text-[11px] text-cyber-cyan">{dsaArena.percentile}</span>
              </div>
              <div className="p-4 rounded-xl bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                <Trophy size={28} />
              </div>
            </div>
          </Card3D>

          <Card3D maxTilt={6}>
            <div className="p-6 rounded-2xl bg-cyber-surface/70 border border-cyber-violet/40 shadow-cyber-violet flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-slate-400 uppercase">Consistency Goal</span>
                <div className="text-xl sm:text-2xl font-extrabold text-cyber-violet font-display mt-1">
                  45-Day Striver SDE
                </div>
                <span className="font-mono text-[11px] text-slate-400">Completed &amp; Publicly Documented</span>
              </div>
              <div className="p-4 rounded-xl bg-cyber-violet/10 text-cyber-violet border border-cyber-violet/30">
                <CheckCircle2 size={28} />
              </div>
            </div>
          </Card3D>

        </div>

        {/* TOPIC BREAKDOWN MATRIX */}
        <div className="p-8 rounded-2xl bg-cyber-dark/80 border border-cyber-border shadow-cyber-card mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-cyber-border gap-2">
            <div>
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <Code2 size={18} className="text-cyber-green" />
                Algorithmic Domain Distribution
              </h3>
              <p className="font-mono text-xs text-slate-400 mt-1">
                Optimized implementations written primarily in C++ with custom memory and STL optimization.
              </p>
            </div>
            <span className="font-mono text-xs text-cyber-green px-3 py-1 rounded bg-cyber-green/10 border border-cyber-green/30 self-start sm:self-auto">
              Primary Language: C++
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dsaArena.categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-cyber-surface/50 border border-cyber-border hover:border-cyber-green/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="font-mono text-xs text-slate-400 group-hover:text-white transition-colors">
                    {cat.name}
                  </span>
                  <div className="font-mono text-lg font-bold text-white mt-1">
                    {cat.count}
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                  cat.level === 'Expert' 
                    ? 'bg-cyber-green/15 text-cyber-green border border-cyber-green/30'
                    : 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30'
                }`}>
                  {cat.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* VERIFICATION ACTIONS ROW */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-xl bg-cyber-surface/30 border border-cyber-border">
          <div className="font-mono text-xs text-slate-300">
            <span className="text-cyber-green font-bold">[ONLINE TELEMETRY]</span> Verify all contest records, daily badges, and submission history on LeetCode.
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="px-4 py-2 rounded-lg bg-cyber-green text-black font-mono font-bold text-xs uppercase hover:bg-emerald-400 transition-all flex items-center gap-2"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="https://github.com/Abhay13-11/SDE-Sheet-Challenge"
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="px-4 py-2 rounded-lg bg-cyber-surface border border-cyber-border text-white font-mono text-xs hover:border-cyber-green hover:text-cyber-green transition-all flex items-center gap-2"
            >
              <GitPullRequest size={13} />
              <span>SDE Challenge Repo</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
