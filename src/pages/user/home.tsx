import {
  Card,
  Flex,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { config } from '@/config/common';
import { useGuilds } from '@/api/hooks';
import { NextPageWithLayout } from '@/pages/_app';
import DashLayout from '@/components/layout/dash';
import { iconUrl } from '@/api/discord';
import {Avatar} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

const HomePage: NextPageWithLayout = () => {
  return <GuildSelect />;
};

export function GuildSelect() {
  const guilds = useGuilds();

  if (guilds.status === 'success')
    return (
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={3}>
        {guilds.data
          ?.filter((guild) => config.guild.filter(guild))
          .map((guild) => (
            <Card.Root key={guild.id} variant="primary" asChild>
              <link href={`/guilds/${guild.id}`}>
                <Card.Header as={Flex} flexDirection="row" gap={3}>
                  <Avatar src={iconUrl(guild)} name={guild.name} fontSize="md" />
                  <Text>{guild.name}</Text>
                </Card.Header>
              </link>
            </Card.Root>
          ))}
      </SimpleGrid>
    );

  if (guilds.status === 'error')
    return (
      <Button w="fit-content" variant="danger" onClick={() => guilds.refetch()}>
        Try Again
      </Button>
    );

  if (guilds.status === 'pending')
    return (
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={3}>
        <Skeleton minH="88px" rounded="2xl" />
        <Skeleton minH="88px" rounded="2xl" />
        <Skeleton minH="88px" rounded="2xl" />
        <Skeleton minH="88px" rounded="2xl" />
        <Skeleton minH="88px" rounded="2xl" />
      </SimpleGrid>
    );

  return <></>;
}

HomePage.getLayout = (c) => <DashLayout>{c}</DashLayout>;
export default HomePage;
