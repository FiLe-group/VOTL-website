import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import {Head} from "vike-react/Head";
import {Image, Text, VStack, Flex, Button, Icon} from "@chakra-ui/react";
import {FaHome} from "react-icons/fa";
import MainLayout from "../../pages/(main)/+Layout";

export default function Page() {
  const { is404 } = usePageContext();

  const Layout = MainLayout;

  let page;
  if (is404) {
    page = ErrorPage({
      code: 404,
      message: "Page Not Found."
    })
  } else {
    page = ErrorPage({
      code: 500,
      message: "Oh. It seems there is an Internal Server Error. Please try again later!"
    })
  }

  return (
    <>
      <Layout>
        {page}
      </Layout>
    </>
  )
}

function ErrorPage({ code, message }: { code: number, message: string }) {
  return (
    <>
      <Head>
        <title>{`${code} | VOTL Bot`}</title>
      </Head>

      <VStack py={20} maxW='100rem' gap={0}>
        <Flex>
          <Image w="400" src="/monkey.gif" />
        </Flex>
        <Text fontSize='4xl' fontWeight='extrabold'>{code}</Text>
        <Text fontSize='xl' fontWeight='normal' color='#AAAAAA'>
          {message}
        </Text>
        <Button
          asChild
          variant="blueGradient"
          mt={3}
          px={6}
          py={4}
        >
          <a href={"/"}>
            <Icon as={FaHome} fontSize='xl' />
            Go Home
          </a>
        </Button>
      </VStack>
    </>
  );
}
