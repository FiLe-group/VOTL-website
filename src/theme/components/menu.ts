import { defineSlotRecipe } from '@chakra-ui/react';

export const menuSlotRecipe = defineSlotRecipe({
  slots: ['item', 'content'],
  base: {
    item: {
      _hover: {
        bg: "{colors.cardBg}",
      },
      bg: 'transparent',
    },
    content: {
      bg: "{colors.globalBg}",
    }
  }
});
