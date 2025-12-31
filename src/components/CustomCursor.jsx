import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion values for raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth trailing effect - FASTER RESPONSE
  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 400 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 400 });

  // Separate springs for the outer ring (slower follow but snappier)
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering over clickable elements
      const target = e.target;
      setIsHovering(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('button') ||
        target.closest('a')
      );
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <div className="hidden md:block">
      {/* Main Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: -4, // Center align
          y: -4,
        }}
        className={`fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200 ${
          isHovering ? 'scale-50' : 'scale-100'
        }`}
      />

      {/* Glowing Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          translateX: ringX,
          translateY: ringY,
          x: -20, // Center align (40px / 2)
          y: -20,
        }}
        className={`fixed top-0 left-0 w-10 h-10 border-2 border-neon-cyan rounded-full pointer-events-none z-[9998] transition-all duration-300 ${
          isHovering 
            ? 'scale-150 bg-neon-cyan/20 border-transparent' 
            : 'scale-100 opacity-50'
        }`}
      />

      {/* Glow Effect */}
      <motion.div
        aria-hidden="true"
        style={{
          translateX: ringX,
          translateY: ringY,
          x: -125, // Center align (250px / 2)
          y: -125,
        }}
        className="fixed top-0 left-0 w-[250px] h-[250px] bg-neon-cyan/40 rounded-full blur-[50px] pointer-events-none z-[1] mix-blend-screen"
      />
    </div>
  );
};

export default CustomCursor;
