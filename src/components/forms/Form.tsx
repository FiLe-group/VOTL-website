"use client"

import { Flex, Spacer } from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
  UseControllerProps,
} from 'react-hook-form';
import {createSlotRecipeContext, HTMLChakraProps, RecipeVariantProps} from "@chakra-ui/react";
import {fieldSlotRecipe} from "@/theme/components/field";

const { withProvider, withContext } = createSlotRecipeContext ({
  recipe: fieldSlotRecipe,
})

interface FieldRootProps
  extends HTMLChakraProps<
    "div",
    RecipeVariantProps<typeof fieldSlotRecipe>
  > {
  required?: boolean;
  invalid?: boolean;
}
export const FieldRoot = withProvider<HTMLLabelElement, FieldRootProps>(
  "div",
  "root",
)

interface FieldControlProps extends HTMLChakraProps<"input"> {}
export const FieldControl = withContext<
  HTMLInputElement,
  FieldControlProps
>("input", "control")

interface FieldLabelProps extends HTMLChakraProps<"label"> {}
export const FieldLabel = withContext<HTMLSpanElement, FieldLabelProps>(
  "label",
  "label",
)

interface FieldHelperProps extends HTMLChakraProps<"div"> {}
export const FieldHelper = withContext<HTMLSpanElement, FieldHelperProps>(
  "div",
  "helperText",
)

interface FieldErrorProps extends HTMLChakraProps<"div"> {}
export const FieldError = withContext<HTMLSpanElement, FieldErrorProps>(
  "div",
  "errorText",
)

export const Form = (props: FieldRootProps) => {
  return (
    <FieldRoot
      as={Flex}
      {...props}
    >
      {props.children}
    </FieldRoot>
  );
}

export type FormCardProps = {
  required?: boolean;
  baseControl?: FieldControlProps;
  error?: string;
  label?: string | ReactNode;
  description?: string | ReactNode;

  children: ReactNode;
};

export function FormCard({
  label,
  description,
  required,
  baseControl,
  children,
  error,
}: FormCardProps) {
  return (
    <FieldRoot required={required} invalid={error!=null} {...baseControl}>
      <FieldLabel>
        {label}
      </FieldLabel>
      <FieldHelper>{description}</FieldHelper>
      {children}
      <FieldError>{error}</FieldError>
      <Spacer />
    </FieldRoot>
  );
}

export type FormCardControllerProps<
  TFieldValue extends FieldValues,
  TName extends Path<TFieldValue>
> = {
  control: Omit<FieldRootProps, 'error' | 'children'>;
  controller: UseControllerProps<TFieldValue, TName>;
  render: ControllerProps<TFieldValue, TName>['render'];
};

export function FormCardController<
  TFieldValue extends FieldValues,
  TName extends Path<TFieldValue>
>({ control, controller, render }: FormCardControllerProps<TFieldValue, TName>) {
  return (
    <Controller
      {...controller}
      render={(props) => (
        <FormCard {...control} error={props.fieldState.error?.message}>
          {render(props)}
        </FormCard>
      )}
    />
  );
}
