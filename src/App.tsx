/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { translations, Language } from './translations';
import { Cpu, ShieldCheck, Calculator, Orbit, Fingerprint, ReceiptEuro, Linkedin, Mail, Phone, Code2, Database, Wrench, Palette, Menu, X, Smartphone, Briefcase, Gamepad2, LineChart, FolderSync, Volume2, Calendar, MessageSquare, Send, BrainCircuit, Download } from 'lucide-react';
import { FaJava, FaDatabase, FaCashRegister, FaVideo, FaPhotoVideo, FaAws } from 'react-icons/fa';
import { SiPython, SiPhp, SiHtml5, SiVirtualbox, SiVmware, SiGit, SiAndroidstudio, SiIntellijidea, SiCanva, SiDavinciresolve, SiCss, SiJavascript, SiMongodb, SiVegas, SiSage, SiAgora, SiFlutter, SiAngular, SiRaspberrypi, SiGo, SiCplusplus, SiUnrealengine, SiUnity, SiReact } from 'react-icons/si';
import { BsFiletypeXml } from 'react-icons/bs';
import { TbChartLine, TbBrandCSharp, TbBrandAdobePremier } from 'react-icons/tb';
import { DiMsqlServer, DiVisualstudio, DiPhotoshop } from 'react-icons/di';
import { ProjectCard } from './components/ProjectCard';

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
  const [matrixMode, setMatrixMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string>('all');
  
  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [terminalInput, setTerminalInput] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const t = translations[lang];
  const fullText = t.boot.init;

  // Dynamic document title & Back to top visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "⚠️ Conexión perdida..." : "Portfolio | Ibai Gallego Faces";
    };
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        newHistory.push('Available commands: help, ls, whoami, date, clear, sudo, access, start, matrix');
      } else if (cmd === 'ls') {
        newHistory.push('about.txt  skills.sh  projects.exe  contact.cfg');
      } else if (cmd === 'whoami') {
        newHistory.push('guest');
      } else if (cmd === 'date') {
        newHistory.push(new Date().toString());
      } else if (cmd === 'matrix') {
        newHistory.push('Wake up, Neo...');
        setMatrixMode(true);
        setTimeout(() => setMatrixMode(false), 5000);
      } else if (cmd === 'run projects.exe' || cmd === './projects.exe') {
        scrollToSection('projects');
      } else if (cmd === 'sudo rm -rf /') {
        newHistory.push('Critical System Failure. Kernel panic...');
        setIsGlitching(true);
        setTimeout(() => {
          setIsGlitching(false);
          setTerminalHistory([...newHistory, 'Rebooting...']);
        }, 2000);
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
    <div className={`min-h-screen bg-bg text-primary font-mono selection:bg-secondary selection:text-bg ${isPoweringOn ? 'crt-turn-on' : ''} ${isGlitching ? 'glitch-transition' : ''} ${matrixMode ? 'matrix-active' : ''}`}>
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
            <a 
              href="https://drive.google.com/file/d/1oAYQ1lWYi6UJLiYdJCScsuwgHT1i3IYN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--theme-tertiary)] bg-bg text-[var(--theme-tertiary)] px-3 py-1 font-bold hover:bg-[var(--theme-tertiary)] hover:text-bg transition-colors text-sm flex items-center gap-2 cursor-pointer"
              id="btn-download-cv"
              title={lang === 'es' ? "Ver currículum" : "View CV"}
            >
              <Download className="w-4 h-4" /> {lang === 'es' ? 'CV' : 'CV'}
            </a>
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
          <div className="flex md:hidden items-center gap-3">
            <a 
              href="https://drive.google.com/file/d/1oAYQ1lWYi6UJLiYdJCScsuwgHT1i3IYN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--theme-tertiary)] bg-bg text-[var(--theme-tertiary)] px-2 py-1 font-bold hover:bg-[var(--theme-tertiary)] hover:text-bg transition-colors text-xs flex items-center gap-1 cursor-pointer"
              id="btn-download-cv-mobile"
            >
              <Download className="w-3 h-3" /> CV
            </a>
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
          <a 
            href="https://drive.google.com/file/d/1oAYQ1lWYi6UJLiYdJCScsuwgHT1i3IYN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-[var(--theme-tertiary)] hover:bg-[#FF00FF]/10 font-mono text-sm uppercase tracking-wider transition-colors py-4 px-6 text-left flex items-center gap-2 border-t border-gray-800"
          >
            <Download className="w-4 h-4" /> {lang === 'es' ? 'VER CV (GOOGLE DRIVE)' : 'VIEW CV (GOOGLE DRIVE)'}
          </a>
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
              <p className="font-sans text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                {t.core.bio}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a 
                  href="https://drive.google.com/file/d/1oAYQ1lWYi6UJLiYdJCScsuwgHT1i3IYN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-bg bg-primary border-2 border-primary px-6 py-3 shadow-[4px_4px_0px_var(--theme-secondary)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase font-bold tracking-widest hover:bg-bg hover:text-primary flex items-center gap-2 cursor-pointer z-10"
                  id="btn-about-cv"
                >
                  <Download className="w-5 h-5 animate-pulse" /> {lang === 'es' ? 'VER CV (GOOGLE DRIVE)' : 'VIEW CV (GOOGLE DRIVE)'}
                </a>
              </div>
              
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
            <h2 className="font-sans text-3xl md:text-6xl font-bold text-white mb-6 md:mb-12 uppercase glitch-text reveal relative z-10" data-text={t.projects.title}>{t.projects.title}</h2>
            
            {/* Project Filters */}
            <div className="flex flex-wrap gap-4 mb-12 relative z-10 reveal">
              {['all', ...Object.keys(t.projects.categories)].map((filterKey) => (
                <button
                  key={filterKey}
                  onClick={() => setProjectFilter(filterKey)}
                  className={`px-4 py-2 font-mono text-sm md:text-base border transition-all ${projectFilter === filterKey ? 'bg-primary text-bg border-primary shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.5)]' : 'bg-transparent text-primary border-primary/50 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary'}`}
                >
                  {filterKey === 'all' ? 'ALL' : filterKey.toUpperCase()}
                </button>
              ))}
            </div>

            {Object.entries(t.projects.categories).map(([catKey, catValue], catIdx) => {
              if (projectFilter !== 'all' && projectFilter !== catKey) return null;
              
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
                      return (
                        <ProjectCard 
                          key={idx}
                          project={project}
                          idx={idx}
                          flippedCards={flippedCards}
                          setFlippedCards={setFlippedCards}
                          themeClass={themeClass}
                          gridClass={gridClass}
                          textClass={textClass}
                          borderClass={borderClass}
                          bgClass={bgClass}
                          shadowClass={shadowClass}
                          t={t}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>

          {/* 6. CONTACTO / FORMULARIO */}
          <section id="contact" className="min-h-[70vh] p-6 md:p-24 flex flex-col justify-center relative z-10 bg-black/80 border-t border-primary/20 scroll-mt-20">
            <div className="max-w-4xl mx-auto w-full reveal">
              <h2 className="font-sans text-3xl md:text-5xl font-bold text-white mb-8 uppercase glitch-text" data-text={lang === 'es' ? "TRANSMISIÓN DIRECTA" : "DIRECT TRANSMISSION"}>
                {lang === 'es' ? "TRANSMISIÓN DIRECTA" : "DIRECT TRANSMISSION"}
              </h2>
              <p className="text-gray-400 font-mono mb-8">
                {lang === 'es' ? "> Establezca conexión segura y envíe su propuesta." : "> Establish a secure connection and send your proposal."}
              </p>
              
              <form 
                action="mailto:ibairakelmario@gmail.com" 
                method="post" 
                encType="text/plain" 
                className="space-y-6 font-mono"
                onSubmit={(e) => {
                  // Prevenir default y abrir mailto de manera segura con JS
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                  window.location.href = `mailto:ibairakelmario@gmail.com?subject=[PORTFOLIO] ${encodeURIComponent(subject)}&body=${encodeURIComponent("De: " + name + "\n\n" + message)}`;
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-primary text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary inline-block animate-pulse"></span>
                      {lang === 'es' ? "IDENTIFICADOR (Nombre)" : "IDENTIFIER (Name)"}
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-transparent border border-primary/50 text-white p-3 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.3)] transition-all placeholder:text-gray-600"
                      placeholder={lang === 'es' ? "Introduzca su alias..." : "Enter your alias..."}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-primary text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary inline-block animate-pulse"></span>
                      {lang === 'es' ? "ASUNTO" : "SUBJECT"}
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      className="w-full bg-transparent border border-primary/50 text-white p-3 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.3)] transition-all placeholder:text-gray-600"
                      placeholder={lang === 'es' ? "Motivo de la conexión..." : "Reason for connection..."}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-primary text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary inline-block animate-pulse"></span>
                    {lang === 'es' ? "DATOS A TRANSMITIR (Mensaje)" : "DATA TO TRANSMIT (Message)"}
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-transparent border border-primary/50 text-white p-3 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.3)] transition-all placeholder:text-gray-600 resize-none"
                    placeholder={lang === 'es' ? "Redacte su mensaje aquí..." : "Draft your message here..."}
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full md:w-auto px-8 py-3 bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-bg transition-all font-bold flex items-center justify-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg">
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  {lang === 'es' ? "INICIAR TRANSMISIÓN" : "INITIATE TRANSMISSION"}
                </button>
              </form>
            </div>
          </section>

          {/* 7. FOOTER */}
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

          {/* Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 z-50 p-3 bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-bg transition-all shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg focus:ring-primary"
              aria-label="Back to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
          )}

        </div>
      )}

      {/* 8. PRINTABLE CV CONTAINER (Only visible during print) */}
      <div id="printable-cv" className="hidden printable-content bg-white text-black p-8 font-sans" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
        {lang === 'es' ? (
          <div>
            <div className="border-b-2 border-black pb-4 mb-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-center uppercase" style={{ fontFamily: 'sans-serif' }}>Ibai Gallego Faces</h1>
              <p className="text-xl font-bold text-center text-gray-700 mt-1 uppercase">Desarrollador de Software</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 text-xs text-gray-600 text-center">
                <div><strong>Nacimiento:</strong> 26/09/2003</div>
                <div><strong>Email:</strong> ibairakelmario@gmail.com</div>
                <div><strong>Teléfono:</strong> +34 673 350 491</div>
                <div className="col-span-2 sm:col-span-3"><strong>Dirección:</strong> Plaza Torre Giralda, Oyón-Oion, Álava</div>
                <div className="col-span-2 sm:col-span-3"><strong>Portfolio:</strong> https://ibai-gallego.vercel.app</div>
              </div>
            </div>

            {/* Sobre Mí */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Sobre Mí</h2>
              <p className="text-xs leading-relaxed text-gray-800">
                Soy desarrollador de software con mentalidad freelance y perfil versátil. Me apasiona construir productos digitales y encontrar soluciones técnicas a problemas reales. Disfruto tanto trabajando en equipo como de forma autónoma, y me adapto rápido a nuevos entornos, tecnologías y retos. Siempre estoy aprendiendo y buscando la forma de aportar más valor en cada proyecto en el que participo.
              </p>
            </div>

            {/* Experiencia Laboral */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Experiencia Laboral</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">Logic Soluciones Software | Grupo Pancorbo</h3>
                    <span className="text-xs text-gray-600 font-semibold">Junio 2025 - Actualidad</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1 pl-2">
                    <li>Formación avanzada de Sage 50, 200, Despachos y Ágora + titulación.</li>
                    <li>Automatizar procesos de los trabajadores (Aplicaciones web internas) para elevar la productividad.</li>
                    <li>Instalación, configuración y formación de programas ERP y facturadores para empresas.</li>
                    <li>Personalización de informes complejos en lenguaje SQL y adición de módulos a medida en C#.</li>
                    <li>Soporte y administración de servidores basados tanto en Windows Server como en Linux.</li>
                    <li>Mantenimiento de páginas web construidas sobre WordPress y gestión de sus plugins.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">Logic Soluciones Software (Prácticas) | Grupo Pancorbo</h3>
                    <span className="text-xs text-gray-600 font-semibold">Marzo 2025 - Junio 2025 (400 Horas)</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1 pl-2">
                    <li>Formación intensiva en toda la suite Sage 50 y Ágora ERP.</li>
                    <li>Instalación de programas de facturación corporativos y resolución de incidencias en soporte comercial.</li>
                    <li>Elaboración de presupuestos comerciales, control contable de facturas y albaranes de clientes.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">Arluy (Prácticas) | Departamento de Informática</h3>
                    <span className="text-xs text-gray-600 font-semibold">Marzo 2021 - Junio 2021 (400 Horas)</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1 pl-2">
                    <li>Atención técnica al usuario presencial y mediante soporte remoto de ordenadores.</li>
                    <li>Instalación y configuración completa de tiendas online virtuales basadas en PrestaShop.</li>
                    <li>Instalación de antenas MikroTek para interconectar dispositivos de manera inalámbrica.</li>
                    <li>Desarrollo de un sistema automatizado para control y flujo de incidencias por medio de Power Automate, SharePoint y Excel.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">Trabajo en Hostelería | Camarero</h3>
                    <span className="text-xs text-gray-600 font-semibold">2021 - 2023 (Temporadas)</span>
                  </div>
                  <p className="text-xs text-gray-700 pl-2 mt-0.5">Soporte y atención integral de barra y terraza, potenciando habilidades interpersonales y de resolución bajo presión.</p>
                </div>
              </div>
            </div>

            {/* Datos Académicos */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Datos Académicos</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-xs">Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</h3>
                    <span className="text-xs text-gray-600 font-semibold">2022 - 2025</span>
                  </div>
                  <p className="text-[10px] text-gray-500">IES Comercio</p>
                  <p className="text-xs text-gray-700 mt-1 pl-2"><strong>Competencias:</strong> Programación en lenguajes orientados a objetos (Java, C#), desarrollo frontend/backend en frameworks modernos, bases de datos (SQLServer, Oracle, MongoDB), y programación de videojuegos en Unity / Unreal Engine.</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-xs">Grado Medio en Sistemas Microinformáticos y Redes (SMR)</h3>
                    <span className="text-xs text-gray-600 font-semibold">2019 - 2021</span>
                  </div>
                  <p className="text-[10px] text-gray-500">IES Comercio</p>
                  <p className="text-xs text-gray-700 mt-1 pl-2"><strong>Competencias:</strong> Montaje y reparación de equipos informáticos, cableado y configuración estructurada de redes (conmutadores y routers), despliegue de sistemas operativos Linux y Windows, políticas de seguridad y copias de seguridad.</p>
                </div>
              </div>
            </div>

            {/* Habilidades Técnicas e Inteligencia Artificial */}
            <div className="mb-6 page-break-before">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Habilidades Técnicas e Inteligencia Artificial</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-bold border-b border-gray-200 pb-0.5 mb-1 text-gray-800 uppercase">Lenguajes y Herramientas</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Lenguajes:</strong> Java, Python, C#, C++, PHP, Go, JavaScript, TypeScript, HTML/CSS, XML.<br/>
                    <strong>Entornos y Control:</strong> Git, Visual Studio, Android Studio, NetBeans, IntelliJ, VirtualBox, VMware, AWS.<br/>
                    <strong>Diseño / Multimedia:</strong> Photoshop, Premiere, Sony Vegas, DaVinci Resolve, Canva.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold border-b border-gray-200 pb-0.5 mb-1 text-gray-800 uppercase">Sistemas ERP y Base de Datos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Sistemas ERP:</strong> Sage 50, Sage 200, Sage Despachos, SAP, Odoo, Facturador Ágora.<br/>
                    <strong>Bases de Datos:</strong> SQL Server, MySQL, Oracle, HeidiSQL, MongoDB.<br/>
                    <strong>Idiomas:</strong> Castellano y Euskera (Nativo), Inglés (Nivel Medio).
                  </p>
                </div>
                <div className="col-span-2 mt-1">
                  <h3 className="font-bold border-b border-gray-200 pb-0.5 mb-1 text-gray-850 uppercase">Sistemas de Inteligencia Artificial (IA)</h3>
                  <div className="grid grid-cols-2 gap-x-4 text-gray-750 font-sans text-xs leading-normal">
                    <div>• <strong>Desarrollo Asistido:</strong> Integración avanzada de Cursor, Claude y modelado LLM para aceleración de despliegues.</div>
                    <div>• <strong>Diseño/Prototipado con IA:</strong> Flujo rápido desde Figma y AI Studio hacia templates estables usando Lovable, Base44 y Antigravity.</div>
                    <div>• <strong>Conexión API Modelos:</strong> Implementación e integración avanzada de APIs de Anthropic, Google Gemini o GPT-4o.</div>
                    <div>• <strong>Automatización de Tareas:</strong> Creación autónoma de documentación técnica, automatización de pruebas unitarias y traducción de scripts.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyectos Personales Clave */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Proyectos Personales Clave</h2>
              <div className="space-y-3 text-xs">
                <div>
                  <h3 className="font-bold">TFG-GRAVITY <span className="font-normal text-gray-600">(Python, Flask, MySQL, OpenAI)</span></h3>
                  <p className="text-gray-700 mt-0.5">Plataforma SaaS automatizada para facturación global, gestión e implementación de licencias de software, con pasarela de pago PayPal y un asistente IA integrado para soporte al cliente.</p>
                </div>
                <div>
                  <h3 className="font-bold">Gravity Gate Pass <span className="font-normal text-gray-600">(JavaScript, Seguridad Web)</span></h3>
                  <p className="text-gray-700 mt-0.5">Sistema autogestionado de tickets y seguridad con credenciales digitales cifradas por QR para control y validación de accesos en eventos masivos.</p>
                </div>
                <div>
                  <h3 className="font-bold">PRESUPUESTOS <span className="font-normal text-gray-600">(Web App, MySQL)</span></h3>
                  <p className="text-gray-700 mt-0.5">Herramienta interna ágil diseñada para la fuerza comercial que acelera la estimación de costes complejos y automatiza la exportación de presupuestos listos en PDF.</p>
                </div>
                <div>
                  <h3 className="font-bold">KANDIDO <span className="font-normal text-gray-600">(SaaS Talent Tracking con IA)</span></h3>
                  <p className="text-gray-700 mt-0.5">Portal modular de reclutamiento y clasificación de candidatos utilizando modelos lingüísticos para el procesamiento automático de CVs y asignación de perfiles.</p>
                </div>
                <div>
                  <h3 className="font-bold">Soccer World <span className="font-normal text-gray-600">(HTML/CSS, JavaScript)</span></h3>
                  <p className="text-gray-700 mt-0.5">Prototipo moderno de comercio electrónico para camisetas de fútbol con filtrado por marcas, ligas y carrito intuitivo.</p>
                </div>
              </div>
            </div>

            {/* Contribuciones a Proyectos */}
            <div>
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Contribuciones a Proyectos</h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                <div>
                  <h3 className="font-bold">Daytrading Automation Platform</h3>
                  <p className="text-gray-700 mt-0.5">Trading algorítmico, automatización mediante Python y conexión directa de órdenes usando WeBull SDK.</p>
                </div>
                <div>
                  <h3 className="font-bold">Grupo Migasa Logistics Optimization</h3>
                  <p className="text-gray-700 mt-0.5">Modelado matemático y programación lineal para optimización de cisternas de gran consumo de aceite de oliva.</p>
                </div>
                <div>
                  <h3 className="font-bold">AI Robotics Vision System</h3>
                  <p className="text-gray-700 mt-0.5">Pipeline de redes neuronales (CNN) para detección volumétrica de objetos usando Unreal Engine para datasets sintéticos.</p>
                </div>
                <div>
                  <h3 className="font-bold">MyFoldr.io & Silent Education</h3>
                  <p className="text-gray-700 mt-0.5">Aportaciones completas en Angular / Go para compartición segura en la nube y sensores IoT de monitoreo de sonido para escuelas.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b-2 border-black pb-4 mb-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-center uppercase" style={{ fontFamily: 'sans-serif' }}>Ibai Gallego Faces</h1>
              <p className="text-xl font-bold text-center text-gray-700 mt-1 uppercase">Software Developer</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 text-xs text-gray-600 text-center">
                <div><strong>Born:</strong> 26/09/2003</div>
                <div><strong>Email:</strong> ibairakelmario@gmail.com</div>
                <div><strong>Phone:</strong> +34 673 350 491</div>
                <div className="col-span-2 sm:col-span-3"><strong>Address:</strong> Plaza Torre Giralda, Oyón-Oion, Álava</div>
                <div className="col-span-2 sm:col-span-3"><strong>Portfolio:</strong> https://ibai-gallego.vercel.app</div>
              </div>
            </div>

            {/* About Me */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">About Me</h2>
              <p className="text-xs leading-relaxed text-gray-800">
                I am a software developer with a freelance mindset and a versatile profile. I am passionate about building digital products and finding technical solutions to real problems. I enjoy working both in a team and autonomously, adapting quickly to new environments, technologies, and challenges. I am always learning and looking for ways to bring more value to every project I participate in.
              </p>
            </div>

            {/* Work Experience */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Work Experience</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">Logic Soluciones Software | Grupo Pancorbo</h3>
                    <span className="text-xs text-gray-600 font-semibold">June 2025 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1 pl-2">
                    <li>Advanced training and certification in Sage 50, 200, Despachos, and Ágora ERP systems.</li>
                    <li>Automated internal workflows by building web tools to increase employee productivity.</li>
                    <li>Installed, configured, and troubleshooted corporate ERP and billing software for clients.</li>
                    <li>Customized complex database reports in SQL and built custom integration modules in C#.</li>
                    <li>Provided server support and administration for both Windows Server and Linux environments.</li>
                    <li>Maintained client websites built on WordPress and managed related integrations & plugins.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">Logic Soluciones Software (Internship) | Grupo Pancorbo</h3>
                    <span className="text-xs text-gray-600 font-semibold">March 2025 - June 2025 (400 Hours)</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1 pl-2">
                    <li>Intensive training in the complete Sage 50 suite and Ágora billing ERP.</li>
                    <li>Set up deployment services and handled client infrastructure tickets in technical support.</li>
                    <li>Drafted commercial budgets, invoices, and managed client delivery notes.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">Arluy (Internship) | IT Department</h3>
                    <span className="text-xs text-gray-600 font-semibold">March 2021 - June 2021 (400 Hours)</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1 pl-2">
                    <li>Offered helpdesk support and user assistance through on-site and remote computer diagnostics.</li>
                    <li>Designed and configured custom e-commerce online stores using PrestaShop.</li>
                    <li>Installed MikroTek antennas to establish wireless connectivity between company segments.</li>
                    <li>Created an automated ticket-handling solution using Power Automate, SharePoint, and Excel.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">Hospitality Industry | Waiter</h3>
                    <span className="text-xs text-gray-600 font-semibold">2021 - 2023 (Seasonal)</span>
                  </div>
                  <p className="text-xs text-gray-700 pl-2 mt-0.5">Provided barside/tableside service under high-pressure conditions, developing strong communication and problem-solving skills.</p>
                </div>
              </div>
            </div>

            {/* Academic History */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Academic History</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-xs">Higher Degree in Multiplatform Application Development (DAM)</h3>
                    <span className="text-xs text-gray-600 font-semibold">2022 - 2025</span>
                  </div>
                  <p className="text-[10px] text-gray-500">IES Comercio</p>
                  <p className="text-xs text-gray-700 mt-1 pl-2"><strong>Core skills:</strong> Object-oriented programming (Java, C#), frontend/backend development in modern frameworks, databases (SQLServer, Oracle, MongoDB), and game design in Unity / Unreal Engine.</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-xs">Middle Degree in Microcomputer Systems and Networks (SMR)</h3>
                    <span className="text-xs text-gray-600 font-semibold">2019 - 2021</span>
                  </div>
                  <p className="text-[10px] text-gray-500">IES Comercio</p>
                  <p className="text-xs text-gray-700 mt-1 pl-2"><strong>Core skills:</strong> Computer hardware assembly & maintenance, networking infrastructure (switches/routers setup), OS deployment (Linux & Windows Server), security auditing, and backup policies.</p>
                </div>
              </div>
            </div>

            {/* Technical Skills & AI */}
            <div className="mb-6 page-break-before">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Technical Skills & Artificial Intelligence</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-bold border-b border-gray-200 pb-0.5 mb-1 text-gray-850 uppercase">Languages & Devtools</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Languages:</strong> Java, Python, C#, C++, PHP, Go, JavaScript, TypeScript, HTML/CSS, XML.<br/>
                    <strong>Environments/Version Control:</strong> Git, Visual Studio, Android Studio, NetBeans, IntelliJ, VirtualBox, VMware, AWS.<br/>
                    <strong>Design / Multimedia:</strong> Photoshop, Premiere, Sony Vegas, DaVinci Resolve, Canva.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold border-b border-gray-200 pb-0.5 mb-1 text-gray-850 uppercase">ERP Systems & Databases</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>ERP Systems:</strong> Sage 50, Sage 200, Sage Despachos, SAP, Odoo, Facturador Ágora.<br/>
                    <strong>Databases:</strong> SQL Server, MySQL, Oracle, HeidiSQL, MongoDB.<br/>
                    <strong>Languages spoken:</strong> Spanish and Basque (Native), English (Intermediate).
                  </p>
                </div>
                <div className="col-span-2 mt-1">
                  <h3 className="font-bold border-b border-gray-200 pb-0.5 mb-1 text-gray-850 uppercase">Artificial Intelligence Systems (AI)</h3>
                  <div className="grid grid-cols-2 gap-x-4 text-gray-750 font-sans text-xs leading-normal">
                    <div>• <strong>Assisted Development:</strong> Advanced workflow using Cursor, Claude, and LLM coding agents for rapid delivery.</div>
                    <div>• <strong>Prototyping & Generative Design:</strong> Figma and AI Studio pipelines to deliver stable React/Vite interfaces using Lovable, Base44, and Antigravity.</div>
                    <div>• <strong>Model API Connections:</strong> Dynamic implementation of Anthropic, Google Gemini, and OpenAI API integrations.</div>
                    <div>• <strong>Task Automation:</strong> Writing clean technical documentation, automated testing hooks, and continuous integration scripts.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Personal Projects */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Key Personal Projects</h2>
              <div className="space-y-3 text-xs">
                <div>
                  <h3 className="font-bold">TFG-GRAVITY <span className="font-normal text-gray-600">(Python, Flask, MySQL, OpenAI)</span></h3>
                  <p className="text-gray-700 mt-0.5">Automated SaaS billing and software licensing platform featuring PayPal integrations and a customized support AI chatbot.</p>
                </div>
                <div>
                  <h3 className="font-bold">Gravity Gate Pass <span className="font-normal text-gray-650">(JavaScript, Web Security)</span></h3>
                  <p className="text-gray-700 mt-0.5">Self-managed digital ticket validation system using secure QR credentials for fast validation at large-scale entries.</p>
                </div>
                <div>
                  <h3 className="font-bold">PRESUPUESTOS <span className="font-normal text-gray-150">(Web App, MySQL)</span></h3>
                  <p className="text-gray-700 mt-0.5">An agile client estimating tool designed to automate cost approximations and generate printable PDFs of quotations.</p>
                </div>
                <div>
                  <h3 className="font-bold">KANDIDO <span className="font-normal text-gray-150">(AI-Powered SaaS Recruiter Tracking)</span></h3>
                  <p className="text-gray-700 mt-0.5">Modular recruitment interface evaluating CVs using large language models to categorize talent metrics effortlessly.</p>
                </div>
                <div>
                  <h3 className="font-bold">Soccer World <span className="font-normal text-gray-150">(HTML/CSS, JavaScript)</span></h3>
                  <p className="text-gray-700 mt-0.5">Modern sports e-commerce prototype tracking and serving global league uniforms and jersey collections with responsive workflows.</p>
                </div>
              </div>
            </div>

            {/* Project Contributions */}
            <div>
              <h2 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2 uppercase text-gray-900">Project Contributions</h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                <div>
                  <h3 className="font-bold">Daytrading Automation Platform</h3>
                  <p className="text-gray-700 mt-0.5">Algorithmic trading strategies setup using Python and direct order flows using the WeBull SDK.</p>
                </div>
                <div>
                  <h3 className="font-bold">Grupo Migasa Logistics Optimization</h3>
                  <p className="text-gray-700 mt-0.5">Mathematical modeling and linear programming to optimize olive oil heavy logistics and distribution tankers.</p>
                </div>
                <div>
                  <h3 className="font-bold">AI Robotics Vision System</h3>
                  <p className="text-gray-700 mt-0.5">Deep neural network (CNN) pipelines for voxel object recognition using Unreal Engine for synthetic data modeling.</p>
                </div>
                <div>
                  <h3 className="font-bold">MyFoldr.io & Silent Education</h3>
                  <p className="text-gray-700 mt-0.5">Frontend integrations in Angular / Go backends for secure cloud file sharing and IoT smart classroom noise sensors.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
