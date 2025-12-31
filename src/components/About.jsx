import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../animations/variants';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const associations = [
    { name: 'IEEE', color: '#00629B' },
    { name: 'ACM', color: '#0085CA' },
    { name: 'AICTE', color: '#FF6B35' },
    { name: 'IAENG', color: '#4A90E2' },
    { name: 'NAAC A', color: '#00C853' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-orbitron text-4xl md:text-5xl font-bold mb-4 neon-glow-purple"
          >
            About LE TECH '26
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 card-hover"
          >
            <h3 className="font-orbitron text-2xl font-bold mb-4 text-neon-cyan">
              National Level Technical Symposium
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              LE TECH '26 is a premier national-level technical symposium organized by the 
              Department of Master of Computer Applications (MCA) at S.A. Engineering College. 
              This event brings together brilliant minds from across the nation to showcase 
              innovation, creativity, and technical excellence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Join us for a day filled with exciting technical competitions, fun events, 
              networking opportunities, and a chance to win amazing prizes!
            </p>
          </motion.div>

          {/* College Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 card-hover"
          >
            <h3 className="font-orbitron text-2xl font-bold mb-4 text-neon-purple">
              S.A. Engineering College
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                <p>Autonomous Institution</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                <p>NAAC 'A' Grade Accredited</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                <p>ISO 9001:2015 Certified</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                <p>Affiliated to Anna University</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                <p>27 Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Associations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="font-orbitron text-xl font-semibold mb-8 text-gray-300">
            In Association With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {associations.map((assoc, index) => (
              <motion.div
                key={assoc.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass rounded-xl px-6 py-4 min-w-[120px]"
                style={{ 
                  boxShadow: `0 0 20px ${assoc.color}40`,
                  borderColor: `${assoc.color}40`
                }}
              >
                <p className="font-orbitron font-bold text-lg" style={{ color: assoc.color }}>
                  {assoc.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
