// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        '65': '65px',
      },
      backdropBlur: {
        23: '23.668209075927734px',
      },
      fontSize: {
        sm: '1rem',
        26: '1.625rem', 
      },
      colors: {
        neutral: {
          50: '#F9F9F9',
          100: '#F4F4F4',
          200: '#E4E4E4',
          300: '#D3D3D3',
          400: '#A2A2A2',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
          1000: '#000000',
        },
        'twitterblue': '#1D9BF0',
      },
      boxShadow: {
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      width: {
        '334': '20rem',
        '455': '28rem',
        '199': '12rem',
        '390': '24.375rem',

      },
      borderColor: {
        'color': 'var(--stroke, rgba(29, 155, 240, 0.24))',
      },
      spacing: {
        '100': '6.25rem',
      },
      padding: {
        '236.5': '14.781rem',
        '178.436': '11.152rem',
      }
  },
  plugins: [],
}
}
