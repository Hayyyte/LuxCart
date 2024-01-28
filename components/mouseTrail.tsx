'use client'

import React, { useEffect } from 'react';

const MouseTrail = () => {
  useEffect(() => {
    const mouseTrail = document.querySelector(".mouse-trail");

    const handleMouseMove = (e) => {
      const x = e.clientX - mouseTrail.offsetWidth / 2;
      const y = e.clientY - mouseTrail.offsetHeight / 2;

      mouseTrail.style.transform = `translate(${x}px, ${y}px)`;
    };

    if (mouseTrail) {
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-5 h-5 bg-black rounded-full z-50 pointer-events-none mouse-trail"></div>
    </>
  );
}

export default MouseTrail;
