import { defineSlotRecipe } from '@chakra-ui/react';

export const sliderSlotRecipe = defineSlotRecipe({
  slots: ['thumb'],
  variants: {
    variant: {
      main: {
        thumb: {
          bg: 'blue.400',
        },
      }
    }
  }
});