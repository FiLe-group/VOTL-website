import { z } from "zod";
import { ReportModule, UseFormRender } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { channel } from "diagnostics_channel";
import { SimpleGrid } from "@chakra-ui/layout";
import { ChannelSelectForm } from "@/components/forms/ChannelSelect";
import { TextAreaForm } from "@/components/forms/TextAreaField";
import { SwitchFieldForm } from "@/components/forms/SwitchField";

const schema = z.object({
	channel: z.string(),
  message: z.string().min(20),
  temp: z.boolean(),
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