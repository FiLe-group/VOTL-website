import {
  Box,
  Card,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text, VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { useActiveSidebarItem, SidebarItemInfo } from '@/utils/router';
import {useGuilds, useSelfUser} from '@/api/hooks';
import { SearchBar } from '@/components/forms/SearchBar';
import { useMemo, useState } from 'react';
import { config } from '@/config/common';
import { FiSettings as SettingsIcon } from 'react-icons/fi';
import { avatarUrl } from '@/api/discord';
import { GuildItem, GuildItemsSkeleton } from './GuildItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SidebarItem } from './SidebarItem';
import items from '@/config/sidebar-items';
import {Avatar} from "@/components/ui/avatar";

export function SidebarContent() {
  const [filter, setFilter] = useState('');
  const guilds = useGuilds();
  const { guild: selectedGroup } = useRouter().query as {
    guild: string;
  };

  const filteredGuilds = useMemo(
    () =>
      guilds.data?.filter((guild) => {
        const contains = guild.name.toLowerCase().includes(filter.toLowerCase());

        return config.guild.filter(guild) && contains;
      }),
    [guilds.data, filter]
  );
  return (
    <>
      <VStack align="center" py="2rem" m={3} bg="brand" rounded="xl">
        <Heading fontSize="lg" fontWeight={600} color="white">
          {config.name}
        </Heading>
      </VStack>

      <Stack direction="column" mb="auto">
        <Items />
        <Box px="10px" mb={3}>
          <SearchBar
            w="full"
            input={{
              value: filter,
              onChange: (e) => setFilter(e.target.value),
            }}
          >
            <VisuallyHidden />
          </SearchBar>
        </Box>
        <Flex direction="column" px="10px" gap={3}>
          {filteredGuilds == null ? (
            <GuildItemsSkeleton />
          ) : (
            filteredGuilds?.map((guild) => (
              <GuildItem
                key={guild.id}
                guild={guild}
                active={selectedGroup === guild.id}
                href={`/guilds/${guild.id}`}
              />
            ))
          )}
        </Flex>
      </Stack>
    </>
  );
}

export function BottomCard() {
  const user = useSelfUser();
  if (user == null) return <></>;

  return (
    <Card.Root
      pos="sticky" left={0} bottom={0}
      w="full" py={2}
      bgColor='cardBg'
      borderColor='white/20'
      borderBottomWidth={0}
      roundedBottom='0'
    >
      <Card.Body as={HStack}>
        <Avatar src={avatarUrl(user)} name={user.username} fontSize="sm" />
        <Text fontWeight="600">{user.username}</Text>
        <Spacer />
        <Link href="/user/profile">
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>
        </Link>
      </Card.Body>
    </Card.Root>
  );
}

function Items() {
  const active = useActiveSidebarItem();

  return (
    <Flex direction="column" px="10px" gap={1}>
      {items
        .filter((item) => !item.hidden)
        .map((route: SidebarItemInfo, index: number) => (
          <SidebarItem
            key={index}
            href={route.path}
            name={route.name}
            icon={route.icon}
            active={active === route}
          />
        ))}
    </Flex>
  );
}
