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
  plugins: [require.resolve("prettier-plugin-go-template"), require.resolve("prettier-plugin-tailwindcss")],
};
