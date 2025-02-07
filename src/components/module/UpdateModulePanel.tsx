import { RiErrorWarningFill as WarningIcon } from 'react-icons/ri';
import {Group, Icon, Box, Flex, Heading, Spacer, Text} from '@chakra-ui/react';
import { ModuleConfig, UseFormRenderResult, CustomModule } from '@/config/types';
import { IoSave } from 'react-icons/io5';
import { useEnableModuleMutation, useUpdateModuleMutation } from '@/api/hooks';
// @ts-ignore
import { Params } from '@/pages/guilds/[guild]/modules/[module]';
import { feature as view } from '@/config/translations/feature';
import { useRouter } from 'next/router';
import {Button} from "@/components/ui/button";
import {keyframes} from "@emotion/react";

export function UpdateModulePanel({
  module,
  config,
}: {
  module: CustomModule[keyof CustomModule];
  config: ModuleConfig<keyof CustomModule>;
}) {
  const { guild, module: moduleId } = useRouter().query as Params;
  const mutation = useUpdateModuleMutation();
  const enableMutation = useEnableModuleMutation();
  const result = config.useRender(module, (data) => {
    return mutation.mutateAsync({
      guild,
      module: moduleId,
      options: data,
    });
  });

  const onDisable = () => {
    enableMutation.mutate({ enabled: false, guild, module: moduleId });
  };

  return (
    <Flex as="form" direction="column" gap={5} w="full" h="full">
      <Flex direction={{ base: 'column', md: 'row' }} mx={{ 'sm': 5 }} justify="space-between">
        <Box>
          <Heading fontSize="2xl" fontWeight="600">
            {config.name}
          </Heading>
          <Text color="TextSecondary">{config.description}</Text>
        </Box>
        <Group attached mt={3}>
          <Button variant="danger" loading={enableMutation.isPending} onClick={onDisable}>
            <view.T text={(e) => e.bn.disable} />
          </Button>
        </Group>
      </Flex>

      {result.component}
      <Savebar isLoading={mutation.isPending} result={result} />
    </Flex>
  );
}

function Savebar({
  result: { canSave, onSubmit, reset },
  isLoading,
}: {
  result: UseFormRenderResult;
  isLoading: boolean;
}) {
  const t = view.useTranslations();
  const breakpoint = 'sm';

  const slideFadeIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

  return (
    <Flex
      as={Box}
      animation={canSave ? `${slideFadeIn} 0.4s ease-in-out` : undefined}
      bg="CardBackground"
      rounded="3xl"
      zIndex="sticky"
      pos="sticky"
      bottom={{ base: 2, [breakpoint]: '10px' }}
      w="full"
      p={{ base: 1, [breakpoint]: '15px' }}
      shadow="normal"
      alignItems="center"
      flexDirection={{ base: 'column', [breakpoint]: 'row' }}
      gap={{ base: 1, [breakpoint]: 2 }}
      mt="auto"
    >
      <Icon
        display={{ base: 'none', [breakpoint]: 'block' }}
        as={WarningIcon}
        color='orange.300'
        w="30px"
        h="30px"
      />
      <Text fontSize={{ base: 'md', [breakpoint]: 'lg' }} fontWeight="600">
        {t.unsaved}
      </Text>
      <Spacer />
      <Group attached fontSize={{ base: 'sm', [breakpoint]: 'md' }}>
        <Button
          type="submit"
          variant="secondary" //action
          rounded="full"
          loading={isLoading}
          onClick={onSubmit}
        >
          <IoSave /> {t.bn.save}
        </Button>
        <Button rounded="full" onClick={reset}>
          {t.bn.discard}
        </Button>
      </Group>
    </Flex>
  );
}
