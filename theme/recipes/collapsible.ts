import {defineSlotRecipe} from "@chakra-ui/react";
import {collapsibleAnatomy} from "@chakra-ui/react/anatomy";

export const collapsibleSlotRecipe = defineSlotRecipe({
  slots: collapsibleAnatomy.keys(),
  className: "chakra-collapsible",
  base: {
    content: {
      overflow: "hidden",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "slower",
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "slower",
      },
    },
  },
})