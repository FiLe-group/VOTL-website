import { Link, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Head from "next/head";

//#1285f1/30
export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners | VOTL bot</title>
      </Head>

      <VStack w='full' mt={10} mb='140px' spacing={0} textAlign='center'>
        <Image width="150" rounded='lg' boxShadow='0 10px 15px -3px rgba(18, 133, 241, 0.3)' src="/img/unionteams.png" />
        <Text py={6} fontSize='4xl' fontWeight='extrabold'>
          Union<Text as='span' textColor='blue.500'>Team's</Text>
        </Text>
        <Text>
          Garry's mod server developer team.
        </Text>
        <Text pt={2} fontSize='lg'>
          Learn more at <Link textColor='blue.400' href="https://unionteams.ru/" _hover={{textDecoration: 'none'}}>unionteams.ru</Link>
        </Text>
      </VStack>
    </>
  );
}
