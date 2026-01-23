import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { timeZones } from '../data/timeZonesData';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { FaClock, FaSun, FaMoon } from 'react-icons/fa';

const TimeZoneClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Function to get time for a specific time zone
  const getTimeForZone = (utcOffset) => {
    const utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
    const zoneTime = new Date(utc + (3600000 * utcOffset));
    return zoneTime;
  };

  // Format time based on 12/24 hour preference
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    if (is24Hour) {
      return {
        time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
        period: ''
      };
    } else {
      const period = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      return {
        time: `${String(displayHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
        period: period
      };
    }
  };

  // Determine if it's day or night based on hour
  const isDayTime = (date) => {
    const hours = date.getHours();
    return hours >= 6 && hours < 18;
  };

  // Get border color class based on color
  const getBorderColor = (color) => {
    switch (color) {
      case 'cyan': return 'border-neon-cyan';
      case 'purple': return 'border-neon-purple';
      case 'pink': return 'border-neon-pink';
      case 'blue': return 'border-neon-blue';
      default: return 'border-neon-cyan';
    }
  };

  // Get text color class based on color
  const getTextColor = (color) => {
    switch (color) {
      case 'cyan': return 'text-neon-cyan';
      case 'purple': return 'text-neon-purple';
      case 'pink': return 'text-neon-pink';
      case 'blue': return 'text-neon-blue';
      default: return 'text-neon-cyan';
    }
  };

  return (
    <section id="world-clock" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaClock className="text-4xl text-neon-cyan animate-pulse" />
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold neon-glow-cyan">
              World Clock
            </h2>
          </div>
          <p className="text-gray-400 text-lg mb-6">
            Track time across global time zones in real-time
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-6"></div>
          
          {/* Format Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIs24Hour(!is24Hour)}
            className="glass px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/10"
          >
            <span className="text-neon-cyan">⏰</span> {is24Hour ? '24-Hour' : '12-Hour'} Format
          </motion.button>
        </motion.div>

        {/* Time Zone Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {timeZones.map((zone) => {
            const zoneTime = getTimeForZone(zone.utcOffset);
            const { time, period } = formatTime(zoneTime);
            const isDay = isDayTime(zoneTime);

            return (
              <motion.div
                key={zone.id}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className={`glass p-6 rounded-xl border-l-4 ${getBorderColor(zone.color)} relative overflow-hidden group cursor-pointer`}
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  zone.color === 'cyan' ? 'from-neon-cyan/5' :
                  zone.color === 'purple' ? 'from-neon-purple/5' :
                  zone.color === 'pink' ? 'from-neon-pink/5' :
                  'from-neon-blue/5'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with Day/Night Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-orbitron text-xl font-bold ${getTextColor(zone.color)}`}>
                      {zone.code}
                    </h3>
                    <div className={`text-2xl ${isDay ? 'text-yellow-400' : 'text-blue-300'}`}>
                      {isDay ? <FaSun className="animate-pulse" /> : <FaMoon className="animate-pulse" />}
                    </div>
                  </div>

                  {/* City Name */}
                  <p className="text-gray-400 text-sm mb-4">{zone.city}</p>

                  {/* Time Display */}
                  <div className="font-orbitron text-3xl font-bold text-white mb-2 tracking-wider">
                    {time}
                    {period && <span className={`text-sm ml-2 ${getTextColor(zone.color)}`}>{period}</span>}
                  </div>

                  {/* UTC Offset */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{zone.name}</span>
                    <span className={`${getTextColor(zone.color)} font-semibold`}>UTC {zone.offset}</span>
                  </div>
                </div>

                {/* Animated Border on Hover */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    zone.color === 'cyan' ? 'from-neon-cyan to-transparent' :
                    zone.color === 'purple' ? 'from-neon-purple to-transparent' :
                    zone.color === 'pink' ? 'from-neon-pink to-transparent' :
                    'from-neon-blue to-transparent'
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            <span className="text-neon-purple">⚡</span> Times update in real-time every second
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeZoneClock;
