import React, { useEffect, useRef, useState } from 'react';

const RetroCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text'>('default');
  const [pulse, setPulse] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Detect fine pointer for desktop devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      const target = e.target as HTMLElement;
      if (target.closest('input, textarea, .cursor-text')) {
        setCursorType('text');
      } else if (target.closest('a, button, [role="button"], .cursor-pointer')) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const mouseDown = () => {
      setPulse(p => p + 1);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{ willChange: 'transform' }}
    >
      <div 
        key={pulse}
        className={`origin-top-left ${pulse > 0 ? 'animate-cursor-pulse' : ''}`}
      >
        {/* Cursor Default (Flecha Clásica Retro) */}
        {cursorType === 'default' && (
          <svg width="32" height="32" viewBox="0 0 24 24" className="drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]">
            <path 
              d="M 2 2 L 2 18 L 6 14 L 9 21 L 12 20 L 9 13 L 14 13 Z" 
              fill="var(--theme-primary)" 
              stroke="#000000" 
              strokeWidth="1.5" 
              strokeLinejoin="miter" 
              strokeMiterlimit="8"
            />
          </svg>
        )}

        {/* Cursor Pointer (Mano Retro) */}
        {cursorType === 'pointer' && (
          <svg width="32" height="32" viewBox="0 0 24 24" className="drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)] -translate-x-[6px] -translate-y-[2px]">
            {/* Outer hand shape */}
            <path 
              d="M 10 1 H 13 V 5 H 15 V 7 H 17 V 9 H 19 V 15 H 17 V 18 H 15 V 21 H 8 V 18 H 6 V 15 H 4 V 10 H 8 V 1 Z" 
              fill="var(--theme-primary)" 
              stroke="#000000" 
              strokeWidth="1.5" 
              strokeLinejoin="miter" 
            />
            {/* Inner finger lines */}
            <path 
              d="M 13 5 V 12 M 15 7 V 12 M 17 9 V 12 M 8 10 V 16" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="1.5" 
              strokeLinecap="square" 
            />
          </svg>
        )}

        {/* Cursor Text (I-Beam Retro) */}
        {cursorType === 'text' && (
          <svg width="32" height="32" viewBox="0 0 24 24" className="drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)] -translate-x-[12px] -translate-y-[12px]">
            <path 
              d="M 12 4 L 12 20 M 8 4 L 16 4 M 8 20 L 16 20" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="3.5" 
              strokeLinecap="square"
            />
            <path 
              d="M 12 4 L 12 20 M 8 4 L 16 4 M 8 20 L 16 20" 
              fill="none" 
              stroke="var(--theme-primary)" 
              strokeWidth="1.5" 
              strokeLinecap="square"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default RetroCursor;
