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
    },
  },
  plugins: [],
};

