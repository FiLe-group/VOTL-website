import { Button, Icon, Image, Spinner, Flex, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function ErrorPage({ code, message }: { code: number, message: string }) {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${code} | VOTL bot`}</title>
      </Head>

      <VStack py={20} maxW='7xl' gap={0}>
        <Flex>
          <Image w="400" src="/img/monkey.gif" />
        </Flex>
        <Text fontSize='4xl' fontWeight='extrabold'>{code}</Text>
        <Text fontSize='xl' fontWeight='thin' color='#AAAAAA'>
          {message}
        </Text>
        <Button
          w='42'
          mt={2}
          py={2}
          px={7}
          rounded='xl'
          boxShadow='0 10px 15px -3px rgba(103, 117, 138, 0.2)'
          bgGradient='to-bl'
          gradientFrom='blue.900'
          gradientTo='blue.700'
          transitionProperty='opacity'
          transitionDuration='300ms'
          _hover={{
            opacity: 0.8
          }}
          onClick={() => {
            setClicked(true);
            router.back();
          }}
        >
          {clicked ? (
            <Spinner/>
          ) : (
            <>
              <Icon as={FaArrowLeft} mr={2} />
              Go Back
            </>
          )}
        </Button>
      </VStack>
    </>
  );
}

export default ErrorPage;
