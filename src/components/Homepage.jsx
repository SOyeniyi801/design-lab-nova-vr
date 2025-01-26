import React, { useState } from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import auroraImg from '../assets/figma-aurora-image.png';
import nebulaImg from '../assets/figma-nebula-image.png';

const NavButton = ({ direction, onClick }) => (
  <button 
    onClick={onClick}
    className="p-2 border border-pink-300 bg-white hover:bg-gray-50"
    aria-label={`Navigate ${direction}`}
  >
    {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
  </button>
);

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('aurora');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const pages = {
    aurora: { title: 'AURORA' },
    nebula: { title: 'NEBULA' }
  };

  const handleNavigation = () => {
    setCurrentPage(currentPage === 'aurora' ? 'nebula' : 'aurora');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center p-4">
        <span className="text-xl font-bold">NOVA VR</span>
        
        <button className="md:hidden border p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex gap-4">
          {['Demo', 'Explore', 'Shop', 'Get Help'].map((item) => (
            <button 
              key={item} 
              className="border px-4 py-1 hover:bg-gray-50"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-2">
          {['Demo', 'Explore', 'Shop', 'Get Help'].map((item) => (
            <button 
              key={item} 
              className="block w-full text-left py-2 border px-4 hover:bg-gray-50"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <main className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center my-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get Lost In Your Own World
        </motion.h1>

        <div className="relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${currentPage}`}
              className="text-7xl md:text-8xl font-bold text-gray-100 text-center mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {pages[currentPage].title}
            </motion.h2>
          </AnimatePresence>

          <div className="relative w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={`image-${currentPage}`}
                src={currentPage === 'aurora' ? auroraImg : nebulaImg}
                alt={`${currentPage} VR Headset`}
                className="w-64 md:w-96"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2">
                <NavButton direction="prev" onClick={() => handleNavigation()} />
              </div>
              <div className="md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2">
                <NavButton direction="next" onClick={() => handleNavigation()} />
              </div>
            </div>
          </div>
        </div>

        <button className="mx-auto mt-8 block px-6 py-2 border hover:bg-gray-50">
          Explore Our World
        </button>
      </main>
    </div>
  );
};

export default HomePage;