/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel Decorative Bold"', "serif"], // Custom font
      },
      backgroundImage: {
        "gradient-pink-purple": "linear-gradient(135deg, #d53369, #daae51)",
      },
      filter: {
        "blur-40": "blur(40px)",
        "blur-20": "blur(20px)",
      },
      opacity: {
        80: "0.8",
      },
      screens: {
        sm: "550px",
        // => @media (min-width: 640px) { ... }

        md: "950px",
        // => @media (min-width: 768px) { ... }
      },
    },
  },
  plugins: [],
};
