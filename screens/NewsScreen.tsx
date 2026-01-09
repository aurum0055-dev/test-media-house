
import React from 'react';

const NewsScreen: React.FC = () => {
  const categories = ['All News', 'World', 'UK Politics', 'Business', 'Tech', 'Science', 'Health'];
  const newsItems = [
    { id: '1', title: 'City Unveils Ambitious Green Infrastructure Plan', summary: 'Local authorities announce a landmark initiative to transform urban landscapes.', time: '10m ago', cat: 'Environment', img: 'https://picsum.photos/seed/city/150/100' },
    { id: '2', title: 'Breakthrough in AI Research Promises New Medical Diagnostics', summary: 'Scientists have developed an AI model that detects early signs of disease.', time: '30m ago', cat: 'Science', img: 'https://picsum.photos/seed/lab/150/100' },
    { id: '3', title: 'Global Markets React to Central Bank Rate Hike', summary: 'Investors watch closely as interest rate decisions ripple across exchanges.', time: '1h ago', cat: 'Economy', img: 'https://picsum.photos/seed/market/150/100' },
  ];

  return (
    <div>
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

      <section className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {newsItems.map((item) => (
          <article key={item.id} className="flex items-start bg-surface-light dark:bg-surface-dark shadow-sm rounded-lg overflow-hidden p-3 hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-28 h-20 mr-4 rounded-md overflow-hidden">
              <img alt={item.title} className="w-full h-full object-cover" src={item.img} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold leading-tight mb-1">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-2">{item.summary}</p>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span className="material-icons-round text-sm mr-1">schedule</span> {item.time}
                <span className="mx-2">•</span>
                <span>{item.cat}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4 border-l-4 border-brand-red pl-2 text-brand-red dark:text-red-400">Trending Now</h2>
        <div className="grid grid-cols-1 gap-4">
           {newsItems.slice(0, 2).map((item) => (
             <article key={`trending-${item.id}`} className="flex items-start bg-surface-light dark:bg-surface-dark shadow-sm rounded-lg overflow-hidden p-3 border-l-4 border-blue-600">
                <div className="flex-shrink-0 w-28 h-20 mr-4 rounded-md overflow-hidden">
                  <img alt={item.title} className="w-full h-full object-cover" src={item.img} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold leading-tight mb-1">{item.title}</h3>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span className="material-icons-round text-sm mr-1">trending_up</span> Trending in {item.cat}
                  </div>
                </div>
             </article>
           ))}
        </div>
      </section>
    </div>
  );
};

export default NewsScreen;
