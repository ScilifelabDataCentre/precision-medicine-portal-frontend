/** @type {import('tailwindcss').Config} */
declare var require: any;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#045c64",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#777373",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#a7c947",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        neutral: {
          DEFAULT: "#e5e5e5",
          foreground: "#000000",
        },
        info: {
          DEFAULT: "#491f53",
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#a7c947",
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: "#ff9900",
          foreground: "#ffffff",
        },
        error: {
          DEFAULT: "#ff5724",
          foreground: "#ffffff",
        },
        "base-100": "#f8fafc",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        body: {
          backgroundColor: theme("colors.base-100"),
        },
      });
    },
    require("tailwindcss-animate"),
  ],
};
