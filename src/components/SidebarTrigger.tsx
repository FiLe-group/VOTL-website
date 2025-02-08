import { Flex, Icon } from '@chakra-ui/react';
import { IoMenuOutline } from 'react-icons/io5';
import { usePageStore } from '@/stores';
import { sidebarBreakpoint } from '@/theme/breakpoints';

export function SidebarTrigger() {
  const setOpen = usePageStore((s) => s.setSidebarIsOpen);

  return (
    <Flex display={{ base: 'flex', [sidebarBreakpoint]: 'none' }} alignItems="center">
      <Flex w="max-content" h="max-content" onClick={() => setOpen(true)}>
        <Icon
          as={IoMenuOutline}
          color='white'
          my="auto"
          mr='10px'
          px='10px'
          w="50px"
          h="50px"
          _hover={{ cursor: 'pointer' }}
        />
      </Flex>
    </Flex>
  );
}
