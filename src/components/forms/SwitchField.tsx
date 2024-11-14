// Chakra imports
import {
  Box,
  Flex,
  Text, useRecipe,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useController } from 'react-hook-form';
import {FieldError, FieldLabel, Form} from './Form';
import { ControlledInput } from './types';
import {Switch, SwitchProps} from "@/components/ui/switch";

export const SwitchFieldForm: ControlledInput<{}, boolean> = ({
  control,
  controller,
  ...props
}) => {
  const {
    field: { value, ...field },
    fieldState,
  } = useController(controller);

  const recipe = useRecipe({ key: "switch" })
  const styles = recipe({variant:"main", size:"md"})

  return (
    <Form invalid={fieldState.invalid} required={control.required} {...control.baseControl}>
      <Flex justify="space-between" align="center" borderRadius="16px" gap={3}>
        <Box>
          <FieldLabel fontSize={{ base: '16px', md: 'lg' }} fontWeight="medium" mb={0}>
            {control.label}
          </FieldLabel>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="TextSecondary">
            {control.description}
          </Text>
        </Box>
        <Switch css={styles} checked={value} {...field} {...props} />
      </Flex>
      <FieldError>{fieldState.error?.message}</FieldError>
    </Form>
  );
};

export function SwitchField(
  props: {
    id?: string;
    label?: ReactNode;
    desc?: ReactNode;
  } & SwitchProps
) {
  const { id, label, desc, ...rest } = props;

  const recipe = useRecipe({ key: "switch" })
  const styles = recipe({variant:"main", size:"md"})

  return (
    <Flex justify="space-between" align="center" borderRadius="16px" gap={6}>
      <Box>
        <FieldLabel htmlFor={id} fontSize="md" fontWeight="medium" mb={0}>
          {label}
        </FieldLabel>
        <Text color="TextSecondary">{desc}</Text>
      </Box>
      <Switch css={styles} id={id} {...rest} />
    </Flex>
  );
}
