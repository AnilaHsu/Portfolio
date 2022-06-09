module.exports = {
  content: [ "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '500px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px'
      },
    extend: {
      transitionProperty: {
        'border-width': 'border-width',
      }
    },
  },
  plugins: [],
}
