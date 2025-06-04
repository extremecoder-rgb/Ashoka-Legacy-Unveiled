
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon via-royal-darkGold to-royal-sandstone opacity-90"></div>
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DAA520' fill-opacity='0.3'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Royal crown symbol */}
          <div className="mb-8">
            <div className="inline-block text-6xl text-royal-lightGold">
              👑
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Ashoka
            <span className="block text-royal-lightGold">the Great</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-royal-sandstone mb-8 font-light leading-relaxed">
            Emperor, Philosopher, and the Spread of Dharma
          </p>
          
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Journey through the remarkable transformation of a conqueror who became 
            one of history's greatest advocates for peace, compassion, and moral governance.
          </p>
          
          <button className="bg-royal-gold hover:bg-royal-darkGold text-royal-maroon font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Begin the Journey
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-royal-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-royal-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
