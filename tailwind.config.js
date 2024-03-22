export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      // primary: "#050816",
      primary: "#fafafa",
      // secondary: "#aaa6c3",
      secondary: "#000000",
      // tertiary: "#151030",
      tertiary: "#0B1A38",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('./src/assets/bghero.webp')",
    },
  },
};
export const plugins = [];
