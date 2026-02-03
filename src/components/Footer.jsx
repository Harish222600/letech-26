import { FaInstagram, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass-strong text-white relative overflow-hidden pt-16 pb-8 border-t border-white/5">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-bold font-orbitron mb-4 neon-glow-cyan">
              LE TECH '26
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A National Level Technical Symposium organized by the Department of MCA,
              S.A. Engineering College. Inspiring innovation and technical excellence.
              <br />
              <span className="bg-red-900/30 border border-red-500/30 text-red-400 px-3 py-2 rounded-lg font-bold text-sm mt-4 block text-center shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                ⚠️ ONLY FOR ARTS & SCIENCE STUDENTS
              </span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neon-purple transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-800 transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links / Map */}
          <div>
            <h3 className="text-xl font-bold font-orbitron mb-6 text-neon-purple">Location</h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 h-48 w-full group">
              <iframe
                title="SAEC Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.680004996359!2d80.11479807584109!3d13.047530613028213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52608144216893%3A0x6fa0f074d2836261!2sS.A.%20Engineering%20College!5e0!3m2!1sen!2sin!4v1703648000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:scale-110 transition-transform duration-700"
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-orbitron mb-6 text-neon-pink">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-neon-cyan"><FaMapMarkerAlt /></div>
                <p className="text-gray-300 text-sm">
                  MCA Block,<br />
                  S.A. Engineering College,<br />
                  Poonamallee, Avadi Road,<br />
                  Veeraraghavapuram,<br />
                  Chennai - 600077
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-neon-cyan"><FaEnvelope /></div>
                <a href="mailto:letech@saec.ac.in" className="text-gray-300 hover:text-white transition-colors">
                  letech@saec.ac.in
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400 text-center">
                "Technology is best when it brings people together."
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LE TECH. Department of MCA, S.A. Engineering College.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
