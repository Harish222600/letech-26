import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TouchTrail = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleTouch = (e) => {
      // Create ripple for each touch point
      Array.from(e.touches).forEach(touch => {
        const newRipple = {
          x: touch.clientX,
          y: touch.clientY,
          id: Date.now() + Math.random(),
          color: ['#00f3ff', '#b026ff', '#ff006e'][Math.floor(Math.random() * 3)]
        };
        setRipples((prev) => [...prev.slice(-10), newRipple]); // Limit ripples
      });
    };

    window.addEventListener('touchstart', handleTouch);
    // Optional: Add on move for continuous ripples, but throttled
    let lastTime = 0;
    const handleTouchMove = (e) => {
      const now = Date.now();
      if (now - lastTime > 100) { // Throttle 100ms
        handleTouch(e);
        lastTime = now;
      }
    };
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples((prev) => prev.filter(r => Date.now() - r.id < 1000));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] md:hidden overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              left: ripple.x,
              top: ripple.y,
              borderColor: ripple.color,
              boxShadow: `0 0 15px ${ripple.color}`,
            }}
            className="absolute w-12 h-12 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2"
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TouchTrail;
