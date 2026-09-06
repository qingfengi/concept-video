import React from 'react';
import {
  AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig,
} from 'remotion';
import {C, CAT} from './theme';

export const Cat: React.FC<{x?: number; y?: number; scale?: number; flip?: boolean}> = ({x = 120, y = 0.68, scale = 1, flip}) => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();
  const pop = spring({frame, fps, config: {damping: 15, stiffness: 150}});
  const lift = interpolate(pop, [0, 1], [60, 0]);
  return (
    <img
      src={CAT}
      style={{
        position: 'absolute',
        left: x,
        top: height * y + lift,
        width: 220 * scale,
        imageRendering: 'pixelated',
        transform: flip ? 'scaleX(-1)' : undefined,
        opacity: pop,
      }}
    />
  );
};

export const Title: React.FC<{text: string; sub?: string}> = ({text, sub}) => (
  <div style={{position: 'absolute', left: 60, top: 60, color: C.ink}}>
    <div style={{fontSize: 64, fontWeight: 900, letterSpacing: 2, background: 'rgba(255,253,244,.85)', padding: '8px 20px', borderRadius: 10, border: `4px solid ${C.edge}`}}>{text}</div>
    {sub ? <div style={{fontSize: 28, marginTop: 12, color: C.ink, opacity: 0.7, padding: '6px 14px', background: 'rgba(255,253,244,.7)', borderRadius: 8}}>{sub}</div> : null}
  </div>
);

export const PaperCard: React.FC<{x: number; y: number; w?: number; h?: number; label?: string; tone?:string}> = ({x, y, w = 180, h = 120, label, tone = C.card}) => (
  <div style={{
    position: 'absolute', left: x, top: y, width: w, height: h,
    background: tone, border: `4px solid ${C.edge}`, borderRadius: 12,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: C.ink, fontSize: 40, fontWeight: 700,
  }}>{label}</div>
);
