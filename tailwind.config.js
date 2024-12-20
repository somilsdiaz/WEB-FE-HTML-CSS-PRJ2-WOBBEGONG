module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #FFFFFF, #533DE6, #523CE0, #5536B9, #4B36BA, #3B2782)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        custom: {
          purple: '#382586',
          lightPurple: '#5142b0',
          darkPurple: '#2d1c70',
          blue: '#00ddff',
          dark: '#0f1111',
          link: '#007185',
        },
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
      },
    },
  },
  plugins: [],
};