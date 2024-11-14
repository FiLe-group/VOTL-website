import { defineRecipe } from '@chakra-ui/react';

export const skeletonRecipe = defineRecipe({
  base: {
    "--start-color": "colors.navy.600",
    "--end-color": "colors.navy.800",
  }
});
