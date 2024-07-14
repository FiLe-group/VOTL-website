import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

export const buttonStyles = defineStyleConfig({
  baseStyle: defineStyle({
    borderRadius: '16px',
    transition: '.25s all ease',
    boxSizing: 'border-box',
    _focus: {
      boxShadow: 'none',
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
    action: defineStyle((props) => ({
      fontWeight: '600',
      borderRadius: '50px',
      bg: 'linear-gradient(to right bottom, var(--chakra-colors-brand-500), var(--chakra-colors-brand-400))',
      color: 'white',
      rounded: 'xl',
      boxShadow: '1px 2px 5px var(--chakra-colors-brand-400)',
    })),
    secondary: defineStyle({
      bg: 'whiteAlpha.200',
      _hover: {
        bg: 'whiteAlpha.300',
      },
      _active: {
        bg: 'whiteAlpha.300',
      },
    }),
  },
  sizes: {
    sm: {
      px: '15px',
    },
  },
});
