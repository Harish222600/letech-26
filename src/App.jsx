import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import Coordinators from './components/Coordinators';
import Footer from './components/Footer';
import GeometricBackground from './components/GeometricBackground';
import CustomCursor from './components/CustomCursor';
import TouchTrail from './components/TouchTrail';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020205]"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 mb-8 mx-auto border-4 border-t-neon-cyan border-r-neon-purple border-b-neon-pink border-l-transparent rounded-full"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-orbitron text-2xl font-bold text-white tracking-widest"
        >
          LOADING <span className="text-neon-cyan">LE TECH '26</span>
        </motion.h1>
      </div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-hidden relative selection:bg-neon-cyan selection:text-black">
      <CustomCursor />
      <TouchTrail />
      <GeometricBackground />

      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Events />
          <Timeline />
          <Registration />
          <Coordinators />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
