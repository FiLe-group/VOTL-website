import {Icon, useRecipe, Center, Heading, Text} from '@chakra-ui/react';
import { LoadingPanel } from '@/components/panel/LoadingPanel';
import { modules } from '@/config/modules';
import { CustomModule, ModuleConfig } from '@/config/types';
import { BsSearch } from 'react-icons/bs';
import { useEnableModuleMutation, useModuleQuery } from '@/api/hooks';
import { UpdateModulePanel } from '@/components/module/UpdateModulePanel';
import { feature as view } from '@/config/translations/feature';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '@/pages/_app';
import getGuildLayout from '@/components/layout/guild/GetGuildLayout';
import {Button} from "@/components/ui/button";

export type Params = {
  guild: string;
  module: keyof CustomModule;
};

export type UpdateModuleValue<K extends keyof CustomModule> = Partial<CustomModule[K]>;

const ModulePage: NextPageWithLayout = () => {
  const { module, guild } = useRouter().query as Params;

  const query = useModuleQuery(guild, module);
  const moduleConfig = modules[module] as ModuleConfig<typeof module>;
  const skeleton = moduleConfig?.useSkeleton?.();

  if (moduleConfig == null) return <NotFound />;
  if (query.isError) return <NotEnabled />;
  if (query.isLoading) return skeleton != null ? <>{skeleton}</> : <LoadingPanel />;
  return <UpdateModulePanel key={module} module={query.data} config={moduleConfig} />;
};

function NotEnabled() {
  const t = view.useTranslations();
  const { guild, module } = useRouter().query as Params;
  const enable = useEnableModuleMutation();

  const recipe = useRecipe({ key:"button" })
  const styles = recipe({ variant: "secondary" })

  return (
    <Center flexDirection="column" h="full" gap={1}>
      <Text fontSize="xl" fontWeight="600">
        {t.error['not enabled']}
      </Text>
      <Text color="textSecondary">{t.error['not enabled description']}</Text>
      <Button
        mt={3}
        loading={enable.isPending}
        onClick={() => enable.mutate({ enabled: true, guild, module })}
        css={styles}
        px={6}
      >
        {t.bn.enable}
      </Button>
    </Center>
  );
}

function NotFound() {
  const t = view.useTranslations();

  return (
    <Center flexDirection="column" gap={2} h="full">
      <Icon as={BsSearch} w="50px" h="50px" />
      <Heading size="lg">{t.error['not found']}</Heading>
      <Text color="textSecondary">{t.error['not found description']}</Text>
    </Center>
  );
}

ModulePage.getLayout = (c) => getGuildLayout({ children: c, back: true });
export default ModulePage;
