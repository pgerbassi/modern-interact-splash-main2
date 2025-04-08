import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      'android-small': {'max': '361px'},  // Specific Android small devices
      'android-medium': {'min': '362px', 'max': '414px'},  // Slightly larger Android devices
      'android-large': {'min': '362px', 'max': '371px'},  // Slightly larger Android devices
      'iphone-se': {'min': '372px','max': '375px'},  // iPhone SE and similar small iOS devices
      'iphone-x': {'min': '376px', 'max': '415px'},  // iPhone X and similar iOS devices
      'iphone-pro': {'min': '416px', 'max': '494px'},  // iPhone X and similar iOS devices
      'xs': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
        neon: "#15B9FF",
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
        sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
      },
      borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
        'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
        'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.6)'
					},
					'50%': { 
						boxShadow: '0 0 20px 6px rgba(59, 130, 246, 0.8)'
					}
				},
        'pulse-light': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' }
				},
        'float': {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float-word": {
          "0%": { 
            transform: "translate(0, 0) rotate(0deg)",
            opacity: "0"
          },
          "25%": {
            opacity: "0.3"
          },
          "50%": {
            transform: "translate(30px, -30px) rotate(5deg)",
            opacity: "0.6"
          },
          "75%": {
            opacity: "0.3"
          },
          "100%": {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: "0"
          },
        },
        "border-glow": {
          "0%, 100%": {
            "border-color": "hsl(var(--primary))",
          },
          "50%": {
            "border-color": "hsl(var(--accent))",
          },
        },
				'scale-up': {
					'0%': { 
						transform: 'scale(1)' 
					},
					'100%': { 
						transform: 'scale(1.05)' 
					}
				},
                'text-shimmer': {
                    '0%': {
                        backgroundPosition: '-200% 0',
                    },
                    '100%': {
                        backgroundPosition: '200% 0',
                    },
                },
                'text-reveal': {
                    '0%': {
                        transform: 'translateY(20px)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
                'letter-spacing': {
                    '0%': {
                        letterSpacing: '-0.5em',
                        opacity: '0',
                    },
                    '40%': {
                        opacity: '0.6',
                    },
                    '100%': {
                        letterSpacing: 'normal',
                        opacity: '1',
                    },
                }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
        'float': "float 3s ease-in-out infinite",
				'scale-up': 'scale-up 0.3s forwards',
        "fade-up": "fade-up 0.5s ease-out forwards",
        "gradient": "gradient 15s ease infinite",
        "float-word": "float-word var(--duration, 15s) infinite linear",
        "border-glow": "border-glow 2s ease-in-out infinite",
				'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
        'text-reveal': 'text-reveal 1.5s ease-out forwards',
        'letter-spacing': 'letter-spacing 2.5s ease-out',
        'text-shimmer': 'text-shimmer 3s infinite',
				'pulse-light': 'pulse-light 2s ease-in-out infinite'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
