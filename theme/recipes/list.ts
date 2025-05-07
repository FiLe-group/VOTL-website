import {defineSlotRecipe} from "@chakra-ui/react";
import {listAnatomy} from "@chakra-ui/react/anatomy";

export const listSlotRecipe = defineSlotRecipe({
  className: "chakra-list",
  slots: listAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--list-gap)",
      "& :where(ul, ol)": {
        marginTop: "var(--list-gap)",
      },
      listStyle: "revert",
    },
    item: {
      whiteSpace: "normal",
      display: "list-item",
    },
    indicator: {
      marginEnd: "2",
      minHeight: "1lh",
      flexShrink: 0,
      display: "inline-block",
      verticalAlign: "middle",
    },
  },
});