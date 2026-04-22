import React from 'react';
import { Briefcase, Gamepad2, LineChart, Smartphone, FolderSync, Volume2, Calendar, MessageSquare, Send, Code2, ReceiptEuro, BrainCircuit, Orbit, Fingerprint } from 'lucide-react';
import { translations } from '../translations';

interface ProjectCardProps {
  project: any;
  idx: number;
  flippedCards: Record<string, boolean>;
  setFlippedCards: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  themeClass: string;
  gridClass: string;
  textClass: string;
  borderClass: string;
  bgClass: string;
  shadowClass: string;
  t: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project, idx, flippedCards, setFlippedCards,
  themeClass, gridClass, textClass, borderClass, bgClass, shadowClass, t
}) => {
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
    <div className={`balatro-card ${themeClass} group reveal delay-${(idx % 3 + 1) * 100} auto-animate`}>
      <div className={`flip-card-inner ${flippedCards[project.id] ? 'flipped' : ''}`}>
        {/* Front of Card */}
        <div className="flip-card-front">
          <div className={`balatro-banner ${themeClass}`}>{project.title.toUpperCase()}</div>
          <div className={`balatro-illustration ${themeClass}`}>
            <div className={`absolute inset-0 ${gridClass} opacity-50`}></div>
            {project.image ? (
              <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover relative z-10" />
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
                className={`balatro-btn ${textClass} hover:text-bg hover:${bgClass} [&.mobile-active]:text-bg [&.mobile-active]:${bgClass} font-mono font-bold block border ${borderClass} px-4 py-2 text-center transition-colors w-full focus:outline-none focus:ring-2 focus:ring-${textClass} focus:ring-offset-2 focus:ring-offset-bg`}
              >
                {t.projects.more}
              </button>
              
              {project.links && project.links.map((link: any, lIdx: number) => (
                <a key={lIdx} href={link.url} target="_blank" rel="noreferrer" className={`balatro-btn ${link.type === 'repo' ? 'text-white hover:text-white hover:bg-white/20 border-white/50' : `${textClass} hover:text-bg hover:${bgClass} border-${borderClass}`} font-mono font-bold block border px-4 py-2 text-center transition-colors focus:outline-none focus:ring-2 focus:ring-${textClass} focus:ring-offset-2 focus:ring-offset-bg`}>
                  {link.type === 'repo' ? t.projects.repo : link.type === 'doc' ? t.projects.doc : t.projects.demo}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="flip-card-back p-6 relative overflow-y-auto">
          <div className={`absolute top-0 left-0 w-full h-1 scanner-line ${isViolet(themeClass) ? 'scanner-line-violet' : isBlue(themeClass) ? 'scanner-line-blue' : ''}`}></div>
          <h4 className={`text-xl font-bold ${textClass} mb-4 glitch-text font-sans`} data-text={project.title}>{project.title}</h4>
          
          <div className="mb-4">
            <h5 className="text-white font-bold text-sm mb-2">{t.projects.contributions}</h5>
            <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
              {project.contributions.map((c: string, i: number) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h5 className="text-white font-bold text-sm mb-2">{t.projects.tech}</h5>
            <p className="text-sm text-gray-400 border-l-2 border-primary/50 pl-3">{project.tech}</p>
          </div>
          
          <div className="flex flex-col gap-3 mt-auto pt-4">
            <button 
              onClick={() => setFlippedCards(prev => ({ ...prev, [project.id]: false }))}
              className={`balatro-btn ${textClass} hover:text-bg hover:${bgClass} [&.mobile-active]:text-bg [&.mobile-active]:${bgClass} font-mono font-bold block border ${borderClass} px-4 py-2 text-center transition-colors w-full focus:outline-none focus:ring-2 focus:ring-${textClass} focus:ring-offset-2 focus:ring-offset-bg`}
            >
              {t.projects.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function isViolet(themeClass: string) { return themeClass.includes('violet'); }
function isBlue(themeClass: string) { return themeClass.includes('blue'); }
