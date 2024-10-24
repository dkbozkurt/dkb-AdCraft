module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        'jd-green': '#55d094',
        'jd-green-light': '#7de0b3',
        'jd-green-dark': '#1d6743',
      },
    },
  },
  plugins: [],
}