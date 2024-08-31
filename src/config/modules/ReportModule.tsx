import { z } from "zod";
import { ReportModule, UseFormRender } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { channel } from "diagnostics_channel";
import { SimpleGrid } from "@chakra-ui/layout";
import { ChannelSelectForm } from "@/components/forms/ChannelSelect";
import { TextAreaForm } from "@/components/forms/TextAreaField";
import { SwitchFieldForm } from "@/components/forms/SwitchField";
import { FilePickerForm } from "@/components/forms/FilePicker";
import { ColorPickerForm } from "@/components/forms/ColorPicket";
import { DatePickerForm } from "@/components/forms/DatePicker";

const schema = z.object({
	channel: z.string(),
  message: z.string().min(20),
  temp: z.boolean(),
  color: z.string().optional(),
  date: z.date().optional(),
  file: z.custom<File[]>().optional(),
})

type Input = z.infer<typeof schema>;

export const useReportModule: UseFormRender<ReportModule> = (data, onSubmit) => {
	const { register, reset, handleSubmit, formState, control } = useForm<Input>({
    resolver: zodResolver(schema),
    shouldUnregister: false,
    defaultValues: {
      channel: data.channel,
      message: data.message ?? '',
      temp: false,
      color: undefined,
      date: undefined,
      file: [],
    },
  });

	return {
		component: (
			<SimpleGrid columns={{ base: 1, lg: 2 }} gap={3}>
				<ChannelSelectForm
          control={{
            label: 'Channel',
            description: 'Where to send the report message',
          }}
          controller={{ control, name: 'channel' }}
        />
        <TextAreaForm
          control={{
            label: 'Message',
            description: 'What to reply to the user?',
            error: formState.errors.message?.message,
          }}
          placeholder="Type some text here..."
          {...register('message')}
        />
				<SwitchFieldForm
          control={{ label: 'Turn on', description: 'Enable something' }}
          controller={{
            control,
            name: 'temp',
          }}
        />
        <FilePickerForm
          control={{
            label: 'File',
            description: 'The file to upload',
          }}
          options={{ accept: { 'image/*': [] }, multiple: false }}
          controller={{ control, name: 'file' }}
        />
        <ColorPickerForm
          control={{
            label: 'Color',
            description: 'The color of message',
          }}
          controller={{ control, name: 'color' }}
        />
        <DatePickerForm
          control={{
            label: 'Date',
            description: 'The date of today',
          }}
          controller={{ control, name: 'date' }}
        />
			</SimpleGrid>
		),
		onSubmit: handleSubmit(async (e) => {
			const data = await onSubmit(
				JSON.stringify({
					message: e.message,
					channel: e.channel,
				})
			);

			reset(data);
		}),
		canSave: formState.isDirty,
		reset: () => reset(control._defaultValues),
	};
};