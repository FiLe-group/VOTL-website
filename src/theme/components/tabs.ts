import { defineSlotRecipe } from '@chakra-ui/react';

export const tabsSlotRecipe = defineSlotRecipe({
  slots: ['tabpanel'],
  base: {
    tabpanel: {
      px: 0,
      pb: 0,
    }
  }
});