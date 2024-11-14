import { defineSlotRecipe } from '@chakra-ui/react';

export const menuSlotRecipe = defineSlotRecipe({
  slots: ['item', 'list'],
  base: {
    item: {
      _hover: {
        bg: "colors.cardBg",
      },
      bg: 'transparent',
    },
    list: {
      bg: "colors.globalBg",
    }
  }
});
