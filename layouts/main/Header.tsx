import {Dispatch, SetStateAction, useState} from "react";
import {NavbarItemInfo} from "./types";
import {
  Button,
  CloseButton,
  Drawer,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Portal,
  Text,
  VStack
} from "@chakra-ui/react";
import items from "./nav-items";
import {usePageContext} from "vike-react/usePageContext";
import {FaBars, FaTimes} from "react-icons/fa";

function MobileNavbar({ isOpen, setOpen, navItems }: {isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>>, navItems: NavbarItemInfo[]}) {
  const {urlPathname} = usePageContext()

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Portal>
        <Drawer.Backdrop
          backdropFilter='blur(8px)'
          bg='transparent'
        />
        <Drawer.Positioner>
          <Drawer.Content
            roundedLeft='xl'
            bg='black/90'
            color='white'
          >
            <Drawer.Header>
              <Image
                boxSize='32px'
                rounded='full'
                src="/logo.png"
                alt="VOTL bot logo"
              />
              <Drawer.Title
                fontWeight='extrabold'
                fontSize='2xl'
              >
                VOTL Bot
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body px={0}>
              <VStack gap={2} alignItems='start' as='nav' aria-label='Mobile Navigation'>
                {navItems.filter((a) => !a.external).map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    variant='navbar'
                    py={4}
                    px={2}
                    w='100%'
                    color='white/75'
                    transition='all'
                    transitionDuration='200ms'
                    backgroundColor={urlPathname === item.href ? 'white/5' : 'transparent'}
                    _hover={{
                      color: 'white',
                      textDecoration: 'underline',
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <Flex alignItems='center'>
                      <Icon fontSize='xl' minW={10}>
                        {urlPathname === item.href ? item.activeIcon : item.icon}
                      </Icon>
                      <Text fontSize='md'>{item.name}</Text>
                    </Flex>
                  </Link>
                ))}
                {navItems.filter((a) => a.external).map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    variant='navbar'
                    py={4}
                    px={2}
                    w='100%'
                    color='white/75'
                    transition='all'
                    transitionDuration='200ms'
                    backgroundColor='transparent'
                    _hover={{
                      color: 'white',
                      textDecoration: 'underline',
                    }}
                  >
                    <Flex alignItems='center'>
                      <Icon fontSize='xl' minW={10}>
                        {item.icon}
                      </Icon>
                      <Text fontSize='md'>{item.name}</Text>
                    </Flex>
                  </Link>
                ))}
              </VStack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const {urlPathname} = usePageContext()

  return (
    <>
      <header>
        <Flex maxW='100rem' px={{md:3,base:0}} py={5} mx='auto' align='center' justify='space-between'>
          <HStack gap={6}>
            <Link href="/" variant='navbar'>
              <HStack>
                <Image
                  src="/logo-small.png"
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
                <Link key={i} href={item.href} variant='navbar'>
                  <Text
                    display='inline'
                    pb={2}
                    borderBottomWidth={2}
                    transition='all'
                    transitionDuration='200ms'
                    fontWeight='500'
                    color={urlPathname === item.href ? 'blue.500' : 'white/75'}
                    borderColor={urlPathname === item.href ? 'blue.500' : 'transparent'}
                    _hover={urlPathname === item.href ? {} : {color: 'white'}}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}
              {items.filter((a) => a.external).map((item, i) => (
                <Link key={i} target='_blank' href={item.href} variant='navbar'>
                  <Text
                    display='inline'
                    pb={2}
                    transition='all'
                    transitionDuration='200ms'
                    fontWeight='500'
                    color='white/75'
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
              py={2.5}
              px={3}
              bg='transparent'
              color='white'
              textAlign='center'
              hideFrom='lg'
              transitionProperty='background'
              transitionDuration='300ms'
              _hover={{
                bg: 'white/10'
              }}
              _focus={{
                outline: 'none',
              }}
            >
              <Icon as={isOpen?FaTimes:FaBars} fontSize='lg' />
            </Button>
            <Button
              asChild
              variant='grayGradient'
            >
              <a href={import.meta.env.PUBLIC_ENV__BOT_INVITE} target='_blank'>
                Invite
              </a>
            </Button>
          </HStack>
        </Flex>
      </header>

      <MobileNavbar
        isOpen={isOpen}
        setOpen={setOpen}
        navItems={items}
      />
    </>
  )
}
