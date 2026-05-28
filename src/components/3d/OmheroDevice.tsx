import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface OmheroDeviceProps {
  model?: 'PCH-0001' | 'PCH-005';
}

export default function OmheroDevice3D({ model = 'PCH-0001' }: OmheroDeviceProps) {
  const [rotation, setRotation] = useState({ x: 15, y: -15 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    let animationId: number;
    if (autoRotate && !isDragging) {
      const animate = () => {
        setRotation(prev => ({ x: prev.x, y: prev.y + 0.3 }));
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationId);
  }, [autoRotate, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoRotate(false);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoRotate(true), 3000);
  };

  const isPro = model === 'PCH-005';

  return (
    <div 
      className="w-full h-[450px] relative cursor-grab active:cursor-grabbing"
      style={{ perspective: '1000px' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* 3D Scene Container */}
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isDragging ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        {/* Main 3D Device */}
        <div style={{ transformStyle: 'preserve-3d', position: 'relative' }}>
          
          {/* Back shadow/glow */}
          <div 
            style={{
              position: 'absolute',
              width: '300px',
              height: '220px',
              background: 'radial-gradient(ellipse at center, rgba(0,114,206,0.3) 0%, transparent 70%)',
              borderRadius: '20px',
              transform: 'translateZ(-20px)',
              filter: 'blur(20px)'
            }}
          />
          
          {/* Device Body - with depth */}
          <div style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Side - Left (depth effect) */}
            <div
              style={{
                position: 'absolute',
                width: '20px',
                height: '220px',
                background: 'linear-gradient(180deg, #c0c0c0 0%, #a0a0a0 100%)',
                left: '-20px',
                top: '0',
                transform: 'rotateY(90deg) translateX(-10px)',
                borderRadius: '4px 0 0 4px'
              }}
            />
            
            {/* Side - Top (depth effect) */}
            <div
              style={{
                position: 'absolute',
                width: '300px',
                height: '15px',
                background: 'linear-gradient(90deg, #d0d0d0 0%, #e0e0e0 100%)',
                left: '0',
                top: '-15px',
                transform: 'rotateX(90deg) translateY(-7px)',
                borderRadius: '4px 4px 0 0'
              }}
            />
            
            {/* Main Front Face */}
            <div
              style={{
                width: '300px',
                height: '220px',
                background: 'linear-gradient(145deg, #f5f5f5 0%, #e0e0e0 100%)',
                borderRadius: '12px',
                boxShadow: `
                  0 0 0 1px rgba(0,0,0,0.1),
                  inset 0 1px 0 rgba(255,255,255,0.8),
                  inset 0 -1px 0 rgba(0,0,0,0.05)
                `,
                position: 'relative',
                transform: 'translateZ(10px)'
              }}
            >
              {/* Top Edge Highlight */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  borderRadius: '12px 12px 0 0'
                }}
              />

              {/* Top Label Area */}
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '20px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#666',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}
              >
                OMHERO
              </div>

              {/* Model Number Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '20px',
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#0072CE',
                  fontFamily: 'monospace',
                  background: 'rgba(0,114,206,0.15)',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  letterSpacing: '0.5px'
                }}
              >
                {model}
              </div>

              {/* Decorative Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '45px',
                  left: '20px',
                  right: '20px',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, #ccc, transparent)'
                }}
              />

              {/* Main Display Area */}
              <div
                style={{
                  position: 'absolute',
                  top: '65px',
                  left: '30px',
                  right: '30px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)',
                  borderRadius: '8px',
                  boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                {/* Screen Content */}
                <div style={{ padding: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '6px', height: '6px', background: '#00ff00', borderRadius: '50%', boxShadow: '0 0 5px #00ff00', animation: 'pulse 1s infinite' }} />
                      <span style={{ fontSize: '9px', color: '#00ff00', fontFamily: 'monospace' }}>LIVE</span>
                    </div>
                    <WifiIcon style={{ width: '12px', height: '12px', color: '#0072CE' }} />
                  </div>
                  
                  <div style={{ textAlign: 'center', marginTop: '8px' }}>
                    <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#00ffaa', fontFamily: 'monospace' }}>4.8</div>
                    <div style={{ fontSize: '8px', color: '#666', marginTop: '-4px' }}>kW • Current Load</div>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '20px',
                  right: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#555', background: '#e8e8e8', padding: '2px 6px', borderRadius: '4px' }}>CE</div>
                  <div style={{ fontSize: '9px', color: '#777', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span>⏚</span>
                    <span>M</span>
                    <span>ON</span>
                  </div>
                </div>
                
                <div style={{ fontSize: '9px', color: '#888' }}>
                  {isPro ? '3-Phase' : '110-220VAC'}
                </div>
              </div>

              {/* Left Side Grooves (3D effect) */}
              <div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} style={{ width: '3px', height: '12px', background: '#bbb', borderRadius: '2px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)' }} />
                ))}
              </div>

              {/* Right Side Grooves */}
              <div style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} style={{ width: '3px', height: '12px', background: '#bbb', borderRadius: '2px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
        <p className="text-xs text-white/40">🖱️ Drag to rotate in 3D • Auto-rotating</p>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}
      </style>
    </div>
  );
}

// Simple Wifi icon component
function WifiIcon({ style }: { style: React.CSSProperties }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}