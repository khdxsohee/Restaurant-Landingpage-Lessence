
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('Appetizers');
  
  const categories: MenuItem['category'][] = ['Appetizers', 'Main Course', 'Desserts', 'Wines'];
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl serif mb-4">Curated Selection</h2>
          <div className="w-24 h-px bg-amber-500 mx-auto mb-12"></div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-[0.3em] transition-all pb-2 border-b-2 ${
                  activeCategory === cat ? 'border-amber-500 text-amber-500' : 'border-transparent text-white/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="group flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-6 rounded-lg transition-all hover:bg-white/5"
              style={{ animation: `fadeInUp 0.6s ease forwards ${idx * 0.1}s` }}
            >
              <div className="relative w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-amber-900/20 group-hover:border-amber-500/40 transition-all duration-700">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-2xl serif group-hover:text-amber-200 transition-colors">{item.name}</h3>
                  <span className="text-amber-500 font-medium ml-4">{item.price}</span>
                </div>
                <p className="text-white/60 font-light mb-4 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-1 rounded-sm text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Menu;
