import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

export const buttonStyles = defineStyleConfig({
  baseStyle: defineStyle({
    borderRadius: '16px',
    transition: '.25s all ease',
    boxSizing: 'border-box',
    _focus: {
      boxShadow: 'none',
      outline: '3px solid transparent',
      outlineOffset: '2px',
      outlineColor: '#FFFFFF'
    },
    _active: {
      boxShadow: 'none',
    },
  }),
  variants: {
    danger: defineStyle({
      color: 'white',
      bg: 'red.500',
      _hover: { bg: 'red.400' },
      _active: { bg: 'red.300' },
    }),
    secondary: defineStyle({
      boxShadow: '0 7px 10px -3px rgba(103, 117, 138, 0.2)',
      bg: 'whiteAlpha.200',
      _hover: {
        bg: 'whiteAlpha.300',
      },
      _active: {
        bg: 'whiteAlpha.300',
      },
    }),
    blue: defineStyle({
      boxShadow: '0 7px 10px -3px rgba(103, 117, 138, 0.2)',
      bg: 'blue.700',
      _hover: {
        bg: 'blue.900',
      },
      _active: {
        bg: 'blue.900',
      },
    })
  },
  sizes: {
    sm: {
      px: '15px',
    },
  },
});
