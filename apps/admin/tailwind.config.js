const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const TailwindConfig = require('../../libs/shared/util/src/tailwind/tailwind.config');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  ...TailwindConfig,
};
