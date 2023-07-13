import React from 'react';

export default function HeroSection() {
  return (
    <div className="grid place-items-center w-full h-full bg-hero-section">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-[80%] pointer-events-none"></div>
      <div className="relative w-1/2 h-1/2 lg:min-h-[600px] bg-hero-section bg-cover">
        <div className="absolute top-1/2 -translate-y-1/2 -left-[200px] w-[400px] h-[200px] bg-gray-200"></div>
      </div>
    </div>
  );
}
