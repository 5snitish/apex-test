module.exports = {
  enable:"jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {      fontFamily: {
    
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    colors: {
      "theme_black":"#323132",
      "theme_green":"#6ABEAE",
      "theme_background":"#E5E5E5",
      "theme_gray":"#C4C4C4",
      "theme_blue":"#3D8AF7",
      "theme_gray_light":"#F7F6F6",
    },
    fontSize: {
       "tiny":"10px",}
},
  },
  plugins: [],
}
