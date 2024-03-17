/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        verde: {
					texture1: "#0D2622",
					texture2: "#025920",
					texture3: "#027313",
					texture4: "#038C0C",
					texture5: "#52BF04",
					view1: "#025E73",
					view2: "#014017",
					view3: "#6FD904",
					view4: "#74BF04",
					view5: "#558C03",
					view6: "#0DF205",
					test: '#204648'
				},
				cinza: {
					50: "#F2F2F2",
					100: "#f6fbff",
					200: "#C4C4CC",
					300: "#8D8D99",
					350: "#343438",
					400: "#28282c",
					500: "#1f1f23",
				},
				azul: {
					30: "#d9f2fa",
					40: "#c5eefc",
					50: "#81D8F7",
					100: "#00B9ED",
					200: "#00ADDE",
					300: "#155794",
					400: "#1948ae",
					500: "#374151",
					700: "#06202D",
					800: "#0A3347",
					900: "#04161F",
				},
				laranja: {
					100: "#F1511B",
					200: "#6d4b24",
				},
				vermelho: {
					100: "#F75A68",
					200: "#A93E47",
				},
				roxo: {
					100: "#582058",
				},
				marca: {
					azul1: "#00B9ED",
					escuro1: "#06202d",
					verde1: "#97c847",
				},
				branco: {
					50: "#F7F8FA",
					100: "#EAEDF1",
				},
				ds: {
					verde: '#17171B',
					verdec: '#C8EA48',
				}
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
			height: {
				nulo: "0vh",
				93: "93.9vh",
				95: "95vh",
				450: "450px",
				500: "500px",
			},
			maxHeight: {
				450: "450px",
			},
			width: {
				520: "520px",
				550: "550px",
				600: "610px",
				650: "600px",
				700: "700px",
				750: "750px",
			},
			margin: {
				topNeg: "-1rem",
			},
			rotate: {
				270: "270deg",
			},
			gridTemplateRows: {
				painel: "60px 98px 27px 27px",
				painel2: "54px 124px 22px",
			},
    },
  },
  plugins: [require("tailwindcss-animate")],
}