module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};

