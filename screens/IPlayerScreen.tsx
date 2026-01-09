
import React, { useRef } from 'react';

const IPlayerScreen: React.FC = () => {
  const scrollRails = [
    {
      title: 'New & Trending',
      items: [
        { id: 'nt1', title: 'What We Do in the Shadows', cat: 'Comedy', img: 'https://picsum.photos/seed/shadows/400/225' },
        { id: 'nt2', title: 'Inside the Christmas Factory', cat: 'Factual', img: 'https://picsum.photos/seed/factory/400/225' },
        { id: 'nt3', title: 'The Hunger Games', cat: 'Film', img: 'https://picsum.photos/seed/hunger/400/225' },
        { id: 'nt4', title: 'Top Gear', cat: 'Entertainment', img: 'https://picsum.photos/seed/topgear/400/225' },
        { id: 'nt5', title: 'The Traitors', cat: 'Reality', img: 'https://picsum.photos/seed/traitors/400/225' },
      ]
    },
    {
      title: 'Motorheads',
      items: [
        { id: 'm1', title: 'Tech Now', cat: 'Tech', img: 'https://picsum.photos/seed/technow/400/225' },
        { id: 'm2', title: 'Storyville', cat: 'Documentary', img: 'https://picsum.photos/seed/story/400/225' },
        { id: 'm3', title: "World's Most Dangerous Roads", cat: 'Travel', img: 'https://picsum.photos/seed/roads/400/225' },
        { id: 'm4', title: 'Brawn: The Impossible F1 Story', cat: 'Sport', img: 'https://picsum.photos/seed/f1/400/225' },
      ]
    }
  ];

  const popular = [
    { rank: 1, title: 'The Traitors', cat: 'Entertainment', img: 'https://picsum.photos/seed/p1/400/225' },
    { rank: 2, title: 'EastEnders', cat: 'Drama', img: 'https://picsum.photos/seed/p2/400/225' },
    { rank: 3, title: 'The Night Manager', cat: 'Drama', img: 'https://picsum.photos/seed/p3/400/225' },
    { rank: 4, title: 'The Traitors: Uncloaked', cat: 'Entertainment', img: 'https://picsum.photos/seed/p4/400/225' },
  ];

  const Rail = ({ title, items }: { title: string, items: any[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    return (
      <section className="mb-10 group/rail relative">
        <div className="flex items-center justify-between mb-4 px-4 md:px-8">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">{title}</h2>
          <button className="text-xs text-gray-400 hover:text-white transition-colors">View all</button>
        </div>
        <div className="relative">
          <button 
            onClick={() => ref.current?.scrollBy({ left: -400, behavior: 'smooth' })}
            className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-black/50 opacity-0 group-hover/rail:opacity-100 transition-opacity flex items-center justify-center"
          >
            <span className="material-icons-round">chevron_left</span>
          </button>
          <div ref={ref} className="flex space-x-4 overflow-x-auto no-scrollbar snap-x px-4 md:px-8">
            {items.map((item) => (
              <div key={item.id} className="snap-start flex-shrink-0 w-64 md:w-72 group cursor-pointer">
                <div className="relative aspect-video rounded-sm overflow-hidden mb-2">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-sm font-bold truncate">{item.title}</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">{item.cat}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => ref.current?.scrollBy({ left: 400, behavior: 'smooth' })}
            className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-black/50 opacity-0 group-hover/rail:opacity-100 transition-opacity flex items-center justify-center"
          >
            <span className="material-icons-round">chevron_right</span>
          </button>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-brand-black text-white min-h-screen">
      {/* Sub Nav */}
      <nav className="bg-black/50 backdrop-blur-md sticky top-[105px] z-40 border-b border-white/10 px-4 md:px-8 py-2 flex items-center space-x-6 text-xs font-semibold">
        <button className="text-pink-500 border-b-2 border-pink-500 pb-1 uppercase tracking-widest">iPlayer</button>
        <button className="hover:text-pink-500 transition-colors uppercase tracking-widest">Channels</button>
        <button className="hover:text-pink-500 transition-colors uppercase tracking-widest">Categories</button>
        <button className="hover:text-pink-500 transition-colors uppercase tracking-widest">A-Z</button>
        <button className="hover:text-pink-500 transition-colors uppercase tracking-widest">TV Guide</button>
        <button className="hover:text-pink-500 transition-colors uppercase tracking-widest">Watchlist</button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="The Traitors Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        
        <div className="relative h-full flex flex-col justify-center px-4 md:px-12 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter">The Traitors</h1>
          <p className="text-sm md:text-lg text-gray-200 mb-2 font-medium">More twists. More turns. And murders aplenty.</p>
          <p className="text-sm md:text-lg text-gray-200 mb-6 font-medium">The ultimate game of trust and treachery.</p>
          <p className="text-xs text-pink-500 font-bold mb-8 uppercase tracking-widest">New episodes every week</p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-sm font-bold flex items-center hover:bg-gray-200 transition-colors">
              <span className="material-icons-round mr-2">play_arrow</span> Watch now
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-sm font-bold flex items-center hover:bg-white/20 transition-colors">
               Trailer
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-sm font-bold flex items-center hover:bg-white/20 transition-colors">
              <span className="material-icons-round mr-2 text-sm">add</span> Watchlist
            </button>
          </div>
        </div>

        {/* Small feature rail inside hero */}
        <div className="absolute bottom-12 right-12 hidden lg:flex space-x-3">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-40 aspect-video rounded-sm border border-white/20 overflow-hidden cursor-pointer hover:border-white transition-all">
              <img src={`https://picsum.photos/seed/feat${i}/200/120`} className="w-full h-full object-cover opacity-60 hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* Content Rails */}
      <div className="py-12 space-y-4">
        {scrollRails.map((rail) => (
          <Rail key={rail.title} title={rail.title} items={rail.items} />
        ))}

        {/* Popular List Section */}
        <section className="px-4 md:px-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Most Popular Today</h2>
            <button className="text-xs text-gray-400 hover:text-white">View all</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popular.map((item) => (
              <div key={item.rank} className="flex group cursor-pointer items-end">
                <span className="text-8xl font-black text-gray-800 leading-none -mr-4 z-0 group-hover:text-pink-500 transition-colors italic">{item.rank}</span>
                <div className="flex-1 z-10 bg-surface-dark/40 backdrop-blur-sm rounded-sm p-3 border border-white/5 group-hover:border-white/20">
                  <img src={item.img} className="w-full aspect-video object-cover rounded-sm mb-2" />
                  <p className="text-[10px] text-pink-400 font-bold uppercase mb-1">{item.cat}</p>
                  <h3 className="font-bold text-sm truncate">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Curated Winter Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900/40 to-purple-900/40 mx-4 md:mx-8 rounded-sm overflow-hidden flex items-center px-8 md:px-16 border border-white/5">
           <div className="absolute top-0 right-0 w-1/2 h-full">
              <div className="grid grid-cols-3 gap-2 rotate-12 scale-125 opacity-40">
                {[1,2,3,4,5,6,7,8,9].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/cur${i}/200/300`} className="rounded-sm shadow-2xl" />
                ))}
              </div>
           </div>
           <div className="relative z-10 max-w-md">
              <h2 className="text-4xl font-black mb-4 leading-tight">Your Winter Watchlist Sorted</h2>
              <p className="text-gray-300 mb-8">Kick off the new year in style with epic films, top dramas and unmissable entertainment.</p>
              <button className="bg-white text-black px-6 py-2.5 rounded-sm font-bold flex items-center text-sm">
                <span className="material-icons-round mr-2">view_quilt</span> Explore collection
              </button>
           </div>
        </section>
        
        {/* Genre Rails */}
        <Rail title="Drama" items={[
          { id: 'd1', title: 'The Night Manager', cat: 'Drama', img: 'https://picsum.photos/seed/d1/400/225' },
          { id: 'd2', title: 'Line of Duty', cat: 'Crime', img: 'https://picsum.photos/seed/d2/400/225' },
          { id: 'd3', title: 'Industry', cat: 'Drama', img: 'https://picsum.photos/seed/d3/400/225' },
          { id: 'd4', title: 'Waterloo Road', cat: 'Drama', img: 'https://picsum.photos/seed/d4/400/225' },
        ]} />

        {/* Sounds Banner */}
        <section className="bg-orange-600 p-8 md:p-12 mx-4 md:mx-8 rounded-sm mb-12">
          <h2 className="text-2xl font-black mb-6 flex items-center">
            <span className="bg-black text-white px-2 py-0.5 mr-2 italic">BBC</span> Best of BBC Sounds
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'The SMS Inventor', desc: 'How was it made?' },
              { t: 'Curated Mix', desc: 'Hidden benefits of turmeric' },
              { t: 'Infamous Brawls', desc: 'Sporting history' },
              { t: 'Kenyan Dancers', desc: 'Aspiring young talent' }
            ].map((s, idx) => (
              <div key={idx} className="bg-white/10 hover:bg-white/20 p-4 rounded-sm cursor-pointer transition-colors">
                <img src={`https://picsum.photos/seed/sound${idx}/300/300`} className="aspect-square object-cover rounded-sm mb-4" />
                <h4 className="font-bold text-sm mb-1">{s.t}</h4>
                <p className="text-xs text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default IPlayerScreen;
