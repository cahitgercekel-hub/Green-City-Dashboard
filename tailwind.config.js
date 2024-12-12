/** @type {import('tailwindcss').Config***REMOVED*** */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx***REMOVED***', './components/**/*.{js,ts,jsx,tsx***REMOVED***'],
  theme: {
    screens: {
      xs: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
  ***REMOVED***,
    extend: {
      container: {
        screens: {
          lg: '1024px',
          xl: '1440px',
          // 'xl' : '1024px',
          '2xl': '1920px',
      ***REMOVED***,
    ***REMOVED***,
      borderRadius: {
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
    ***REMOVED***,
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          light: 'rgb(var(--color-primary-light))',
      ***REMOVED***,
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          light: 'rgb(var(--color-secondary-light))',
      ***REMOVED***,
        climate: {
          DEFAULT: 'rgb(var(--color-climate))',
          light: 'rgb(var(--color-climate-light))',
      ***REMOVED***,
        mobility: {
          DEFAULT: 'rgb(var(--color-mobility))',
          light: 'rgb(var(--color-mobility-light))',
      ***REMOVED***,
        energy: {
          DEFAULT: 'rgb(var(--color-energy))',
          light: 'rgb(var(--color-energy-light))',
      ***REMOVED***,
        buildings: {
          DEFAULT: 'rgb(var(--color-buildings))',
          light: 'rgb(var(--color-buildings-light))',
      ***REMOVED***,
    ***REMOVED***,
  ***REMOVED***,
***REMOVED***,
***REMOVED***
