/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#271340',
        primary50: '#3D1B67',
        primary100: '#220349',
        secondary: '#1B2452',
        secondary50: '#263582',
        grey: '#252945',
        grey25: '#494E6E',
        grey50: '#F8F8FB',
        grey100: '#DFE3FA',
        grey200: '#888EB0',
        grey300: '#7E88C3',
        grey400: '#777F98',
        grey500: '#F9FAFE',
        grey600: '#858BB2',
        dark100: '#1E2139',
        dark200: '#252945',
        dark300: '#0C0E16',
        dark400: '#141625',
        dark500: '#373B53',
        red25: '#FF9797',
        red50: '#EC5757',
        red100: '#EC5757',
        green50: '#F3FDFA',
        green100: '#33D69F',
        orange: '#FF8F00',
        white: '#FFF'
      },
      padding: {
        xs: '0.875rem'
      },
      boxShadow: {
        dropdown: '0px, 10px rgba(72, 84, 159, 0.25)'
      }
    }
  },
  plugins: []
}
