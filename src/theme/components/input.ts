import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { dark } from '../colors';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

const main = definePartsStyle({
  field: {
    border: '2px solid',
    borderRadius: '16px',
    fontSize: 'sm',
    p: '20px',
    color: 'white',
		bg: 'navy.800',
		_placeholder: {
			color: 'secondaryGray.600',
		},
		_invalid: {
			borderColor: 'red.400',
		},
		borderColor: 'navy.600',
  },
});

export const inputStyles = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: {
      fontWeight: 400,
      borderColor: 'navy.600',
      borderRadius: '8px',
    },
  }),

  variants: {
    flushed: definePartsStyle({
      field: {
        _focus: {
          borderColor: dark.brand,
          boxShadow: 'none',
        },

        fontSize: '2xl',
        fontWeight: '600',
        color: dark.textColorPrimary,
        borderBottomColor: 'navy.600',
      },
    }),
    main,
    focus: definePartsStyle({
      field: {
        ...main.field,
        _focus: {
          borderColor: 'blue.400',
        },
      },
    }),
    auth: definePartsStyle({
      field: {
        bg: 'transparent',
        fontWeight: '500',
        color: 'white',
				borderColor: 'rgba(135, 140, 189, 0.3)',
        border: '1px solid',
        borderRadius: '16px',
        _placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
      },
    }),
    authSecondary: definePartsStyle({
      field: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'secondaryGray.100',
        borderRadius: '16px',
        _placeholder: { color: 'secondaryGray.600' },
      },
    }),
    search: definePartsStyle({
      field: {
        border: 'none',
        py: '11px',
        borderRadius: 'inherit',
        _placeholder: { color: 'secondaryGray.600' },
      },
    }),
  },
});
