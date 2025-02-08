import {defineRecipe} from '@chakra-ui/react';

const main = {
  borderRadius: '16px',
  fontSize: 'sm',
  p: '20px',
  color: 'white',
  bg: '{colors.navy.800}',
  _placeholder: {
    color: 'secondaryGray.600',
  },
  _invalid: {
    outlineColor: 'red.400',
  },
}

export const inputSlotRecipe = defineRecipe({
  base: {
    border: '0px',
    fontWeight: 400,
    outline: '3px solid',
    outlineColor: 'whiteAlpha.700',
    _hover: {
      outlineColor: 'whiteAlpha.900',
    },
    _focusVisible: {
      outlineColor: '{colors.blue.400}',
    },
    transitionProperty: 'outline',
    borderColor: 'transparent'
  },
  variants: {
    variant: {
      flushed: {
        _focus: {
          borderColor: '{colors.brand}',
          boxShadow: 'none',
        },

        fontSize: '2xl',
        fontWeight: '600',
        color: '{colors.textPrimary}',
        borderBottomColor: '{colors.navy.600}',
      },
      main,
      focus: {
        ...main,
        _focus: {
          borderColor: '{colors.blue.400}',
        },
      },
      auth: {
        bg: 'transparent',
        fontWeight: '500',
        color: 'white',
        borderColor: 'rgba(135, 140, 189, 0.3)',
        border: '1px solid',
        borderRadius: '16px',
        _placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
      },
      authSecondary: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'secondaryGray.100',
        borderRadius: '16px',
        _placeholder: { color: 'secondaryGray.600' },
      },
      search: {
        border: 'none',
        py: '11px',
        borderRadius: 'inherit',
        _placeholder: { color: 'secondaryGray.600' },
      },
    }
  }
});
