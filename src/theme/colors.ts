import {defineTokens} from "@chakra-ui/react";

export const colors = defineTokens.colors({
  globalBg: {value: '#0f0f0f'},
  brand: {value: '{colors.blue.700}'},
  textPrimary: {value: 'white'},
  textSecondary: {value: '{colors.white/60}'},
  cardBg: {value: '#080e2c'},
  shadow: {value: '7px 10px 30px rgba(60, 60, 60, 0.3)'},
  blue: {
    900: {value: 'rgba(30, 58, 138)'},
    800: {value: 'rgba(30, 64, 175)'},
    700: {value: 'rgba(29, 78, 216)'},
    600: {value: 'rgba(37, 99, 235)'},
    500: {value: 'rgba(59, 130, 246)'},
    400: {value: 'rgba(96, 165, 250)'},
    300: {value: 'rgba(147, 197, 253)'},
    200: {value: 'rgba(191, 219, 254)'},
    100: {value: 'rgba(219, 234, 254)'},
    50: {value: 'rgba(239, 246, 255)'}
  },
  secondaryGray: {
    100: {value: '#E0E5F2'},
    200: {value: '#E1E9F8'},
    300: {value: '#F4F7FE'},
    400: {value: '#E9EDF7'},
    500: {value: '#8F9BBA'},
    600: {value: '#A3AED0'},
    700: {value: '#707EAE'},
    800: {value: '#707EAE'},
    900: {value: '#1B2559'},
  },
  red: {
    500: {value: '#EE5D50'},
    600: {value: '#E31A1A'},
  },
  orange: {
    100: {value: '#FFF6DA'},
    500: {value: '#FFB547'},
  },
  green: {
    100: {value: '#E6FAF5'},
    500: {value: '#01B574'},
  },
  navy: {
    50: {value: '#d0dcfb'},
    100: {value: '#aac0fe'},
    200: {value: '#a3b9f8'},
    300: {value: '#728fea'},
    400: {value: '#3652ba'},
    500: {value: '#2f4bba'},
    600: {value: '#232c4f'},
    700: {value: '#1d2343'},
    800: {value: '#080e2c'},
    900: {value: '#08081c'},
  },
  neutral: {
    800: {value: 'rgba(38, 38, 38, .50)'},
    700: {value: 'rgba(64, 64, 64)'}
  },
});
