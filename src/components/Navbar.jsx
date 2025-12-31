import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'coordinators', label: 'Team' },
    { id: 'registration', label: 'Register' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-300 ${
        isScrolled ? 'glass-strong py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <img 
                src="/Logo.png" 
                alt="LE TECH '26 Logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.5)]"
              />
              <div className="block">
                <h1 className="font-orbitron font-bold text-lg md:text-xl neon-glow-cyan">LE TECH '26</h1>
                <p className="text-[10px] md:text-xs text-gray-400">MCA Department</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                className="px-4 py-2 rounded-full font-medium text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-3xl text-neon-cyan p-2"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-strong rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="flex flex-col space-y-2 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    activeClass="bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                    className="block px-4 py-3 rounded-lg text-left font-medium text-gray-300 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
