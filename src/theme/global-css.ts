import { defineGlobalStyles } from "@chakra-ui/react"

export const globalCss = defineGlobalStyles({
  "*": {
    "--global-font-mono": "fonts.mono",
    "--global-font-body": "fonts.body",
  },
  body: {
    fontWeight: 500,
    color: "colors.textPrimary",
    bg: "colors.backgroundPrimary",
  }
})