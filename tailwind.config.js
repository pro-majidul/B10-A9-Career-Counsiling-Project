/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slide1': "url('https://media.istockphoto.com/id/475315086/photo/yale-university-buildings.jpg?s=612x612&w=0&k=20&c=FygHbo4S-clsnKNqz11PXtoISlRFEFbLGYrzQrb9_gY=')",
        'slide3': "url('https://media.istockphoto.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.jpg?s=612x612&w=0&k=20&c=d7mWQhdzKrowHYTWXXcCrNn02uyfLYQYB78M75G8lKg=')",
        'slide2': "url('https://as1.ftcdn.net/jpg/02/55/22/68/1000_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg')",
        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}