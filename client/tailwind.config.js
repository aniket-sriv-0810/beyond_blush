// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'breathing': 'breathing 2s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
};
