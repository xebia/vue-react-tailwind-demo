module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "steelblue",
          dark: "#346085",
        },
        secondary: {
          default: "rebeccapurple",
          dark: "#472469",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
