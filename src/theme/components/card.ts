import { defineSlotRecipe } from '@chakra-ui/react';
import {cardAnatomy} from "@chakra-ui/react/anatomy";

export const cardSlotRecipe = defineSlotRecipe({
  slots: cardAnatomy.keys(),
  base: {
    root: {
      color: "{colors.textPrimary}",
      bg: "{colors.cardBg}",
      p: 'var(--card-padding)',
    },
    header: {
      fontSize: { base: '16px', md: 'lg' },
      fontWeight: 'medium',
      p: 0,
    },
    body: {
      fontSize: { base: 'sm', md: 'md' },
      p: 0,
    },
    footer: {
      p: 0,
      mt: 4,
    },
  },
  variants: {
    variant: {
      primary: {
        root: {
          rounded: '2xl',
        },
      },
    }
  },
});
