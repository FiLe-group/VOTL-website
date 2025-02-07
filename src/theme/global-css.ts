import { defineGlobalStyles } from "@chakra-ui/react"

export const globalCss = defineGlobalStyles({
  "*": {
    "--global-font-mono": "fonts.mono",
    "--global-font-body": "fonts.body",
  },
  "html, body": {
    fontWeight: 500,
    color: "var(--chakra-colors-text-primary)",
    backgroundColor: "var(--chakra-colors-global-bg)",
    minHeight: "100vh",
    width: "100%",
  }
})