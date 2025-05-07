// footer and header
import React from "react";
import {Box} from "@chakra-ui/react";
import Footer from "../../layouts/main/Footer";
import Header from "../../layouts/main/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box mx={5}>
      <Header />
      <Box display='block'>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}