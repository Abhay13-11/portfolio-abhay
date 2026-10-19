import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, RotateCcw } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useAudio } from './AudioController';
import confetti from 'canvas-confetti';

export default function TerminalHUD() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'ASC CYBER-OS v3.8 [Online]' },
    { type: 'system', text: 'Type "help" to list available telemetry commands.' },
    { type: 'input', text: 'whoami' },
    { type: 'output', text: `${portfolioData.personal.name} // B.Tech CSE (Hons) Cyber Security | CGPA: ${portfolioData.telemetry.cgpa} | LeetCode: ${portfolioData.telemetry.problemsSolved} Solved` }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const { playClick, playSuccess } = useAudio();

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    playClick();
    const newHistory = [...history, { type: 'input', text: inputVal }];

    switch (cmd) {
      case 'help':
      case '?':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
• whoami       - Identity & core background
• stats        - Live telemetry (DSA, Rating, CGPA)
• projects     - Inspect featured engineering projects
• internships  - JPMorgan Chase & AWS Forage experiences
• contact      - Reach out directly (Email/Phone)
• resume       - Trigger resume download
• matrix       - Launch celebratory digital matrix burst
• clear        - Wipe terminal log`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `${portfolioData.personal.name}\nB.Tech (Hons) CSE, Specialization in Cyber Security\nGL Bajaj Institute of Technology & Management (Graduation: 2028)\nSpecialization: System Security, Full-Stack MERN, AI integration, Algorithmic Optimization.`
        });
        break;

      case 'stats':
      case 'telemetry':
        newHistory.push({
          type: 'output',
          text: `TELEMETRY METRICS:
[+] LeetCode Solved    : ${portfolioData.telemetry.problemsSolved}
[+] Contest Rating     : ${portfolioData.telemetry.contestRating} (${portfolioData.telemetry.globalPercentile})
[+] Current CGPA       : ${portfolioData.telemetry.cgpa} / 10
[+] Class XII (CBSE)   : ${portfolioData.telemetry.classXII}
[+] Class X (CBSE)     : ${portfolioData.telemetry.classX}
[+] Challenge Complete : 45-Day Striver SDE Sheet`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: portfolioData.projects
            .map((p, i) => `[0${i + 1}] ${p.title} (${p.status}) -> ${p.subtitle}`)
            .join('\n')
        });
        break;

      case 'internships':
      case 'experience':
        newHistory.push({
          type: 'output',
          text: portfolioData.experience
            .map(e => `[*] ${e.organization} - ${e.role} (${e.period}) [${e.badge}]`)
            .join('\n')
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `COMMUNICATION CHANNELS:
• Email    : ${portfolioData.personal.email}
• Phone    : ${portfolioData.personal.phone}
• Location : ${portfolioData.personal.location}
• GitHub   : ${portfolioData.personal.github}
• LinkedIn : ${portfolioData.personal.linkedin}
• LeetCode : ${portfolioData.personal.leetcode}`
        });
        break;

      case 'resume':
        window.open(portfolioData.personal.resumeUrl, '_blank');
        newHistory.push({
          type: 'output',
          text: 'Opening / downloading official resume PDF...'
        });
        break;

      case 'matrix':
        playSuccess();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00ff88', '#00e5ff', '#a855f7']
        });
        newHistory.push({
          type: 'output',
          text: '⚡ CYBER MATRIX OVERLOAD: Particles dispatched across neural grid!'
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="w-full rounded-xl bg-cyber-dark/90 border border-cyber-border/80 shadow-cyber-card backdrop-blur-xl overflow-hidden font-mono text-xs">
      {/* TERMINAL HEADER */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-cyber-surface/90 border-b border-cyber-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-green inline-block" />
          </div>
          <span className="text-slate-400 font-semibold tracking-wider text-[11px] ml-2 flex items-center gap-1.5">
            <TerminalIcon size={12} className="text-cyber-green" />
            abhay@cyber-core:~
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-cyber-green px-2 py-0.5 rounded bg-cyber-green/10 border border-cyber-green/30">
            TTY_ACTIVE
          </span>
          <button 
            onClick={() => { playClick(); setHistory([]); }}
            className="text-slate-400 hover:text-white p-1"
            title="Clear Terminal"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>

      {/* TERMINAL BODY */}
      <div className="p-4 max-h-72 overflow-y-auto space-y-2 select-text">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'system' && (
              <p className="text-cyber-cyan/90 font-mono">{item.text}</p>
            )}
            {item.type === 'input' && (
              <p className="text-slate-300">
                <span className="text-cyber-green font-bold">visitor@asc:~$</span> {item.text}
              </p>
            )}
            {item.type === 'output' && (
              <pre className="text-slate-300 whitespace-pre-wrap pl-3 border-l-2 border-cyber-green/40 my-1 font-mono text-[11px]">
                {item.text}
              </pre>
            )}
            {item.type === 'error' && (
              <p className="text-red-400 pl-3 border-l-2 border-red-500/50">{item.text}</p>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* TERMINAL PROMPT INPUT */}
      <form onSubmit={handleCommand} className="flex items-center px-4 py-2.5 bg-cyber-surface/40 border-t border-cyber-border">
        <span className="text-cyber-green font-bold mr-2 select-none">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' or command..."
          className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono placeholder-slate-600"
        />
        <button
          type="submit"
          className="text-cyber-textMuted hover:text-cyber-green p-1 transition-colors"
          title="Execute Command"
        >
          <CornerDownLeft size={13} />
        </button>
      </form>
    </div>
  );
}
