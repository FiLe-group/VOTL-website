import { Calendar, CalendarProps } from 'react-calendar';
import { ControlledInput } from './types';
import {Icon, Input, useRecipe} from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Text } from '@chakra-ui/layout';
import { AiTwotoneCalendar as CalendarIcon } from 'react-icons/ai';
import { useController } from 'react-hook-form';
import {FormCard} from "@/components/forms/Form";
import {PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger} from "@/components/ui/popover";
import {InputGroup} from "@/components/ui/input-group";

export function DatePicker(props: CalendarProps) {
  return (
    <Calendar
      view={'month'}
      tileContent={<Text color="blue.500" />}
      prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
      nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      {...props}
      value={props.value ?? null}
    />
  );
}

export type DatePickerFormProps = Omit<CalendarProps, 'value' | 'onChange'>;

export const DatePickerForm: ControlledInput<DatePickerFormProps, CalendarProps['value']> = ({
  control,
  controller,
  ...props
}) => {
  const {
    field: { ref, ...field },
    fieldState,
  } = useController(controller);

  return (
    <FormCard {...control} error={fieldState.error?.message}>
      <DatePicker inputRef={ref} {...field} {...props} />
    </FormCard>
  );
};

export const SmallDatePickerForm: ControlledInput<DatePickerFormProps, CalendarProps['value']> = ({
  control,
  controller,
  ...props
}) => {
  const {
    field: { ref, ...field },
    fieldState,
  } = useController(controller);

  const text = field.value?.toLocaleString(undefined, {
    dateStyle: 'short',
  });

  const recipe = useRecipe({ key: "input" })
  const styles = recipe({variant:"main"})

  return (
    <FormCard {...control} error={fieldState.error?.message}>
      <PopoverRoot>
        <PopoverTrigger>
          <InputGroup endElement={<CalendarIcon z={0} />}>
            <Input
              css={styles}
              value={text ?? ''}
              placeholder="Select a Date"
              readOnly
            />
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            <DatePicker inputRef={ref} {...field} {...props} />
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </FormCard>
  );
};
