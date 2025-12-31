/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    cyan: '#00f3ff',
                    purple: '#b026ff',
                    pink: '#ff006e',
                    blue: '#0066ff',
                },
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 3s ease-in-out infinite',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                glow: {
                    '0%': {
                        textShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff',
                    },
                    '100%': {
                        textShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff, 0 0 40px #00f3ff, 0 0 50px #00f3ff',
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
