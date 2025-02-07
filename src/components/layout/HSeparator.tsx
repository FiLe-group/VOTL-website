import { HStack, Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

export function HSeparator({ children }: { children: ReactNode }) {
  return (
    <HStack>
      <Box w="full" h="1px" bg={'gray.600'} />
      <Text color="secondaryGray.600">{children}</Text>
      <Box w="full" h="1px" bg={'gray.600'} />
    </HStack>
  );
}
