
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
            The Emperor's Journey
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From ruthless conqueror to compassionate ruler, Ashoka's transformation 
            remains one of history's most profound examples of personal and political evolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4">
              Early Reign & Conquest
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ashoka initially ruled as a typical ancient monarch, expanding his empire through 
              military conquest. The Mauryan Empire under his early rule stretched from Afghanistan 
              to Bengal, making it one of the largest empires in Indian history.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The turning point came with the brutal Kalinga War (c. 261 BCE), where over 100,000 
              soldiers died and 150,000 were displaced. The immense suffering he witnessed transformed 
              Ashoka's worldview forever.
            </p>
          </div>
          
          <div className="bg-royal-sandstone/20 p-8 rounded-lg border-l-4 border-royal-gold">
            <blockquote className="text-lg italic text-royal-maroon font-serif">
              "The Beloved of the Gods [Ashoka] felt remorse, for when an independent 
              country is conquered, the slaughter, death, and deportation of the people 
              is extremely grievous and weighty to the Beloved of the Gods."
            </blockquote>
            <cite className="block mt-4 text-sm text-gray-600">— Rock Edict XIII</cite>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-royal-maroon/10 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-royal-maroon mb-4">The Edicts of Ashoka</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-royal-gold mr-2">•</span>
                <span>33 inscriptions carved on rocks and pillars across the empire</span>
              </li>
              <li className="flex items-start">
                <span className="text-royal-gold mr-2">•</span>
                <span>Written in local languages including Prakrit, Greek, and Aramaic</span>
              </li>
              <li className="flex items-start">
                <span className="text-royal-gold mr-2">•</span>
                <span>Promoted non-violence, religious tolerance, and moral governance</span>
              </li>
              <li className="flex items-start">
                <span className="text-royal-gold mr-2">•</span>
                <span>Established welfare measures and animal protection laws</span>
              </li>
            </ul>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in">
            <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4">
              Transformation & Buddhist Philosophy
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Following his conversion to Buddhism, Ashoka embraced the principle of "Dharma" - 
              righteous living and moral duty. He promoted non-violence (ahimsa), religious 
              tolerance, and social welfare throughout his vast empire.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His edicts, carved in stone across the empire, represent some of the earliest 
              historical records of a ruler's commitment to ethical governance and human rights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
