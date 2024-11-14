import { defineSlotRecipe } from '@chakra-ui/react';

export const avatarSlotRecipe = defineSlotRecipe({
  slots: ["container"],
  base: {
    container: {
      bg: 'blue.300.2',
      color: 'white',
    },
  },
  variants: {
    variant: {
      border: {
        container: {
          border: 'auto',
          borderWidth: 10,
          borderColor: 'navy.800',
        },
      },
      normal: {
        container: {
          border: 0,
        },
      },
    },
  },
});
