// tailwind.config.js
module.exports = {
  darkMode: 'class', // تفعيل الوضع المظلم بناءً على الـ class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

