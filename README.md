<p align="center">
  <a href="https://sailboatui.com/#gh-light-mode-only" target="_blank">
    <img src="./.github/logo-light.svg" width="330" height="70" alt="Sailboat UI">
  </a>
  <a href="https://sailboatui.com/#gh-dark-mode-only" target="_blank">
    <img src="./.github/logo-dark.svg" width="330" height="70" alt="Sailboat UI">
  </a>
</p>

<p align="center">
  SailboatUI is a modern UI framework for Tailwind CSS
</p>

## 150+ Components

<table>
  <tr>
    <td >Avatar</td>
    <td >Badge</td>
  </tr>
  <tr>
    <td >
        <a href="https://sailboatui.com/docs/components/avatar/" target="_blank" >
            <img alt="Tailwind CSS Avatar" src="https://sailboatui.com/images/thumb-avatar.png">
        </a>
    </td>
    <td >
        <a href="https://sailboatui.com/docs/components/badge/" target="_blank" >
            <img alt="Tailwind CSS Badge" src="https://sailboatui.com/images/thumb-badge.png">
        </a>
    </td>
  </tr>
  <tr>
    <td >Button</td>
    <td >Card</td>
  </tr>
  <tr>
    <td >
        <a href="https://sailboatui.com/docs/components/button/">
            <img alt="Tailwind CSS Avatar" src="https://sailboatui.com/images/thumb-button.png">
        </a>
    </td>
    <td >
        <a href="https://sailboatui.com/docs/components/card/">
            <img alt="Tailwind CSS Badge" src="https://sailboatui.com/images/thumb-card.png">
        </a>
    </td>
  </tr>
  <tr>
    <td >Dropdown</td>
    <td >Input</td>
  </tr>
  <tr>
    <td >
        <a href="https://sailboatui.com/docs/components/dropdown/">
            <img alt="Tailwind CSS Avatar" src="https://sailboatui.com/images/thumb-dropdown.png">
        </a>
    </td>
    <td >
        <a href="https://sailboatui.com/docs/components/input/">
            <img alt="Tailwind CSS Badge" src="https://sailboatui.com/images/thumb-input.png">
        </a>
    </td>
  </tr>
  <tr>
    <td >Notification</td>
    <td >Pagination</td>
  </tr>
  <tr>
    <td >
        <a href="https://sailboatui.com/docs/components/notification/">
            <img alt="Tailwind CSS Avatar" src="https://sailboatui.com/images/thumb-notification.png">
        </a>
    </td>
    <td >
        <a href="https://sailboatui.com/docs/components/pagination/">
            <img alt="Tailwind CSS Badge" src="https://sailboatui.com/images/thumb-pagination.png">
        </a>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
        <a href="https://sailboatui.com/docs/components/accordion/">
            View All
        </a>
    </td>
  </tr>
</table>

## Configuration

You need to add this to your `tailwind.config.js` file.

```js
// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Set your fonts here
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      // Set your theme colors here(Required config!)
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
      },
    },
  },
  // Add plugins here
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
```

More configuration options are available in the [Sailboat UI Quick Start](https://sailboatui.com/docs/getting-started/quick-start/).

## Development

Sailboat UI is an open source project that you can contribute to on [GitHub](https://github.com/sailboatui/sailboatui). If you appreciate the project, please consider giving it a star to show your support. Thank you.

1. You need [Hugo](https://gohugo.io/) to run the develop server. If you have [Homebrew](https://brew.sh/) you can do the following:

```bash
brew install hugo
```

2. Clone the repository and install the dependencies.

```bash
git clone git@github.com:sailboatui/sailboatui.git
cd sailboatui
npm install
```

3. Run the develop server.

```bash
npm run dev
```

4. Open [http://localhost:1313/](http://localhost:1313/) in your browser.

- `npm run dev`: Run the dev server.
- `npm run build`: Build the static site.
