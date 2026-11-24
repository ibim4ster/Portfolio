/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { translations, Language } from './translations';
import { Cpu, ShieldCheck, Calculator, Orbit, Fingerprint, ReceiptEuro, Linkedin, Github, Mail, Phone, Code2, Database, Wrench, Palette, Menu, X, Smartphone, Briefcase, Gamepad2, LineChart, FolderSync, Volume2, Calendar, MessageSquare, Send, BrainCircuit, Download } from 'lucide-react';
import { FaJava, FaDatabase, FaCashRegister, FaVideo, FaPhotoVideo, FaAws } from 'react-icons/fa';
import { SiPython, SiPhp, SiHtml5, SiVirtualbox, SiVmware, SiGit, SiAndroidstudio, SiIntellijidea, SiCanva, SiDavinciresolve, SiCss, SiJavascript, SiMongodb, SiVegas, SiSage, SiAgora, SiFlutter, SiAngular, SiRaspberrypi, SiGo, SiCplusplus, SiUnrealengine, SiUnity, SiReact } from 'react-icons/si';
import { BsFiletypeXml } from 'react-icons/bs';
import { TbChartLine, TbBrandCSharp, TbBrandAdobePremier } from 'react-icons/tb';
import { DiMsqlServer, DiVisualstudio, DiPhotoshop } from 'react-icons/di';
import { Projects } from './components/Projects';

const NAV = ['home', 'about', 'skills', 'experience', 'projects', 'contact'] as const;
type SectionId = typeof NAV[number];

const UI = {
  es: {
    menuTitle: 'IGF-OS · MENÚ PRINCIPAL',
    menuHint: 'Elige por dónde empezar · o pulsa su número en el teclado',
    routesTitle: '¿QUÉ BUSCAS?',
    routes: [
      { who: 'Busco a alguien para mi empresa', go: 'experience', cta: 'Ver experiencia' },
      { who: 'Necesito una web, app, ERP o vídeo', go: 'projects', cta: 'Ver proyectos' },
      { who: 'Quiero hablar contigo', go: 'contact', cta: 'Escribirme' },
    ],
    files: {
      about: ['SOBRE_MI.TXT', 'Quién soy, estudios y certificación'],
      skills: ['HABILIDADES.SYS', 'Con qué trabajo'],
      experience: ['EXPERIENCIA.LOG', 'Dónde he trabajado'],
      projects: ['PROYECTOS.EXE', 'Lo que he construido'],
      contact: ['CONTACTO.CFG', 'Escríbeme un mensaje'],
    },
    paths: { home: 'INICIO', about: 'SOBRE_MI', skills: 'HABILIDADES', experience: 'EXPERIENCIA', projects: 'PROYECTOS', contact: 'CONTACTO' },
    subs: {
      about: 'Quién soy, qué he estudiado y qué certificaciones tengo.',
      skills: 'Los lenguajes, programas y herramientas que uso en el día a día.',
      experience: 'Dónde he trabajado y qué hacía en cada sitio, de lo más reciente a lo más antiguo.',
      projects: 'Primero lo más importante, en grande. Debajo, todo lo demás en una lista que puedes abrir.',
    },
    keys: 'TECLAS',
    read: 'LEÍDO',
  },
  en: {
    menuTitle: 'IGF-OS · MAIN MENU',
    menuHint: 'Pick where to start · or press its number on your keyboard',
    routesTitle: 'WHAT ARE YOU LOOKING FOR?',
    routes: [
      { who: "I'm hiring for my company", go: 'experience', cta: 'See experience' },
      { who: 'I need a website, app, ERP or video', go: 'projects', cta: 'See projects' },
      { who: 'I just want to talk', go: 'contact', cta: 'Message me' },
    ],
    files: {
      about: ['ABOUT_ME.TXT', 'Who I am, studies and certification'],
      skills: ['SKILLS.SYS', 'What I work with'],
      experience: ['EXPERIENCE.LOG', "Where I've worked"],
      projects: ['PROJECTS.EXE', "What I've built"],
      contact: ['CONTACT.CFG', 'Send me a message'],
    },
    paths: { home: 'HOME', about: 'ABOUT_ME', skills: 'SKILLS', experience: 'EXPERIENCE', projects: 'PROJECTS', contact: 'CONTACT' },
    subs: {
      about: "Who I am, what I've studied and which certifications I hold.",
      skills: 'The languages, software and tools I use every day.',
      experience: "Where I've worked and what I did there, newest first.",
      projects: 'The most important work first, in full. Below it, everything else in a list you can open.',
    },
    keys: 'KEYS',
    read: 'READ',
  },
} as const;

