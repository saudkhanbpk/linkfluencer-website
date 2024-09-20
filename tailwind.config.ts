import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        content: ['Inter', 'sans-serif'],
        header: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: '480px', // Custom extra-small breakpoint
        sm: '640px', // Default small breakpoint
        md: '850px', // Default medium breakpoint
        lg: '1024px', // Default large breakpoint
        xl: '1280px', // Default extra-large breakpoint
        '2xl': '1536px', // Default 2xl breakpoint
        '3xl': '1600px', // Custom 3xl breakpoint
        '4xl': '1920px', // Custom 4xl breakpoint
      },
    },
  },
  plugins: [],
};
export default config;
