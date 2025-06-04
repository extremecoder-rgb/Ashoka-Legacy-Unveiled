
import React, { useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  details: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "304 BCE",
    title: "Birth of Ashoka",
    description: "Born as prince in the Mauryan dynasty",
    details: "Ashoka was born as the third son of Emperor Bindusara. Despite not being the eldest, he showed exceptional administrative and military skills from a young age.",
    icon: "👶"
  },
  {
    year: "272 BCE",
    title: "Ascension to Throne",
    description: "Becomes the third Mauryan emperor",
    details: "After a succession struggle following his father's death, Ashoka emerged victorious and was crowned emperor of the vast Mauryan Empire.",
    icon: "👑"
  },
  {
    year: "261 BCE",
    title: "Kalinga War",
    description: "The brutal war that changed everything",
    details: "The devastating conquest of Kalinga resulted in over 100,000 deaths and 150,000 deportations. The immense suffering deeply affected Ashoka and led to his spiritual transformation.",
    icon: "⚔️"
  },
  {
    year: "260 BCE",
    title: "Conversion to Buddhism",
    description: "Embraces Buddhist philosophy and non-violence",
    details: "Deeply remorseful after Kalinga, Ashoka converted to Buddhism and adopted the principle of Dharma. He renounced violence and dedicated his rule to moral governance.",
    icon: "☸️"
  },
  {
    year: "257 BCE",
    title: "First Rock Edicts",
    description: "Begins inscribing moral teachings",
    details: "Ashoka started carving his edicts on rocks and pillars throughout the empire, promoting religious tolerance, non-violence, and welfare measures in multiple languages.",
    icon: "📜"
  },
  {
    year: "250 BCE",
    title: "Buddhist Missions",
    description: "Spreads Buddhism across Asia",
    details: "Sent Buddhist missionaries to various regions including Sri Lanka, Southeast Asia, and the Mediterranean, significantly expanding Buddhism's reach.",
    icon: "🌏"
  },
  {
    year: "232 BCE",
    title: "Death of Ashoka",
    description: "End of the great emperor's reign",
    details: "After ruling for nearly 40 years, Ashoka died, leaving behind a legacy of compassionate governance and the spread of Buddhist values across Asia.",
    icon: "🕊️"
  }
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section className="py-20 bg-royal-maroon text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Timeline of Transformation
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-royal-sandstone max-w-3xl mx-auto leading-relaxed">
            Follow the pivotal moments that shaped Ashoka's journey from conqueror to philosopher
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-royal-gold hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div 
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-royal-gold/30 cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105"
                    onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{event.icon}</span>
                      <span className="text-royal-gold font-semibold text-lg">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2">{event.title}</h3>
                    <p className="text-royal-sandstone">{event.description}</p>
                    
                    {selectedEvent === index && (
                      <div className="mt-4 pt-4 border-t border-royal-gold/30 animate-fade-in">
                        <p className="text-white/90 leading-relaxed">{event.details}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-royal-gold rounded-full border-4 border-royal-maroon"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
