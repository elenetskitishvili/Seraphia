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
      screens: {
        "480px": "480px",
        "770px": "770px",
        "990px": "990px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans_ge: ['"Inter"', "sans-serif"],
        serif_ge: ['"Noto Serif Georgian"', "serif"],
        inherit: "inherit",
      },
      colors: {
        customDark: "#08081A",
        customGray: "#53535f",
        customBlue: "#3d40cc",
        customBlueDarker: "#3436ad",
        bgLight: "#f7f5ed",
        bgMedium: "#efede5",
        bgDark: "#dbd9d2",
        bgBtn: "#dedede",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
