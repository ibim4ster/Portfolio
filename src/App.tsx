/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { translations, Language } from './translations';
import { Cpu, ShieldCheck, Calculator, Orbit, Fingerprint, ReceiptEuro, Linkedin, Mail, Phone, Code2, Database, Wrench, Palette, Menu, X, Smartphone, Briefcase, Gamepad2, LineChart, FolderSync, Volume2, Calendar, MessageSquare, Send, BrainCircuit } from 'lucide-react';
import { FaJava, FaDatabase, FaCashRegister, FaVideo, FaPhotoVideo, FaAws } from 'react-icons/fa';
import { SiPython, SiPhp, SiHtml5, SiVirtualbox, SiVmware, SiGit, SiAndroidstudio, SiIntellijidea, SiCanva, SiDavinciresolve, SiCss, SiJavascript, SiMongodb, SiVegas, SiSage, SiAgora, SiFlutter, SiAngular, SiRaspberrypi, SiGo, SiCplusplus, SiUnrealengine, SiUnity, SiReact } from 'react-icons/si';
import { BsFiletypeXml } from 'react-icons/bs';
import { TbChartLine, TbBrandCSharp, TbBrandAdobePremier } from 'react-icons/tb';
import { DiMsqlServer, DiVisualstudio, DiPhotoshop } from 'react-icons/di';

