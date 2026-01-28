import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { FaGoogle, FaCheckCircle, FaExclamationCircle, FaLink, FaClock } from 'react-icons/fa';
import { fadeInUp, slideInLeft, slideInRight } from '../animations/variants';

const Registration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_URL || "https://forms.gle/Y9J4FgBLsxqAjefP7";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(googleFormUrl);
      alert('Registration link copied to clipboard');
    } catch (err) {
      alert('Copy failed. Please copy manually.');
    }
  };

  return (
    <section id="registration" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] -z-1"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] -z-1"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-neon-cyan">Registration</span> Open
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-6xl mx-auto">

          {/* Instructions Card */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="flex-1 w-full max-w-md glass rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-neon-purple flex items-center gap-2">
              <FaExclamationCircle /> Important Info
            </h3>

            <ul className="space-y-6 text-gray-300">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan flex-shrink-0 mt-1">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Registration Fee</h4>
                  <p className="text-sm">A nominal fee of <span className="text-neon-green font-bold text-lg">₹100</span> per student.</p>
                  <span className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-white/5 border border-neon-cyan/40 text-xs text-neon-cyan">
                    <FaCheckCircle size={12} /> Covers participation for all events
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple flex-shrink-0 mt-1">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Rules</h4>
                  <p className="text-sm">
                    <span className="block">• ID Card is mandatory.</span>
                    <span className="block">• Only 8 students per college.</span>
                    <span className="block">• Formals only.</span>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center text-neon-pink flex-shrink-0 mt-1">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Confirmation</h4>
                  <p className="text-sm">Capture the success message after form submission.</p>
                  <span className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-white/5 border border-neon-pink/30 text-xs text-neon-pink">
                    <FaClock size={12} /> Form closes 48 hours before the event
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* QR & Action Card */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
            className="flex-1 w-full max-w-md bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-1 shadow-2xl shadow-neon-cyan/20"
          >
            <div className="bg-[#0f0f1a] rounded-xl p-8 flex flex-col items-center text-center h-full">

              <div className="relative mb-8 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-xl opacity-50 blur-lg group-hover:opacity-100 transition duration-500 animate-pulse-slow"></div>
                <div className="relative bg-white p-4 rounded-xl">
                  <QRCodeSVG
                    value={googleFormUrl}
                    size={200}
                    level="H"
                    includeMargin={false}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold font-orbitron text-white mb-2">Scan to Register</h3>
              <p className="text-gray-400 text-sm mb-4">or click the buttons below</p>

              <div className="flex flex-col gap-3 w-full">
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent border-2 border-neon-cyan rounded-full hover:bg-neon-cyan hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-cyan"
                >
                  <FaGoogle className="mr-2 group-hover:animate-bounce" />
                  Fill Google Form
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-white/5 border border-white/15 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-purple"
                >
                  <FaLink /> Copy form link
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Registration;
