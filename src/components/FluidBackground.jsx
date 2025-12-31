import { motion } from 'framer-motion';

const FluidBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#050508]">
      
      {/* Moving Grid Floor (Retro/Cyber effect) */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(3)',
          transformOrigin: 'top center',
          animation: 'gridMove 20s linear infinite',
        }}
      ></div>

      {/* Fluid Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-neon-purple/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-neon-cyan/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-neon-pink/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>

      {/* Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 20s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0) scale(3); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(100px) scale(3); }
        }
      `}</style>
    </div>
  );
};

export default FluidBackground;
