const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   mode: 'jit',
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            theme1: {
               'main-blue': 'hsl(222, 26%, 31%)',
               'main-darkblue': 'hsl(223, 31%, 20%)',
               'main-verydarkblue': 'hsl(224, 36%, 15%)',
               'keys-blue': 'hsl(225, 21%, 49%)',
               'keys-darkblue': 'hsl(224, 28%, 35%)',
               'keys-red': 'hsl(6, 63%, 50%)',
               'keys-darkred': 'hsl(6, 70%, 34%)',
               'keys-orange': 'hsl(30, 25%, 89%)',
               'keys-darkorange': 'hsl(28, 16%, 65%)',
               'text-blue': 'hsl(221, 14%, 31%)',
               'text-white': 'hsl(221, 14%, 31%)',
            },
         },
         fontFamily: {
            sans: ['Spartan', ...defaultTheme.fontFamily.sans],
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
