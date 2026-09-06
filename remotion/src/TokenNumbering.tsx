import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

// 场景：五个 Token 方块落进来，每个头顶弹出一个号码牌
// 25fps × 75帧 = 3 秒
// 透明背景：供剪映/AE 叠图层用

const COLORS = {
  card: '#F5EEDC',
  cardEdge: '#D8CDB4',
  ink: '#2B2B3C',
  accent: '#E8A33D',
};

const CARD_W = 220;
const CARD_H = 160;
const GAP = 40;
const N = 5;

export const TokenNumbering: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();

  const totalW = N * CARD_W + (N - 1) * GAP;
  const startX = (width - totalW) / 2;
  const floorY = height * 0.62;

  const cards = Array.from({length: N}, (_, i) => {
    // 入场：第 i*5 帧开始，从上方落下（弹簧改软，带明显惯性缓冲）
    const start = i * 5;
    const drop = spring({frame: frame - start, fps, config: {damping: 18, stiffness: 100, mass: 0.8}});
    const y = interpolate(drop, [0, 0.85, 1], [-CARD_H - 80, floorY - 14, floorY]);
    // 落地瞬间轻微压缩-回弹，吸收冲击感
    const squash = interpolate(drop, [0.75, 0.95, 1], [1, 0.92, 1]);

    // 号码牌：落定后 6 帧，带过冲的弹性弹出
    const badgeStart = start + Math.round(14);
    const badgePop = spring({frame: frame - badgeStart, fps, config: {damping: 11, stiffness: 120, mass: 0.6}});
    const badgeScale = interpolate(badgePop, [0, 1], [0, 1]);
    const badgeY = floorY + CARD_H * 0.28;

    const x = startX + i * (CARD_W + GAP);

    return (
      <React.Fragment key={i}>
        {/* 卡片 */}
        <div
          style={{
            position: 'absolute',
            left: x,
            top: y,
            width: CARD_W,
            height: CARD_H,
            background: COLORS.card,
            border: `4px solid ${COLORS.cardEdge}`,
            borderRadius: 14,
            boxShadow: '0 10px 0 rgba(0,0,0,0.08)',
            transform: `scaleY(${squash})`,
            transformOrigin: 'bottom center',
          }}
        />
        {/* 号码牌 */}
        <div
          style={{
            position: 'absolute',
            left: x + CARD_W / 2 - 44,
            top: badgeY,
            width: 88,
            height: 88,
            borderRadius: '50%',
            background: COLORS.accent,
            transform: `scale(${badgeScale})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            fontWeight: 900,
            fontSize: 40,
            color: '#fff',
            boxShadow: '0 6px 0 rgba(0,0,0,0.15)',
          }}
        >
          {100 + i}
        </div>
      </React.Fragment>
    );
  });

  return (
    <AbsoluteFill style={{background: 'transparent'}}>
      {/* 地面参考线（一条淡淡的水平线，让"落下来"有依据）*/}
      <div
        style={{
          position: 'absolute',
          left: width * 0.1,
          top: floorY + CARD_H + 14,
          width: width * 0.8,
          height: 4,
          background: 'rgba(0,0,0,0.06)',
          borderRadius: 2,
        }}
      />
      {cards}
    </AbsoluteFill>
  );
};
