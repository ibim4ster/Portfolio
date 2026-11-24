import React, { useMemo, useState } from 'react';
import { ArrowUpRight, ChevronRight, KeyRound } from 'lucide-react';
import type { Language } from '../translations';

// Projects are shown two ways:
//  1. "Featured": the strongest work, each one as a big retro window with everything visible.
//  2. "Directory": everything else as a compact DIR-style listing; each row opens in place.

const FEATURED = ['swaap-media', 'kandido', 'tfg', 'gatepass', 'presupuestos'];

const COPY = {
  es: {
    featured: 'DESTACADOS',
    featuredSub: 'Lo mejor que he hecho, con demo para probar.',
    dir: 'TODO LO DEMÁS',
    dirSub: 'El resto de proyectos, apps y colaboraciones. Pulsa una fila para ver el detalle.',
    all: 'TODOS',
    kinds: { personal: 'PROPIO', mobile: 'MÓVIL', additional: 'COLABORACIÓN' },
    filters: { personal: 'PROPIOS', mobile: 'APPS MÓVILES', additional: 'COLABORACIONES' },
    cols: ['NOMBRE', 'TIPO', 'AÑO', 'TECNOLOGÍAS'],
    did: 'QUÉ HICE',
    stack: 'STACK',
    files: (n: number) => `${n} archivo${n === 1 ? '' : 's'}`,
    open: 'Abrir',
  },
  en: {
    featured: 'FEATURED',
    featuredSub: 'My best work, with live demos to try.',
    dir: 'EVERYTHING ELSE',
    dirSub: 'The rest of my projects, apps and collaborations. Click a row to see the details.',
    all: 'ALL',
    kinds: { personal: 'OWN', mobile: 'MOBILE', additional: 'COLLAB' },
    filters: { personal: 'OWN', mobile: 'MOBILE APPS', additional: 'COLLABORATIONS' },
    cols: ['NAME', 'TYPE', 'YEAR', 'TECH'],
    did: 'WHAT I DID',
    stack: 'STACK',
    files: (n: number) => `${n} file${n === 1 ? '' : 's'}`,
    open: 'Open',
  },
} as const;

type Kind = 'personal' | 'mobile' | 'additional';
type Link = { type: string; url: string };
interface Item {
  id: string;
  name: string;
  year?: string;
  kind: Kind;
  desc: string;
  image?: string;
  points: string[];
  tech: string[];
  creds?: { user: string; pass: string };
  links: Link[];
}

const fileName = (name: string) =>
  name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z0-9]+/g, '_').replace(/^_|_$/g, '') + '.EXE';

function normalize(categories: Record<string, any>): Item[] {
  return (Object.entries(categories) as [Kind, any][]).flatMap(([kind, cat]) =>
    cat.items.map((p: any): Item => {
      const m = String(p.title).match(/\((\d{4})\)\s*$/);
      return {
        id: p.id,
        name: String(p.title).replace(/\s*\(\d{4}\)\s*$/, ''),
        year: m?.[1],
        kind,
        desc: p.desc,
        image: p.image,
        points: p.contributions ?? [],
        tech: String(p.tech ?? '').split(',').map((s: string) => s.trim()).filter(Boolean),
        creds: p.creds,
        links: p.links ?? [],
      };
    })
  );
}

