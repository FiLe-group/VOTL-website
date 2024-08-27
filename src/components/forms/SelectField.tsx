import { Box, HStack } from '@chakra-ui/layout';
import {
  chakraComponents,
  ChakraStylesConfig,
  OptionBase,
  Props,
  Select,
  SelectComponent,
  SelectInstance,
} from 'chakra-react-select';
import { forwardRef, ReactNode } from 'react';

const customComponents = {
  SingleValue: ({ children, ...props }: any) => {
    return (
      <chakraComponents.SingleValue {...props}>
        <HStack>
          {props.data.icon}
          <span>{children}</span>
        </HStack>
      </chakraComponents.SingleValue>
    );
  },
  Option: ({ children, ...props }: any) => {
    return (
      <chakraComponents.Option {...props}>
        <Box mr={2}>{props.data.icon}</Box> {children}
      </chakraComponents.Option>
    );
  },
};

const styles: ChakraStylesConfig<any, any, any> = {
  menuList: (provided) => ({
    ...provided,
    shadow: '14px 17px 40px 4px rgba(2, 4, 6, 0.06)',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'secondaryGray.600',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    bg: 'transparent',
  }),
  groupHeading: (provided) => ({
    ...provided,
    bg: 'navy.800',
  }),
  option: (provided, options) => ({
    ...provided,
    color: options.isSelected && 'white.20',
    bg: options.isSelected && 'blue.400.5',
    _hover: {
      bg: options.isSelected ? 'blue.400' : 'whiteAlpha.200',
    },
  }),
  control: (provided, data) => ({
    ...provided,
    rounded: '2xl',
    borderColor: data.isFocused ? 'blue.400' : 'navy.600',
    bg: 'blackAlpha.300',
  }),
};

export type Option = OptionBase & {
  label: string;
  value: string;
  icon?: ReactNode;
};

export const SelectFieldBase = forwardRef<SelectInstance, Props>((props, ref) => {
  return (
    <Select<any, any, any>
      focusBorderColor='white.75'
      components={customComponents}
      chakraStyles={styles}
      ref={ref}
      {...props}
    />
  );
});

SelectFieldBase.displayName = 'SelectField';

export const SelectField = SelectFieldBase as SelectComponent;
