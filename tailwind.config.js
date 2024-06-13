/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        df1: "#1E3036",
        df2: "#182428"
      },
      backgroundColor: {
        bg1: "url('./image/pure-julia-QNqEOoTKEFw-unsplash.jpg')",
        bg2: "url('./image/chuttersnap-Ay5VDmOaKBo-unsplash.jpg')",
        bg3: "url('./image/geojango-maps-D_haIXr4ljc-unsplash.jpg')"
      }
    },
  },
  plugins: [],
  darkMode:'class'
}
