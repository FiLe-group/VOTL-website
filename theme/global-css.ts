import {defineGlobalStyles} from "@chakra-ui/react";

const empty = "var(--chakra-empty,/*!*/ /*!*/)"

export const globalCss = defineGlobalStyles({
  "*": {
    "--global-font-mono": "fonts.mono",
    "--global-font-body": "fonts.body",
    "--global-color-border": "colors.border",
    "--ring-inset": empty,
    "--ring-offset-width": "0px",
    "--ring-offset-color": "#fff",
    "--ring-color": "rgba(66, 153, 225, 0.6)",
    "--ring-offset-shadow": "0 0 #0000",
    "--ring-shadow": "0 0 #0000",
  },
  body: {
    borderTopWidth: '6px',
    borderColor: 'blue.600',
    borderStyle: 'solid',
    bgImage: '{gradients.global}',
    bgRepeat: 'no-repeat',
    bgSize: '100% 500px',
    transition: 'border-color 0.4s',
  },
  html: {
    color: 'fg',
    bg: 'bg',
    colorPalette: 'gray'
  },
  "*::placeholder, *[data-placeholder]": {
    color: "fg.muted",
  },
  "*::selection": {
    bg: "colorPalette.fg/10",
  },
  "body.page-is-transitioning": {
    borderColor: 'blue.400',
  },
})