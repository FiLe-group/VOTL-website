import {ReactNode} from "react";
import {Box, Flex} from "@chakra-ui/react";
import {HelpBox} from "./HelpBox";

export function MainBox({ categoryBox, commandBox }: {
  categoryBox: ReactNode;
  commandBox: ReactNode;
}) {
  return (
    <Flex
      direction={{base: 'column', md: 'row'}}
      w='100%'
      gap={4}
    >
      <Box flexBasis={{base:'100%', md:'25%'}}>
        <Box position='sticky' top={2}>
          {categoryBox}
          <HelpBox />
        </Box>
      </Box>
      <Box flexBasis={{base:'100%', md:'75%'}} flexGrow={1}>
        {commandBox}
      </Box>
    </Flex>
  )
}
