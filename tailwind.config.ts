import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'link': "#4083c7",
        'primary': "#1bbe46",
      },
      backgroundImage: {
        'desktop': "url('/images/desktop.png')",
        'mobile': "url('/images/mobile.png')",
        'avatar': "url('/images/avatar.jpg')",
      },
      backgroundColor: {
        "glass": "rgba(255,255,255,0.1)"
      },
      borderColor: {
        'primary': "#1bbe46",
        'link': "#4083c7",
      },
      transitionProperty: {
        '0.3': "all 0.3s linear",
        "0.4": "all 2s ease-in-out"
      },
    },
  },
  plugins: [],
};

export default config;
