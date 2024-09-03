/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        motion: {
          "0%": { marginTop: "0px" },
          "100%": { marginTop: "10px" },
        },
      },
      animation: {
        motion: "motion 0.6s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
