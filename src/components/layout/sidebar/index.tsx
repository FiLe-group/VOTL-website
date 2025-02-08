import {
  Box,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { BottomCard, SidebarContent } from './SidebarContent';
import { usePageStore } from '@/stores';
import { sidebarBreakpoint } from '@/theme/breakpoints';
import {ReactNode, useCallback} from 'react';
import {DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerRoot} from "@/components/ui/drawer";
import {keyframes} from "@emotion/react";

const slideIn = keyframes`
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100px); opacity: 0; }
`;

export function Sidebar({ sidebar }: { sidebar?: ReactNode }) {
  const animate = sidebar == null ? slideIn : slideOut;
  return (
    <Flex
      direction="column"
      display={{ base: 'none', [sidebarBreakpoint]: 'flex' }}
      flexShrink={0}
      bg="cardBg"
      w="300px"
      h="100%"
      overflowX="hidden"
      overflowY="auto"
    >
      <Box
        key={sidebar == null ? 'default' : 'new'}
        animation={`${animate} 0.2s ease-in-out`}
      >
        {sidebar ?? <SidebarContent />}
      </Box>
      <Spacer />
      <BottomCard />
    </Flex>
  );
}

export function SidebarResponsive({ sidebar }: { sidebar?: ReactNode }) {
  const isOpen = usePageStore((s) => s.sidebarIsOpen);
  const setOpen = usePageStore((s) => s.setSidebarIsOpen);

  const handleOpenChange = useCallback((e: { open: boolean }) => {
    setOpen(e.open);
  }, [setOpen]);

  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      <DrawerBackdrop />
      <DrawerContent w="285px" maxW="285px" bg="cardBg">
        <DrawerCloseTrigger
          zIndex="3"
          mt={3}
          mr={1}
          onClick={() => setOpen(false)}
          _focus={{ boxShadow: 'none', outline: 0 }}
          _hover={{ boxShadow: 'none', outline: 0, bgColor: 'white/20' }}
        />
        <DrawerBody maxW="285px" px="0rem" pb="0">
          <Flex direction="column" height="100%" overflow="auto">
            {sidebar ?? <SidebarContent />}
            <Spacer />
            <BottomCard />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
}
