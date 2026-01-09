
import React from 'react';

const IPlayerScreen: React.FC = () => {
  const shows = [
    { id: '1', title: 'The Night Manager', cat: 'Drama', prog: '75%', img: 'https://picsum.photos/seed/night/400/225' },
    { id: '2', title: 'Blue Planet II', cat: 'Nature', prog: '50%', img: 'https://picsum.photos/seed/blue/400/225' },
    { id: '3', title: 'Peaky Blinders', cat: 'Drama', prog: '10%', img: 'https://picsum.photos/seed/peaky/400/225' },
  ];

  return (
    <div className="bg-brand-black text-white min-h-screen pb-10">
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Continue Watching</h2>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-6 snap-x">
          {shows.map((show) => (
            <div key={show.id} className="snap-start flex-shrink-0 w-64 bg-surface-dark rounded-lg overflow-hidden group hover:ring-2 hover:ring-pink-400 transition-all cursor-pointer">
              <div className="relative h-36">
                <img alt={show.title} className="w-full h-full object-cover" src={show.img} />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-600">
                  <div className="h-full bg-pink-600" style={{ width: show.prog }}></div>
                </div>
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">{show.cat}</span>
                <h3 className="font-bold text-lg mb-2">{show.title}</h3>
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white text-sm py-2 rounded font-medium transition-colors">
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Best of the BBC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {shows.slice(0, 2).map((show) => (
             <div key={`best-${show.id}`} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                <img src={show.img} alt={show.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                   <h3 className="text-2xl font-bold">{show.title}</h3>
                   <p className="text-sm text-gray-300 mb-4">Highly rated drama returning for a new season.</p>
                   <div className="flex space-x-2">
                      <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center">
                         <span className="material-icons-round text-sm mr-1">play_arrow</span> Watch Now
                      </button>
                      <button className="bg-gray-800/80 text-white px-4 py-2 rounded-full font-bold text-sm">
                         + Watchlist
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default IPlayerScreen;
