import { menuAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { dark } from '../colors';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

export const menuTheme = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    item: {
      _hover: {
        bg: dark.cardBg,
      },
      bg: 'transparent',
    },
    list: {
      bg: dark.globalBg,
    },
  }),
});
