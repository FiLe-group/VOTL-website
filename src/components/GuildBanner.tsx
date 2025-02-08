import { FiSettings as SettingsIcon } from 'react-icons/fi';
import {Group, Flex, Heading, Text, Link} from '@chakra-ui/react';
import { guild as view } from '@/config/translations/guild';
import { useRouter } from 'next/router';
import {Button} from "@/components/ui/button";

export function Banner({imageLink}: { imageLink: string}) {
  const { guild } = useRouter().query as { guild: string };
  const t = view.useTranslations();

  return (
    <Flex
      direction="column"
      px={{ base: 5, lg: 8 }}
      py={{ base: 5, lg: 7 }}
      rounded="2xl"
      bgColor="brand"
      bgImage={imageLink}
      bgRepeat='no-repeat'
      bgSize="cover"
      bgBlendMode='multiply'
      bgPos='center'
      gap={1}
    >
      <Heading color="white" fontSize={{ base: '2xl' }} fontWeight="bold">
        {t.banner.title}
      </Heading>
      <Text color="whiteAlpha.800">{t.banner.description}</Text>
      <Group mt={3}>
        <Button
          color="white"
          bg="whiteAlpha.300"
          _hover={{
            bg: 'whiteAlpha.400',
          }}
          _active={{
            bg: 'whiteAlpha.400',
          }}
          asChild
        >
          <Link href={`/guilds/${guild}/settings`}>
            <SettingsIcon /> {t.bn.settings}
          </Link>
        </Button>
      </Group>
    </Flex>
  );
}
