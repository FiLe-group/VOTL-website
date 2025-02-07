import { Box } from "@chakra-ui/react"
import { ReactNode } from "react";
import { LoadingPanel } from "../panel/LoadingPanel";
import Footer from "./footer/main";
import { QueryStatus } from "../panel/QueryPanelMain";
import { UserMenu } from "../menu/UserMenu";
import { useSelfUserQuerySafe } from "@/api/hooks";

export default function AppLayout({
  children
}: {
  children: ReactNode;
}) {
	const query = useSelfUserQuerySafe();

  return (
    <>
      <Box h='100vh' pos='relative' borderTopWidth='4px' borderColor='blue.600'>
        <Box bgImage='{gradients.global}' opacity='25%' height='500px' zIndex='10' top={0} pos='absolute' w='full'/>
      </Box>
      <Box transition='all' transitionDuration='200ms' zIndex='10' pos='absolute' inset={0} px={5} h='100vh' maxW='7xl' w='full' mx='auto'>
        <QueryStatus query={query} loading={<LoadingPanel />} usermenu={<UserMenu bgColor='#333333' />}>
          <Box display='block' px={[3, 0]}>
            {children}
          </Box>
          <Footer />
        </QueryStatus>
      </Box>
    </>
  );
};

