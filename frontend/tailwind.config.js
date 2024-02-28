/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
const path = require('path');

module.exports = {
  // ... other configurations

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  }
};


