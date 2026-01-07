
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import AIConcierge from './components/AIConcierge';
import { TESTIMONIALS } from './constants';
// Fixed: Added missing Instagram and Facebook icons to the lucide-react imports
import { Star, MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      <main>
        <Hero />

        {/* Philosophy Section */}
        <section id="about" className="py-24 bg-neutral-900/50 relative">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
                alt="Our Kitchen" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 border border-amber-500/30 m-4 group-hover:m-8 transition-all duration-500"></div>
            </div>
            <div>
              <span className="text-amber-500 text-xs uppercase tracking-[0.4em] mb-4 inline-block">The Philosophy</span>
              <h2 className="text-5xl serif mb-8 leading-tight">Where Science Meets <br /><span className="italic">Gourmet Soul</span></h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Founded in 2021, L'Essence was born from a singular vision: to strip back the pretentiousness of fine dining while amplifying the purity of the ingredients.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Our kitchen utilizes precision thermal immersion and liquid nitrogen techniques to extract the absolute essence of seasonal produce, sourced exclusively from regenerative farms within a 50-mile radius.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="serif text-2xl text-amber-200 mb-2">Sustainable</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Zero-waste practices</p>
                </div>
                <div>
                  <h4 className="serif text-2xl text-amber-200 mb-2">Artisanal</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Hand-selected produce</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Menu />

        {/* Gallery Preview / Atmosphere */}
        <section id="gallery" className="py-24 border-y border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square relative group overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${[
                    '1514362545857-3bc16c4c7d1b',
                    '1551183053-bf91a1d81141',
                    '1467003909585-2f8a72700288',
                    '1504674900247-0877df9cc836'
                  ][i-1]}?auto=format&fit=crop&w=800&q=80`} 
                  alt="Atmosphere"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-amber-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white">
                    <Star size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center space-y-12">
              <h2 className="text-4xl serif italic">The Guest Experience</h2>
              <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="p-8 border border-white/5 bg-white/5 rounded-2xl relative">
                    <div className="flex justify-center mb-6">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="fill-amber-500 text-amber-500 mx-0.5" />)}
                    </div>
                    <p className="text-xl serif italic mb-6 leading-relaxed">"{t.text}"</p>
                    <p className="uppercase tracking-[0.3em] text-xs text-amber-500 font-bold">— {t.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Reservation />
      </main>

      <footer className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl serif mb-6 tracking-widest text-amber-500 uppercase">L'Essence</h2>
              <p className="text-white/40 font-light max-w-sm mb-8 leading-relaxed">
                Experience the vanguard of modern cuisine. A sanctuary for those who seek culinary perfection through the marriage of tradition and technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-[0.4em] text-amber-500/80 mb-6 font-bold">Contact</h4>
              <ul className="space-y-4 text-sm font-light text-white/60">
                <li className="flex items-start space-x-3">
                  <MapPin size={16} className="mt-1" />
                  <span>122 Gastronomy Lane, <br />Artisanal District, NY 10012</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={16} />
                  <span>+1 (555) 000-8888</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={16} />
                  <span>concierge@lessence.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.4em] text-amber-500/80 mb-6 font-bold">Opening Hours</h4>
              <ul className="space-y-4 text-sm font-light text-white/60">
                <li className="flex justify-between">
                  <span>Mon - Thu</span>
                  <span>18:00 - 23:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Fri - Sat</span>
                  <span>17:00 - 01:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 - 21:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/20">
            <p>© 2024 L'Essence Gastronomique. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Gemini AI Concierge */}
      <AIConcierge />
    </div>
  );
};

export default App;
