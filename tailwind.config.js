const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./examples/**/*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
