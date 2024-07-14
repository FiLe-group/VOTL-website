import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, getToken, useToken } from '@chakra-ui/react';
import { dark } from '@/theme/colors';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
  selectAnatomy.keys
);

const outline = definePartsStyle((props) => {
	const focusBorderColor = dark.brand;
	const errorBorderColor = 'red.300';

  return {
    field: {
      border: '1px solid',
      borderColor: 'inherit',
      bg: 'inherit',
      _hover: {
        borderColor: 'whiteAlpha.400',
      },
      _invalid: {
        borderColor: errorBorderColor,
        boxShadow: `0 0 0 1px ${errorBorderColor}`,
      },
      _focusVisible: {
        zIndex: 0,
        borderColor: focusBorderColor,
        boxShadow: `0 0 0 1px ${focusBorderColor}`,
      },
    },
  };
});

export const selectStyles = defineMultiStyleConfig({
  variants: { outline },
});
