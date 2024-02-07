'use client'

import React, { useEffect } from 'react';

const MouseTrail = () => {
  useEffect(() => {
    const mouseTrail: HTMLElement | null = document.querySelector(".mouse-trail");

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseTrail) {
        const x: number = e.clientX - mouseTrail.offsetWidth / 2;
        const y: number = e.clientY - mouseTrail.offsetHeight / 2;
      
        mouseTrail.style.transform = `translate(${x}px, ${y}px)`;
      }
    }; // This is where the closing brace should be placed

    if (mouseTrail) {
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-7 h-7 bg-black rounded-full pointer-events-none mouse-trail"></div>
    </>
  );
}

export default MouseTrail;
