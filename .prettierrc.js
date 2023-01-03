module.exports = {
  plugins: [require.resolve("prettier-plugin-go-template")],
  tabWidth: 2,
  printWidth: 120,
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ]
};