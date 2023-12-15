/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(1%)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        slide: "slideIn 500ms  both cubic-bezier(0, 0.6, 0.32, 1.06) 200ms",
        fade: "fadeIn 500ms",
      },
      gap: {
        navclamp: "clamp(1rem,9.2vw - 4.5rem,3.5rem)",
      },
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
  plugins: ["prettier-plugin-tailwindcss"],
};
