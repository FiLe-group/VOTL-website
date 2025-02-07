import { Center, CenterProps, Spinner, Text, VStack } from '@chakra-ui/react';
import { common } from '@/config/translations/common';

export function LoadingPanel(props: CenterProps) {
  const t = common.useTranslations();

  return (
    <Center w="full" h="full" {...props}>
      <VStack>
        <Spinner fontSize="lg" />
        <Text color="textPrimary">{t.loading}</Text>
      </VStack>
    </Center>
  );
}
