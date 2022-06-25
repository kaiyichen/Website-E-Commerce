module.exports = {
  content: [style.css, index.html, tailwind.css, index.js],
  theme: {
    extend: {gridTemplateRows: {
      // Simple 8 row grid
      '4': 'repeat(4, minmax(0, 1fr))',
    },
  },
  variants: {},
  plugins: [],
};
}
