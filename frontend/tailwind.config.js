/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-black": "#1f1f1f",
      "secondary-black": "#262526",
      "primary-gray": "#999999",
      "secondary-gray": "#D4D5D6",
      "primary-blue": "#04536C",
      "secondary-blue": "#033A4B",
      "primary-red": "#F84343",
      "primary-green": "#27AE60",
      "secondary-green": "#009951",
      "primary-yellow": "#F2C94C",
      "primary-white": "#ECECEC",
    },
    extend: {
      borderWidth: {
        0.5: "0.5px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar-hide")],
};
