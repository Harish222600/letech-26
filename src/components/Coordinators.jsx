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
          className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto"
        >
          {/* Convenors */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 glass-strong p-8 rounded-2xl text-center border border-neon-purple/50 shadow-[0_0_30px_rgba(189,52,254,0.15)] transform hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-center order-2 md:order-1"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-purple to-pink-600 rounded-full mb-6 flex items-center justify-center text-4xl text-white shadow-lg">
              <HiUser />
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white mb-4">Convenors</h3>

            <div className="mb-4">
              <p className="text-white font-semibold">Mrs. R. RAJESHWARI</p>
              <p className="text-gray-400 text-sm">Asst. Professor</p>
              <a href="tel:7358635695" className="text-neon-purple text-xs tracking-wider block mt-1 hover:text-white transition-colors">73586 35695</a>
            </div>

            <div>
              <p className="text-white font-semibold">Mrs. K. MALATHY</p>
              <p className="text-gray-400 text-sm">Asst. Professor</p>
              <a href="tel:9962552343" className="text-neon-purple text-xs tracking-wider block mt-1 hover:text-white transition-colors">99625 52343</a>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <a href="tel:7358635695" className="p-2 bg-white/10 rounded-full hover:bg-neon-purple hover:text-white transition-colors">
                <HiPhone size={20} />
              </a>
              <a href="mailto:letech@saec.ac.in" className="p-2 bg-white/10 rounded-full hover:bg-neon-purple hover:text-white transition-colors">
                <HiMail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Student Coordinators */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 glass-strong p-8 rounded-2xl text-center border border-neon-cyan/50 shadow-[0_0_30px_rgba(0,243,255,0.15)] transform hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-center order-1 md:order-2"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-cyan to-blue-600 rounded-full mb-6 flex items-center justify-center text-4xl text-white shadow-lg">
              <HiUser />
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white mb-2">Student Coordinators</h3>

            <div className="mb-4">
              <p className="text-white font-semibold">PRASADH. S.N</p>
              <p className="text-gray-400 text-sm">MCA - I Year</p>
              <a href="tel:7395948252" className="text-neon-cyan text-sm tracking-widest block mt-1 hover:text-white transition-colors">73959 48252</a>
            </div>

            <div className="mb-6">
              <p className="text-white font-semibold">JOSHUA. D</p>
              <p className="text-gray-400 text-sm">MCA - II Year</p>
              <a href="tel:9677001321" className="text-neon-cyan text-sm tracking-widest block mt-1 hover:text-white transition-colors">96770 01321</a>
            </div>

            <div className="flex justify-center space-x-4">
              <a href="tel:9677001321" className="p-2 bg-white/10 rounded-full hover:bg-neon-cyan hover:text-black transition-colors">
                <HiPhone size={20} />
              </a>
              <a href="mailto:letech@saec.ac.in" className="p-2 bg-white/10 rounded-full hover:bg-neon-cyan hover:text-black transition-colors">
                <HiMail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coordinators;
