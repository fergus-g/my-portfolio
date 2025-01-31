const flowbite = require("flowbite-react/tailwind");
const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [daisyui.plugin(), flowbite.plugin()],
};
