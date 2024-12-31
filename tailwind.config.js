/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fondo-inicio': "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1735597367/eb792da9-32cf-458d-ab1f-b21615d1953a_ieuwqb.jpg')"
      }
    },
  },
  plugins: [],
}
