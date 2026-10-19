import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Card3D from '../canvas/Card3D';
import { GraduationCap, Award, ShieldCheck, CheckCircle, Calendar, Sparkles } from 'lucide-react';
import { useAudio } from '../ui/AudioController';

export default function Education() {
  const { education, certifications } = portfolioData;
  const { playClick } = useAudio();

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-cyber-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan uppercase tracking-widest mb-2">
              <GraduationCap size={14} className="text-cyber-cyan animate-pulse" />
              05 // ACADEMICS &amp; CERTIFICATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Academic Rigor &amp; <span className="text-cyber-cyan text-glow-cyan">Formal Credentials</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-md">
            Strong foundational computer science training, cyber security specialization, and verified cloud credentials.
          </p>
        </div>

        {/* ACADEMIC TIMELINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* LEFT 7 COLS: DEGREE TIMELINE */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs text-cyber-green uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-green" />
              FORMAL ACADEMIC TIMELINE
            </h3>

            {education.map((edu, idx) => (
              <Card3D key={idx} maxTilt={5}>
                <div 
                  onClick={() => playClick()}
                  className="p-6 sm:p-8 rounded-2xl bg-cyber-dark/85 border border-cyber-border/80 hover:border-cyber-cyan/50 backdrop-blur-xl transition-all shadow-cyber-card group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-cyber-green font-bold px-2.5 py-0.5 rounded bg-cyber-green/10 border border-cyber-green/30">
                      {edu.scoreLabel}: {edu.score}
                    </span>
                    <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-white font-display group-hover:text-cyber-cyan transition-colors">
                    {edu.institution}
                  </h4>

                  <div className="font-mono text-sm text-cyber-cyan font-semibold mt-1">
                    {edu.degree}
                  </div>

                  {edu.specialization && (
                    <div className="font-mono text-xs text-slate-300 mt-0.5 flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-cyber-green shrink-0" />
                      <span>{edu.specialization}</span>
                    </div>
                  )}

                  {edu.affiliation && (
                    <div className="font-mono text-[11px] text-slate-500 mt-1">
                      {edu.affiliation}
                    </div>
                  )}

                  {edu.highlights && (
                    <div className="mt-4 pt-4 border-t border-cyber-border/60 space-y-1">
                      {edu.highlights.map((h, hIdx) => (
                        <p key={hIdx} className="text-xs text-slate-400 font-sans">
                          • {h}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </Card3D>
            ))}
          </div>

          {/* RIGHT 5 COLS: VERIFIED CERTIFICATIONS */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs text-cyber-violet uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-violet" />
              VERIFIED PROFESSIONAL CREDENTIALS
            </h3>

            <div className="p-6 rounded-2xl bg-cyber-surface/60 border border-cyber-border/80 backdrop-blur-xl space-y-4 shadow-cyber-card">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-cyber-dark/60 border border-cyber-border hover:border-cyber-violet/50 transition-all flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-cyber-surface text-cyber-violet border border-cyber-border group-hover:border-cyber-violet shrink-0">
                    <Award size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-cyber-cyan px-2 py-0.5 rounded bg-cyber-cyan/10">
                        {cert.category}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">
                        {cert.date}
                      </span>
                    </div>
                    <div className="font-display font-bold text-sm text-white group-hover:text-cyber-violet transition-colors mt-1">
                      {cert.title}
                    </div>
                    <div className="font-mono text-xs text-slate-400 mt-0.5 flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-1">
                        <CheckCircle size={11} className="text-cyber-green shrink-0" />
                        {cert.issuer}
                      </span>
                      {cert.credentialId && (
                        <span className="text-[10px] text-cyber-green px-1.5 py-0.2 rounded bg-cyber-green/10 border border-cyber-green/30">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
