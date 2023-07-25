/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'red': '#e11d48',
      'black': '#000000',
      "gray": {
        "50": "#b2b2b2",
        "100": "#a8a8a8",
        "200": "#9e9e9e",
        "300": "#949494",
        "400": "#8a8a8a",
        "500": "#808080",
        "600": "#767676",
        "700": "#6c6c6c",
        "800": "#626262",
        "900": "#585858"
      },
      'persian-green': {
        DEFAULT: '#00AD9E',
        '50': '#6DF7EB',
        '100': '#5AF6E9',
        '200': '#33F4E4',
        '300': '#0DF2DE',
        '400': '#02BAAA',
        '500': '#00AD9E',
        '600': '#009E90',
        '700': '#003D38',
        '800': '#000504',
        '900': '#000000'
      },
    },
    extend: {
      fontFamily: {
        Redrose: ["Red Rose", "cursive"],
      },
    },
  },
  plugins: [],
};