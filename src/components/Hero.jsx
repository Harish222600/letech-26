import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { fadeInUp, fadeIn } from '../animations/variants';

import sdg9 from '../assets/sdg-9.jpg';
import sdg11 from '../assets/sdg-11.jpg';
import sdg13 from '../assets/sdg-13.jpg';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // GSAP animations for title
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      });

      gsap.to(titleRef.current, {
        textShadow: "0 0 20px #00f3ff, 0 0 40px #00f3ff, 0 0 60px #00f3ff",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent -z-5"></div>

      <div className="container mx-auto px-4 z-10 text-center pt-28 md:pt-0">
        {/* College Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl font-poppins text-gray-300 mb-2">
            S.A. ENGINEERING COLLEGE
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Autonomous | NAAC 'A' Grade | ISO 9001:2015 Certified Institution
          </p>
        </motion.div>

        {/* Main Title */}
        <div className="mb-8">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-neon-purple text-lg md:text-xl font-semibold mb-4 tracking-wider"
          >
            NATIONAL LEVEL TECHNICAL SYMPOSIUM
          </motion.p>

          <h1
            ref={titleRef}
            className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black mb-4 neon-glow-cyan"
            style={{ letterSpacing: '0.1em' }}
          >
            LE TECH '26
          </h1>

          <motion.p
            ref={subtitleRef}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-neon-cyan text-xl md:text-2xl font-semibold mb-8"
          >
            DEPARTMENT OF MCA
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-white text-sm md:text-lg italic font-light tracking-wide max-w-3xl mx-auto"
          >
            "Technology & Innovation for Sustainable Development (SDGs)"
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex justify-center gap-4 md:gap-8 mt-6 mb-8"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-lg overflow-hidden glass-strong p-1 hover:scale-110 transition-transform duration-300">
              <img src={sdg9} alt="SDG 9" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-lg overflow-hidden glass-strong p-1 hover:scale-110 transition-transform duration-300">
              <img src={sdg11} alt="SDG 11" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-lg overflow-hidden glass-strong p-1 hover:scale-110 transition-transform duration-300">
              <img src={sdg13} alt="SDG 13" className="w-full h-full object-cover rounded-md" />
            </div>
          </motion.div>
        </div>

        {/* Event Details */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-12"
        >
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="text-gray-400 text-sm mb-1">Date</p>
              <p className="text-white text-xl font-semibold">February 6<sup>th</sup>, 2026</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Venue</p>
              <p className="text-white text-xl font-semibold">MCA Block</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <button
            onClick={scrollToRegistration}
            className="btn-primary relative z-10"
          >
            Register Now
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-neon-cyan rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default Hero;
