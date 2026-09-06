import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, staticFile, Img} from 'remotion';

// ===== 全局风格（锚定"奶油纸感 + 琥珀点缀"）=====
export const C = {
  bg: '#F5EEDC',        // 奶油纸
  card: '#FFFDF4',      // 卡片面
  edge: '#D8CDB4',      // 卡片描边
  ink: '#2B2B3C',       // 深色文字
  accent: '#E8A33D',    // 琥珀
  teal: '#3FA68B',      // 青绿
  blue: '#4A7FBF',      // 像素蓝
};

export const CAT = staticFile('cat_wizard.png');

// 默认 30fps。时长数组：每镜头秒数
export const SHOTS = [
  {key: 's01', sec: 4.0},  // 钩子：长句子
  {key: 's02', sec: 3.0},  // 切开成字块
  {key: 's03', sec: 4.0},  // 发号码牌
  {key: 's04', sec: 3.5},  // 猫头鹰看
  {key: 's05', sec: 3.5},  // 接在后面
  {key: 's06', sec: 4.0},  // 机器翻译
  {key: 's07', sec: 3.5},  // 串成完整句
  {key: 's08', sec: 4.5},  // 总结平衡
];

export const TOTAL_SEC = SHOTS.reduce((a, s) => a + s.sec, 0); // 30s
