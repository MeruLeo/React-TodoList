/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IRsans: ["craft", "sans-serif"],
        fedra: ["fedra", "sans-serif"],
        vazir: ["vazir", "sans-serif"],
      },
      colors: {
        "background-dark": "#191919",
        "header-dark": "#202020",

        "purple-org": "#8964e8",
        "red-org": "#f76769",
      },
      borderSpacing: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: ["prettier", "eslint"],
};
