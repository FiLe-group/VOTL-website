import {defineSlotRecipe} from "@chakra-ui/react";
import {radioCardAnatomy} from "@chakra-ui/react/anatomy";

export const radioCardSlotRecipe = defineSlotRecipe({
  className: "chakra-radio-card",
  slots: radioCardAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      isolation: "isolate",
    },
    item: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      userSelect: "none",
      position: "relative",
      borderRadius: "l2",
      _focus: {
        bg: "colorPalette.muted/20",
      },
      _disabled: {
        opacity: "0.6",
        borderColor: "border.disabled",
      },
      _checked: {
        zIndex: "1",
      },
      transitionProperty: "common",
      transitionDuration: "fast",
      cursor: 'pointer',
    },
    label: {
      display: "inline-flex",
      fontWeight: "medium",
      textStyle: "sm",
      _disabled: {
        opacity: "0.5",
      },
    },
    itemText: {
      fontWeight: "medium",
    },
    itemDescription: {
      opacity: "0.64",
      textStyle: "sm",
    },
    itemControl: {
      display: "inline-flex",
      flex: "1",
      pos: "relative",
      rounded: "inherit",
      justifyContent: "var(--radio-card-justify)",
      alignItems: "var(--radio-card-align)",
      _disabled: {
        bg: "bg.muted",
      },
    },
    itemAddon: {
      roundedBottom: "inherit",
      _disabled: {
        color: "fg.muted",
      },
    },
    itemContent: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
      gap: "1",
      justifyContent: "var(--radio-card-justify)",
      alignItems: "var(--radio-card-align)",
    },
  },
  variants: {
    justify: {
      start: {
        item: { "--radio-card-justify": "flex-start" },
      },
      end: {
        item: { "--radio-card-justify": "flex-end" },
      },
      center: {
        item: { "--radio-card-justify": "center" },
      },
    },
    align: {
      start: {
        item: { "--radio-card-align": "flex-start" },
        itemControl: { textAlign: "start" },
      },
      end: {
        item: { "--radio-card-align": "flex-end" },
        itemControl: { textAlign: "end" },
      },
      center: {
        item: { "--radio-card-align": "center" },
        itemControl: { textAlign: "center" },
      },
    },
    orientation: {
      vertical: {
        itemControl: { flexDirection: "column" },
      },
      horizontal: {
        itemControl: { flexDirection: "row" },
      },
    },
  },
  defaultVariants: {
    justify: "start",
    align: "start",
    orientation: "horizontal"
  }
})