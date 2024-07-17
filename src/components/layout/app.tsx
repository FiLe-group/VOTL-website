import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";
import { LoadingPanel } from "../panel/LoadingPanel";
import { dark } from "@/theme/colors";
import Footer from "./footer/main";
import { QueryStatus } from "../panel/QueryPanelMain";
import { UserMenu } from "../menu/UserMenuMain";
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
        <Box w='full' pos='absolute' bgGradient={dark.globalGradient} opacity='25%' zIndex='10' top={0} height='500px' />
      </Box>
      <Box transition='all' transitionDuration='200ms' zIndex='10' pos='absolute' inset={0} px={5} h='100vh' maxW='7xl' w='full' mx='auto'>
        <QueryStatus query={query} loading={<LoadingPanel />} usermenu={<UserMenu />}>
          <Box display='block' px={[3, 0]}>
            {children}
          </Box>
          <Footer />
        </QueryStatus>
      </Box>
    </>
  );
};

