/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out",
      },
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      fontFamily: {
        base: ['"Open Sans"', "sans-serif"],
        heading: ['"Playfair Display"', "serif"],
        inherit: "inherit",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
