/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brownBtn: "#E49539",
        purpleBtn: "#B880B5",
      },
      backgroundImage: {
        brownGradient: "linear-gradient(274.24deg, #B880B5 0%, #E49539 70.9%)",
        purpleGradient: "linear-gradient(93.76deg, #E49539 0%, #865f89 50.9%)",
      },
      fontFamily: {
        levaus: ["Levaus", "sans-serif"],
        afacad: ["Afacad", "sans-serif"],
        Vollkorn: ["Vollkorn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
