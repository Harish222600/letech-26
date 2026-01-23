import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCalendar, HiUser } from 'react-icons/hi';
import { FaTrophy, FaScroll } from 'react-icons/fa';

const EventModal = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[11001] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-[#1a1a2e] rounded-2xl border border-neon-cyan/30 shadow-[0_0_50px_rgba(0,243,255,0.2)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 md:p-8 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <HiX size={24} />
            </button>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl">{event.icon}</span>
              <h2 className="text-3xl font-orbitron font-bold text-white neon-glow-cyan">
                {event.name}
              </h2>
            </div>
            <p className="text-gray-300 text-lg">{event.description}</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {/* Rules */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-neon-purple">
                <FaScroll size={20} />
                <h3 className="text-xl font-orbitron font-bold">Rules & Regulations</h3>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-300 ml-2">
                {event.rules.map((rule, index) => (
                  <li key={index} className="leading-relaxed">{rule}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Timing */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2 text-neon-pink">
                  <HiCalendar size={20} />
                  <h3 className="font-bold font-orbitron">Timing</h3>
                </div>
                <p className="text-gray-300">{event.timing}</p>
              </div>

              {/* Coordinator */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2 text-neon-cyan">
                  <HiUser size={20} />
                  <h3 className="font-bold font-orbitron">Coordinator</h3>
                </div>
                <p className="text-white font-semibold">{event.coordinator}</p>
                <a href={`tel:${event.contact}`} className="text-gray-400 hover:text-neon-cyan transition-colors text-sm block mt-1">
                  📞 {event.contact}
                </a>
              </div>
            </div>

            {/* Prize Note */}
            <div className="flex items-center justify-center gap-2 text-yellow-500 bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
              <FaTrophy />
              <p className="font-semibold">Exciting Cash Prizes & Certificates for Winners!</p>
            </div>
          </div>

          {/* Footer - Register Button */}
          <div className="p-6 border-t border-white/10 flex justify-end">
            <button
              onClick={() => {
                onClose();
                document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-bold text-white shadow-lg hover:shadow-neon-cyan/50 transition-all hover:scale-105"
            >
              Register for {event.name}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EventModal;
