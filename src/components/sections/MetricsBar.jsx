import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Card3D from '../canvas/Card3D';
import { Terminal, Award, Flame, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { useAudio } from '../ui/AudioController';

export default function MetricsBar() {
  const { playClick } = useAudio();

  const metrics = [
    {
      value: portfolioData.telemetry.problemsSolved,
      label: 'LeetCode Solved',
      desc: 'Arrays, DP, Graphs, Trees, Binary Search',
      icon: Flame,
      color: 'text-cyber-green',
      border: 'border-cyber-green/30'
    },
    {
      value: portfolioData.telemetry.contestRating,
      label: 'Contest Rating',
      desc: portfolioData.telemetry.globalPercentile,
      icon: Compass,
      color: 'text-cyber-cyan',
      border: 'border-cyber-cyan/30'
    },
    {
      value: `${portfolioData.telemetry.cgpa}`,
      label: 'Current CGPA',
      desc: 'GL Bajaj CSE (Cyber Security)',
      icon: Award,
      color: 'text-cyber-violet',
      border: 'border-cyber-violet/30'
    },
    {
      value: portfolioData.telemetry.classXII,
      label: 'CBSE Class XII',
      desc: 'Senior Secondary Merit (2024)',
      icon: CheckCircle2,
      color: 'text-amber-400',
      border: 'border-amber-400/30'
    },
    {
      value: 'TOP 5',
      label: 'Internship Shortlist',
      desc: 'Coll-Edge Connect (of 2,800+ applicants)',
      icon: Terminal,
      color: 'text-pink-400',
      border: 'border-pink-400/30'
    },
    {
      value: '45-DAY',
      label: 'Striver SDE Sheet',
      desc: 'Continuous challenge completed',
      icon: BookOpen,
      color: 'text-emerald-400',
      border: 'border-emerald-400/30'
    }
  ];

  return (
    <section className="py-12 border-y border-cyber-border bg-cyber-dark/50 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-green inline-block animate-ping" />
            <h2 className="font-mono text-xs uppercase tracking-widest text-cyber-textMuted">
              TELEMETRY & EMPIRICAL SIGNALS // 00_SIGNAL
            </h2>
          </div>
          <span className="font-mono text-xs text-cyber-green hidden sm:inline">
            SYSTEM_VERIFIED: 100%
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card3D key={idx} maxTilt={8}>
                <div 
                  onClick={() => playClick()}
                  className={`p-4 rounded-xl bg-cyber-surface/70 border ${item.border} hover:bg-cyber-surfaceHover transition-all h-full flex flex-col justify-between cursor-default group`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon size={16} className={item.color} />
                    <span className="font-mono text-[10px] text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className={`font-mono text-2xl sm:text-3xl font-extrabold ${item.color} group-hover:scale-105 transition-transform`}>
                      {item.value}
                    </div>
                    <div className="font-display font-bold text-xs text-white mt-1">
                      {item.label}
                    </div>
                    <div className="font-mono text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                      {item.desc}
                    </div>
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
