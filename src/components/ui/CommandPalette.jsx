import React, { useState, useEffect } from 'react';
import { Search, X, FolderGit2, Code, Briefcase, GraduationCap, Mail, Phone, Download, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useAudio } from './AudioController';
import confetti from 'canvas-confetti';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const { playClick, playSuccess } = useAudio();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'projects',
      label: 'Jump to Featured Projects',
      sub: 'DeadlineAI, Prehab360, Sorting Visualizer',
      icon: FolderGit2,
      action: () => {
        window.location.hash = '#projects';
        onClose(false);
      }
    },
    {
      id: 'dsa',
      label: 'Inspect DSA Arena',
      sub: '550+ Solved, 1697 Contest Rating, Striver Sheet',
      icon: Code,
      action: () => {
        window.location.hash = '#dsa';
        onClose(false);
      }
    },
    {
      id: 'experience',
      label: 'View Internships & Experience',
      sub: 'JPMorgan Chase, AWS, Coll-Edge Connect',
      icon: Briefcase,
      action: () => {
        window.location.hash = '#experience';
        onClose(false);
      }
    },
    {
      id: 'academics',
      label: 'View Academic Record',
      sub: 'GL Bajaj (8.69 CGPA), Class XII (95.66%)',
      icon: GraduationCap,
      action: () => {
        window.location.hash = '#education';
        onClose(false);
      }
    },
    {
      id: 'resume',
      label: 'Download Resume PDF',
      sub: 'Abhay-Singh-Chauhan-Resume.pdf',
      icon: Download,
      action: () => {
        window.open(portfolioData.personal.resumeUrl, '_blank');
        onClose(false);
      }
    },
    {
      id: 'email',
      label: 'Copy Email Address',
      sub: portfolioData.personal.email,
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        playSuccess();
        alert('Copied to clipboard: ' + portfolioData.personal.email);
        onClose(false);
      }
    },
    {
      id: 'phone',
      label: 'Copy Phone Number',
      sub: portfolioData.personal.phone,
      icon: Phone,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.phone);
        playSuccess();
        alert('Copied to clipboard: ' + portfolioData.personal.phone);
        onClose(false);
      }
    },
    {
      id: 'matrix',
      label: 'Trigger Cyber Confetti Burst',
      sub: 'Celebrate high-tech engineering',
      icon: Sparkles,
      action: () => {
        playSuccess();
        confetti({
          particleCount: 120,
          spread: 80,
          colors: ['#00ff88', '#00e5ff', '#a855f7']
        });
        onClose(false);
      }
    }
  ];

  const filtered = actions.filter(a => 
    a.label.toLowerCase().includes(query.toLowerCase()) || 
    a.sub.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl rounded-2xl bg-cyber-dark border border-cyber-green/40 shadow-cyber-neon overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* SEARCH INPUT */}
        <div className="flex items-center px-4 py-3 border-b border-cyber-border bg-cyber-surface/60">
          <Search size={18} className="text-cyber-green mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, sections, or quick actions..."
            autoFocus
            className="flex-1 bg-transparent text-white placeholder-slate-500 font-mono text-sm focus:outline-none"
          />
          <button 
            onClick={() => { playClick(); onClose(false); }}
            className="text-slate-400 hover:text-white p-1"
          >
            <X size={18} />
          </button>
        </div>

        {/* RESULTS LIST */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 font-mono text-xs">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => { playClick(); item.action(); }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-cyber-surfaceHover hover:border border border-transparent hover:border-cyber-green/30 text-left transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyber-surface border border-cyber-border group-hover:border-cyber-green text-cyber-green">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-white font-medium group-hover:text-cyber-green transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                  <span className="text-slate-600 group-hover:text-cyber-green">↵</span>
                </button>
              );
            })
          )}
        </div>

        {/* FOOTER */}
        <div className="px-4 py-2 bg-cyber-surface/40 border-t border-cyber-border flex justify-between text-[11px] text-slate-500 font-mono">
          <span>Navigation: Arrow Keys</span>
          <span>Esc to exit</span>
        </div>
      </div>
    </div>
  );
}
