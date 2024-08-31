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
          mx='10px'
          w="30px"
          h="30px"
          //p='5px'
          _hover={{ cursor: 'pointer' }}
        />
      </Flex>
    </Flex>
  );
}
