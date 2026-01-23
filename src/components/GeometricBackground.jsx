import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const GeometricBackground = ({ reduceMotion = false }) => {
  const { scrollY } = useScroll();
  
  // Create smooth scroll-based rotation values
  const rotateFast = useTransform(scrollY, [0, 5000], [0, 360]);
  const rotateSlow = useTransform(scrollY, [0, 5000], [0, -180]);
  const rotateMedium = useTransform(scrollY, [0, 5000], [0, 180]);
  const yParallax = useTransform(scrollY, [0, 5000], [0, 500]);

  // Spring physics for smoother movement
  // Spring physics for smoother movement (Lower stiffness = more floaty/less jerky)
  const smoothRotateFast = useSpring(rotateFast, { stiffness: 15, damping: 30 });
  const smoothRotateSlow = useSpring(rotateSlow, { stiffness: 15, damping: 30 });
  
  if (reduceMotion) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#020205]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d17] via-[#05050b] to-[#0d0d17] opacity-80" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(0,243,255,0.08), transparent 30%), radial-gradient(circle at 80% 30%, rgba(176,38,255,0.08), transparent 30%), radial-gradient(circle at 50% 80%, rgba(255,0,110,0.06), transparent 35%)' }} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#020205]">
      
      {/* 1. Infinite Cyber Grid (Floor) */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 
            'linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-150px) scale(3)',
          transformOrigin: 'top center',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* 2. Floating Wireframe Geometry */}
      
      {/* Big Icosahedron (Top Right) - Reacts to Scroll */}
      <motion.div
        style={{ rotate: smoothRotateFast, y: yParallax, willChange: 'transform' }}
        className="absolute -top-20 -right-20 opacity-20"
      >
        <svg  viewBox="0 0 200 200" className="w-[800px] h-[800px] text-neon-cyan">
          <polygon points="100,10 190,50 190,150 100,190 10,150 10,50" 
            fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="10" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="190" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="190" y1="150" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="190" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="150" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Octahedron (Top Left) - Fills the blank space */}
      <motion.div
        style={{ rotate: smoothRotateSlow, x: yParallax }}
        className="absolute top-10 left-10 opacity-20 text-neon-blue"
      >
        <svg viewBox="0 0 100 100" className="w-[500px] h-[500px]" style={{ overflow: 'visible' }}>
          <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="10" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="90" y1="50" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="90" x2="10" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="50" y2="10" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Cube (Bottom Left) - Moved up for better visibility */}
      <motion.div
        style={{ rotate: smoothRotateSlow, x: yParallax }}
        className="absolute bottom-[10%] left-[-50px] opacity-15 text-neon-purple"
      >
        <svg viewBox="0 0 100 100" className="w-[600px] h-[600px]" style={{ overflow: 'visible' }}>
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <rect x="30" y="30" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="20" x2="30" y2="30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="20" x2="90" y2="30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="80" x2="30" y2="90" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="80" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Pyramid (Center) - Reacts to Scroll */}
      <motion.div
        style={{ rotate: rotateMedium }}
        animate={{ 
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 opacity-10 text-neon-pink"
      >
        <svg viewBox="0 0 100 100" className="w-[400px] h-[400px]">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* 4. Scanning Beam line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20 animate-scan"></div>

      {/* Styles */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 80px; }
        }
        @keyframes scan {
          0% { transform: translateY(-10vh); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GeometricBackground;
