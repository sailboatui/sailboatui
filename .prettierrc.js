module.exports = {
  plugins: [require.resolve("prettier-plugin-go-template"), require.resolve("prettier-plugin-tailwindcss")],
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
};
