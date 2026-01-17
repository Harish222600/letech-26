import { useState } from 'react';
import { motion } from 'framer-motion';
import { technicalEvents, nonTechnicalEvents } from '../data/eventsData';
import EventCard from './EventCard';
import EventModal from './EventModal';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
        </motion.div>

        {/* Technical Events */}
        <div className="mb-20">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-orbitron font-bold text-neon-cyan mb-8 text-center"
          >
            Technical Events
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technicalEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={setSelectedEvent}
              />
            ))}
          </motion.div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-orbitron font-bold text-neon-purple mb-8 text-center"
          >
            Non-Technical Events
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {nonTechnicalEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={setSelectedEvent}
              />
            ))}
          </motion.div>
        </div>
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
