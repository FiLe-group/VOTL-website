import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
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
  },
  variants: {
    variant: {
      danger: {
        color: 'white',
        bg: 'red.500',
        _hover: { bg: 'red.400' },
        _active: { bg: 'red.300' },
      },
      secondary: {
        boxShadow: '0 7px 10px -3px rgba(103, 117, 138, 0.2)',
        bg: 'whiteAlpha.200',
        _hover: {
          bg: 'whiteAlpha.300',
        },
        _active: {
          bg: 'whiteAlpha.300',
        },
      },
      blue: {
        boxShadow: '0 7px 10px -3px rgba(103, 117, 138, 0.2)',
        bg: '{colors.blue.700}',
        _hover: {
          bg: '{colors.blue.900}',
        },
        _active: {
          bg: '{colors.blue.900}',
        },
      }
    },
    size: {
      "sm": {
        px: '15px'
      }
    }
  },
});
