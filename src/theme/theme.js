// // importing the required chakra libraries
// import { theme as chakraTheme } from '@chakra-ui/react';
// import { extendTheme } from '@chakra-ui/react';

// // declare a variable for fonts and set our fonts. I am using Inter with various backups but you can use `Times New Roman`. Note we can set different fonts for the body and heading.
// const fonts = {
//   ...chakraTheme.fonts,
//   body: `Lato,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
//   heading: `IBM Plex Sans,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
//   mono: `Blackout Sunrise, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
// };

// // 2. Add your color mode config
// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: true,
// };

// // declare a variable for our theme and pass our overrides in the `extendTheme` method from chakra
// const overrides = {
//   fonts,
//   config,
// };
// const theme = extendTheme({ overrides });

// // export our theme
// export default theme;

// theme.js

// // 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'


// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const fonts = {
  ...chakraTheme.fonts,
  body: `"NHaasGroteskTXPro-65Md", -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `"NHaasGroteskTXPro-65Md", Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  mono: `Blackout Sunrise, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

// 3. extend the theme
const theme = extendTheme({ config, fonts })

export default theme
