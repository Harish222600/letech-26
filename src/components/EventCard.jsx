import { motion } from 'framer-motion';
import { useState } from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${event.id}`}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => onClick(event)}
      className="relative group cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative h-full bg-[#151525] rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors flex flex-col items-center text-center">
        
        {/* Icon */}
        <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-4xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
          {event.icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
          {event.name}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-2 mb-6 flex-grow">
          {event.description}
        </p>

        {/* Action */}
        <div className="mt-auto w-full">
          <span className="inline-block px-4 py-2 rounded-full border border-neon-purple/50 text-neon-purple text-sm font-semibold group-hover:bg-neon-purple group-hover:text-white transition-all duration-300">
            View Details
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
