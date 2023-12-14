/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "0px",
      },
      colors: {
        custom: {
          primary: "hsl(340deg 65% 47%)",
          secondary: "hsl(240deg 60% 63%)",

          "gray-100": "hsl(185deg 5% 95%)",
          "gray-300": "hsl(190deg 5% 80%)",
          "gray-500": "hsl(196deg 4% 60%)",
          "gray-700": "hsl(220deg 5% 40%)",
          "gray-900": "hsl(220deg 3% 20%)",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"]

};
