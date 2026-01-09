
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-8 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h4 className="font-bold text-lg mb-4">Explore the BBC</h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-2 gap-x-4 text-sm text-gray-400 mb-8 border-b border-gray-800 pb-8">
          <a className="hover:text-white" href="#">Home</a>
          <a className="hover:text-white" href="#">News</a>
          <a className="hover:text-white" href="#">Sport</a>
          <a className="hover:text-white" href="#">Weather</a>
          <a className="hover:text-white" href="#">iPlayer</a>
          <a className="hover:text-white" href="#">Sounds</a>
          <a className="hover:text-white" href="#">Bitesize</a>
          <a className="hover:text-white" href="#">CBeebies</a>
          <a className="hover:text-white" href="#">CBBC</a>
          <a className="hover:text-white" href="#">Food</a>
        </div>
        <div className="text-xs text-gray-500 space-y-2">
          <div className="flex flex-wrap gap-3 mb-4">
            <a className="hover:underline" href="#">Terms of Use</a>
            <a className="hover:underline" href="#">About the BBC</a>
            <a className="hover:underline" href="#">Privacy Policy</a>
            <a className="hover:underline" href="#">Cookies</a>
            <a className="hover:underline" href="#">Accessibility Help</a>
            <a className="hover:underline" href="#">Parental Guidance</a>
            <a className="hover:underline" href="#">Contact the BBC</a>
          </div>
          <p>Copyright © 2026 BBC. The BBC is not responsible for the content of external sites. <a className="text-white hover:underline" href="#">Read about our approach to external linking.</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
