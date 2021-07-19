const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   mode: 'jit',
   purge: {
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/*.vue', './src/safelist.txt'],
   },
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
            theme2: {
               'main-blue': 'hsl(0, 0%, 90%)',
               'main-darkblue': 'hsl(0, 5%, 81%)',
               'main-verydarkblue': 'hsl(0, 0%, 93%)',
               'keys-blue': 'hsl(185, 42%, 37%)',
               'keys-darkblue': 'hsl(185, 58%, 25%)',
               'keys-red': 'hsl(25, 98%, 40%)',
               'keys-darkred': 'hsl(25, 99%, 27%)',
               'keys-orange': 'hsl(45, 7%, 89%)',
               'keys-darkorange': 'hsl(35, 11%, 61%)',
               'text-blue': 'hsl(60, 10%, 19%)',
               'text-white': 'hsl(0, 0, 100%)',
            },
            theme3: {
               'main-blue': 'hsl(268, 75%, 9%)',
               'main-darkblue': 'hsl(268, 71%, 12%)',
               'main-verydarkblue': 'hsl(268, 71%, 12%)',
               'keys-blue': 'hsl(281, 89%, 26%)',
               'keys-darkblue': 'hsl(285, 91%, 52%)',
               'keys-red': 'hsl(176, 100%, 44%)',
               'keys-darkred': 'hsl(177, 92%, 70%)',
               'keys-orange': 'hsl(268, 47%, 21%)',
               'keys-darkorange': 'hsl(290, 70%, 36%)',
               'text-blue': 'hsl(52, 100%, 62%)',
               'text-white': 'hsl(0, 0, 100%)',
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
