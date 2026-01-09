
import React from 'react';

const BitesizeScreen: React.FC = () => {
  const subjects = [
    { name: 'Maths', sub: 'Numbers & logic', icon: 'calculate', color: 'text-blue-500' },
    { name: 'Science', sub: 'World & experiments', icon: 'science', color: 'text-green-500' },
    { name: 'English', sub: 'Language & literature', icon: 'book', color: 'text-red-500' },
    { name: 'History', sub: 'Past events & cultures', icon: 'gavel', color: 'text-yellow-600' },
    { name: 'Geography', sub: 'Earth & environments', icon: 'public', color: 'text-indigo-500' },
    { name: 'Computing', sub: 'Coding & technology', icon: 'computer', color: 'text-purple-500' },
  ];

  const popularCourses = [
    { id: '1', title: 'Introduction to Algebra', category: 'Maths', catColor: 'bg-blue-600', rating: 4.8, img: 'https://picsum.photos/seed/math/400/200' },
    { id: '2', title: 'Basic Biology: Cell Structures', category: 'Science', catColor: 'bg-green-600', rating: 4.5, img: 'https://picsum.photos/seed/science/400/200' },
    { id: '3', title: 'Shakespearean Sonnets Explained', category: 'English', catColor: 'bg-red-600', rating: 4.9, img: 'https://picsum.photos/seed/lit/400/200' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark pb-10">
      <section className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4 border-l-4 border-primary pl-2 text-primary dark:text-yellow-400">Welcome to Bitesize</h2>
        <article className="bg-surface-light dark:bg-surface-dark shadow-sm rounded-lg overflow-hidden">
          <div className="relative h-56 w-full">
            <img alt="Hero" className="absolute inset-0 w-full h-full object-cover" src="https://picsum.photos/seed/edu/800/400" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="inline-block bg-primary text-brand-black text-xs font-bold px-2 py-0.5 mb-2 rounded">LEARN</span>
              <h3 className="text-white text-2xl font-bold leading-tight">Your Journey to Knowledge Starts Here!</h3>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Discover a world of educational resources tailored for students of all ages. Explore subjects, tackle challenging concepts, and master new skills with our easy-to-digest guides.</p>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <span className="material-icons-round text-sm mr-1">school</span> For all students
              <span className="mx-2">•</span>
              <span>Daily updates</span>
            </div>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4 border-l-4 border-bitesize-secondary pl-2 text-gray-900 dark:text-white">Explore Subjects</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {subjects.map((s) => (
            <a key={s.name} className="block bg-surface-light dark:bg-surface-dark shadow-md rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#">
              <span className={`material-symbols-outlined text-4xl ${s.color} mb-2`}>{s.icon}</span>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{s.name}</h3>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">{s.sub}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="py-8 bg-primary text-brand-black mt-6">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Popular Courses</h2>
          <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-4 snap-x">
            {popularCourses.map((c) => (
              <div key={c.id} className="snap-start flex-shrink-0 w-72 bg-gray-900 rounded-lg overflow-hidden group hover:ring-2 hover:ring-white transition-all cursor-pointer shadow-lg">
                <div className="relative h-40">
                  <img alt={c.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src={c.img} />
                  <div className={`absolute top-2 left-2 ${c.catColor} text-[10px] font-bold px-2 py-0.5 rounded text-white uppercase`}>{c.category}</div>
                </div>
                <div className="p-4 flex flex-col h-40 justify-between">
                  <div>
                    <h3 className="font-bold text-lg leading-tight mb-2 text-white">{c.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">Master the fundamentals and ace your exams.</p>
                  </div>
                  <div>
                    <div className="flex items-center text-xs text-blue-400 font-semibold mb-3">
                      <span className="material-icons-round text-sm mr-1">star</span> {c.rating} Rating
                    </div>
                    <button className="w-full bg-primary hover:bg-yellow-400 text-brand-black text-sm py-2 rounded font-medium flex items-center justify-center transition-colors">
                      <span className="material-icons-round text-sm mr-1">play_arrow</span> Start Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4 border-l-4 border-bitesize-secondary pl-2 text-gray-900 dark:text-white">Structured Learning Paths</h2>
        <div className="space-y-4">
          {['GCSE Revision Boost', 'A-Level Deep Dive', 'Primary School Fun', 'Skills for Life'].map((path) => (
            <div key={path} className="bg-surface-light dark:bg-surface-dark shadow-sm rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{path}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive guides and interactive lessons.</p>
              </div>
              <button className="bg-bitesize-secondary hover:bg-green-600 text-white text-sm py-2 px-4 rounded font-medium transition-colors">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BitesizeScreen;
