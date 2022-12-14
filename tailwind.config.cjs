/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cyanCustom: "hsl(180, 66%, 49%)",
      darkViolet: "hsl(257, 27%, 26%)",
      redCustom: "hsl(0, 87%, 67%)",
      graySoft: "hsl(0, 0%, 95%)",
      grayCustom: "hsl(0, 0%, 75%)",
      grayishViolet: "hsl(257, 7%, 63%)",
      veryDarkBlue: "hsl(255, 11%, 22%)",
      veryDarkViolet: "hsl(260, 8%, 14%)",
      white: "white",
    },
    extend: {},
  },
  plugins: [],
};
