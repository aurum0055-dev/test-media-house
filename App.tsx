
import React, { useState } from 'react';
import { AppSection } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import BitesizeScreen from './screens/BitesizeScreen';
import NewsScreen from './screens/NewsScreen';
import SportsScreen from './screens/SportsScreen';
import WeatherScreen from './screens/WeatherScreen';
import IPlayerScreen from './screens/IPlayerScreen';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.BITESIZE);

  const renderContent = () => {
    switch (activeSection) {
      case AppSection.BITESIZE:
        return <BitesizeScreen />;
      case AppSection.NEWS:
        return <NewsScreen />;
      case AppSection.SPORT:
        return <SportsScreen />;
      case AppSection.WEATHER:
        return <WeatherScreen />;
      case AppSection.IPLAYER:
        return <IPlayerScreen />;
      default:
        return <BitesizeScreen />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
