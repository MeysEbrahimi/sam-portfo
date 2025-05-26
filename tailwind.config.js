/**   @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f7fd',
          100: '#e3eefa',
          200: '#c1ddf5',
          300: '#8bc2ec',
          400: '#4da3df',
          500: '#2689cc',
          600: '#186bae',
          700: '#15568d',
          800: '#164875',
          900: '#183d63',
          950: '#11283f',
        },
        accent: {
          50: '#f7f6f5',
          100: '#efecea',
          200: '#e2dcd9',
          300: '#d0c8c3',
          400: '#b5aba3',
          500: '#8E8076',
          600: '#796b61',
          700: '#645750',
          800: '#534743',
          900: '#453c39',
          950: '#272120',
        },
        background: '#F4F2F1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
 