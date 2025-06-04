
import React from 'react';

const UntoldStories = () => {
  const stories = [
    {
      title: "The First Animal Rights Advocate",
      content: "Ashoka was perhaps history's first ruler to institutionalize animal welfare. He banned animal sacrifice in his capital, established veterinary hospitals, and created the first known wildlife protection laws. His edicts mention the protection of specific animals including parrots, fish, and ants.",
      highlight: "Banned unnecessary killing of animals and established veterinary care"
    },
    {
      title: "Environmental Pioneer",
      content: "Long before modern environmentalism, Ashoka promoted ecological conservation. He ordered the planting of medicinal herbs, fruit trees, and shade trees along roads. His edicts mention the digging of wells and the creation of botanical gardens for public benefit.",
      highlight: "Planted trees and herbs for environmental and medicinal purposes"
    },
    {
      title: "Women's Welfare Initiatives",
      content: "Ashoka appointed female officials called 'Rajjukas' to oversee women's welfare and ensure their fair treatment. He also established maternity hospitals and promoted education for women, which was progressive for ancient times.",
      highlight: "Appointed female officials and promoted women's education"
    },
    {
      title: "Healthcare Revolution",
      content: "Ashoka established a comprehensive healthcare system including hospitals for both humans and animals. He imported medicinal plants from distant lands and made healthcare accessible to all social classes, breaking traditional barriers.",
      highlight: "Created free healthcare system for all social classes"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
            Untold Stories
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the lesser-known aspects of Ashoka's reign that showcase his 
            progressive vision and humanitarian approach to governance
          </p>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 animate-fade-in">
                <div className="bg-gradient-to-br from-royal-gold/10 to-royal-sandstone/20 p-8 rounded-lg">
                  <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4">
                    {story.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {story.content}
                  </p>
                  <div className="bg-royal-maroon/10 p-4 rounded border-l-4 border-royal-gold">
                    <p className="text-royal-darkGold font-semibold">
                      Key Achievement: {story.highlight}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="aspect-square bg-gradient-to-br from-royal-maroon to-royal-darkGold rounded-full flex items-center justify-center text-white text-6xl shadow-xl">
                  {index === 0 && "🐘"}
                  {index === 1 && "🌳"}
                  {index === 2 && "👩"}
                  {index === 3 && "🏥"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-royal-maroon text-white p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold mb-4">
              A Vision Ahead of His Time
            </h3>
            <p className="text-royal-sandstone text-lg leading-relaxed">
              These progressive policies demonstrate that Ashoka's vision extended far beyond 
              traditional governance. His holistic approach to leadership—encompassing social 
              welfare, environmental protection, and animal rights—was revolutionary for the 
              3rd century BCE and remains inspiring today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UntoldStories;
