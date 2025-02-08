import "@/styles/global.css";
import Head from "next/head";

import {ReactNode, StrictMode} from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "@/api/hooks";
import { ChakraProvider } from "@chakra-ui/react";
import {system} from "@/theme";

export type NextPageWithLayout = NextPage & {
  getLayout?: (children: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((c) => c);

  return (
    <StrictMode>
      <ChakraProvider value={system}>
        <Head>
          <title>Voice of the Lord</title>
        </Head>
        <QueryClientProvider client={client}>
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </ChakraProvider>
    </StrictMode>
  );
}
