import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { NavbarItemInfo } from "@/utils/router";
import { Button, Icon, Image, Box, Link, HStack, VStack, Flex, Text } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import items from "@/config/nav-items";
import {DrawerBackdrop, DrawerCloseTrigger, DrawerContent, DrawerRoot} from "@/components/ui/drawer";

function MobileNavbar({ isOpen, setOpen, NavItems }: {isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>>, NavItems: NavbarItemInfo[]}) {
  const router = useRouter();
  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DrawerBackdrop
        backdropFilter='blur(8px)'
        bg='transparent'
      />
      <DrawerContent
        roundedLeft='xl'
        bg='black/90'
        color='white'
      >
        <Flex justify='space-between' borderBottom='2px' borderColor='white' px={5} pt={4} pb={3} mb={2}>
          <Image
            boxSize='32px'
            rounded='full'
            src="/img/logo.png"
            alt="VOTL bot logo"
          />
          <Text fontWeight='extrabold' ml={1} fontSize='2xl' marginEnd="auto" alignSelf='center'>VOTL Bot</Text>
          <DrawerCloseTrigger px={2} pos='inherit' bg='transparent' />
        </Flex>
        <VStack gap={2} alignItems='start'>
          {NavItems.filter((a) => !a.external).map((item, i) => (
            <Link
              key={i}
              href={item.href}
              p={4}
              w='100vh'
              backgroundColor={router.asPath === item.href ? 'white/5' : 'transparent'}
              transition='all'
              transitionDuration='200ms'
              color='white/75'
              textDecor='none'
              _hover={{color: 'white', textDecor: 'underline'}}
            >
              <Flex alignContent='center'>
                <Box fontSize='xl' width={30}>
                  {router.asPath === item.href ? item.activeIcon : item.icon}
                </Box>
                <Text display='inline'>{item.name}</Text>
              </Flex>
            </Link>
          ))}
          {NavItems.filter((a) => a.external).map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target='_blank'
              p={4}
              w='100vh'
              backgroundColor='transparent'
              transition='all'
              transitionDuration='200ms'
              color='white/75'
              textDecor='none'
              _hover={{color: 'white', textDecor: 'underline'}}
            >
              <Flex alignContent='center'>
                <Box fontSize='xl' width={30}>
                  {item.icon}
                </Box>
                <Text display='inline'>{item.name}</Text>
              </Flex>
            </Link>
          ))}
        </VStack>
      </DrawerContent>
    </DrawerRoot>
  );
}

function Header({ children }: {children?: ReactNode}) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <header>
        <Flex maxW='7xl' px={5} py={5} mx='auto' align='center' justify='space-between'>
          <HStack gap={6}>
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <HStack>
                <Image
                  src="/img/logo-small.png"
                  borderRadius='full'
                  boxSize='48px'
                />
                <Text hideBelow='sm' fontSize='xl' display='inline-block' whiteSpace='nowrap' color='white' fontWeight='600'>
                  <Text color='blue.400' as='span'>VOTL</Text> Bot
                </Text>
              </HStack>
            </Link>
            <HStack hideBelow='lg' align='center' gap={5}>
              {items.filter((a) => !a.external).map((item, i) => (
                <Link key={i} href={item.href} _hover={{textDecoration:'none'}}>
                  <Text
                    display='inline'
                    pb={2}
                    borderBottomWidth={2}
                    transition='all'
                    transitionDuration='200ms'
                    fontWeight='500'
                    color={router.asPath === item.href ? 'blue.500' : 'white/75'}
                    borderColor={router.asPath === item.href ? 'blue.500' : 'transparent'}
                    _hover={router.asPath === item.href ? {} : {color: 'white'}}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}
              {items.filter((a) => a.external).map((item, i) => (
                <Link key={i} target='_blank' href={item.href} _hover={{textDecoration:'none'}}>
                  <Text
                    display='inline'
                    pb={2}
                    borderBottomWidth={2}
                    transition='all'
                    transitionDuration='200ms'
                    fontWeight='500'
                    color='white/75'
                    borderColor='transparent'
                    _hover={{color: 'white'}}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}
            </HStack>
          </HStack>
          <HStack justify='center' gap={2} pos='relative'>
            <Button
              onClick={() => setOpen(!isOpen)}
              py={2}
              px={3}
              bg='transparent'
              color='white'
              textAlign='center'
              hideFrom='lg'
              _hover={{
                bg: 'blue.400.20'
              }}
            >
              <Icon as={isOpen ? FaTimes : FaBars} fontSize='lg' />
            </Button>
            <Button
              asChild
              hideBelow='sm'
              w='auto'
              px={8}
              py={2.5}
              alignItems='center'
              boxShadow='0 10px 15px -3px rgba(103, 117, 138, 0.2)'
              rounded='xl'
              borderWidth={0}
              bgGradient='to-r'
              gradientFrom='gray.500'
              gradientTo='gray.700'
              color='white'
              transitionProperty='opacity'
              transitionDuration='300ms'
              _hover={{
                opacity: 0.8
              }}
            >
              <a href="https://discord.com/oauth2/authorize?client_id=916830010290085978&permissions=8&scope=applications.commands+bot">
                Invite
              </a>
            </Button>
            {children ? children : (
							<Button
                asChild
                borderWidth={0}
								w='auto'
								px={8}
								py={2.5}
								alignItems='center'
								boxShadow='0 10px 15px -3px rgba(55, 122, 242, 0.2)'
								rounded='xl'
                bgGradient='to-tl'
                gradientFrom='blue.500'
                gradientTo='blue.700'
                color='white'
								transitionProperty='opacity'
								transitionDuration='300ms'
								_hover={{
									opacity: 0.8
								}}
							>
								<a href="/api/auth/login" >
                  <Text hideFrom='620px'>
                    Login
                  </Text>
                  <Text hideBelow='619px'>
                    Login with Discord
                  </Text>
                </a>
							</Button>
						)}
          </HStack>
        </Flex>
      </header>

      <MobileNavbar
        isOpen={isOpen}
        setOpen={setOpen}
        NavItems={items}
      />
    </>
  );
}

export default Header;
