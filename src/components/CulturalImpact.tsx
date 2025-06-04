
import React from 'react';

const CulturalImpact = () => {
  const impacts = [
    {
      title: "Spread of Buddhism",
      description: "Ashoka's patronage transformed Buddhism from a regional philosophy to a world religion",
      details: "Sent missionaries to Sri Lanka, Southeast Asia, and even the Mediterranean regions",
      icon: "☸️"
    },
    {
      title: "Architectural Legacy",
      description: "Commissioned stupas, pillars, and monasteries across the empire",
      details: "The Sanchi Stupa and Ashoka Pillars remain iconic symbols of Indian heritage",
      icon: "🏛️"
    },
    {
      title: "Administrative Innovation",
      description: "Established principles of moral governance and welfare state",
      details: "Created hospitals, roads, and irrigation systems for public benefit",
      icon: "⚖️"
    },
    {
      title: "Religious Tolerance",
      description: "Promoted peaceful coexistence of all religious communities",
      details: "Respected and protected various faiths while personally following Buddhism",
      icon: "🤝"
    },
    {
      title: "Animal Welfare",
      description: "Pioneered early animal rights and environmental conservation",
      details: "Banned animal sacrifice and established veterinary hospitals",
      icon: "🐘"
    },
    {
      title: "Trade & Diplomacy",
      description: "Fostered international relations and cultural exchange",
      details: "Established diplomatic relations with Greek kingdoms and promoted trade",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-royal-sandstone/20 to-royal-gold/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
            Cultural & Historical Impact
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ashoka's reign left an indelible mark on Asian civilization and continues to 
            influence modern concepts of governance and human rights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-lg shadow-lg border-2 border-transparent hover:border-royal-gold transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {impact.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-royal-maroon mb-3">
                {impact.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {impact.description}
              </p>
              <p className="text-sm text-royal-darkGold font-medium">
                {impact.details}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-royal-maroon/10 p-8 rounded-lg border-l-4 border-royal-gold">
          <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4">
            Modern Relevance
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Ashoka's principles of non-violence, religious tolerance, and welfare governance 
            continue to inspire modern democratic values. The Ashoka Chakra (Dharma Wheel) 
            features prominently on India's national flag, symbolizing the eternal wheel of law.
          </p>
          <p className="text-gray-700 leading-relaxed">
            His edicts represent one of the earliest known declarations of human rights and 
            environmental protection, making him a precursor to modern humanitarian and 
            ecological movements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CulturalImpact;
