import {Input, InputProps, useRecipe} from '@chakra-ui/react';
import { forwardRef } from 'react';
import { FormCard } from './Form';
import { WithControl } from './types';

export type InputFormProps = WithControl<InputProps>;

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ control, ...props }, ref) => {
    const recipe = useRecipe({ key: "input" })
    const styles = recipe({variant:"main"})

    return (
      <FormCard {...control}>
        <Input css={styles} ref={ref} {...props} />
      </FormCard>
    );
  }
);

InputForm.displayName = 'InputForm';
