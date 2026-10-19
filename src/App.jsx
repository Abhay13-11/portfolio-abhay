import React, { useState } from 'react';
import { AudioProvider } from './components/ui/AudioController';
import CyberScene3D from './components/canvas/CyberScene3D';
import Navbar from './components/ui/Navbar';
import CommandPalette from './components/ui/CommandPalette';
import Hero from './components/sections/Hero';
import MetricsBar from './components/sections/MetricsBar';
import Projects from './components/sections/Projects';
import DsaArena from './components/sections/DsaArena';
import Experience from './components/sections/Experience';
import SkillsMatrix from './components/sections/SkillsMatrix';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <AudioProvider>
      <div className="relative min-h-screen bg-cyber-bg text-cyber-textPrimary selection:bg-cyber-green selection:text-black cyber-grid font-sans">
        
        {/* HARDWARE-ACCELERATED THREE.JS 3D BACKGROUND */}
        <CyberScene3D />

        {/* SCANLINES VIGNETTE */}
        <div className="fixed inset-0 cyber-scanlines pointer-events-none z-10" aria-hidden="true" />

        {/* FLOATING COMMAND PALETTE */}
        <CommandPalette isOpen={paletteOpen} onClose={setPaletteOpen} />

        {/* MAIN NAVIGATION BAR */}
        <Navbar onOpenPalette={() => setPaletteOpen(true)} />

        {/* PAGE CONTENT CONTAINER */}
        <main className="relative z-10">
          <Hero />
          <MetricsBar />
          <Projects />
          <DsaArena />
          <Experience />
          <SkillsMatrix />
          <Education />
          <Contact />
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </AudioProvider>
  );
}
