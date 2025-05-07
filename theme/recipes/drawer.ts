import {drawerAnatomy} from "@chakra-ui/react/anatomy";
import {defineSlotRecipe} from "@chakra-ui/react";

export const drawerSlotRecipe = defineSlotRecipe({
  slots: drawerAnatomy.keys(),
  className: "chakra-drawer",
  base: {
    backdrop: {
      bg: "blackAlpha.500",
      pos: "fixed",
      insetInlineStart: 0,
      top: 0,
      w: "100vw",
      h: "100dvh",
      zIndex: "modal",
      _open: {
        animationName: "fade-in",
        animationDuration: "slow",
      },
      _closed: {
        animationName: "fade-out",
        animationDuration: "moderate",
      },
    },
    positioner: {
      display: "flex",
      width: "100vw",
      height: "100dvh",
      position: "fixed",
      insetInlineStart: 0,
      top: 0,
      zIndex: "modal",
      overscrollBehaviorY: "none",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      zIndex: "modal",
      textStyle: "sm",
      maxH: "100dvh",
      color: "inherit",
      bg: "bg.panel",
      boxShadow: "lg",
      _open: {
        animationDuration: "slowest",
        animationTimingFunction: "ease-in-smooth",
      },
      _closed: {
        animationDuration: "slower",
        animationTimingFunction: "ease-in-smooth",
      },
      maxW: "xs"
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      flex: 0,
      px: "6",
      pt: "4",
      pb: "4",
      borderBottomWidth: "2px",
      borderColor: "white/20",
    },
    body: {
      px: "6",
      py: "2",
      flex: "1",
      overflow: "auto",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      px: "6",
      pt: "2",
      pb: "4",
    },
    title: {
      flex: "1",
      textStyle: "lg",
      fontWeight: "semibold",
    },
    description: {
      color: "fg.muted",
    },
    closeTrigger: {
      pos: "absolute",
      top: "3",
      insetEnd: "3",
      _focus: {
        outline: "none"
      },
      _hover: {
        bg: "white/10"
      }
    },
  },
  variants: {
    placement: {
      end: {
        positioner: {
          justifyContent: "flex-end",
        },
        content: {
          _open: {
            animationName: {
              base: "slide-from-right-full, fade-in",
              _rtl: "slide-from-left-full, fade-in",
            },
          },
          _closed: {
            animationName: {
              base: "slide-to-right-full, fade-out",
              _rtl: "slide-to-right-full, fade-out",
            },
          },
        },
      },
    }
  },
  defaultVariants: {
    placement: "end"
  }
})