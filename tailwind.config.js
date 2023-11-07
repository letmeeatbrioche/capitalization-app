/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg-img': "url('../public/assets/CAPITALIZATION.png')"
      },
      boxShadow: {
        'container-shadow': '0px 0px 20px 4px rgba(170, 178, 255, 0.5)'
      },
      padding: {
        'label-padding': '8px 14px 30px 14px',
        'checkbox-padding': '7px 10px 30px 10px'
      }
    },
    fontFamily: {
      'arial-sans': ['Arial', 'Helvetica', 'sans-serif']
    }
  },
  plugins: [],
}

