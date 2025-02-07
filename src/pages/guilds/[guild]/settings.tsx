import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { RoleSelectForm } from '@/components/forms/RoleSelect';
import getGuildLayout from '@/components/layout/guild/GetGuildLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SwitchFieldForm } from '@/components/forms/SwitchField';
import { InputForm } from '@/components/forms/InputForm';
import { ChannelSelectForm } from '@/components/forms/ChannelSelect';

const schema = z.object({
  beta: z.boolean(),
  role: z.number().optional(),
  prefix: z.string().min(1).max(1),
  channel: z.number().optional(),
});

type ExampleSettings = z.infer<typeof schema>;

/**
 * Example for using react-hook-form with built-in components
 */
const GuildSettingsPage: NextPageWithLayout = () => {
  const { watch, register, control, formState, handleSubmit } = useForm<ExampleSettings>({
    resolver: zodResolver(schema),
    defaultValues: {
      beta: true,
      prefix: '/',
      role: undefined,
      channel: undefined,
    },
  });
  const errors = formState.errors;

  return (
    <Flex direction="column">
      <Box ml={{ 'sm': 5 }}>
        <Heading fontSize="2xl" fontWeight="600">
          Guild Settings
        </Heading>
        <Text
          fontSize="lg"
          fontWeight="500"
          as="code"
          color='cyan.400'
          cursor="pointer"
          onClick={handleSubmit(() => console.log('submit'))}
        >
          {JSON.stringify(watch())}
        </Text>
      </Box>
      <SimpleGrid mt={5} columns={{ base: 1, md: 2 }} gap={3}>
        <SwitchFieldForm
          control={{
            label: 'Beta Modules',
            description: 'Use beta modules before releasing',
          }}
          controller={{ control, name: 'beta' }}
        />
        <RoleSelectForm
          control={{
            label: 'Admin Role',
            description: 'Roles that able to configure the discord bot',
          }}
          controller={{ control, name: 'role' }}
        />
        <InputForm
          control={{
            label: 'Command prefix',
            description: 'Change the default command prefix',
            error: errors.prefix?.message,
          }}
          placeholder="/"
          {...register('prefix')}
        />
        <ChannelSelectForm
          control={{
            label: 'Logs',
            description: 'The channel to log bot states',
          }}
          controller={{ control, name: 'channel' }}
        />
      </SimpleGrid>
    </Flex>
  );
};

GuildSettingsPage.getLayout = (c) => getGuildLayout({ children: c, back: true });
export default GuildSettingsPage;
