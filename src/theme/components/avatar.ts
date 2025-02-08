import { defineSlotRecipe } from '@chakra-ui/react';

export const avatarSlotRecipe = defineSlotRecipe({
  slots: ["root"],
  base: {
    root: {
      bg: '{colors.blue.300/2}',
      color: 'white',
    },
  },
  variants: {
    variant: {
      outline: {
        root: {
          border: 'auto',
          borderWidth: 10,
          borderColor: '{colors.navy.800}',
        },
      },
      subtle: {
        root: {
          border: 0,
        },
      },
    },
  },
});
