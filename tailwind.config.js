/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Lato", "sans-serif"],
        },

        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
};