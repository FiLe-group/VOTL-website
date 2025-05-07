import {FaGears} from "react-icons/fa6";
import {Box, Flex, HStack, Icon, Text} from "@chakra-ui/react";
import {LanguageBox} from "./LanguageBox";
import {CommandBox} from "./CommandBox";
import {Config} from "vike-react/Config";

export default function Page() {
  return (
    <>
      <Config title={'Commands | VOTL Bot'} />

      <HStack className="text-xl font-medium">
        <Icon as={FaGears} boxSize='20px' color='blue.400' mr={2}/>
        <Text fontSize='xl'>Commands</Text>
      </HStack>
      <Text fontSize='sm' color='white/50' mb={5}>
        You can get information about the commands of the VOTL bot.
      </Text>

      <Flex
        direction={{base: 'column-reverse', md: 'row'}}
        alignItems='center'
        w='100%'
        pb={4}
        gapY={4}
      >
        <Box textAlign='left' flexBasis={{base:'100%', md:'40%'}} alignSelf={{base:'flex-start', md:'flex-end'}} >
          <Text>Select category to filter out commands</Text>
        </Box>
        <HStack flexBasis={{base:'100%', md:'60%'}} flexGrow={0} justify='end' alignSelf='end'>
          <Text>Language:</Text>
          <LanguageBox />
        </HStack>
      </Flex>
      <CommandBox />
    </>
  );
}
