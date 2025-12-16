// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'upland-blue': '#4c44e9',
//         'upland-dark': '#211e49',
//       },
//       backgroundImage: {
//         'hero-gradient': 'linear-gradient(135deg, #4c44e9, #211e49)',
//       },
//     },
//   },
//   plugins: [],
// }


// tailwind.config.js (Example Customization)
module.exports = {
  // ... other configs
  theme: {
    extend: {
      colors: {
        'upland-blue': '#4c44e9', // Deep blue/purple
        'upland-dark': '#211e49', // Darker area color
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #4c44e9, #211e49)',
      }
    },
  },
  // ...
}