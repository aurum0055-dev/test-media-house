
import React from 'react';
import { LeaguePosition } from '../types';

const SportsScreen: React.FC = () => {
  const standings: LeaguePosition[] = [
    { pos: 1, team: 'Arsenal', short: 'ARS', played: 21, won: 15, drawn: 4, lost: 2, for: 40, against: 14, gd: 26, pts: 49, form: ['W', 'W', 'W', 'W', 'W'] },
    { pos: 2, team: 'Man City', short: 'MCI', played: 21, won: 13, drawn: 4, lost: 4, for: 45, against: 19, gd: 26, pts: 43, form: ['W', 'W', 'W', 'D', 'D'] },
    { pos: 3, team: 'Aston Villa', short: 'AVL', played: 21, won: 13, drawn: 4, lost: 4, for: 33, against: 24, gd: 9, pts: 43, form: ['W', 'W', 'W', 'L', 'W'] },
    { pos: 4, team: 'Liverpool', short: 'LIV', played: 21, won: 10, drawn: 5, lost: 6, for: 32, against: 28, gd: 4, pts: 35, form: ['W', 'W', 'W', 'D', 'D'] },
  ];

  return (
    <div className="pb-10">
      <div className="bg-primary text-brand-black py-4 px-4">
        <h1 className="text-3xl font-bold uppercase tracking-tight max-w-4xl mx-auto">Sport</h1>
      </div>
      <div className="bg-primary/90 text-brand-black font-semibold text-sm overflow-x-auto no-scrollbar py-2 px-4 border-b border-yellow-600">
        <div className="flex space-x-6 whitespace-nowrap max-w-4xl mx-auto">
          <a className="underline decoration-2 underline-offset-4" href="#">Home</a>
          <a href="#">Football</a>
          <a href="#">Cricket</a>
          <a href="#">Formula 1</a>
          <a href="#">Rugby U</a>
          <a href="#">Tennis</a>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4 border-l-4 border-brand-red pl-2 text-brand-red">Top Stories</h2>
        <article className="bg-surface-light dark:bg-surface-dark shadow-sm rounded-lg overflow-hidden relative h-64 flex items-end">
           <img src="https://picsum.photos/seed/sports/800/400" className="absolute inset-0 w-full h-full object-cover" alt="sports news" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
           <div className="relative p-6 text-white">
              <span className="bg-brand-red px-2 py-0.5 text-xs font-bold rounded mb-2 inline-block">LIVE</span>
              <h3 className="text-2xl font-bold leading-tight">Transfer Window Deadline: Latest Updates & Rumors</h3>
           </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Premier League Table</h2>
          <button className="text-sm font-medium text-blue-600 hover:underline">Full Table</button>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark shadow-sm rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-10">Pos</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-3 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-12">Pl</th>
                <th className="px-3 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-12">Pts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {standings.map((row) => (
                <tr key={row.team} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className={`px-3 py-3 text-sm font-medium border-l-4 ${row.pos <= 3 ? 'border-green-500' : 'border-orange-500'}`}>{row.pos}</td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-[10px] mr-3 ${row.short === 'ARS' ? 'bg-red-600' : row.short === 'MCI' ? 'bg-sky-400' : 'bg-red-900'}`}>{row.short}</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{row.team}</div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-center text-sm text-gray-500">{row.played}</td>
                  <td className="px-3 py-3 text-center text-sm font-bold text-gray-900 dark:text-white">{row.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SportsScreen;
