import {defineRecipe} from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  className: "chakra-button",
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    borderRadius: "l2",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    borderWidth: "1px",
    borderColor: "transparent",
    cursor: "button",
    flexShrink: "0",
    outline: "0",
    lineHeight: "1.2",
    isolation: "isolate",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "moderate",
    focusVisibleRing: "outside",
    rounded: 'xl',
    textDecoration: 'none',
    _disabled: {
      opacity: 0.8,
      color: 'white/60',
      cursor: 'disabled',
    },
    _icon: {
      flexShrink: "0",
    },
    _focus: {
      outline: '3px solid transparent',
      outlineOffset: '2px',
      outlineColor: '#FFFFFF'
    },
  },
  variants: {
    size: {
      xs: {
        h: "8",
        minW: "8",
        textStyle: "xs",
        px: "2.5",
        gap: "1",
        _icon: {
          width: "4",
          height: "4",
        },
      },
      md: {
        h: "10",
        minW: "10",
        textStyle: "sm",
        px: "4",
        gap: "2",
        _icon: {
          width: "5",
          height: "5",
        },
      },
      xl: {
        h: "12",
        minW: "12",
        textStyle: "md",
        px: "5",
        gap: "2.5",
        _icon: {
          width: "5",
          height: "5",
        },
      },
    },
    variant: {
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        borderColor: "transparent",
        _hover: {
          bg: "colorPalette.muted",
        },
        _expanded: {
          bg: "colorPalette.muted",
        },
      },
      surface: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        shadow: "0 0 0px 3px var(--shadow-color)",
        shadowColor: "colorPalette.muted",
        _hover: {
          bg: "colorPalette.muted",
        },
        _expanded: {
          bg: "colorPalette.muted",
        },
      },
      blueGradient: {
        bgGradient: 'to-bl',
        gradientFrom: 'blue.700',
        gradientTo: 'blue.500',
        boxShadow: '0 8px 12px -3px {colors.blue.500/20}',
        borderWidth: 0,
        px: 6,
        color: 'white',
        _hover: {
          opacity: 0.8
        },
      },
      grayGradient: {
        bgGradient: 'to-bl',
        gradientFrom: 'gray.700',
        gradientTo: 'gray.500',
        boxShadow: '0 8px 12px -3px {colors.gray.700/20}',
        borderWidth: 0,
        px: 6,
        color: 'white',
        _hover: {
          opacity: 0.8
        },
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})