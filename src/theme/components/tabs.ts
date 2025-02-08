import { defineSlotRecipe } from '@chakra-ui/react';

export const tabsSlotRecipe = defineSlotRecipe({
  slots: ['tablist'],
  base: {
    tablist: {
      px: 0,
      pb: 0,
    }
  }
});