import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	container: {
  		center: 'true',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	fontFamily: {
  		avenirBlack: ['var(--avenir-black)'],
  		avenirBook: ['var(--avenir-black)'],
  		avenirRoman: ['var(--avenir-roman)'],
  		avenirNextBold: ['var(--avenir-next-bold)'],
  		avenirNext: ['var(--avenir-next)'],
  		avenirNextRegular: ['var(--avenir-next-regular)']
  	},
  	extend: {
  		screens: {
  			xs: '400px'
  		},
  		colors: {
  			iPrimary: 'var(--imaraPrimary)',
  			iBlue: 'var(--imaraBlue)',
  			iSecondary: 'var(--imaraSecondary)',
  			iNeutral: 'var(--imaraNeutral)',
  			iGray: 'var(--imaraGray)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")],

};
export default config;
