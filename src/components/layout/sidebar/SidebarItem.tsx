import {Center, HStack, Text, Link} from '@chakra-ui/react';
import { ReactNode } from 'react';

export function SidebarItem({
  name,
  active,
  icon,
  href,
}: {
  name: ReactNode;
  icon: ReactNode;
  active: boolean;
  href: string;
}) {
  return (
    <HStack
      asChild
      rounded="xl"
      p={2}
      color={active ? 'textPrimary' : 'textSecondary'}
      bg={active ? 'whiteAlpha.100' : undefined}
      cursor="pointer"
    >
      <Link href={href}>
        <Center
          p={2}
          fontSize="sm"
          bg={active ? 'blue.700' : 'transparent'}
          rounded="xl"
          color='white'
          border="4px solid"
          borderColor="whiteAlpha.400"
          boxShadow={`0px 0px 10px ${
            active ? 'var(--chakra-colors-blue-500-5)' : 'rgba(112, 144, 176, 0.3)'
          }`}
        >
          {icon}
        </Center>
        <Text fontSize="md" fontWeight="medium">
          {name}
        </Text>
      </Link>
    </HStack>
  );
}
