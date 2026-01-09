
import React, { useState, useRef } from 'react';

const NewsScreen: React.FC = () => {
  const categories = ['All News', 'World', 'UK Politics', 'Business', 'Tech', 'Science', 'Health'];
  const newsItems = [
    { id: '1', title: 'City Unveils Ambitious Green Infrastructure Plan', summary: 'Local authorities announce a landmark initiative to transform urban landscapes.', time: '10m ago', cat: 'Environment', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800' },
    { id: '2', title: 'Breakthrough in AI Research Promises New Medical Diagnostics', summary: 'Scientists have developed an AI model that detects early signs of disease.', time: '30m ago', cat: 'Science', img: 'https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=800' },
    { id: '3', title: 'Global Markets React to Central Bank Rate Hike', summary: 'Investors watch closely as interest rate decisions ripple across exchanges.', time: '1h ago', cat: 'Economy', img: 'https://images.unsplash.com/photo-1611974714024-4607a5504677?auto=format&fit=crop&q=80&w=800' },
  ];

  const trendingItems = [
    { id: 't1', title: 'SpaceX Mission Successfully Deploys Next-Gen Satellites', cat: 'Tech', img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1000' },
    { id: 't2', title: 'Record Breaking Arctic Temperatures Spark Global Concern', cat: 'Climate', img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=1000' },
    { id: 't3', title: 'The Future of Remote Work: A Comprehensive Study', cat: 'Business', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveSlide(index);
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-12">
      <div className="bg-brand-red text-white py-4 px-4">
        <h1 className="text-3xl font-bold uppercase tracking-tight max-w-4xl mx-auto">Latest News</h1>
      </div>
      <div className="bg-brand-red/90 text-white font-semibold text-sm overflow-x-auto no-scrollbar py-2 px-4 border-b border-red-700">
        <div className="flex space-x-6 whitespace-nowrap max-w-4xl mx-auto">
          {categories.map((c, i) => (
            <a key={c} className={i === 0 ? 'underline decoration-2 underline-offset-4' : 'hover:underline decoration-2 underline-offset-4'} href="#">{c}</a>
          ))}
        </div>
      </div>

      {/* Trending Carousel Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold border-l-4 border-brand-red pl-2 text-brand-red dark:text-red-400 uppercase tracking-wide">Trending Now</h2>
          <div className="flex space-x-2">
            {trendingItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-brand-red w-6' : 'bg-gray-300 dark:bg-gray-700'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar rounded-xl shadow-xl bg-gray-200 dark:bg-gray-900"
        >
          {trendingItems.map((item) => (
            <div key={item.id} className="snap-center flex-shrink-0 w-full relative aspect-video group cursor-pointer overflow-hidden">
              <img 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={item.img} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block bg-brand-red text-white text-[10px] font-bold px-2 py-1 mb-3 rounded uppercase tracking-widest">
                  {item.cat}
                </span>
                <h3 className="text-white text-xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News List */}
      <section className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        <h2 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-2">More Stories</h2>
        {newsItems.map((item) => (
          <article key={item.id} className="flex items-start bg-surface-light dark:bg-surface-dark shadow-sm rounded-lg overflow-hidden p-3 hover:bg-white dark:hover:bg-gray-800 transition-all border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
            <div className="flex-shrink-0 w-28 h-20 md:w-36 md:h-24 mr-4 rounded-md overflow-hidden">
              <img alt={item.title} className="w-full h-full object-cover" src={item.img} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold leading-tight mb-1 group-hover:text-brand-red transition-colors">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-2 hidden sm:block">{item.summary}</p>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span className="material-icons-round text-sm mr-1">schedule</span> {item.time}
                <span className="mx-2">•</span>
                <span className="font-semibold text-brand-red">{item.cat}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default NewsScreen;
