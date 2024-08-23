'use client';
import { Environment, Float, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from 'react';
import { SgmLogo } from './SgmLogo';

const HomeHero = ({ children }: { children: React.ReactNode }) => {
  const [pages, setPages] = useState(2.5);
  const [scale, setScale] = useState(0.6);
  const [position, setPosition] = useState<Vector3>([0, 0.2, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPages(3.2);
        setScale(0.2);
        setPosition([0, 0.7, 0]);
      } else if (window.innerWidth < 1024) {
        setPages(3);
        setScale(0.4);
        setPosition([0, 0.4, 0]);
      } else {
        setPages(2.5);
        setScale(0.6);
        setPosition([0, 0.2, 0]);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 30 }}
      style={{ position: "fixed", top: 0, left: 0, width: '100%', height: '100vh' }}
    >
      <color args={['#080406']} attach="background" />
      <Suspense fallback={null}>
        <ScrollControls damping={0.1} pages={pages} distance={1}>
          <Scroll>
            <Float floatIntensity={1} speed={5} rotationIntensity={0.5}>
              <SgmLogo scale={scale} position={position} />
            </Float>
          </Scroll>
          <Scroll html style={{width: '100%'}}>
            <div>
              {children}
            </div>
          </Scroll>
        </ScrollControls>
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
};

export default HomeHero;