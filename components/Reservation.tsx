
import React, { useState } from 'react';
import { Calendar, Users, Clock, Mail, Phone } from 'lucide-react';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("In a real application, this would send your request to our booking system. Our concierge will contact you shortly.");
  };

  return (
    <section id="reservations" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1550966841-3ee5ad401037?auto=format&fit=crop&w=800&q=80" alt="" className="object-cover h-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
          <div className="md:w-1/3 p-12 bg-amber-900/20 border-r border-white/5 flex flex-col justify-center">
            <h2 className="text-4xl serif mb-6">Securing Your <span className="italic">Evening</span></h2>
            <p className="text-white/60 font-light mb-8 leading-relaxed">
              For parties larger than 8, please contact our events team directly to arrange a customized tasting menu.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-amber-500/80">
                <Phone size={16} />
                <span className="text-sm font-medium tracking-widest">+1 (555) 000-8888</span>
              </div>
              <div className="flex items-center space-x-3 text-amber-500/80">
                <Mail size={16} />
                <span className="text-sm font-medium tracking-widest">dine@lessence.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:w-2/3 p-12 bg-black/40 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-all rounded-sm"
                  placeholder="Evelyn Thorne"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-all rounded-sm"
                  placeholder="e.thorne@domain.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                  <select className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-all rounded-sm appearance-none">
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5+ Persons</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                  <input type="date" className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-all rounded-sm" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-black py-4 uppercase tracking-[0.3em] font-bold transition-all shadow-lg hover:shadow-amber-500/20">
              Confirm Reservation Request
            </button>
            <p className="text-[9px] text-center mt-6 text-white/30 uppercase tracking-widest">
              By reserving, you agree to our 24-hour cancellation policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
