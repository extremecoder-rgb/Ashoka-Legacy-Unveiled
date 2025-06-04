import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  context: string;
  imageUrl: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Sanchi Stupa",
    description: "The Great Stupa at Sanchi, commissioned by Ashoka",
    context: "Built in the 3rd century BCE, this Buddhist monument houses relics of Buddha and showcases Ashoka's architectural patronage. The intricate carvings depict scenes from Buddha's life and Jataka tales.",
    imageUrl: "/sanchi.webp",
    category: "Architecture"
  },
  {
    id: 2,
    title: "Ashoka Pillar",
    description: "One of the famous pillars with inscribed edicts",
    context: "These monolithic sandstone pillars, reaching up to 50 feet in height, were erected across the empire. Each pillar is topped with carved animal capitals and contains Ashoka's moral teachings in local scripts.",
    imageUrl: "/pillar.webp",
    category: "Monuments"
  },
  {
    id: 3,
    title: "Lion Capital",
    description: "The famous four-lion capital, now India's national emblem",
    context: "Originally placed atop the Ashoka Pillar at Sarnath, this sculpture represents power, courage, and the spread of Dharma in all four directions. The Dharma Wheel below symbolizes the eternal law.",
    imageUrl: "/lions.webp",
    category: "Symbols"
  },
  {
    id: 4,
    title: "Ancient Coins",
    description: "Mauryan period coins with symbols of the empire",
    context: "These silver punch-marked coins from Ashoka's era feature various symbols including the Dharma Wheel, peacock, and tree motifs. They facilitated trade across the vast Mauryan Empire.",
    imageUrl: "/coins.webp",
    category: "Artifacts"
  },
  {
    id: 5,
    title: "Rock Edict",
    description: "Inscribed rock surface with Ashoka's moral teachings",
    context: "Carved on natural rock surfaces across the empire, these edicts were written in local languages. They promoted non-violence, religious tolerance, and welfare measures for the people.",
    imageUrl: "/carving.webp",
    category: "Edicts"
  },
  {
    id: 6,
    title: "Buddhist Monastery",
    description: "Ruins of a monastery from Ashoka's patronage",
    context: "Ashoka built numerous monasteries and viharas to support the Buddhist sangha. These structures provided shelter, study halls, and meditation spaces for monks and travelers.",
    imageUrl: "/Great_Buddha_Statue,_Bodh_Gaya.webp",
    category: "Architecture"
  }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Architecture', 'Monuments', 'Symbols', 'Artifacts', 'Edicts'];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
            Historical Gallery
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore artifacts, monuments, and architectural marvels from Ashoka's reign 
            that continue to inspire and educate us today
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-royal-gold text-royal-maroon shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-royal-gold/20 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-royal-gold/20 text-royal-darkGold px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-royal-maroon mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <span className="inline-block bg-royal-gold/20 text-royal-darkGold px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {selectedItem.category}
                </span>
                <h3 className="text-3xl font-serif font-bold text-royal-maroon mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {selectedItem.context}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
