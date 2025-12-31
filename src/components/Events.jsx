import { useState } from 'react';
import { motion } from 'framer-motion';
import { technicalEvents, nonTechnicalEvents } from '../data/eventsData';
import EventCard from './EventCard';
import EventModal from './EventModal';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('technical'); // 'technical' or 'non-technical'

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 neon-glow-cyan">
            Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mb-8"></div>
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2 rounded-full font-orbitron font-semibold transition-all duration-300 border ${
                activeTab === 'technical'
                  ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)]'
                  : 'border-white/20 text-gray-400 hover:border-white/50'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveTab('non-technical')}
              className={`px-6 py-2 rounded-full font-orbitron font-semibold transition-all duration-300 border ${
                activeTab === 'non-technical'
                  ? 'bg-neon-purple/20 border-neon-purple text-neon-purple shadow-[0_0_20px_rgba(176,38,255,0.3)]'
                  : 'border-white/20 text-gray-400 hover:border-white/50'
              }`}
            >
              Non-Technical
            </button>
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeTab === 'technical' ? (
            technicalEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={setSelectedEvent}
              />
            ))
          ) : (
            nonTechnicalEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={setSelectedEvent}
              />
            ))
          )}
        </motion.div>
      </div>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};

export default Events;
