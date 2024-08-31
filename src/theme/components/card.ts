import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { dark } from '@/theme/colors';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys
);

export const cardStyles = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      color: dark.textColorPrimary,
      bg: dark.cardBg,
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
  }),
  variants: {
    primary: definePartsStyle({
      container: {
        rounded: '2xl',
      },
    }),
  },
});
