/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#3b82f6',
        errorRed: "#ff0b37",
        lightBlue: "#4f46e5",
        lightBg: "#f9f9f9",
        videos: "#f1f5f9",
        about: "#1e293b",
        description: "#94a3b8",
        videoTitle: "#1e293b",
        name: "#212121",
        red: "#ff0b37"

      },
    },
  },
  plugins: [],
}

