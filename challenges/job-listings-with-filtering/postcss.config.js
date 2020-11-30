const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./challenges/job-listings-with-filtering/tailwind.config.js'),
    require('autoprefixer'),
  ],
};
