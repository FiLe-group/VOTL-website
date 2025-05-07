import {defineRecipe} from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
  className: "chakra-link",
  base: {
    display: "inline-flex",
    alignItems: "center",
    outline: "none",
    gap: "1.5",
    cursor: "pointer",
    borderRadius: "l1",
    focusRing: "outside",
  },
  variants: {
    variant: {
      navbar: {
        display: "inline",
        _focus: {
          outline: "none",
        }
      }
    }
  }
})