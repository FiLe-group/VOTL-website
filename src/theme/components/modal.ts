import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    backdropFilter: 'auto',
    backdropBlur: 'lg',
  },
  closeButton: {
    _hover: {},
    _focus: {
      boxShadow: 'none',
    },
  },
  dialog: {
    bg: 'navy.900',
  },
});

export const modalStyles = defineMultiStyleConfig({
  baseStyle,
});
