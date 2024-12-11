/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
logoText:'ITC Benguiat W01',
      },
      colors:{
logoColor:'#1c0502'
      },
      textShadow: {
        custom: '-0.05rem -0.05rem 1px #ff1d00, 0.05rem -0.05rem 1px #ed2b12, -0.05rem 0.05rem 1px #ed2b12, 0.05rem 0.05rem 1px #ed2b12, 0 0 15px #630100, 0 0 20px #f91612',
        customTop:'-0.05rem -0.05rem 2px #ed2b12, 0.05rem -0.05rem 2px #ed2b12, -0.05rem 0.05rem 2px #ed2b12, 0.05rem 0.05rem 2px #ed2b12'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: ' -0.05rem -0.05rem 1px #ff1d00, 0.05rem -0.05rem 1px #ed2b12, -0.05rem 0.05rem 1px #ed2b12, 0.05rem 0.05rem 1px #ed2b12, 0 0 15px #630100, 0 0 20px #f91612',
        },
      });
    },
  ],
}

