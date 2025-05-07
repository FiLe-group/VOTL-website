import React from "react";
import {
  Box,
  chakra,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import {FaDiscord, FaGithub} from "react-icons/fa";

const FooterLink = chakra("a", {
  base: {
    color: 'white/50',
    transition: 'all',
    transitionDuration: '200ms',
    _hover: {
      color:'white',
      textDecor:'underline'
    }
  },
})

const LinkHeader = chakra("h3", {
  base: {
    mt: {base:3, md:0},
    mb: {base:0, md:3}
  }
})

export default function Footer() {
  return (
    <Box py={10} pt={10} mx='auto' whiteSpace='nowrap'>
      <Stack direction={{base:'column', md:'row'}} gap={{base:0, md:12, lg:24}} justify='end' align='start'>
        <HStack alignItems='center' gap={3} w='full' minW='165px'>
          <Image src="/logo-small.png" rounded='full' w={12} />
          <Text fontWeight='semibold' fontSize='xl'>VOTL Bot</Text>
        </HStack>
        <VStack alignItems='left' gap={0} w='fit-content'>
          <LinkHeader>Links</LinkHeader>
          <FooterLink
            href="https://crowdin.com/project/voice-of-the-lord"
            target="_blank"
          >
            Help Translate
          </FooterLink>
          <FooterLink href="/partners">
            Partners
          </FooterLink>
        </VStack>
        <VStack alignItems='left' gap={0} w='fit-content'>
          <LinkHeader>Social</LinkHeader>
          <FooterLink
            href="https://discord.gg/25K5S55wrU"
            target="_blank"
          >
            <HStack gap={0}>
              <Icon as={FaDiscord} mr={1} fontSize='20px'/>
              Discord
            </HStack>
          </FooterLink>
          <FooterLink
            href="https://github.com/FileEditor97/VOTL"
            target="_blank"
          >
            <HStack gap={0}>
              <Icon as={FaGithub} mr={1} fontSize='20px'/>
              GitHub
            </HStack>
          </FooterLink>
        </VStack>
        <VStack alignItems='left' gap={0} w='fit-content'>
          <LinkHeader>Important</LinkHeader>
          <FooterLink href="/tos">
            Terms Of Service
          </FooterLink>
          <FooterLink href="/privacy">
            Privacy Policy
          </FooterLink>
          <FooterLink href="/policies">
            Other Policies
          </FooterLink>
        </VStack>
      </Stack>
      <Flex pt={10} color='white/50' justify={{base:'center', sm:'space-between'}} columnGap={{base:'700px', sm:0}} flexWrap='wrap'>
        <Box justifyContent={{base:'center', sm:'left'}}>
          {new Date().getFullYear()} &copy; VOTL Bot
        </Box>
        <Box textAlign={{base:'center', sm:'end'}}>
          {/*<Text>*/}
          {/*  Website hosted on <Link color='blue.400' _hover={{textDecor: 'underline'}} href="https://pages.dev/">Cloudflare</Link>*/}
          {/*</Text>*/}
          <Text>
            By @fileeditor (<Link color='inherit' textUnderlineOffset='1px' textDecor='underline' _hover={{textDecor: 'underline'}} href="https://github.com/FileEditor97/VOTL-website">Github</Link>)
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}