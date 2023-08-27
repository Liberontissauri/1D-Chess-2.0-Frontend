/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "left-m": "5px 5px 0 rgba(0, 0, 0, 0.25)"
      }
    },
    colors: {
      "dark-grey": {
        1: "#393939",
        2: "#2F2F2F",
        3: "#272727",
        4: "#222222",
      },
      "light-grey": {
        1: "#D9D9D9",
        2: "#C1C1C1",
        3: "#ABABAB",
        4: "#828282",
      },
      "red": {
        1: "#BE4359",
        2: "#A73F4C",
        3: "#82313B",
      },
      "green": {
        1: "#3FA775",
        2: "#398D65",
        3: "#347455",
        4: "#305A41",
      },
      "white": "#fff"
    },
    fontFamily: {
      raleway : ["Raleway"]
    } 
  },
  plugins: [],
}

