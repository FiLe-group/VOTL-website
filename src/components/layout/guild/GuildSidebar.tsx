import { FaChevronLeft } from 'react-icons/fa';
import { Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import { Icon, IconButton } from '@chakra-ui/react';
import { HSeparator } from '@/components/layout/Separator';
import { getModules } from '@/utils/common';
import { IoSettings } from 'react-icons/io5';
import { useGuildPreview } from '@/api/hooks';
import { sidebarBreakpoint } from '@/theme/breakpoints';
import { guild as view } from '@/config/translations/guild';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Params } from '@/pages/guilds/[guild]/modules/[module]';
import { SidebarItem } from '../sidebar/SidebarItem';

export function InGuildSidebar() {
  const router = useRouter();
  const { guild: guildId, module: activeId } = router.query as Params;
  const { guild } = useGuildPreview(guildId);

  const t = view.useTranslations();

  return (
    <Flex direction="column" gap={2} p={3}>
      <HStack as={Link} cursor="pointer" mb={2} href={`/guilds/${guildId}`}>
        <IconButton
          display={{ base: 'none', [sidebarBreakpoint]: 'block' }}
          icon={<Icon verticalAlign="middle" as={FaChevronLeft} />}
          aria-label="back"
        />
        <Text fontSize="lg" fontWeight="600">
          {guild?.name}
        </Text>
      </HStack>
      <VStack align="stretch">
        <SidebarItem
          href={`/guilds/${guildId}/settings`}
          active={router.route === `/guilds/[guild]/settings`}
          icon={<Icon as={IoSettings} />}
          name={t.bn.settings}
        />
        <HSeparator>Modules</HSeparator>
        {getModules().map((module) => (
          <SidebarItem
            key={module.id}
            name={module.name}
            icon={module.icon}
            active={activeId === module.id}
            href={`/guilds/${guildId}/modules/${module.id}`}
          />
        ))}
      </VStack>
    </Flex>
  );
}
