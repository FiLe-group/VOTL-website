import "@/styles/global.css";
import Head from "next/head";

import { ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { system } from "@/theme/config";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "@/api/hooks";
import { ChakraProvider } from "@chakra-ui/react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (children: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((c) => c);

  return (
    <ChakraProvider value={system}>
      <QueryClientProvider client={client}>
        <Head>
          <title>Voice of the Lord</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </ChakraProvider>
  );
}
