module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      colors: {
        dark: "#212121",
        light: "#fff",
        blue: "#393EFA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
