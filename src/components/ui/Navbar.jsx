import React, { useState, useEffect } from 'react';
import { Terminal, Download, Menu, X, Command, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SoundToggle, useAudio } from './AudioController';

export default function Navbar({ onOpenPalette }) {
  const [timeStr, setTimeStr] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { playClick } = useAudio();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 // WORK', href: '#projects' },
    { label: '02 // DSA_ARENA', href: '#dsa' },
    { label: '03 // EXPERIENCE', href: '#experience' },
    { label: '04 // SKILLS', href: '#skills' },
    { label: '05 // ACADEMICS', href: '#education' },
    { label: '06 // CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-border py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO & CALLSIGN */}
          <a 
            href="#hero" 
            onClick={() => playClick()}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-center font-mono font-bold text-cyber-green group-hover:border-cyber-green group-hover:shadow-cyber-green transition-all">
              ASC
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyber-green transition-colors">
                  {portfolioData.personal.name}
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-cyber-green animate-ping" />
              </div>
              <div className="font-mono text-xs text-cyber-textMuted flex items-center gap-2">
                <span>SYS_READY</span>
                <span>•</span>
                <span className="text-cyber-cyan">{timeStr} IST</span>
              </div>
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-cyber-textMuted hover:text-cyber-green hover:underline decoration-cyber-green underline-offset-8 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-3">
            {/* Quick Command Palette Button */}
            <button
              onClick={() => { playClick(); onOpenPalette(); }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-cyber-surface/70 border border-cyber-border text-cyber-textMuted hover:border-cyber-cyan hover:text-cyber-cyan transition-all"
              title="Command Palette (Ctrl + K)"
            >
              <Command size={13} />
              <span>CMD</span>
              <kbd className="px-1 py-0.5 text-[10px] bg-cyber-dark rounded border border-cyber-border text-slate-400">⌘K</kbd>
            </button>

            {/* Audio Toggle */}
            <SoundToggle />

            {/* Resume Button */}
            <a
              href={portfolioData.personal.resumeUrl}
              download
              onClick={() => playClick()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyber-green/10 border border-cyber-green/50 text-cyber-green font-mono text-xs hover:bg-cyber-green hover:text-black hover:shadow-cyber-green transition-all"
            >
              <Download size={13} />
              <span className="font-semibold">RESUME</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => { playClick(); setMobileMenuOpen(prev => !prev); }}
              className="lg:hidden p-2 rounded-lg bg-cyber-surface border border-cyber-border text-white hover:border-cyber-green"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE HUD MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cyber-dark/95 backdrop-blur-xl border-b border-cyber-border px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 font-mono text-sm">
            <div className="text-xs text-cyber-textMuted pb-2 border-b border-cyber-border flex justify-between">
              <span>SYSTEM DIRECTORY</span>
              <span className="text-cyber-green">ONLINE // 8.69 CGPA</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="py-2 px-3 rounded hover:bg-cyber-surface text-slate-300 hover:text-cyber-green flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-cyber-textMuted">↗</span>
              </a>
            ))}
            <div className="pt-3 border-t border-cyber-border flex justify-between items-center text-xs text-cyber-textMuted">
              <span>TIME: {timeStr}</span>
              <button
                onClick={() => { playClick(); setMobileMenuOpen(false); onOpenPalette(); }}
                className="text-cyber-cyan underline"
              >
                Open Terminal (⌘K)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
