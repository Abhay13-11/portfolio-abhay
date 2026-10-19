import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Card3D from '../canvas/Card3D';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, Download, MessageSquare } from 'lucide-react';
import { useAudio } from '../ui/AudioController';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { personal } = portfolioData;
  const { playClick, playSuccess } = useAudio();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    playSuccess();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccess();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00ff88', '#00e5ff', '#a855f7']
    });

    // Form fallback via mailto
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-cyber-border/80 bg-cyber-bg/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-cyber-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-green uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-green inline-block animate-pulse" />
              06 // COMMUNICATIONS_PORT
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Initiate Contact &amp; <span className="text-cyber-green text-glow-green">Collaboration</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-md">
            Open for Software Engineering internships, full-stack development, and high-impact problem-solving roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT 5 COLS: DIRECT TELEMETRY CHANNELS */}
          <div className="lg:col-span-5 space-y-4">
            
            <Card3D maxTilt={6}>
              <div className="p-6 rounded-2xl bg-cyber-dark/90 border border-cyber-border shadow-cyber-card space-y-5">
                <span className="font-mono text-xs text-cyber-cyan uppercase tracking-wider block">
                  TRANSMISSION NODES
                </span>

                {/* EMAIL NODE */}
                <div className="p-4 rounded-xl bg-cyber-surface/60 border border-cyber-border flex items-center justify-between group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-cyber-green">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] text-slate-500 uppercase">Direct Email</div>
                      <a 
                        href={`mailto:${personal.email}`}
                        className="font-mono text-xs text-white group-hover:text-cyber-green truncate block transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-2 rounded-lg bg-cyber-surface hover:bg-cyber-surfaceHover text-slate-400 hover:text-white transition-all shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-cyber-green" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* PHONE NODE */}
                <div className="p-4 rounded-xl bg-cyber-surface/60 border border-cyber-border flex items-center justify-between group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-cyber-cyan">
                      <Phone size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] text-slate-500 uppercase">Direct Voice / WhatsApp</div>
                      <a 
                        href={`tel:${personal.phone}`}
                        className="font-mono text-xs text-white group-hover:text-cyber-cyan truncate block transition-colors"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-cyber-surface hover:bg-cyber-surfaceHover text-slate-400 hover:text-white transition-all shrink-0 ml-2"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-cyber-cyan" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* LOCATION NODE */}
                <div className="p-4 rounded-xl bg-cyber-surface/60 border border-cyber-border flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-cyber-violet">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-500 uppercase">Coordinates</div>
                    <div className="font-mono text-xs text-white">
                      {personal.location}
                    </div>
                  </div>
                </div>

                {/* RESUME QUICK ACTION */}
                <div className="pt-2">
                  <a
                    href={personal.resumeUrl}
                    download
                    onClick={() => playClick()}
                    className="w-full py-3 px-4 rounded-xl bg-cyber-green/10 border border-cyber-green text-cyber-green font-mono text-xs font-bold uppercase tracking-wider hover:bg-cyber-green hover:text-black hover:shadow-cyber-green transition-all flex items-center justify-center gap-2"
                  >
                    <Download size={14} />
                    <span>Download Official Resume PDF</span>
                  </a>
                </div>

              </div>
            </Card3D>

          </div>

          {/* RIGHT 7 COLS: INTERACTIVE TRANSMISSION FORM */}
          <div className="lg:col-span-7">
            <Card3D maxTilt={5}>
              <div className="p-6 sm:p-8 rounded-2xl bg-cyber-dark/90 border border-cyber-border shadow-cyber-card backdrop-blur-xl">
                
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyber-border">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={16} className="text-cyber-green" />
                    <h3 className="font-display font-bold text-white text-base">
                      Send Encrypted Dispatch
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-cyber-green px-2 py-0.5 rounded bg-cyber-green/10">
                    PORT: 443_SSL
                  </span>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-cyber-green/20 text-cyber-green flex items-center justify-center mx-auto border border-cyber-green animate-pulse">
                      <Check size={24} />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">
                      Transmission Dispatched!
                    </h4>
                    <p className="font-mono text-xs text-slate-400 max-w-sm mx-auto">
                      Your native mail client has been opened with your dispatch parameters. Abhay will review and reply promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-cyber-surface border border-cyber-border font-mono text-xs text-cyber-cyan hover:border-cyber-cyan"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 mb-1">YOUR NAME *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Recruiter / Engineer"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border text-white focus:outline-none focus:border-cyber-green transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">YOUR EMAIL *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border text-white focus:outline-none focus:border-cyber-green transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">SUBJECT</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. SDE Internship Opportunity / Collaboration"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border text-white focus:outline-none focus:border-cyber-green transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">MESSAGE *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your query, role requirements, or project details..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border text-white focus:outline-none focus:border-cyber-green transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      onClick={() => playClick()}
                      className="w-full py-3 rounded-xl bg-cyber-green text-black font-bold uppercase tracking-wider hover:bg-emerald-400 hover:shadow-cyber-green transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                )}

              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
}
