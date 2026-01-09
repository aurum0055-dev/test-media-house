
import React from 'react';

const WeatherScreen: React.FC = () => {
  const hourly = [
    { time: 'Now', icon: 'cloudy_snowing', temp: '-2°' },
    { time: '14:00', icon: 'weather_mix', temp: '0°' },
    { time: '15:00', icon: 'cloudy_snowing', temp: '-1°' },
    { time: '16:00', icon: 'cloudy_snowing', temp: '-2°' },
    { time: '17:00', icon: 'clear_night', temp: '-3°' },
  ];

  const forecast = [
    { day: 'Tue', icon: 'cloudy_snowing', high: '-1°', low: '-5°' },
    { day: 'Wed', icon: 'sunny', high: '2°', low: '-3°' },
    { day: 'Thu', icon: 'partly_cloudy_day', high: '3°', low: '0°' },
    { day: 'Fri', icon: 'rainy', high: '4°', low: '2°' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center py-8">
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">London, UK</p>
          <div className="flex items-center mb-4">
            <span className="material-symbols-outlined text-yellow-400 text-8xl !font-thin fill-1">cloudy_snowing</span>
            <p className="text-7xl md:text-8xl font-bold ml-4 text-blue-500">-2°C</p>
          </div>
          <p className="text-xl font-semibold">Snow Showers</p>
          <p className="text-gray-500 mt-2">Feels like -6°C</p>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">Hourly Forecast</h2>
          <div className="flex overflow-x-auto no-scrollbar space-x-6 pb-2">
            {hourly.map((h) => (
              <div key={h.time} className="flex-shrink-0 w-20 text-center">
                <p className="text-sm font-medium mb-2">{h.time}</p>
                <span className="material-symbols-outlined text-3xl text-blue-300 mb-2">{h.icon}</span>
                <p className="text-sm font-semibold">{h.temp}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4">7-Day Forecast</h2>
          <div className="space-y-4">
            {forecast.map((f, i) => (
              <div key={f.day} className={`flex items-center justify-between p-3 rounded-lg ${i % 2 === 0 ? 'bg-gray-50 dark:bg-surface-dark' : ''}`}>
                <p className="font-medium w-20">{f.day}</p>
                <span className="material-symbols-outlined text-3xl text-yellow-400">{f.icon}</span>
                <p className="text-right font-medium">
                  <span className="font-bold">{f.high}</span>
                  <span className="text-gray-400 ml-2">/ {f.low}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeatherScreen;
