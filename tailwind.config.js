/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can still extend other utilities here, but textShadow goes in a plugin
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(17, 179, 250, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px #fff',
        },
        '.text-shadow-lg': {
          textShadow: '1px 1px 0px #fff',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
