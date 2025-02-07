import {
  Box,
  Center,
  Flex, Input,
  SimpleGrid,
  Text, useRecipe,
} from '@chakra-ui/react';
import { HexAlphaColorPicker, HexColorPicker } from 'react-colorful';
import { FormCard } from './Form';
import { convertHexToRGBA } from '@/utils/common';
import { useController } from 'react-hook-form';
import { ControlledInput } from './types';
import {PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger} from "@/components/ui/popover";
import {InputGroup} from "@/components/ui/input-group";

export type ColorPickerFormProps = Omit<ColorPickerProps, 'value' | 'onChange'>;

export const SmallColorPickerForm: ControlledInput<
  ColorPickerFormProps,
  ColorPickerProps['value']
> = ({ control, controller, ...props }) => {
  const { field, fieldState } = useController(controller);
  const { value } = field;

  const recipe = useRecipe({ key: "input" })
  const styles = recipe({variant:"main"})

  return (
    <FormCard {...control} error={fieldState.error?.message}>
      <PopoverRoot>
        <PopoverTrigger>
          <InputGroup startElement={<Box bg={value} rounded="xl" h="full"/>}>
            <Input
              css={styles}
              autoComplete="off"
              placeholder={value ?? 'Select a color'}
              {...field}
              value={field.value ?? ''}
            />
          </InputGroup>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverBody>
            <ColorPicker value={value} onChange={field.onChange} {...props} />
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </FormCard>
  );
};

export const ColorPickerForm: ControlledInput<ColorPickerFormProps, ColorPickerProps['value']> = ({
  control,
  controller,
  ...props
}) => {
  const { field, fieldState } = useController(controller);
  const { value } = field;

  const recipe = useRecipe({ key: "input" })
  const styles = recipe({variant:"main"})

  return (
    <FormCard {...control} error={fieldState.error?.message}>
      <SimpleGrid columns={{ base: 1, 'sm': 2 }} gap={5}>
        <Flex direction="column" gap={3}>
          <Center
            display={{ base: 'none', 'sm': 'flex' }}
            minH="150px"
            rounded="xl"
            border="1px solid"
            borderColor="blackAlpha.200"
            bgColor={value == null ? 'gray.900' : convertHexToRGBA(value)}
            flex={1}
          >
            {value == null && (
              <Text fontSize="sm" color="textSecondary">
                No Color
              </Text>
            )}
          </Center>
          <Input
            css={styles}
            placeholder={value ?? 'Select a color'}
            autoComplete="off"
            {...field}
            value={field.value ?? ''}
          />
        </Flex>
        <ColorPicker value={field.value} onChange={field.onChange} {...props} />
      </SimpleGrid>
    </FormCard>
  );
};

export type ColorPickerProps = {
  value?: string | null;
  onChange?: (color: string) => void;
  supportAlpha?: boolean;
};

export function ColorPicker({ value, onChange, supportAlpha, ...rest }: ColorPickerProps) {
  const props: Parameters<typeof HexColorPicker>[0] = {
    className: 'colorpicker',
    color: value ?? undefined,
    onChange,
    style: {
      width: '100%',
    },
    ...rest,
  };

  return supportAlpha ? <HexAlphaColorPicker {...props} /> : <HexColorPicker {...props} />;
}
