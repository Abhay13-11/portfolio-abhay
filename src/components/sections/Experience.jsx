import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Card3D from '../canvas/Card3D';
import { Briefcase, Award, Shield, CheckCircle2, ChevronRight, BookmarkCheck, FileText, ExternalLink } from 'lucide-react';
import { useAudio } from '../ui/AudioController';

export default function Experience() {
  const { experience, leadership } = portfolioData;
  const { playClick } = useAudio();

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-cyber-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-violet uppercase tracking-widest mb-2">
              <Briefcase size={14} className="text-cyber-violet animate-pulse" />
              03 // INDUSTRY_EXPERIENCE &amp; HONORS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Internships, Honors &amp; <span className="text-cyber-violet text-glow-violet">Leadership</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-md">
            Verified corporate software simulations, competitive national shortlists, and student leadership appointments.
          </p>
        </div>

        {/* EXPERIENCE TIMELINE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* LEFT 7 COLS: INDUSTRY EXPERIENCES */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs text-cyber-green uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-green" />
              CORPORATE &amp; VIRTUAL INTERNSHIPS
            </h3>

            {experience.map((exp, idx) => (
              <Card3D key={exp.id} maxTilt={5}>
                <div 
                  onClick={() => playClick()}
                  className="p-6 rounded-2xl bg-cyber-dark/85 border border-cyber-border/80 hover:border-cyber-violet/50 backdrop-blur-xl transition-all shadow-cyber-card group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-cyber-cyan px-2.5 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
                        {exp.badge}
                      </span>
                      {exp.credentialId && (
                        <span className="font-mono text-[10px] text-cyber-green px-2 py-0.5 rounded bg-cyber-green/10 border border-cyber-green/30">
                          ID: {exp.credentialId}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white font-display group-hover:text-cyber-violet transition-colors">
                    {exp.role}
                  </h4>
                  <div className="font-mono text-xs text-cyber-green font-semibold mt-0.5 mb-3 flex flex-wrap items-center gap-2">
                    <span>{exp.organization} {exp.platform && `• via ${exp.platform}`}</span>
                    {exp.status && (
                      <span className="text-[10px] text-emerald-400 font-mono">
                        [{exp.status}]
                      </span>
                    )}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <div className="space-y-1.5 pt-3 border-t border-cyber-border/60">
                      {exp.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <ChevronRight size={13} className="text-cyber-violet mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {(exp.certificateUrl || exp.offerLetterUrl) && (
                    <div className="flex flex-wrap items-center gap-2.5 pt-4 mt-4 border-t border-cyber-border/40">
                      {exp.certificateUrl && (
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => { e.stopPropagation(); playClick(); }}
                          className="px-3 py-1.5 rounded-lg bg-cyber-green/10 border border-cyber-green/50 text-cyber-green font-mono text-[11px] hover:bg-cyber-green hover:text-black transition-all flex items-center gap-1.5 font-semibold"
                        >
                          <ExternalLink size={12} />
                          <span>View Certificate</span>
                        </a>
                      )}
                      {exp.offerLetterUrl && (
                        <a
                          href={exp.offerLetterUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => { e.stopPropagation(); playClick(); }}
                          className="px-3 py-1.5 rounded-lg bg-cyber-surface border border-cyber-border text-slate-300 font-mono text-[11px] hover:border-cyber-cyan hover:text-cyber-cyan transition-all flex items-center gap-1.5"
                        >
                          <FileText size={12} />
                          <span>Offer Letter</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Card3D>
            ))}
          </div>

          {/* RIGHT 5 COLS: LEADERSHIP & AMBASSADOR APPOINTMENTS */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs text-cyber-cyan uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
              LEADERSHIP &amp; COMMUNITY BADGES
            </h3>

            <div className="p-6 rounded-2xl bg-cyber-surface/60 border border-cyber-border/80 backdrop-blur-xl space-y-4 shadow-cyber-card">
              {leadership.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-cyber-dark/60 border border-cyber-border hover:border-cyber-cyan/40 transition-all flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 rounded-lg bg-cyber-surface text-cyber-cyan border border-cyber-border group-hover:border-cyber-cyan shrink-0">
                    <Award size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-white group-hover:text-cyber-cyan transition-colors">
                        {item.role}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">
                        {item.year}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-cyber-green mt-0.5">
                      {item.organization}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <BookmarkCheck size={12} className="text-cyber-green shrink-0" />
                      <span>{item.credential}</span>
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
