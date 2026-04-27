// Swimmer animation track + scroll meter logic
const { useEffect: useEffectSwim, useState: useStateSwim, useRef: useRefSwim } = React;

function SwimmerTrack({ intensity }) {
  const [progress, setProgress] = useStateSwim(0);
  const [phase, setPhase] = useStateSwim(0);

  useEffectSwim(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffectSwim(() => {
    if (intensity === 'off') return;
    let raf;
    const tick = () => {
      setPhase(p => p + (intensity === 'low' ? 0.04 : 0.09));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [intensity]);

  if (intensity === 'off') return null;

  // swimmer drifts diagonally down + horizontally across based on scroll
  // bounces left-right between lanes (full width with margin)
  const cycle = (progress * 8) % 2; // 0..2 across the page
  const dir = cycle < 1 ? 1 : -1;
  const xPct = dir === 1 ? cycle * 100 : (2 - cycle) * 100; // 0-100
  const yPct = progress * 100;

  // tail bubbles
  const bubbles = [];
  for (let i = 0; i < 6; i++) {
    bubbles.push({
      x: xPct - dir * (i * 3 + 3),
      y: yPct + Math.sin(phase * 0.3 + i) * 1.5,
      o: 1 - i * 0.15,
      s: 4 - i * 0.4
    });
  }

  const wobble = Math.sin(phase * 0.2) * 4;
  const armSwing = Math.sin(phase * 0.4) * 30;

  return (
    <div className="swimmer-track" style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 35,
      mixBlendMode: 'screen'
    }}>
      {bubbles.map((b, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `calc(${b.x}vw - ${b.s/2}px)`,
          top: `calc(${b.y}vh - ${b.s/2}px)`,
          width: b.s + 'px', height: b.s + 'px',
          borderRadius: '50%',
          background: 'rgba(34,211,238,0.6)',
          opacity: b.o * 0.8,
          transition: 'left 0.15s linear, top 0.15s linear'
        }}/>
      ))}
      <div style={{
        position: 'absolute',
        left: `calc(${xPct}vw - 24px)`,
        top: `calc(${yPct}vh - 12px + ${wobble}px)`,
        width: '48px', height: '24px',
        transform: `scaleX(${dir})`,
        transition: 'left 0.15s linear, top 0.15s linear',
        opacity: 0.85
      }}>
        <svg viewBox="0 0 48 24" width="48" height="24">
          {/* body */}
          <ellipse cx="24" cy="12" rx="14" ry="3.5" fill="#fbbf24"/>
          {/* head */}
          <circle cx="36" cy="12" r="3.5" fill="#fbbf24"/>
          {/* arm */}
          <path d={`M 30 12 Q ${30 + armSwing*0.3} ${12 - 6} ${30 + armSwing*0.5} ${12 - armSwing*0.15}`} stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round"/>
          {/* legs / kick */}
          <path d={`M 10 12 L ${4 + Math.sin(phase*0.5)*3} ${12 + Math.sin(phase*0.5)*4}`} stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
          <path d={`M 10 12 L ${4 + Math.sin(phase*0.5+1)*3} ${12 - Math.sin(phase*0.5)*4}`} stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        </svg>
      </div>
    </div>
  );
}

window.SwimmerTrack = SwimmerTrack;
