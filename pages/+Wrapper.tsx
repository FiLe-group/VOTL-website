import React from "react";
import {system} from "../theme";
import {ChakraProvider} from "@chakra-ui/react";

export default function Wrapper({children}: { children: React.ReactNode; }) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  );
};
