import { Center, StackProps, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
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
    <CardItem active={active} href={href}>
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
    </CardItem>
  );
}

function CardItem({ active, href, ...props }: { href: string; active: boolean } & StackProps) {
  return (
    <HStack
      asChild
      rounded="xl"
      p={2}
      color={active ? 'textPrimary' : 'textSecondary'}
      bg={active ? 'whiteAlpha.100' : undefined}
      cursor="pointer"
      {...props}
    >
      <Link href={href} />
    </HStack>
  );
}
