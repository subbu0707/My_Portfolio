/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0E1116",
          slate: "#1B2430",
          cream: "#F7F2EA",
          mint: "#A3E7D8",
          coral: "#FF7A59",
          sky: "#75D1F0",
        },
      },
      boxShadow: {
        soft: "0 14px 40px rgba(14, 17, 22, 0.12)",
      },
    },
  },
  plugins: [],
};
