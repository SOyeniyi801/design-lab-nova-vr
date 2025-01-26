/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['elevon', 'sans-serif'],
          'body': ['changeling neo', 'sans-serif'], // Add exo for body
          'header': ['elevon', 'sans-serif'], // Keep elevon for headers
        },
      },
    },
    plugins: [],
  }