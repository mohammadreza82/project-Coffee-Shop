/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Public/**/*.{html,js}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ece0d1",
          300: "#dbc1ac",
          600: "#967259",
          900: "#934832"
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.05)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      container: {
        "center": true,
        "mx-atuo":true
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaBold": "Dana DemiBold",
        "DanaMedium": "Dana Medium",
        "VazirBlack": "VazirBlack",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
        "MorabbaLight": "Morabba Light",
      },
      letterSpacing: {
        "tightest": "-.065em"
      },
      spacing: {
        "25": "6.25rem",
        "30": "7.5rem",
        "50": "11rem",
        "60": "15rem"
      },
      backgroundImage: {
        "home-mobile": "url(../images/headerBgMobile.webp)",
        "home-desktop": "url(../images/headerBgDesktop.webp)"
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '744px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    }
  ],
}

