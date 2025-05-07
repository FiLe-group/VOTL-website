import React from "react";
import {Box} from "@chakra-ui/react";

export default function LayoutBase({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box
        zIndex='10'
        maxW='100rem'
        w='full'
        mx='auto'
      >
        {children}
      </Box>
    </>
  );
}