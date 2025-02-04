/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'primary': '#045c64',
  			'primary-content': '#ffffff',
  			'secondary': '#777373',
  			'secondary-content': '#ffffff',
  			'accent': '#a7c947',
  			'accent-content': '#ffffff',
  			'neutral': '#e5e5e5',
  			'neutral-content': '#000000',
  			'base-100': '#f8fafc',
  			'base-100-content': '#000000',
  			'info': '#491f53',
  			'info-content': '#ffffff',
  			'success': '#a7c947',
  			'success-content': '#ffffff',
  			'warning': '#ff9900',
  			'warning-content': '#ffffff',
  			'error': '#ff5724',
  			'error-content': '#ffffff',
  			'50aqua': '#A6CBCF',
  			'75aqua': '#79B1B7',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
    plugins: [
      function ({ addBase, theme }) {
        addBase({
          body: {
            backgroundColor: theme('colors.base-100'),
          },
        });
      },
        require("tailwindcss-animate")
    ],
  }