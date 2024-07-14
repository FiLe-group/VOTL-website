import "@/styles/global.css";
import Head from "next/head";

import Header from '@/components/layout/navbar/main';
import Footer from "@/components/layout/footer/main";
import items from '@/config/nav-items';

import { ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { theme } from "@/theme/config";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "@/api/hooks";
import { dark } from "@/theme/colors";

export type NextPageWithLayout = NextPage & {
  getLayout?: (children: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((c) => c);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Head>
          <title>Voice of the Lord</title>
        </Head>
        <Box h='100vh' pos='relative' borderTopWidth='4px' borderColor='blue.600'>
          <Box w='full' pos='absolute' bgGradient={dark.globalGradient} opacity='25%' zIndex='10' top={0} height='500px' />
        </Box>
        <Box transition='all' transitionDuration='200ms' zIndex='10' pos='absolute' inset={0} px={5} h='100vh' maxW='7xl' w='full' mx='auto'>
          <Header NavItems={items} />
          <Box display='block' px={[3, 0]}>
            {getLayout(<Component {...pageProps} />)}
          </Box>
          <Footer />
        </Box>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