function SectionHead({ idx, path, title, sub, className = '' }: { idx: number; path: string; title: string; sub?: string; className?: string }) {
  return (
    <div className={`mb-12 reveal relative z-10 ${className}`}>
      <div className="font-mono text-primary/80 text-xs md:text-sm mb-3 flex items-center gap-3 flex-wrap">
        <span className="bg-primary text-bg font-bold px-2 py-0.5">{String(idx).padStart(2, '0')}/05</span>
        <span>C:\IBAI\{path}&gt;<span className="animate-pulse">_</span></span>
      </div>
      <h2 className="font-sans text-3xl md:text-6xl font-bold text-white uppercase glitch-text" data-text={title}>{title}</h2>
      {sub && <p className="font-mono text-gray-300 text-sm md:text-lg mt-4 max-w-3xl">{sub}</p>}
    </div>
  );
}
const CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/ibairakelmario@gmail.com';
const FIELD = 'w-full bg-transparent border border-primary/50 text-white p-3 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.3)] transition-all placeholder:text-gray-600';

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
  const [matrixMode, setMatrixMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [progress, setProgress] = useState(0);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  
  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [terminalInput, setTerminalInput] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const t = translations[lang];
  const ui = UI[lang];
  const projectCount = Object.values(t.projects.categories).reduce((n, c: any) => n + c.items.length, 0);
  const fullText = t.boot.init;

  // Dynamic document title & Back to top visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "⚠️ Conexión perdida..." : "Portfolio | Ibai Gallego Faces";
    };
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
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

  // Enter (outside inputs) or scrolling on the boot screen also opens the site
  useEffect(() => {
    if (hasAccessed) return;
    let touchY = 0;
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement | null)?.tagName;
      if (e.key === 'Enter' && tag !== 'INPUT' && tag !== 'TEXTAREA') handleAccess();
    };
    const onWheel = (e: WheelEvent) => { if (e.deltaY > 20) handleAccess(); };
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => { if (touchY - e.touches[0].clientY > 40) handleAccess(); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [hasAccessed]);

  // Number keys jump between sections (0 = top, 1-5 = sections)
  useEffect(() => {
    if (!hasAccessed) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.metaKey || e.ctrlKey || e.altKey) return;
      const n = Number(e.key);
      if (e.key.length === 1 && n >= 0 && n <= 5) {
        document.getElementById(NAV[n])?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [hasAccessed]);

  // Highlight the menu item of the section on screen
  useEffect(() => {
    if (!hasAccessed) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [hasAccessed]);

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

  const accessing = useRef(false);
  const handleAccess = () => {
    if (accessing.current) return;
    accessing.current = true;
    setFlash(true);
    setTimeout(() => {
      setHasAccessed(true);
      setTimeout(() => {
        document.getElementById('launcher')?.scrollIntoView({ behavior: isMobile ? 'auto' : 'smooth', block: 'start' });
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
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                aria-current={activeSection === item ? 'true' : undefined}
                className={`font-mono text-sm uppercase tracking-wider transition-colors border-b-2 pb-1 ${activeSection === item ? 'text-primary border-primary' : 'text-gray-300 border-transparent hover:text-primary'}`}
              >
                {t.nav.menu[item as keyof typeof t.nav.menu]}
              </button>
            ))}
            <a 
              href={t.nav.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--theme-tertiary)] bg-bg text-[var(--theme-tertiary)] px-3 py-1 font-bold hover:bg-[var(--theme-tertiary)] hover:text-bg transition-colors text-sm flex items-center gap-2 cursor-pointer"
              id="btn-download-cv"
              title={t.nav.cvLong}
            >
              <Download className="w-4 h-4" /> {lang === 'es' ? 'CV' : 'CV'}
            </a>
            <button 
              onClick={toggleTheme}
              title={t.nav.themeTitle}
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
          <div className="flex lg:hidden items-center gap-3">
            <a 
              href={t.nav.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--theme-tertiary)] bg-bg text-[var(--theme-tertiary)] px-2 py-1 font-bold hover:bg-[var(--theme-tertiary)] hover:text-bg transition-colors text-xs flex items-center gap-1 cursor-pointer"
              id="btn-download-cv-mobile"
            >
              <Download className="w-3 h-3" /> CV
            </a>
            <button 
              onClick={toggleTheme}
              title={t.nav.themeTitle}
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
        <div className="fixed top-[60px] left-0 right-0 bg-bg border-b border-primary/30 z-[49] flex flex-col lg:hidden">
          {NAV.map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className={`hover:text-primary hover:bg-primary/10 font-mono text-sm uppercase tracking-wider transition-colors py-4 px-6 text-left border-b border-gray-800 last:border-none ${activeSection === item ? 'text-primary bg-primary/10' : 'text-gray-300'}`}
            >
              {t.nav.menu[item as keyof typeof t.nav.menu]}
            </button>
          ))}
          <a 
            href={t.nav.cvFile}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-[var(--theme-tertiary)] hover:bg-[#FF00FF]/10 font-mono text-sm uppercase tracking-wider transition-colors py-4 px-6 text-left flex items-center gap-2 border-t border-gray-800"
          >
            <Download className="w-4 h-4" /> {t.nav.cvLong}
          </a>
        </div>
      )}

      {/* Language Toggle (Boot Screen) */}
      {!hasAccessed && (
        <div className="fixed top-6 right-6 z-[60] flex gap-4">
          <button 
            onClick={toggleTheme}
              title={t.nav.themeTitle}
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
        <p className="font-mono text-secondary text-base md:text-2xl -mt-8 mb-12 max-w-3xl">
          {t.boot.tagline}
        </p>
        
        {!hasAccessed && (
          <div className="relative z-10 boot-fade-in delay-1000">
            <div className="absolute -inset-2 bg-primary opacity-20 blur-lg animate-pulse rounded-full"></div>
            <button 
              onClick={handleAccess} 
              className="relative font-mono text-primary border-2 border-primary px-8 py-4 bg-bg shadow-[6px_6px_0px_var(--theme-primary)] active:shadow-[0px_0px_0px_var(--theme-primary)] active:translate-x-[6px] active:translate-y-[6px] transition-all uppercase font-bold tracking-widest hover:bg-primary hover:text-bg animate-bounce"
            >
              {t.boot.btn}
            </button>
            <div className="absolute -bottom-9 left-0 text-primary/80 text-xs font-mono whitespace-nowrap">
              &gt; {t.boot.hint}
            </div>
          </div>
        )}
        {hasAccessed && (
          <div id="launcher" className="w-full max-w-6xl grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-6 boot-fade-in scroll-mt-24">
            {/* Retro window: main menu */}
            <div className="border-2 border-primary bg-bg shadow-[8px_8px_0px_var(--theme-primary)]">
              <div className="bg-primary text-bg font-mono font-bold text-xs md:text-sm px-3 py-1.5 flex justify-between items-center">
                <span>{ui.menuTitle}</span>
                <span aria-hidden="true">▣ ▢ ✕</span>
              </div>
              <ul className="font-mono p-2 md:p-3">
                {(['about', 'skills', 'experience', 'projects', 'contact'] as const).map((id, i) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="w-full grid grid-cols-[2.2rem_1fr] md:grid-cols-[2.5rem_auto_1fr] items-center gap-x-3 text-left px-3 py-3 md:py-2.5 text-primary hover:bg-primary hover:text-bg focus:bg-primary focus:text-bg focus:outline-none transition-colors group"
                    >
                      <span className="font-bold">[{i + 1}]</span>
                      <span className="font-bold text-white group-hover:text-bg group-focus:text-bg whitespace-nowrap">
                        {ui.files[id][0]}
                        {id === 'projects' && <span className="ml-2 text-xs opacity-70">({projectCount})</span>}
                      </span>
                      <span className="col-start-2 md:col-start-auto text-xs md:text-sm text-gray-400 group-hover:text-bg group-focus:text-bg">{ui.files[id][1]}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t border-primary/40 px-4 py-2 font-mono text-[11px] md:text-xs text-primary/70">
                &gt; {ui.menuHint}
              </div>
            </div>

            {/* Shortcuts by visitor type */}
            <div className="border-2 border-secondary/70 p-5 md:p-6 font-mono flex flex-col gap-3">
              <div className="text-secondary font-bold text-sm tracking-widest mb-1">{ui.routesTitle}</div>
              {ui.routes.map((r) => (
                <button
                  key={r.go}
                  onClick={() => scrollToSection(r.go)}
                  className="text-left border border-secondary/40 hover:border-secondary hover:bg-secondary/10 px-4 py-3 transition-colors group"
                >
                  <span className="block text-white text-sm md:text-base">{r.who}</span>
                  <span className="block text-secondary text-xs mt-1 group-hover:translate-x-1 transition-transform">→ {r.cta}</span>
                </button>
              ))}
              <a
                href={t.nav.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-center bg-[var(--theme-tertiary)] text-bg font-bold px-4 py-3 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> {t.nav.cvLong}
              </a>
            </div>
          </div>
        )}
      </section>

      {/* REST OF THE SITE (Only visible after access) */}
      {hasAccessed && (
        <div className="boot-fade-in">
          {/* 2. SOBRE MÍ / EL NÚCLEO & DATOS ACADÉMICOS */}
          <section id="about" className="min-h-screen p-6 md:p-24 flex flex-col justify-center relative z-10 scroll-mt-20">
            <SectionHead idx={1} path={ui.paths.about} title={t.core.title} sub={ui.subs.about} />
            
            <div className="clip-cyber border-2 border-primary p-8 md:p-12 bg-noise relative reveal delay-100 hover:shadow-[0_0_20px_rgba(var(--theme-primary-rgb),0.15)] transition-shadow duration-500">
              <p className="font-sans text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                {t.core.bio}
              </p>

              <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary/30 border border-primary/30 mb-8 font-mono">
                {t.core.facts.map((f) => (
                  <div key={f.k} className="bg-bg p-4">
                    <dt className="text-[10px] md:text-xs text-primary/70 tracking-widest mb-1">{f.k}</dt>
                    <dd className="text-white text-sm md:text-base font-bold">{f.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-wrap gap-4 mb-12">
                <a 
                  href={t.nav.cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-bg bg-primary border-2 border-primary px-6 py-3 shadow-[4px_4px_0px_var(--theme-secondary)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase font-bold tracking-widest hover:bg-bg hover:text-primary flex items-center gap-2 cursor-pointer z-10"
                  id="btn-about-cv"
                >
                  <Download className="w-5 h-5 animate-pulse" /> {t.nav.cvLong}
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="font-mono text-secondary border-2 border-secondary px-6 py-3 hover:bg-secondary hover:text-bg transition-all uppercase font-bold tracking-widest flex items-center gap-2"
                >
                  <Send className="w-5 h-5" /> {t.core.contactCta}
                </button>
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

              <h3 className="font-sans text-2xl md:text-4xl font-bold text-primary mt-12 mb-8 uppercase border-b-2 border-primary inline-block pb-2">{t.core.certTitle}</h3>
              {t.core.certs.map((c) => (
                <div key={c.title} className="border border-secondary/60 p-6 bg-black/50 hover:border-secondary [&.mobile-active]:border-secondary transition-colors auto-animate flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="shrink-0 w-20 h-20 border-2 border-secondary text-secondary flex flex-col items-center justify-center font-mono font-black leading-none rotate-[-6deg]">
                    <span className="text-xl">CCP</span>
                    <span className="text-[10px] tracking-widest mt-1">MASTER</span>
                  </div>
                  <div>
                    <div className="text-primary font-mono font-bold mb-2">[ {c.date.toUpperCase()} ]</div>
                    <h4 className="font-sans text-xl md:text-2xl font-bold text-white mb-1">{c.title}</h4>
                    <p className="font-mono text-sm text-secondary mb-4">{c.issuer}</p>
                    <p className="font-sans text-gray-300 text-sm md:text-base mb-4">{c.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs border border-primary/50 text-primary px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. HABILIDADES TÉCNICAS E IA */}
          <section id="skills" className="min-h-screen p-6 md:p-24 flex flex-col justify-center relative z-10 scroll-mt-20">
            <SectionHead idx={2} path={ui.paths.skills} title={t.skills.title} sub={ui.subs.skills} />
            
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
            <SectionHead idx={3} path={ui.paths.experience} title={t.experience.title} sub={ui.subs.experience} />
            
            <div className="relative pl-8 border-l-2 border-primary space-y-12 font-sans">
              {/* Timeline data load effect */}
              <div className="absolute left-[-10px] top-0 bottom-0 w-4 overflow-hidden text-[10px] text-primary/30 leading-none break-all font-mono" aria-hidden="true">
                {Array.from({length: 200}).map(() => "01001011010100101010100101010").join("")}
              </div>

              {t.experience.jobs.map((job, idx) => (
                <div key={idx} className="relative reveal bg-black/40 p-6 md:p-8 border border-primary/30 hover:border-primary [&.mobile-active]:border-primary hover:shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.15)] [&.mobile-active]:shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.15)] transition-all group auto-animate">
                  <div className="absolute -left-[41px] top-8 w-4 h-4 bg-primary group-hover:scale-150 group-[.mobile-active]:scale-150 transition-transform"></div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-primary font-mono font-bold">{job.date}</span>
                    {job.current && (
                      <span className="font-mono text-[10px] md:text-xs font-bold bg-primary text-bg px-2 py-0.5 tracking-widest flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-bg rounded-full animate-pulse"></span>{t.projects.current}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-1">{job.company}</h3>
                  <div className="text-secondary font-mono text-sm md:text-base">{job.title}</div>
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
            <SectionHead idx={4} path={ui.paths.projects} title={t.projects.title} sub={ui.subs.projects} />
            
            <Projects t={t} lang={lang} />
          </section>

          {/* 6. CONTACTO / FORMULARIO */}
          <section id="contact" className="min-h-[70vh] p-6 md:p-24 flex flex-col justify-center relative z-10 bg-black/80 border-t border-primary/20 scroll-mt-20">
            <div className="max-w-4xl mx-auto w-full reveal">
              <div className="font-mono text-primary/80 text-xs md:text-sm mb-3 flex items-center gap-3 flex-wrap">
                <span className="bg-primary text-bg font-bold px-2 py-0.5">05/05</span>
                <span>C:\IBAI\{ui.paths.contact}&gt;<span className="animate-pulse">_</span></span>
              </div>
              <h2 className="font-sans text-3xl md:text-5xl font-bold text-white mb-8 uppercase glitch-text" data-text={lang === 'es' ? "TRANSMISIÓN DIRECTA" : "DIRECT TRANSMISSION"}>
                {lang === 'es' ? "TRANSMISIÓN DIRECTA" : "DIRECT TRANSMISSION"}
              </h2>
              <p className="text-gray-400 font-mono mb-8">
                {lang === 'es' ? "> ¿Un proyecto, una oferta o una duda? Escríbeme y te contesto por email." : "> A project, a job offer or a question? Write to me and I'll reply by email."}
              </p>
              
              {formState === 'sent' ? (
                <div className="border-2 border-primary p-8 font-mono bg-primary/5" role="status">
                  <div className="text-primary text-xl md:text-2xl font-bold mb-2">&gt; {lang === 'es' ? 'TRANSMISIÓN COMPLETADA ✓' : 'TRANSMISSION COMPLETE ✓'}</div>
                  <p className="text-gray-300 mb-6">{lang === 'es' ? 'Mensaje recibido. Te respondo al email que has dejado lo antes posible.' : "Message received. I'll reply to the email you left as soon as I can."}</p>
                  <button onClick={() => setFormState('idle')} className="border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-bg transition-colors font-bold">
                    {lang === 'es' ? '[ ENVIAR OTRO ]' : '[ SEND ANOTHER ]'}
                  </button>
                </div>
              ) : (
              <form
                className="space-y-6 font-mono"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = Object.fromEntries(new FormData(form));
                  if (data._honey) return;
                  setFormState('sending');
                  try {
                    const res = await fetch(CONTACT_ENDPOINT, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                      body: JSON.stringify({
                        name: data.name,
                        email: data.email,
                        message: data.message,
                        _subject: `[PORTFOLIO] ${data.subject}`,
                        _replyto: data.email,
                        _template: 'table',
                        _captcha: 'false',
                      }),
                    });
                    if (!res.ok) throw new Error(String(res.status));
                    form.reset();
                    setFormState('sent');
                  } catch {
                    setFormState('error');
                  }
                }}
              >
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="f-name" className="text-primary text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary inline-block animate-pulse"></span>
                      {lang === 'es' ? 'NOMBRE' : 'NAME'}
                    </label>
                    <input id="f-name" type="text" name="name" required autoComplete="name" className={FIELD} placeholder={lang === 'es' ? '¿Cómo te llamas?' : "What's your name?"} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="f-email" className="text-primary text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary inline-block animate-pulse"></span>
                      {lang === 'es' ? 'EMAIL (para responderte)' : 'EMAIL (so I can reply)'}
                    </label>
                    <input id="f-email" type="email" name="email" required autoComplete="email" className={FIELD} placeholder={lang === 'es' ? 'tu@email.com' : 'you@email.com'} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="f-subject" className="text-primary text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary inline-block animate-pulse"></span>
                    {lang === 'es' ? 'ASUNTO' : 'SUBJECT'}
                  </label>
                  <input id="f-subject" type="text" name="subject" required className={FIELD} placeholder={lang === 'es' ? 'Web, app, ERP, vídeo, oferta de trabajo...' : 'Website, app, ERP, video, job offer...'} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="f-message" className="text-primary text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary inline-block animate-pulse"></span>
                    {lang === 'es' ? 'MENSAJE' : 'MESSAGE'}
                  </label>
                  <textarea id="f-message" name="message" required rows={6} className={`${FIELD} resize-none`} placeholder={lang === 'es' ? 'Cuéntame qué necesitas...' : 'Tell me what you need...'}></textarea>
                </div>

                {formState === 'error' && (
                  <p className="text-[#FF003C] text-sm" role="alert">
                    &gt; {lang === 'es' ? 'Error al enviar. Prueba otra vez o escríbeme a ibairakelmario@gmail.com' : "Couldn't send it. Try again or email me at ibairakelmario@gmail.com"}
                  </p>
                )}

                <button type="submit" disabled={formState === 'sending'} className="w-full md:w-auto px-8 py-3 bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-bg transition-all font-bold flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-wait focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg">
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  {formState === 'sending' ? (lang === 'es' ? 'TRANSMITIENDO...' : 'TRANSMITTING...') : (lang === 'es' ? 'ENVIAR MENSAJE' : 'SEND MESSAGE')}
                </button>
              </form>
              )}
            </div>
          </section>

          {/* 7. FOOTER */}
          <footer className="border-t-2 border-primary bg-bg p-6 lg:pb-12 font-mono text-sm md:text-base flex flex-col xl:flex-row justify-between items-center gap-6 relative z-10 reveal">
            <div className="text-primary font-bold">
              <span className="animate-pulse mr-2">█</span> {t.footer.status}
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-x-8 text-center md:text-left">
              <a href="https://es.linkedin.com/in/ibai-gallego-faces-78623419a" target="_blank" rel="noreferrer" className="text-[var(--theme-tertiary)] hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                <Linkedin className="w-5 h-5" /> LINKEDIN
              </a>
              <a href="mailto:ibairakelmario@gmail.com" className="text-white hover:text-secondary transition-colors flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-5 h-5" /> ibairakelmario@gmail.com
              </a>
              <a href="https://github.com/ibim4ster" target="_blank" rel="noreferrer" className="text-[var(--theme-tertiary)] hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                <Github className="w-5 h-5" /> GITHUB
              </a>
              <a href="tel:+34673350491" className="text-white hover:text-secondary transition-colors flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-5 h-5" /> +34 673 350 491
              </a>
              <a href="tel:+13053960014" className="text-white hover:text-secondary transition-colors flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-5 h-5" /> +1 (305) 396-0014
              </a>
              <span className="text-primary flex items-center justify-center md:justify-start">
                {t.footer.loc}
              </span>
            </div>
          </footer>


        </div>
      )}

      {hasAccessed && (
        <>
        {/* DOS-style status bar (desktop) */}
        <div className="hidden lg:flex fixed bottom-0 left-0 right-0 z-[45] bg-primary text-bg font-mono text-xs font-bold h-7 items-stretch select-none">
          <span className="px-3 flex items-center bg-bg text-primary">IGF-OS</span>
          <span className="px-3 flex items-center border-r border-bg/30">C:\IBAI\{ui.paths[activeSection as SectionId] ?? ui.paths.home}&gt;</span>
          <span className="px-3 flex items-center gap-1 flex-1 min-w-0 overflow-hidden">
            <span className="opacity-70 mr-1 hidden xl:inline">{ui.keys}:</span>
            {NAV.map((id, i) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-1.5 h-full flex items-center whitespace-nowrap hover:bg-bg hover:text-primary ${activeSection === id ? 'bg-bg/20' : ''}`}
              >
                <span className="bg-bg text-primary px-1 mr-1">{i}</span>{t.nav.menu[id]}
              </button>
            ))}
          </span>
          <span className="px-3 flex items-center gap-2 border-l border-bg/30">
            {ui.read}
            <span className="w-12 xl:w-20 h-2 border border-bg/60 relative" aria-hidden="true">
              <span className="absolute inset-y-0 left-0 bg-bg" style={{ width: `${progress}%` }}></span>
            </span>
            {String(progress).padStart(3, '0')}%
          </span>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 lg:bottom-12 right-6 z-50 p-3 bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-bg transition-all shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg focus:ring-primary"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        )}
        </>
      )}
    </div>
  );
}