function LinkButtons({ links, t, big = false }: { links: Link[]; t: any; big?: boolean }) {
  const label = (type: string) =>
    (type === 'repo' ? t.projects.repo : type === 'doc' ? t.projects.doc : type === 'board' ? t.projects.board : t.projects.demo).replace(/^>\s*/, '');
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className={`font-mono font-bold border-2 inline-flex items-center gap-2 transition-colors ${big ? 'px-4 py-2 text-sm' : 'px-3 py-1.5 text-xs'} ${
            l.type === 'demo'
              ? 'border-primary bg-primary text-bg hover:bg-bg hover:text-primary'
              : 'border-primary/60 text-primary hover:border-primary hover:bg-primary/10'
          }`}
        >
          {label(l.type)} <ArrowUpRight className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

function Creds({ creds, t }: { creds: { user: string; pass: string }; t: any }) {
  return (
    <div className="font-mono text-xs md:text-sm border border-dashed border-secondary text-secondary px-3 py-2 inline-flex flex-wrap items-center gap-x-4 gap-y-1">
      <span className="flex items-center gap-2 font-bold"><KeyRound className="w-4 h-4" /> {t.projects.tryIt}</span>
      <span>{t.projects.credentials.user}: <b className="text-white">{creds.user}</b></span>
      <span>{t.projects.credentials.pass}: <b className="text-white">{creds.pass}</b></span>
    </div>
  );
}

function FeaturedWindow({ p, i, t, c }: { p: Item; i: number; t: any; c: (typeof COPY)[Language] }) {
  const demo = p.links.find((l) => l.type === 'demo');
  const flip = i % 2 === 1;
  return (
    <article className="reveal border-2 border-primary bg-bg shadow-[8px_8px_0px_var(--theme-primary)]">
      <header className="bg-primary text-bg font-mono font-bold text-xs md:text-sm px-3 py-1.5 flex items-center justify-between gap-3">
        <span className="truncate">[{String(i + 1).padStart(2, '0')}] {fileName(p.name)}</span>
        <span className="shrink-0 flex items-center gap-3">
          {p.year}
          <span aria-hidden="true" className="hidden sm:inline">▣ ▢ ✕</span>
        </span>
      </header>
      <div className={`grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]`}>
        <a
          href={demo?.url}
          target={demo ? '_blank' : undefined}
          rel="noreferrer"
          aria-label={demo ? `${c.open} ${p.name}` : undefined}
          className={`group relative block bg-black overflow-hidden border-b-2 lg:border-b-0 border-primary ${flip ? 'lg:order-2 lg:border-l-2' : 'lg:border-r-2'} ${demo ? 'cursor-pointer' : 'cursor-default'}`}
        >
          <div className="absolute inset-0 bg-cyber-grid opacity-40"></div>
          {p.image && (
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="relative w-full h-full min-h-[220px] aspect-[16/10] lg:aspect-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
          {demo && (
            <span className="absolute bottom-3 right-3 font-mono text-xs font-bold bg-bg text-primary border border-primary px-2 py-1 flex items-center gap-1 opacity-90 group-hover:bg-primary group-hover:text-bg transition-colors">
              {c.open} <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          )}
        </a>
        <div className="p-6 md:p-8 flex flex-col gap-5">
          <div>
            <h4 className="font-sans text-3xl md:text-4xl font-black text-white uppercase tracking-tight">{p.name}</h4>
            <p className="font-sans text-gray-200 text-base md:text-lg mt-3 leading-relaxed">{p.desc}</p>
          </div>
          <div>
            <div className="font-mono text-xs text-primary/70 tracking-widest mb-2">{c.did}</div>
            <ul className="font-sans text-gray-300 text-sm md:text-base space-y-1.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2"><span className="text-secondary font-mono">›</span>{pt}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((tag) => (
              <span key={tag} className="font-mono text-xs border border-primary/50 text-primary px-2 py-1">{tag}</span>
            ))}
          </div>
          {p.creds && <Creds creds={p.creds} t={t} />}
          <div className="mt-auto pt-1"><LinkButtons links={p.links} t={t} big /></div>
        </div>
      </div>
    </article>
  );
}

function DirRow({ p, t, c, open, onToggle }: { p: Item; t: any; c: (typeof COPY)[Language]; open: boolean; onToggle: () => void }) {
  return (
    <li className={`border-b border-primary/25 ${open ? 'bg-primary/10' : ''}`}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left grid grid-cols-[1.25rem_1fr_auto] md:grid-cols-[1.25rem_minmax(0,1.4fr)_8.5rem_3.5rem_minmax(0,1.6fr)] gap-x-3 items-center px-3 py-3 font-mono text-sm hover:bg-primary hover:text-bg group transition-colors"
      >
        <ChevronRight className={`w-4 h-4 text-primary group-hover:text-bg transition-transform ${open ? 'rotate-90' : ''}`} />
        <span className="font-bold text-white group-hover:text-bg truncate">{p.name}</span>
        <span className="md:hidden text-xs text-primary/70 group-hover:text-bg">{p.year}</span>
        <span className="hidden md:block text-xs text-secondary group-hover:text-bg">&lt;{c.kinds[p.kind]}&gt;</span>
        <span className="hidden md:block text-primary/80 group-hover:text-bg">{p.year ?? '—'}</span>
        <span className="hidden md:block text-gray-400 group-hover:text-bg truncate text-xs">{p.tech.join(' · ')}</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className={`px-3 md:pl-11 pb-6 pt-1 grid gap-6 ${p.image ? 'md:grid-cols-[1fr_16rem]' : ''}`}>
            <div className="flex flex-col gap-4">
              <p className="md:hidden font-mono text-xs text-secondary">&lt;{c.kinds[p.kind]}&gt; · {p.tech.join(' · ')}</p>
              <p className="font-sans text-gray-200 text-base">{p.desc}</p>
              {p.points.length > 0 && (
                <ul className="font-sans text-gray-300 text-sm space-y-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2"><span className="text-secondary font-mono">›</span>{pt}</li>
                  ))}
                </ul>
              )}
              {p.creds && <Creds creds={p.creds} t={t} />}
              {p.links.length > 0 && <LinkButtons links={p.links} t={t} />}
            </div>
            {p.image && (
              <img src={p.image} alt={p.name} loading="lazy" className="w-full aspect-[16/10] object-cover object-top border-2 border-primary/60" />
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export function Projects({ t, lang }: { t: any; lang: Language }) {
  const c = COPY[lang];
  const items = useMemo(() => normalize(t.projects.categories), [t]);
  const featured = FEATURED.map((id) => items.find((p) => p.id === id)).filter(Boolean) as Item[];
  const rest = items.filter((p) => !FEATURED.includes(p.id));
  const [filter, setFilter] = useState<'all' | Kind>('all');
  const [openId, setOpenId] = useState<string | null>(null);
  const shown = filter === 'all' ? rest : rest.filter((p) => p.kind === filter);
  const counts = (k: Kind) => rest.filter((p) => p.kind === k).length;

  return (
    <div className="relative z-10 flex flex-col gap-20">
      {/* Featured */}
      <div>
        <h3 className="font-mono text-xl md:text-2xl font-bold text-primary mb-2 reveal">&gt; {c.featured}</h3>
        <p className="font-mono text-gray-400 text-sm mb-10 reveal">{c.featuredSub}</p>
        <div className="flex flex-col gap-14">
          {featured.map((p, i) => <FeaturedWindow key={p.id} p={p} i={i} t={t} c={c} />)}
        </div>
      </div>

      {/* Directory listing */}
      <div className="reveal">
        <h3 className="font-mono text-xl md:text-2xl font-bold text-primary mb-2">&gt; {c.dir}</h3>
        <p className="font-mono text-gray-400 text-sm mb-6">{c.dirSub}</p>

        <div className="flex flex-wrap gap-3 mb-6" role="group">
          {(['all', 'personal', 'mobile', 'additional'] as const).map((k) => (
            <button
              key={k}
              onClick={() => { setFilter(k); setOpenId(null); }}
              aria-pressed={filter === k}
              className={`px-3 py-1.5 font-mono text-xs md:text-sm border transition-colors ${filter === k ? 'bg-primary text-bg border-primary' : 'text-primary border-primary/50 hover:border-primary'}`}
            >
              {k === 'all' ? `${c.all} (${rest.length})` : `${c.filters[k]} (${counts(k)})`}
            </button>
          ))}
        </div>

        <div className="border-2 border-primary bg-bg/80">
          <div className="hidden md:grid grid-cols-[1.25rem_minmax(0,1.4fr)_8.5rem_3.5rem_minmax(0,1.6fr)] gap-x-3 px-3 py-2 bg-primary text-bg font-mono text-xs font-bold">
            <span></span>
            {c.cols.map((col) => <span key={col}>{col}</span>)}
          </div>
          <ul>
            {shown.map((p) => (
              <DirRow key={p.id} p={p} t={t} c={c} open={openId === p.id} onToggle={() => setOpenId(openId === p.id ? null : p.id)} />
            ))}
          </ul>
          <div className="px-3 py-2 font-mono text-xs text-primary/70 flex justify-between">
            <span>{c.files(shown.length)}</span>
            <span>C:\IBAI\PROYECTOS&gt;<span className="animate-pulse">_</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
