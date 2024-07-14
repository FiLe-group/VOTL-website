import { popoverAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

export const popoverStyles = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    content: {
      bg: 'navy.900',
      rounded: 'xl',
      boxShadow: 'normal',
    },
  }),
});
