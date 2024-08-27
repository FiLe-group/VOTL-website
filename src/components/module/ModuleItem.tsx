import { Box, Center, Flex, Text } from '@chakra-ui/layout';
import { Button, ButtonGroup, Card, CardBody, CardFooter } from '@chakra-ui/react';
import { IdModule } from '@/utils/common';
import { IoOpen, IoOptions } from 'react-icons/io5';
import { useEnableModuleMutation } from '@/api/hooks';
import { guild as view } from '@/config/translations/guild';
import Router from 'next/router';

export function ModuleItem({
  guild,
  module,
  enabled,
}: {
  guild: string;
  module: IdModule;
  enabled: boolean;
}) {
  const t = view.useTranslations();
  const mutation = useEnableModuleMutation();

  return (
    <Card variant="primary">
      <CardBody as={Flex} direction="row" gap={3}>
        <Center
          bg={enabled ? 'blue.700' : 'blue.500.2'}
          color={enabled ? 'white' : 'blue.100'}
          rounded="xl"
          w="50px"
          h="50px"
          fontSize="3xl"
        >
          {module.icon}
        </Center>
        <Box flex={1}>
          <Text fontSize={{ base: '16px', md: 'lg' }} fontWeight="600">
            {module.name}
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="TextSecondary">
            {module.description}
          </Text>
        </Box>
      </CardBody>
      <CardFooter as={ButtonGroup} mt={3}>
        <Button
          size={{ base: 'sm', md: 'md' }}
          disabled={mutation.isPending}
          {...(enabled
            ? {
                variant: 'blue',
                leftIcon: <IoOptions />,
                onClick: () => Router.push(`/guilds/${guild}/modules/${module.id}`),
                children: t.bn['config module'],
              }
            : {
                variant: 'secondary',
                leftIcon: <IoOpen />,
                onClick: () => mutation.mutate({ enabled: true, guild, module: module.id }),
                children: t.bn['enable module'],
              })}
        />
      </CardFooter>
    </Card>
  );
}
