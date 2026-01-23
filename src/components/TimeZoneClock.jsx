import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './TimeZoneClock.css'; // Make sure to create a CSS file for styling

const TimeZoneClock = () => {
    const [time, setTime] = useState({});
    
    useEffect(() => {
        const updateTime = () => {
            const utcDate = new Date();
            const timeZones = {
                "UTC": utcDate.toISOString().slice(0, 19).replace('T', ' '),
                "EST": utcDate.toLocaleString("en-US", { timeZone: "America/New_York" }),
                "PST": utcDate.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
                "CST": utcDate.toLocaleString("en-US", { timeZone: "America/Chicago" }),
            };
            setTime(timeZones);
        };
        
        const timerID = setInterval(updateTime, 1000);
        updateTime(); // Initial call

        return () => clearInterval(timerID);
    }, []);

    return (
        <div className="clock-container">
            {Object.entries(time).map(([zone, t]) => (
                <motion.div 
                    className="clock" 
                    key={zone}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <h2>{zone}</h2>
                    <p>{t}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default TimeZoneClock;