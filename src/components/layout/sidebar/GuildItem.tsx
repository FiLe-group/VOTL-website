import {Card, Flex, Skeleton, Text} from '@chakra-ui/react';
import { Guild, iconUrl } from '@/api/discord';
import {Avatar} from "@/components/ui/avatar";

export function GuildItem({
  guild,
  active,
  href,
}: {
  guild: Guild;
  active: boolean;
  href: string;
}) {
  return (
    <Card.Root
      asChild
      bg={active ? 'Brand' : 'MainBackground'}
      color={active ? 'white' : undefined}
      cursor="pointer"
      rounded="xl"
    >
      <link href={href}>
        <Card.Body as={Flex} direction="column" gap={3}>
          <Avatar name={guild.name} src={iconUrl(guild)} />
          <Text fontWeight="600">{guild.name}</Text>
        </Card.Body>
      </link>
    </Card.Root>
  );
}

export function GuildItemsSkeleton() {
  return (
    <>
      <Skeleton h="124px" rounded="xl" />
      <Skeleton h="124px" rounded="xl" />
      <Skeleton h="124px" rounded="xl" />
      <Skeleton h="124px" rounded="xl" />
      <Skeleton h="124px" rounded="xl" />
    </>
  );
}
