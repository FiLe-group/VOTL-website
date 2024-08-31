import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, getToken, useToken } from '@chakra-ui/react';
import { dark } from '@/theme/colors';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
  selectAnatomy.keys
);

const outline = definePartsStyle({
  field: {
    //border: '3px',
    //borderColor: 'whiteAlpha.300',
    bg: 'inherit',
    _hover: {
      //borderColor: 'whiteAlpha.100',
    },
    _invalid: {
      //borderColor: 'red.300',
      //boxShadow: `0 0 0 1px red.300`,
    },
    _focusVisible: {
      zIndex: 0,
      //borderColor: dark.brand,
      //boxShadow: `0 0 0 1px ${dark.brand}`,
    },
  },
});

export const selectStyles = defineMultiStyleConfig({
  variants: { outline },
});
