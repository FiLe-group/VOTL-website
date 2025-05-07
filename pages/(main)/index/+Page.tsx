import {Box, Flex, Image, Button, Text} from "@chakra-ui/react";
import {Head} from "vike-react/Head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Voice of the Lord</title>
      </Head>

      <Box maxW='3xl' py={20} mb='30px' mx='auto'>
        <Flex pb={3} justify='center'>
          <Image w={400} filter='brightness(125%)' src="/logo-mini.png" />
        </Flex>
        <Text fontSize='4xl' fontWeight={800} textAlign='center'>
          Voice of the Lord
        </Text>
        <Text color='white/50' textAlign='center' mt={3}>
          Discord bot with multipurpose features for server moderation, management, ticketing and much more!
        </Text>
        <Flex mt={6} justify='center'>
          <Button
            asChild
            variant='blueGradient'
            px={6}
            py={4}
            size='xl'
          >
            <a href={import.meta.env.PUBLIC_ENV__BOT_INVITE} target='_blank'>
              Invite VOTL Bot
            </a>
          </Button>
        </Flex>
      </Box>
    </>
  )
}