// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        '65': '65px',
        '30': '30px',
      },
      backdropBlur: {
        23: '23.668209075927734px',
      },
      fontSize: {
        sm: '1rem',
        14: ['14px','24px'],
        26: '1.625rem',
        20: ['20px', '24px'], 
        48: ['48px', '24px'],
        '48px/bold': ['48px', 'bold'], 
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
        'twitterblue_for_hover': '#1871CA',
        'bluewash' : 'rgba(117, 190, 239, 0.2)',
        'buttonstroke':'#546A7A',
        'searchbarfill': '#212327',
        'cardfill': '#16181C',
        'success': '#00BE74',
        'error': '#8B141A',
      },
      boxShadow: {
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
        
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'chirp': ['Chirp', 'sans'],
      },
      
      width: {
        '334': '20rem',
        '455': '28rem',
        '199': '12rem',
        '390': '24.375rem',
        '155': '9.719rem',
        '442': '27.625rem',

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
        '15': '0.938rem',
        '93': '5.813rem',
      }
  },
  plugins: [],
}
}
