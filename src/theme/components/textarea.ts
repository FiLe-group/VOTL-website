import { defineRecipe } from '@chakra-ui/react';

export const textareaRecipe = defineRecipe({
  base: {
    fontWeight: 400,
    borderRadius: '8px',
    fontSize: 'md',
    bg: "colors.globalBg",
    rounded: 'lg',
    border: 0,
    _focus: { boxShadow: 'none' },
  },
  variants: {
    variant: {
      main: {
        bg: 'navy.800',
        border: '2px solid',
        color: 'white',
        borderColor: 'navy.600',
        borderRadius: '16px',
        fontSize: 'sm',
        p: '20px',
        _placeholder: {
          color: 'secondaryGray.600',
        },
      },
      glass: {
        borderColor: 'whiteAlpha.200',
        border: '1px solid',
        bg: 'blackAlpha.300',
        _invalid: {
          borderColor: 'red.400',
        },
        _placeholder: {
          color: 'secondaryGray.600',
        },
      },
    }
  },
});
