'use client';
import { useEffect, useRef, useState } from 'react';

const DOT_SIZE = 4;
const DOT_GAP = 24;
const DOT_COLOR = 'rgba(120,120,120,0.40)';
const FADE_RADIUS = 180;
const WAVE_AMPLITUDE = 20;
const WAVE_FREQUENCY = 0.002;

interface CursorPosition {
  x: number;
  y: number;
}

interface Dimensions {
  w: number;
  h: number;
}

export default function DotsBackground() {
  const [cursor, setCursor] = useState<CursorPosition>({x: -1000, y: -1000});
  const [dimensions, setDimensions] = useState<Dimensions>({w: 0, h: 0});
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.002; // Approximately 60fps
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const numCols = Math.ceil(dimensions.w / DOT_GAP);
  const numRows = Math.ceil(dimensions.h / DOT_GAP);

  const dots = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const baseX = col * DOT_GAP + DOT_GAP / 2;
      const baseY = row * DOT_GAP + DOT_GAP / 2;
      
      // Create wavy motion
      const waveOffset = Math.sin(baseX * WAVE_FREQUENCY + timeRef.current) * WAVE_AMPLITUDE;
      const dotX = baseX;
      const dotY = baseY + waveOffset;

      const dist = Math.hypot(cursor.x - dotX, cursor.y - dotY);
      const opacity = dist < FADE_RADIUS ? 1 - dist / FADE_RADIUS : 0;
      
      dots.push(
        <div
          key={`dot-${row}-${col}-${dimensions.w}-${dimensions.h}`}
          style={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: '50%',
            background: DOT_COLOR,
            position: 'absolute',
            left: dotX - DOT_SIZE / 2,
            top: dotY - DOT_SIZE / 2,
            pointerEvents: 'none',
            opacity,
            transition: 'opacity 0.3s ease-out',
            transform: `scale(${opacity * 0.5 + 0.5})`,
          }}
        />
      );
    }
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div style={{ 
        position: 'absolute', 
        left: 0, 
        top: 0, 
        width: '100%', 
        height: '100%',
        pointerEvents: 'none',
      }}>
        {dots}
      </div>
    </div>
  );
} 