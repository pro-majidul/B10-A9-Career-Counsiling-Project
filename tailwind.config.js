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
        'slide3': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4iZpOtYlbEjaenOHbp1geqn7M-DLxqwT7faUjZMPC4bnI8XKKFVd0AVQQQkvcqirjxCs&usqp=CAU')",
        'slide2': "url('https://images.unsplash.com/photo-1584697964328-b1e7f63dca95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWR5aW5nfGVufDB8fDB8fHww')",
        'slide4': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}