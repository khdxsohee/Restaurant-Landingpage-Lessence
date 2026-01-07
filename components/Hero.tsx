
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Mockup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover scale-110 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="inline-block text-amber-500 uppercase tracking-[0.5em] text-xs mb-6 animate-in fade-in slide-in-from-bottom duration-1000 fill-mode-both">
          A Symphony of Flavors
        </span>
        <h1 className="text-6xl md:text-8xl serif mb-8 leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200 fill-mode-both">
          Elevated Dining for the <br /><span className="italic text-amber-200">Modern Palate</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light tracking-wide animate-in fade-in slide-in-from-bottom duration-1000 delay-500 fill-mode-both">
          Experience the intersection of traditional culinary heritage and avant-garde molecular gastronomy.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-700 fill-mode-both">
          <a href="#menu" className="bg-amber-600 hover:bg-amber-500 text-black px-10 py-4 text-sm uppercase tracking-[0.2em] font-semibold transition-all">
            Explore Menu
          </a>
          <a href="#reservations" className="border border-white/20 hover:border-amber-500 px-10 py-4 text-sm uppercase tracking-[0.2em] transition-all bg-white/5 backdrop-blur-sm">
            Reserve Your Table
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-amber-500"></div>
      </div>
    </section>
  );
};

export default Hero;
