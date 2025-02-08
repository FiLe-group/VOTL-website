import { defineSlotRecipe } from '@chakra-ui/react';

export const dialogSlotRecipe = defineSlotRecipe({
  slots: ['overlay', 'closeButton', 'dialog'],
  base: {
    overlay: {
      backdropFilter: 'auto',
      backdropBlur: 'lg',
    },
    closeButton: {
      _hover: {},
      _focus: {
        boxShadow: 'none',
      },
    },
    dialog: {
      bg: '{colors.navy.900}',
    }
  }
});
