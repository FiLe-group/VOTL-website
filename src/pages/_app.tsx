import "@/styles/global.css";
import "@/styles/customColors.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

import Header from '@/components/Static/Header';
import Footer from "@/components/Static/Footer";
import items from '@/config/nav-items';

import { ThemeProvider } from "next-themes";
import { Component, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
  getLayout?: (children: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((c) => c);

  return (
    <ThemeProvider defaultTheme="blue">
      <div className="h-screen relative border-t-4 border-blue-600">
        <div
          className="bg-gradient-to-b z-10 opacity-[25%] absolute top-0 w-full from-blue-600 to-transparent"
          style={{ height: "500px" }}
        />
        <Head>
          <title>{`Voice of the Lord`}</title>
        </Head>
        <main className="transition-all duration-200 z-10 absolute inset-0 px-5 h-screen max-w-7xl w-full mx-auto">
          <Header NavItems={items} />
          <div className="block px-5 md:px-0">
            {getLayout(<Component {...pageProps} />)}
          </div>
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
