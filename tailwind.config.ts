import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(breadcrumbs|card|date-picker|input|navbar|table|ripple|button|spinner|calendar|date-input|form|popover|checkbox|spacer).js"
  ],
  theme: {
    extend: {
      keyframes:{
        fadeIn:{

          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        }
      }, 
      animation:{
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
