"use client"

import { Icon, Image, chakra, Box, Flex, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaDiscord, FaGithub } from "react-icons/fa";

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

export default function Footer() {
  return (
    <Box py={10} pt={10} mx='auto' whiteSpace='nowrap'>
      <Stack direction={['column', 'row']} gap={[0, 8, 20]} justify='end' align='start'>
        <HStack alignItems='center' gap={3} w='full' minW='165px'>
          <Image src="/img/logo-small.png" rounded='full' w={12} />
          <Text fontWeight='semibold' fontSize='xl'>VOTL Bot</Text>
        </HStack>
        <VStack alignItems='left' gap={0} w='fit-content'>
          <Text mt={[3, 0]} mb={[0, 3]}>Links</Text>
          <FooterLink
            href="https://discord.gg/25K5S55wrU"
            target="_blank"
          >
            Support Server
          </FooterLink>
          <FooterLink href="/partners">
            Partners
          </FooterLink>
        </VStack>
        <VStack alignItems='left' gap={0} w='fit-content'>
          <Text mt={[3, 0]} mb={[0, 3]}>Social</Text>
          <FooterLink
            href="https://discord.gg/25K5S55wrU"
            target="_blank"
          >
            <Icon as={FaDiscord} mr={1} fontSize='20px'/>
            Discord
          </FooterLink>
          <FooterLink
            href="https://github.com/FileEditor97/VOTL"
            target="_blank"
          >
            <Icon as={FaGithub} mr={1} fontSize='20px'/>
            GitHub
          </FooterLink>
        </VStack>
        <VStack alignItems='left' gap={0} w='fit-content'>
          <Text mt={[3, 0]} mb={[0, 3]}>Important</Text>
          <FooterLink href="/tos">
            Terms Of Service
          </FooterLink>
          <FooterLink href="/privacy">
            Privacy Policy
          </FooterLink>
          <FooterLink href="/policies">
            Other policies
          </FooterLink>
        </VStack>
      </Stack>
      <Flex pt={10} color='white/50' justify={{base:'center', sm:'space-between'}} columnGap={{base:'700px', sm:0}} flexWrap='wrap'>
        <Box justifyContent={{base:'center', sm:'left'}}>
          {new Date().getFullYear()} &copy; VOTL bot
        </Box>
        <Box textAlign={{base:'center', sm:'end'}}>
          <Text>
            Website hosted on <Link color='blue.400' _hover={{textDecor: 'none'}} href="https://pages.dev/">Cloudflare</Link>
          </Text>
          <Text>
            By @fileeditor (Fork <Link color='inherit' textDecor='underline' textUnderlineOffset='1px' _hover={{textDecor: 'underline'}} href="https://github.com/umutxyp/Discord-Bot-Website">Github</Link>)
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
