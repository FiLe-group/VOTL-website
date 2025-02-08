import {Card, Flex, Link, Skeleton, Text} from '@chakra-ui/react';
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
      bg={active ? 'brand' : 'globalBg'}
      rounded="xl"
      border='none'
      _hover={{
        shadow: 'inset 0 0 10px 4px {white/10}',
        textDecor: 'none'
      }}
    >
      <Link href={href}>
        <Card.Body as={Flex} direction="column" gap={3} alignItems='center'>
          <Avatar name={guild.name} src={iconUrl(guild)} />
          <Text fontWeight="600" textAlign='center'>{guild.name}</Text>
        </Card.Body>
      </Link>
    </Card.Root>
  );
}

export function GuildItemsSkeleton() {
  return (
    <>
      <Skeleton h="124px" rounded="xl" bg='whiteAlpha.400'/>
      <Skeleton h="124px" rounded="xl" bg='whiteAlpha.400'/>
      <Skeleton h="124px" rounded="xl" bg='whiteAlpha.400'/>
    </>
  );
}
