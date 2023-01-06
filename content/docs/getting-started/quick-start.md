---
title: "Quick Start"
description: "Get started with Sailboat UI in minutes."
menu:
  docs:
    parent: "getting-started"

next: Accordion
nextLink: /docs/components/accordion/
---

## Installation

```bash
npm install -D tailwindcss
```

Sailboat UI is a modern UI component library for Tailwind CSS, you just need to install Tailwind CSS and configure it. Learn [how to install Tailwind CSS](https://tailwindcss.com/docs/installation).

---

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
      // Set font family
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      // Set theme colors (Required config!)
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
      },
    },
  },
  // Add plugins
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
```

### Theme

We add two colors to the theme, `primary` and `secondary`, you can set your colors. This is a required configuration, please configure it according to your own needs.

1. First you net import the colors from `tailwindcss/colors`.

```js
const colors = require("tailwindcss/colors");
```

2. Then you can set your colors, more colors can be found in [Tailwind CSS Customizing Colors](https://tailwindcss.com/docs/customizing-colors).

```js
// Set theme colors (Required config!)
colors: {
  primary: colors.blue,
  secondary: colors.slate,
},
```

1. You can also use <a href="https://uicolors.app/create" target="_blank">Tailwind CSS Color Shades Generator</a> to produce and configure your colors.

```js
// Set theme colors (Required config!)
colors: {
  primary: {
    50: "#e6f6ff",
    100: "#b3ebff",
    ...
  },
  secondary: {
    50: "#f4f5f7",
    100: "#e4e7eb",
    ...
  },
},
```

### Font

We use `Inter` as the default font, You can easily use <a href="https://fonts.google.com/specimen/Inter" target="_blank">Google Font</a> CDN to import Inter fonts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
```

Then you can add the `Inter` to the `tailwind.config.js` file.

```js
// Set font family
fontFamily: {
  sans: ["Inter", ...defaultTheme.fontFamily.sans],
},
```

To use different fonts, simply replace the font "inter" with your preferred font.

### Plugins

We use `@tailwindcss/typography` and `@tailwindcss/forms` plugins by default, you can add them to the `tailwind.config.js` file. It is not required, you can configure it as needed.

```js
// Add plugins
plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
```

More plugins can be found in [Tailwind CSS Plugins](https://tailwindcss.com/docs/typography-plugin).

### JavaScript

We use a lightweight JavaScript framework <a href="https://alpinejs.dev/" target="_blank">Alpine.js</a> in Dropdown, Tab, and other components, you can easily use it in your project.

```html
<!-- Alpine.js -->
<script src="https://unpkg.com/alpinejs"></script>

<!-- tippyjs -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tippy.js/6.3.7/tippy.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://unpkg.com/@ryangjchandler/alpine-tooltip@1.2.0/dist/cdn.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

---

## Development

Sailboat UI is an open-source project that you can contribute to on [GitHub](https://github.com/sailboatui/sailboatui). If you appreciate the project, please consider giving it a star to show your support. Thank you.

1. You need [Hugo](https://gohugo.io/) to run the development server. If you have [Homebrew](https://brew.sh/) you can do the following:

```bash
brew install hugo
```

2. Clone the repository and install the dependencies.
   Run the development server.

```bash
npm run dev
```

4. Open [http://localhost:1313/](http://localhost:1313/) in your browser.

- `npm run dev`: Run the dev server.
- `npm run build`: Build the static site.
