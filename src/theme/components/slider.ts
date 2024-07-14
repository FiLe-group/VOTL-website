import { sliderAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

export const sliderStyles = defineMultiStyleConfig({
  variants: {
    main: definePartsStyle((props) => ({
      thumb: {
        bg: 'brand.400',
      },
    })),
  },
});
