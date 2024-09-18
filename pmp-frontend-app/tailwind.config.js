/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "primary": "#045c64", // Teal, primary color
          "primary-content": "#ffffff", // White, text color on primary
          "secondary": "#777373", // Gray, secondary color
          "secondary-content": "#ffffff", // White, text color on secondary
          "accent": "#a7c947", // SciLifeLab Lime, accent color
          "accent-content": "#ffffff", // White, text color on accent
          "neutral": "#e5e5e5",  // SciLifeLab Light Gray, neutral color
          "neutral-content": "#000000", // Black, text color on neutral
          "base-100": "#f8fafc", // Light slate gray, base color
          "base-100-content": "#000000", // Black, text color on base-100
          "info": "#491f53", // SciLifeLab Grape, Info color
          "info-content": "#ffffff", // White, text color on info
          "success": "#a7c947", // SciLifeLab Green, Success color
          "success-content": "#ffffff", // White, text color on success
          "warning": "#ff9900", // Orange, Warning color
          "warning-content": "#ffffff", // White, text color on warning
          "error": "#ff5724", // Red, Error color
          "error-content": "#ffffff", // White, text color on error
          "50aqua": "#A6CBCF", // 50% Aqua
          "75aqua": "#79B1B7", //75% Aqua
        },
      },
    },
    plugins: [
      require("daisyui"),
      function ({ addBase, theme }) {
        addBase({
          body: {
            backgroundColor: theme('colors.base-100'),
          },
        });
      },
    ],
  }