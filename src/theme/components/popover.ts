import { defineSlotRecipe } from '@chakra-ui/react';

export const popoverSlotRecipe = defineSlotRecipe({
  slots: ['content'],
  base: {
    content: {
      bg: '{colors.navy.900}',
      rounded: 'xl',
      boxShadow: 'normal',
    }
  }
});
