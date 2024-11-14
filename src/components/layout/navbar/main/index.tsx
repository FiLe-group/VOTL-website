import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { NavbarItemInfo } from "@/utils/router";
import { Box, Flex, HStack, Link, Text, VStack } from "@chakra-ui/layout";
import { Button, DrawerCloseTrigger, Icon, Image } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import items from "@/config/nav-items";
import { DrawerBackdrop, DrawerContent, DrawerRoot } from "@/components/ui/drawer";

function MobileNavbar({ isOpen, setOpen, NavItems }: {isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>>, NavItems: NavbarItemInfo[]}) {
  const router = useRouter();
  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DrawerBackdrop
        backdropFilter='auto'
        bg='transparent'
        backdropBlur='6px'
      />
      <DrawerContent
        roundedLeft='xl'
        bg='black.90'
        color='white'
      >
        <Flex justify='space-between' borderBottom='1px' borderColor='white.20' px={5} pt={4} pb={3} mb={2}>
          <Flex>
            <Image
              boxSize='32px'
              rounded='full'
              src="/img/logo.png"
              alt="VOTL bot logo"
            />
            <Text fontWeight='extrabold' ml={1} fontSize='2xl'>VOTL Bot</Text>
          </Flex>
          <DrawerCloseTrigger px={2} fontSize='xl' pos='inherit' />
        </Flex>
        <VStack spacing={2} alignItems='start'>
          {NavItems.filter((a) => !a.external).map((item, i) => (
            <Link
              key={i}
              href={item.href}
              p={4}
              w='100vh'
              backgroundColor={router.asPath === item.href ? 'white.5' : 'transparent'}
              transition='all'
              transitionDuration='200ms'
              textColor='white.75'
              textDecor='none'
              _hover={{textColor: 'white', textDecor: 'underline'}}
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
              textColor='white.75'
              textDecor='none'
              _hover={{textColor: 'white', textDecor: 'underline'}}
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
          <HStack spacing={6}>
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <HStack>
                <Image
                  src="/img/logo-small.png"
                  borderRadius='full'
                  boxSize='48px'
                />
                <Text hideBelow='sm' fontSize='xl' display='inline-block' whiteSpace='nowrap' textColor='white' fontWeight='600'>
                  <Text color='blue.400' as='span'>VOTL</Text> Bot
                </Text>
              </HStack>
            </Link>
            <HStack hideBelow='lg' align='center' spacing={5}>
              {items.filter((a) => !a.external).map((item, i) => (
                <Link key={i} href={item.href} _hover={{textDecoration:'none'}}>
                  <Text
                    display='inline'
                    pb={2}
                    borderBottomWidth={2}
                    transition='all'
                    transitionDuration='200ms'
                    fontWeight='500'
                    textColor={router.asPath === item.href ? 'blue.500' : 'white.75'}
                    borderColor={router.asPath === item.href ? 'blue.500' : 'transparent'}
                    _hover={router.asPath === item.href ? {} : {textColor: 'white'}}
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
                    textColor='white.75'
                    borderColor='transparent'
                    _hover={{textColor: 'white'}}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}
            </HStack>
          </HStack>
          <HStack justify='center' spacing={2} pos='relative'>
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
            <Link
              href="https://discord.com/oauth2/authorize?client_id=916830010290085978&permissions=8&scope=applications.commands+bot"
              hideBelow='sm'
              w='auto'
              px={8}
              py={2.5}
              alignItems='center'
              boxShadow='0 10px 15px -3px rgba(103, 117, 138, 0.2)'
              rounded='xl'
              bgGradient='linear(to-tl, gray.500, gray.700)'
              textColor='white'
              transitionProperty='opacity'
              transitionDuration='300ms'
              _hover={{
                opacity: 0.8
              }}
            >
              Invite
            </Link>
            
            {children ? children : (
							<Link
								href="/api/auth/login"
								w='auto'
								px={8}
								py={2.5}
								alignItems='center'
								boxShadow='0 10px 15px -3px rgba(55, 122, 242, 0.2)'
								rounded='xl'
								bgGradient='linear(to-tl, blue.500, blue.700)'
								textColor='white'
								transitionProperty='opacity'
								transitionDuration='300ms'
								_hover={{
									opacity: 0.8
								}}
							>
								<Text hideFrom='520px'>Login</Text>
								<Text hideBelow='519px'>Login with Discord</Text>
							</Link>
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
