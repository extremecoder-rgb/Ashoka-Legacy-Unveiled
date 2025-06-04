
import React, { useState } from 'react';

interface Reference {
  id: number;
  author: string;
  title: string;
  publication: string;
  year: string;
  type: string;
  url?: string;
  description: string;
}

const references: Reference[] = [
  {
    id: 1,
    author: "Dhammika, Shravasti",
    title: "The Edicts of King Asoka",
    publication: "Buddhist Publication Society",
    year: "1993",
    type: "Book",
    url: "https://www.accesstoinsight.org/lib/authors/dhammika/wheel386.html",
    description: "A comprehensive translation and analysis of Ashoka's edicts with historical context and interpretations."
  },
  {
    id: 2,
    author: "Sen, Amartya",
    title: "The Argumentative Indian: Writings on Indian History, Culture and Identity",
    publication: "Farrar, Straus and Giroux",
    year: "2005",
    type: "Book",
    description: "Contains detailed analysis of Ashoka's philosophical transformation and his influence on Indian political thought."
  },
  {
    id: 3,
    author: "Lahiri, Nayanjot",
    title: "Ashoka in Ancient India",
    publication: "Harvard University Press",
    year: "2015",
    type: "Academic Book",
    description: "A comprehensive archaeological and historical study of Ashoka's reign based on recent discoveries and research."
  },
  {
    id: 4,
    author: "Thapar, Romila",
    title: "Aśoka and the Decline of the Mauryas",
    publication: "Oxford University Press",
    year: "1997",
    type: "Academic Book",
    description: "Authoritative historical analysis of the Mauryan period and Ashoka's role in the empire's administration and eventual decline."
  },
  {
    id: 5,
    author: "Keay, John",
    title: "India: A History",
    publication: "Grove Press",
    year: "2010",
    type: "Book",
    description: "Provides broader historical context for Ashoka's reign within the framework of Indian civilization and its development."
  }
];

const References = () => {
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const formatAPA = (ref: Reference) => {
    return `${ref.author} (${ref.year}). ${ref.title}. ${ref.publication}.`;
  };

  return (
    <section className="py-20 bg-royal-maroon text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Academic References
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-royal-sandstone max-w-3xl mx-auto leading-relaxed">
            This historical exploration is grounded in scholarly research and authoritative sources 
            to ensure accuracy and academic integrity
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-serif font-bold mb-6 text-royal-lightGold">
            Scholarly Sources
          </h3>
          <p className="text-royal-sandstone leading-relaxed mb-4">
            The following references represent authoritative academic sources that provide 
            comprehensive insights into Ashoka's life, reign, and lasting impact. These works 
            combine archaeological evidence, historical analysis, and scholarly interpretation.
          </p>
          <p className="text-sm text-royal-sandstone italic">
            Citations formatted in APA style
          </p>
        </div>

        <div className="space-y-6">
          {references.map((ref, index) => (
            <div 
              key={ref.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-royal-gold/30 hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="inline-block bg-royal-gold/30 text-royal-lightGold px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {ref.type}
                  </span>
                  <p className="text-white font-medium leading-relaxed">
                    {formatAPA(ref)}
                  </p>
                  {ref.url && (
                    <a 
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-royal-lightGold hover:text-white transition-colors duration-200 text-sm underline"
                    >
                      Access Source →
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setShowDetails(showDetails === ref.id ? null : ref.id)}
                  className="ml-4 bg-royal-gold/20 hover:bg-royal-gold/40 text-royal-lightGold px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                >
                  {showDetails === ref.id ? 'Hide' : 'Details'}
                </button>
              </div>
              
              {showDetails === ref.id && (
                <div className="mt-4 pt-4 border-t border-royal-gold/30 animate-fade-in">
                  <p className="text-royal-sandstone leading-relaxed">
                    {ref.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-royal-gold/20 p-6 rounded-lg border-l-4 border-royal-lightGold">
          <h4 className="text-lg font-semibold text-royal-lightGold mb-3">
            Note on Historical Sources
          </h4>
          <p className="text-royal-sandstone text-sm leading-relaxed">
            Understanding Ashoka's reign requires careful analysis of primary sources (his edicts) 
            and secondary scholarly interpretations. While some details of his personal life remain 
            debated among historians, the core facts about his transformation and policies are 
            well-documented through archaeological evidence and contemporary inscriptions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default References;