export default function App() {
  const [typedText, setTypedText] = useState("");
  const [flash, setFlash] = useState(false);
  const [hasAccessed, setHasAccessed] = useState(false);
  const [lang, setLang] = useState<Language>('es');
  const [theme, setTheme] = useState<'blue' | 'cyber'>('blue');
  const [isPoweringOn, setIsPoweringOn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  
  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [terminalInput, setTerminalInput] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const t = translations[lang];
  const fullText = t.boot.init;

  // Power on sequence
  useEffect(() => {
    const timer = setTimeout(() => setIsPoweringOn(false), 1500);
    
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    setTypedText(""); // Reset text when language changes before access
    setIsTypingComplete(false);
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [fullText]);

  const handleTerminalSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.trim().toLowerCase();
      const newHistory = [...terminalHistory, `guest@igf-os:~$ ${terminalInput}`];
      
      if (cmd === 'help') {
        newHistory.push('Available commands: help, ls, whoami, date, clear, sudo, access, start');
      } else if (cmd === 'ls') {
        newHistory.push('about.txt  skills.sh  projects.exe  contact.cfg');
      } else if (cmd === 'whoami') {
        newHistory.push('guest');
      } else if (cmd === 'date') {
        newHistory.push(new Date().toString());
      } else if (cmd === 'clear') {
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      } else if (cmd === 'sudo') {
        newHistory.push('guest is not in the sudoers file. This incident will be reported.');
      } else if (cmd === 'access' || cmd === 'start') {
        newHistory.push('Accessing system...');
        setTerminalHistory(newHistory);
        setTerminalInput('');
        handleAccess();
        return;
      } else if (cmd !== '') {
        newHistory.push(`bash: ${cmd}: command not found`);
      }
      
      setTerminalHistory(newHistory);
      setTerminalInput('');
    }
  };

  // Scroll Reveal effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!hasAccessed || !isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Observer for mobile auto-animations
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('mobile-active');
          } else {
            entry.target.classList.remove('mobile-active');
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% visible
    );

    const animateElements = document.querySelectorAll('.auto-animate');
    animateElements.forEach((el) => mobileObserver.observe(el));

    return () => {
      observer.disconnect();
      mobileObserver.disconnect();
    };
  }, [hasAccessed, lang, isMobile]); // Re-run when language or screen type changes

  // Mouse effect variables and listeners removed

  const handleAccess = () => {
    setFlash(true);
    setTimeout(() => {
      setHasAccessed(true);
      setTimeout(() => {
        const aboutEl = document.getElementById('about');
        if (aboutEl) {
          aboutEl.scrollIntoView({ behavior: isMobile ? 'auto' : 'smooth' });
        }
        setFlash(false);
      }, 100);
    }, 400);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setLang(prev => prev === 'es' ? 'en' : 'es');
      setTimeout(() => setIsGlitching(false), 300);
    }, 100);
  };

  const toggleTheme = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setTheme(prev => prev === 'blue' ? 'cyber' : 'blue');
      setTimeout(() => setIsGlitching(false), 300);
    }, 100);
  };

  const skillCategories = [
    {
      id: 'dev',
      title: t.skills.categories.dev,
      icon: Code2,
      color: 'text-primary',
      gradient: 'from-primary to-[#004411]',
      shadowHover: 'hover:shadow-[0_0_20px_rgba(var(--theme-primary-rgb),0.4)] [&.mobile-active]:shadow-[0_0_20px_rgba(var(--theme-primary-rgb),0.4)]',
      skills: [
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: SiPython },
        { name: 'C#', icon: TbBrandCSharp },
        { name: 'C++', icon: SiCplusplus },
        { name: 'PHP', icon: SiPhp },
        { name: 'Go', icon: SiGo },
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: SiCss },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React', icon: SiReact },
        { name: 'Angular', icon: SiAngular },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'XML', icon: BsFiletypeXml },
      ]
    },
    {
      id: 'data',
      title: t.skills.categories.data,
      icon: Database,
      color: 'text-[var(--theme-tertiary)]',
      gradient: 'from-[var(--theme-tertiary)] to-[#002244]',
      shadowHover: 'hover:shadow-[0_0_20px_rgba(var(--theme-tertiary-rgb),0.4)] [&.mobile-active]:shadow-[0_0_20px_rgba(var(--theme-tertiary-rgb),0.4)]',
      skills: [
        { name: 'Sage', icon: SiSage },
        { name: 'Ágora', icon: SiAgora },
        { name: 'SQLServer', icon: DiMsqlServer },
        { name: 'HeidiSQL', icon: FaDatabase },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'AWS', icon: FaAws },
      ]
    },
    {
      id: 'tools',
      title: t.skills.categories.tools,
      icon: Wrench,
      color: 'text-[#FF9900]',
      gradient: 'from-[#FF9900] to-[#442200]',
      shadowHover: 'hover:shadow-[0_0_20px_rgba(255,153,0,0.4)] [&.mobile-active]:shadow-[0_0_20px_rgba(255,153,0,0.4)]',
      skills: [
        { name: 'VirtualBox', icon: SiVirtualbox },
        { name: 'VMware', icon: SiVmware },
        { name: 'Git', icon: SiGit },
        { name: 'Android St.', icon: SiAndroidstudio },
        { name: 'VS', icon: DiVisualstudio },
        { name: 'IntelliJ', icon: SiIntellijidea },
        { name: 'Raspberry Pi', icon: SiRaspberrypi },
        { name: 'Unity', icon: SiUnity },
        { name: 'Unreal', icon: SiUnrealengine },
      ]
    },
    {
      id: 'design',
      title: t.skills.categories.design,
      icon: Palette,
      color: 'text-[#FF003C]',
      gradient: 'from-[#FF003C] to-[#440011]',
      shadowHover: 'hover:shadow-[0_0_20px_rgba(255,0,60,0.4)] [&.mobile-active]:shadow-[0_0_20px_rgba(255,0,60,0.4)]',
      skills: [
        { name: 'Adobe Premiere', icon: TbBrandAdobePremier },
        { name: 'Sony Vegas', icon: SiVegas },
        { name: 'Photoshop', icon: DiPhotoshop },
        { name: 'Canva', icon: SiCanva },
        { name: 'DaVinci', icon: SiDavinciresolve },
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-bg text-primary font-mono selection:bg-secondary selection:text-bg ${isPoweringOn ? 'crt-turn-on' : ''} ${isGlitching ? 'glitch-transition' : ''}`}>
      {/* Global CRT Scanlines */}
      <div className="scanlines"></div>
      
      {/* Power On Glitch Overlay */}
      {(isPoweringOn || isGlitching) && <div className="glitch-overlay"></div>}
      
      {/* Flash Overlay */}
      <div className={`fixed inset-0 z-[100] pointer-events-none ${flash ? 'flash-active' : 'hidden'}`}></div>

      {/* Navigation Menu */}
      {hasAccessed && (
        <nav className="fixed top-0 left-0 right-0 z-[50] bg-bg/95 border-b border-primary/30 px-6 py-4 flex justify-between items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-primary font-bold font-mono text-xl tracking-widest glitch-text" data-text="IGF">IGF</button>
          
          {/* Desktop Menu & Lang */}
          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'skills', 'experience', 'projects'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-primary font-mono text-sm uppercase tracking-wider transition-colors"
              >
                {t.nav.menu[item as keyof typeof t.nav.menu]}
              </button>
            ))}
            <button 
              onClick={toggleTheme}
              className="border border-secondary bg-bg text-secondary px-3 py-1 font-bold hover:bg-secondary hover:text-bg transition-colors text-sm"
            >
              {theme === 'blue' ? 'CYBER' : 'BLUE'}
            </button>
            <button 
              onClick={toggleLanguage}
              className="border border-primary bg-bg text-primary px-3 py-1 font-bold hover:bg-primary hover:text-bg transition-colors text-sm"
            >
              {t.nav.lang}
            </button>
          </div>

          {/* Mobile Menu Toggle & Lang */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="border border-secondary bg-bg text-secondary px-2 py-1 font-bold hover:bg-secondary hover:text-bg transition-colors text-xs"
            >
              {theme === 'blue' ? 'CYBER' : 'BLUE'}
            </button>
            <button 
              onClick={toggleLanguage}
              className="border border-primary bg-bg text-primary px-2 py-1 font-bold hover:bg-primary hover:text-bg transition-colors text-xs"
            >
              {t.nav.lang}
            </button>
            <button 
              className="text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      )}

      {/* Mobile Menu Dropdown */}
      {hasAccessed && isMenuOpen && (
        <div className="fixed top-[60px] left-0 right-0 bg-bg border-b border-primary/30 z-[49] flex flex-col md:hidden">
          {['home', 'about', 'skills', 'experience', 'projects'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-primary hover:bg-primary/10 font-mono text-sm uppercase tracking-wider transition-colors py-4 px-6 text-left border-b border-gray-800 last:border-none"
            >
              {t.nav.menu[item as keyof typeof t.nav.menu]}
            </button>
          ))}
        </div>
      )}

      {/* Language Toggle (Boot Screen) */}
      {!hasAccessed && (
        <div className="fixed top-6 right-6 z-[60] flex gap-4">
          <button 
            onClick={toggleTheme}
            className="border-2 border-secondary bg-bg text-secondary px-4 py-2 font-bold hover:bg-secondary hover:text-bg transition-colors shadow-[4px_4px_0px_var(--theme-secondary)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            {theme === 'blue' ? 'CYBER' : 'BLUE'}
          </button>
          <button 
            onClick={toggleLanguage}
            className="border-2 border-primary bg-bg text-primary px-4 py-2 font-bold hover:bg-primary hover:text-bg transition-colors shadow-[4px_4px_0px_var(--theme-primary)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            {t.nav.lang}
          </button>
        </div>
      )}

      {/* 1. SECCIÓN DE BIENVENIDA */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-start p-6 md:p-24 relative scroll-mt-20">
        {theme === 'cyber' && (
          <div 
            className="font-mono text-primary text-sm md:text-lg mb-8 min-h-[120px] whitespace-pre-wrap w-full max-w-2xl cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            <div>{typedText}{!isTypingComplete && <span className="animate-pulse">_</span>}</div>
            {isTypingComplete && !hasAccessed && (
              <div className="mt-2">
                {terminalHistory.map((line, i) => (
                  <div key={i} className={line.startsWith('guest@') ? 'text-primary' : 'text-gray-400'}>{line}</div>
                ))}
                <div className="flex items-center flex-wrap">
                  <span className="mr-2 text-secondary">guest@igf-os:~$</span>
                  <input 
                    ref={inputRef}
                    type="text" 
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleTerminalSubmit}
                    className="bg-transparent border-none outline-none text-primary flex-grow font-mono min-w-[100px]"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        
        <h1 
          className="font-sans text-5xl md:text-9xl font-black text-white mb-12 uppercase tracking-tighter glitch-text" 
          data-text="IBAI GALLEGO"
        >
          IBAI GALLEGO
        </h1>
        
        {!hasAccessed && (
          <div className="relative z-10 boot-fade-in delay-1000">
            <div className="absolute -inset-2 bg-primary opacity-20 blur-lg animate-pulse rounded-full"></div>
            <button 
              onClick={handleAccess} 
              className="relative font-mono text-primary border-2 border-primary px-8 py-4 bg-bg shadow-[6px_6px_0px_var(--theme-primary)] active:shadow-[0px_0px_0px_var(--theme-primary)] active:translate-x-[6px] active:translate-y-[6px] transition-all uppercase font-bold tracking-widest hover:bg-primary hover:text-bg animate-bounce"
            >
              {t.boot.btn}
            </button>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-primary text-xs font-mono animate-pulse whitespace-nowrap">
              &gt; CLICK TO INITIALIZE &lt;
            </div>
          </div>
        )}
        {hasAccessed && (
          <div className="text-primary font-bold animate-pulse">
            {t.boot.granted}
          </div>
        )}
      </section>

      {/* REST OF THE SITE (Only visible after access) */}
      {hasAccessed && (
        <div className="boot-fade-in">
          {/* 2. SOBRE MÍ / EL NÚCLEO & DATOS ACADÉMICOS */}
          <section id="about" className="min-h-screen p-6 md:p-24 flex flex-col justify-center relative z-10 scroll-mt-20">
            <h2 className="font-sans text-3xl md:text-6xl font-bold text-white mb-12 uppercase glitch-text reveal" data-text={t.core.title}>{t.core.title}</h2>
            
            <div className="clip-cyber border-2 border-primary p-8 md:p-12 bg-noise relative reveal delay-100 hover:shadow-[0_0_20px_rgba(var(--theme-primary-rgb),0.15)] transition-shadow duration-500">
              <p className="font-sans text-xl md:text-2xl text-gray-200 leading-relaxed mb-12">
                {t.core.bio}
              </p>
              
              <h3 className="font-sans text-2xl md:text-4xl font-bold text-primary mb-8 uppercase border-b-2 border-primary inline-block pb-2">{t.core.academicTitle}</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* DAM */}
                <div className="border border-primary/50 p-6 bg-black/50 hover:border-primary [&.mobile-active]:border-primary transition-colors group auto-animate">
                  <div className="text-primary font-mono font-bold mb-2">{t.core.dam.date}</div>
                  <h4 className="font-sans text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary group-[.mobile-active]:text-primary transition-colors">{t.core.dam.title}</h4>
                  <p className="font-mono text-sm text-secondary mb-6">{t.core.dam.subtitle}</p>
                  <ul className="font-sans text-gray-300 space-y-3 text-sm md:text-base list-disc list-inside">
                    <li>{t.core.dam.p1}</li>
                    <li>{t.core.dam.p2}</li>
                    <li>{t.core.dam.p3}</li>
                    <li>{t.core.dam.p4}</li>
                    <li>{t.core.dam.p5}</li>
                  </ul>
                </div>
                {/* SMR */}
                <div className="border border-primary/50 p-6 bg-black/50 hover:border-primary [&.mobile-active]:border-primary transition-colors group auto-animate">
                  <div className="text-primary font-mono font-bold mb-2">{t.core.smr.date}</div>
                  <h4 className="font-sans text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary group-[.mobile-active]:text-primary transition-colors">{t.core.smr.title}</h4>
                  <p className="font-mono text-sm text-secondary mb-6">{t.core.smr.subtitle}</p>
                  <ul className="font-sans text-gray-300 space-y-3 text-sm md:text-base list-disc list-inside">
                    <li>{t.core.smr.p1}</li>
                    <li>{t.core.smr.p2}</li>
                    <li>{t.core.smr.p3}</li>
                    <li>{t.core.smr.p4}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. HABILIDADES TÉCNICAS E IA */}
          <section id="skills" className="min-h-screen p-6 md:p-24 flex flex-col justify-center relative z-10 scroll-mt-20">
            <h2 className="font-sans text-3xl md:text-6xl font-bold text-white mb-12 uppercase glitch-text reveal" data-text={t.skills.title}>{t.skills.title}</h2>
            
            <div className="flex flex-col gap-12 mb-20">
              {skillCategories.map((cat, idx) => (
                <div key={cat.id} className={`reveal delay-${(idx + 1) * 100}`}>
                  <h3 className={`font-mono ${cat.color} font-bold text-xl md:text-2xl border-b border-gray-800 pb-3 mb-6 flex items-center gap-3`}>
                    <cat.icon className="w-6 h-6" /> {cat.title}
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className={`relative p-[2px] rounded-xl bg-gradient-to-br ${cat.gradient} group hover:scale-105 [&.mobile-active]:scale-105 transition-all duration-300 ${cat.shadowHover} auto-animate`}>
                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#0a0a0a] rounded-xl flex flex-col items-center justify-center gap-2 sm:gap-3">
                          <skill.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${cat.color} group-hover:scale-110 group-[.mobile-active]:scale-110 transition-transform duration-300`} />
                          <span className="text-[10px] sm:text-xs font-mono text-gray-300 font-bold tracking-wider">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* INTELIGENCIA ARTIFICIAL */}
            <div className="border-2 border-secondary p-8 md:p-12 bg-secondary/5 relative reveal delay-500 hover:shadow-[0_0_20px_rgba(var(--theme-secondary-rgb),0.2)] transition-shadow">
              <div className="absolute -top-5 left-8 bg-bg px-4 text-secondary font-mono font-bold text-xl md:text-2xl">
                {t.skills.ai.title}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="space-y-6">
                  {t.skills.ai.items.slice(0, 3).map((item, idx) => (
                    <div key={idx}>
                      <h4 className="text-white font-sans font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-300 font-sans text-sm md:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {t.skills.ai.items.slice(3, 6).map((item, idx) => (
                    <div key={idx}>
                      <h4 className="text-white font-sans font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-300 font-sans text-sm md:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. EXPERIENCIA LABORAL */}
          <section id="experience" className="min-h-screen p-6 md:p-24 flex flex-col justify-center relative z-10 scroll-mt-20">
            <h2 className="font-sans text-3xl md:text-6xl font-bold text-white mb-12 uppercase glitch-text reveal" data-text={t.experience.title}>{t.experience.title}</h2>
            
            <div className="relative pl-8 border-l-2 border-primary space-y-12 font-sans">
              {/* Timeline data load effect */}
              <div className="absolute left-[-10px] top-0 bottom-0 w-4 overflow-hidden text-[10px] text-primary/30 leading-none break-all font-mono" aria-hidden="true">
                {Array.from({length: 200}).map(() => "01001011010100101010100101010").join("")}
              </div>

              {t.experience.jobs.map((job, idx) => (
                <div key={idx} className="relative reveal bg-black/40 p-6 md:p-8 border border-primary/30 hover:border-primary [&.mobile-active]:border-primary hover:shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.15)] [&.mobile-active]:shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.15)] transition-all group auto-animate">
                  <div className="absolute -left-[41px] top-8 w-4 h-4 bg-primary group-hover:scale-150 group-[.mobile-active]:scale-150 transition-transform"></div>
                  <div className="text-primary font-mono font-bold mb-2">{job.date}</div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{job.title}</h3>
                  <ul className="text-gray-300 space-y-2 mt-4 list-disc list-inside text-sm md:text-base">
                    {job.points.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 5. PROYECTOS */}
          <section id="projects" className="min-h-screen p-6 md:p-24 flex flex-col justify-center relative z-10 cosmic-bg scroll-mt-20">
            <h2 className="font-sans text-3xl md:text-6xl font-bold text-white mb-12 uppercase glitch-text reveal relative z-10" data-text={t.projects.title}>{t.projects.title}</h2>
            
            {Object.entries(t.projects.categories).map(([catKey, catValue], catIdx) => {
              const category = catValue as any;
              const isViolet = catKey === 'mobile';
              const isBlue = catKey === 'additional';
              const themeClass = isViolet ? 'violet-theme' : isBlue ? 'blue-theme' : '';
              const gridClass = isViolet ? 'bg-cyber-grid-violet' : isBlue ? 'bg-cyber-grid-blue' : 'bg-cyber-grid';
              const textClass = isViolet ? 'text-secondary' : isBlue ? 'text-[var(--theme-tertiary)]' : 'text-primary';
              const borderClass = isViolet ? 'border-secondary' : isBlue ? 'border-[var(--theme-tertiary)]' : 'border-primary';
              const bgClass = isViolet ? 'bg-secondary' : isBlue ? 'bg-[var(--theme-tertiary)]' : 'bg-primary';
              const shadowClass = isViolet ? 'shadow-[inset_0_0_10px_rgba(var(--theme-secondary-rgb),0.2)]' : isBlue ? 'shadow-[inset_0_0_10px_rgba(var(--theme-tertiary-rgb),0.2)]' : 'shadow-[inset_0_0_10px_rgba(var(--theme-primary-rgb),0.2)]';

              return (
                <div key={catKey} className="mb-20">
                  <h3 className={`font-mono text-xl md:text-2xl font-bold mb-8 ${textClass} reveal`}>
                    &gt; {category.title}
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                    {category.items.map((project: any, idx: number) => {
                      
                      const getIcon = (id: string) => {
                        if (id === 'tfg') return Orbit;
                        if (id === 'gatepass') return Fingerprint;
                        if (id === 'presupuestos') return ReceiptEuro;
                        if (id === 'kandido') return BrainCircuit;
                        if (id === 'portfolio') return Briefcase;
                        if (id === 'zombie' || id === 'memories' || id === 'energy') return Gamepad2;
                        if (id === 'daytrading' || id === 'migasa') return LineChart;
                        if (id.includes('mob')) return Smartphone;
                        if (id.includes('foldr') || id.includes('folder')) return FolderSync;
                        if (id.includes('silent')) return Volume2;
                        if (id.includes('calendar')) return Calendar;
                        if (id === 'kidix') return MessageSquare;
                        if (id === 'smspubli') return Send;
                        return Code2;
                      };
                      
                      const Icon = getIcon(project.id);

                      return (
                        <div key={idx} className={`balatro-card ${themeClass} group reveal delay-${(idx % 3 + 1) * 100} auto-animate`}>
                          <div className={`flip-card-inner ${flippedCards[project.id] ? 'flipped' : ''}`}>
                            {/* Front of Card */}
                            <div className="flip-card-front">
                              <div className={`balatro-banner ${themeClass}`}>{project.title.toUpperCase()}</div>
                              <div className={`balatro-illustration ${themeClass}`}>
                                <div className={`absolute inset-0 ${gridClass} opacity-50`}></div>
                                {project.image ? (
                                  <img src={project.image} alt={project.title} className="w-full h-full object-cover relative z-10" />
                                ) : (
                                  <Icon className={`w-24 h-24 ${textClass} relative z-10 group-hover:scale-110 group-[.mobile-active]:scale-110 transition-all duration-700`} strokeWidth={1.5} />
                                )}
                              </div>
                              <div className="balatro-content">
                                <p className="text-gray-300 font-sans text-sm md:text-base mb-4 flex-grow">{project.desc}</p>
                                
                                {project.creds && (
                                  <div className={`mb-6 p-3 border ${borderClass} ${bgClass}/10 ${textClass} ${shadowClass} text-xs font-mono`}>
                                    <span className="text-white font-bold">CREDENTIALS_</span><br/>
                                    &gt; {t.projects.credentials.user}: {project.creds.user}<br/>
                                    &gt; {t.projects.credentials.pass}: {project.creds.pass}
                                  </div>
                                )}

                                <div className="flex flex-col gap-3 mt-auto">
                                  <button 
                                    onClick={() => setFlippedCards(prev => ({ ...prev, [project.id]: true }))}
                                    className={`balatro-btn ${textClass} hover:text-bg hover:${bgClass} [&.mobile-active]:text-bg [&.mobile-active]:${bgClass} font-mono font-bold block border ${borderClass} px-4 py-2 text-center transition-colors w-full`}
                                  >
                                    {t.projects.more}
                                  </button>
                                  
                                  {project.links && project.links.map((link: any, lIdx: number) => (
                                    <a key={lIdx} href={link.url} target="_blank" rel="noreferrer" className={`balatro-btn ${link.type === 'repo' ? 'text-white hover:text-white hover:bg-white/20 border-white/50' : `${textClass} hover:text-bg hover:${bgClass} border-${borderClass}`} font-mono font-bold block border px-4 py-2 text-center transition-colors`}>
                                      {link.type === 'repo' ? t.projects.repo : link.type === 'demo' ? t.projects.demo : t.projects.doc}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            {/* Back of Card */}
                            <div className="flip-card-back">
                              <div className={`balatro-banner ${themeClass}`}>{project.title.toUpperCase()}</div>
                              <div className="balatro-content overflow-y-auto">
                                <p className="text-gray-300 font-sans text-sm md:text-base mb-6">{project.desc}</p>
                                
                                {project.contributions && project.contributions.length > 0 && (
                                  <div className="mb-6">
                                    <h4 className={`font-mono font-bold mb-3 ${textClass}`}>&gt; {t.projects.contributions}</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                                      {project.contributions.map((contrib: string, i: number) => (
                                        <li key={i}>{contrib}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                {project.tech && (
                                  <div className="mb-6">
                                    <h4 className={`font-mono font-bold mb-3 ${textClass}`}>&gt; {t.projects.tech}</h4>
                                    <p className="font-mono text-sm text-gray-300">{project.tech}</p>
                                  </div>
                                )}
                                
                                <div className="flex flex-col gap-3 mt-auto pt-4">
                                  <button 
                                    onClick={() => setFlippedCards(prev => ({ ...prev, [project.id]: false }))}
                                    className={`balatro-btn ${textClass} hover:text-bg hover:${bgClass} [&.mobile-active]:text-bg [&.mobile-active]:${bgClass} font-mono font-bold block border ${borderClass} px-4 py-2 text-center transition-colors w-full`}
                                  >
                                    {t.projects.close}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>

          {/* 6. CONTACTO / LA LÍNEA DIRECTA */}
          <footer className="border-t-2 border-primary bg-bg p-6 font-mono text-sm md:text-base flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 reveal">
            <div className="text-primary font-bold">
              <span className="animate-pulse mr-2">█</span> {t.footer.status}
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
              <a href="https://es.linkedin.com/in/ibai-gallego-faces-78623419a" target="_blank" rel="noreferrer" className="text-[var(--theme-tertiary)] hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                <Linkedin className="w-5 h-5" /> LINKEDIN
              </a>
              <a href="mailto:ibairakelmario@gmail.com" className="text-white hover:text-secondary transition-colors flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-5 h-5" /> ibairakelmario@gmail.com
              </a>
              <a href="tel:+34673350491" className="text-white hover:text-secondary transition-colors flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-5 h-5" /> +34 673 350 491
              </a>
              <span className="text-primary flex items-center justify-center md:justify-start">
                {t.footer.loc}
              </span>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
