
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Timeline from '../components/Timeline';
import CulturalImpact from '../components/CulturalImpact';
import UntoldStories from '../components/UntoldStories';
import Gallery from '../components/Gallery';
import References from '../components/References';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="timeline">
          <Timeline />
        </section>
        
        <section id="impact">
          <CulturalImpact />
        </section>
        
        <section id="stories">
          <UntoldStories />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="references">
          <References />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
