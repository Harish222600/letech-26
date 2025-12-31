import { motion } from 'framer-motion';
import { HiUser, HiMail, HiPhone } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Coordinators = () => {
  return (
    <section id="coordinators" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 neon-glow-cyan">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center"
        >
          {/* Main Coordinator */}
          <motion.div
            variants={fadeInUp}
            className="md:col-start-1 md:row-start-1 lg:col-start-2 glass-strong p-8 rounded-2xl text-center border border-neon-cyan/50 shadow-[0_0_30px_rgba(0,243,255,0.15)] transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-cyan to-blue-600 rounded-full mb-6 flex items-center justify-center text-4xl text-white shadow-lg">
              <HiUser />
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white mb-1">Joshua D</h3>
            <p className="text-neon-cyan font-semibold mb-4">Student Coordinator</p>
            <p className="text-gray-400 text-sm mb-4">MCA - II Year</p>
            
            <div className="flex justify-center space-x-4">
              <a href="tel:9677001321" className="p-2 bg-white/10 rounded-full hover:bg-neon-cyan hover:text-black transition-colors">
                <HiPhone size={20} />
              </a>
              <a href="mailto:letech@saec.ac.in" className="p-2 bg-white/10 rounded-full hover:bg-neon-cyan hover:text-black transition-colors">
                <HiMail size={20} />
              </a>
            </div>
             <p className="mt-4 text-sm font-mono text-gray-300">9677001321</p>
          </motion.div>

          {/* Convenors Placeholder */}
          <motion.div
            variants={fadeInUp}
            className="glass p-8 rounded-2xl text-center border border-neon-purple/30 hover:border-neon-purple/60 transition-colors"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-neon-purple to-pink-600 rounded-full mb-6 flex items-center justify-center text-3xl text-white shadow-lg">
              <HiUser />
            </div>
            <h3 className="text-xl font-bold font-orbitron text-white mb-1">Faculty Convenors</h3>
            <p className="text-neon-purple font-semibold mb-4">Department of MCA</p>
            <p className="text-gray-400 text-sm">Guiding Force Behind LE TECH '26</p>
          </motion.div>

           {/* Staff Coordinators Placeholder */}
           <motion.div
            variants={fadeInUp}
            className="glass p-8 rounded-2xl text-center border border-neon-pink/30 hover:border-neon-pink/60 transition-colors"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-neon-pink to-orange-600 rounded-full mb-6 flex items-center justify-center text-3xl text-white shadow-lg">
              <HiUser />
            </div>
            <h3 className="text-xl font-bold font-orbitron text-white mb-1">Staff Coordinators</h3>
            <p className="text-neon-pink font-semibold mb-4">Department of MCA</p>
            <p className="text-gray-400 text-sm">Supporting and Mentoring</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Coordinators;
