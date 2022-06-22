import '@fontsource/blackout-sunrise';
import '@fontsource/lato';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/700.css';

import NextNProgress from 'nextjs-progressbar';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { ButtonProvider } from '../context/ButtonContext';
import { Fonts } from '../src/theme/globalFonts';
import theme from '../src/theme/theme';

const App = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme} resetCSS>
        <Fonts />
        <ColorModeScript />
        <ButtonProvider>
          <NextNProgress color="#5374fa" startPosition={0.3} />
          <Component {...pageProps} />
        </ButtonProvider>
      </ChakraProvider>
    </AnimatePresence>
  );
};

export default App;
