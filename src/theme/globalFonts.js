import { Global } from "@emotion/react"

export const Fonts = () => (
  <Global
    styles={`

      /* helvetica now display */
      @font-face {
        font-family: 'HelveticaNowDisplay-Regular';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(../../../public/assets/fonts/HelveticaNowDisplay-Regular.ttf) format('ttf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }

      /* haas neue grotesk */
      @font-face {
        font-family: 'NHaasGroteskTXPro-65Md';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(../../../public/assets/fonts/NHaasGroteskTXPro-65Md.ttf) format('ttf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
    `}
  />
)