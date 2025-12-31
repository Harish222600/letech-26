import { motion } from 'framer-motion';
import { timelineEvents } from '../data/eventsData';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp } from '../animations/variants';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-20 relative overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 neon-glow-purple">
            Event Flow
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto" ref={ref}>
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink z-0"
          ></motion.div>

          {timelineEvents.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center justify-between mb-8 w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Empty Space for alignment */}
                <div className="hidden md:block w-5/12"></div>

                {/* Node Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0f] border-4 border-neon-cyan z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`ml-12 md:ml-0 w-full md:w-5/12 glass p-6 rounded-xl border-l-4 ${
                    index % 3 === 0 ? 'border-neon-cyan' : index % 3 === 1 ? 'border-neon-purple' : 'border-neon-pink'
                  } hover:scale-105 transition-transform duration-300`}
                >
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-white/10 ${
                    index % 3 === 0 ? 'text-neon-cyan' : index % 3 === 1 ? 'text-neon-purple' : 'text-neon-pink'
                  }`}>
                    {item.time}
                  </span>
                  <h3 className="text-xl font-bold font-orbitron text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
