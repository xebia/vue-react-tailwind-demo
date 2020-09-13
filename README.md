# Vue React Tailwind demo

Example repo to demonstrate how [TailwindCSS](https://tailwindcss.com) can be integrated into [React](https://reactjs.org/) and [VueJS](https://vuejs.org/) projects.

To reproduce this repo, apply the steps described in this readme (also see Git history):

## React

### Add React project

```sh
$ npx create-react-app react-app --template typescript
```

### Add required libraries

React has no CSS-in-JS solution by default. For this example we use [Styled Components](https://styled-components.com/) but [Emotion](https://emotion.sh) is also supported.
We need [twin.macro](https://github.com/ben-rogerson/twin.macro) to enable Tailwind Support in the CSS-in-JS solution.
Without twin.macro we can only use Tailwind global (PostCSS) builds, which are SPA framework independent and also work in vanilla JS projects.

```sh
$ yarn add tailwindcss styled-components twin.macro
```

### Add config to support CSS-in-JS with Tailwind

Create babel-plugin-macros.config.js

```js
module.exports = {
  twin: {
    config: "tailwind.config.js",
    preset: "styled-components",
    autoCssProp: true,
    debugProp: true,
    debugPlugins: false,
    debug: false,
  },
};
```

If you want global Tailwind support, so that you can also use regular `className="..."`, follow the config steps described in the Vue setup below. They are the same for React and Vue.
However, especially in React a CSS-in-JS solution is preferred.

Now Tailwind directives can be used in in your render functions (See [twin.macro docs](https://github.com/ben-rogerson/twin.macro) for full API):
```js
return <button tw="bg-blue p-3 rounded">{children}</button>
```

If you want to customize Tailwind, just edit tailwind.config.js and your new theme config is available inside your components.

## Vue

## Add Vue project

```sh
$ vue create vue-app
```

## Add required libraries

Vue does support PostCSS compilation in SFCs out of the box, so only Tailwind is required.

```sh
$ npm install tailwindcss
$ npx tailwindcss init
```

##  Add config to support scoped CSS in Vue components with Tailwind

Add postcss.config.js to project root:

```js
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
// Feel free to add more PostCSS plugins like postcss-import

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
```

Now Tailwind directives can be used inside `<style>` blocks:
```postcss
.btn {
  @apply bg-blue p-3 rounded;
}
```

If you want to customize Tailwind, just edit tailwind.config.js and your new theme config is available inside your components.
Note that pseudo selectors such as hover: and md: cannot be used with @apply.

## Add config to support global CSS (class="...") and therefore pseudo selector shorthand

Create src/assets/index.css
```postcss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

and import it in main.ts

```ts
import './assets/index.css';
```

If you don't want global Tailwind styles, except for the reset stylesheet, just import the precompiled CSS file in main.js:

```ts
import 'tailwindcss/dist/base.min.css';
```
