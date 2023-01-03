module.exports = {
  tabWidth: 2,
  printWidth: 120,
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
  plugins: [require("prettier-plugin-go-template"), require("prettier-plugin-tailwindcss")],
};
