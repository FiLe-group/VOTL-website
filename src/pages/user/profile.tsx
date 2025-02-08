import {
  Image,
  Box, Card,
  Flex, Grid, Spacer, Text, VStack
} from '@chakra-ui/react';
import { avatarUrl, bannerUrl } from '@/api/discord';
import { SelectField } from '@/components/forms/SelectField';
import { languages, names, useLang } from '@/config/translations/provider';
import { profile } from '@/config/translations/profile';
import { IoLogOut } from 'react-icons/io5';
import { NextPageWithLayout } from '@/pages/_app';
import DashLayout from '@/components/layout/dash';
import { useLogoutMutation } from '@/utils/auth/hooks';
import { useSelfUser } from '@/api/hooks';
import {FormControl} from "@chakra-ui/form-control";
import {Button} from "@/components/ui/button";
import {Avatar} from "@/components/ui/avatar";
import {Form} from "@/components/forms/Form";

/**
 * User info and general settings here
 */
const ProfilePage: NextPageWithLayout = () => {
  const user = useSelfUser();
  const logout = useLogoutMutation();
  const t = profile.useTranslations();

  const { lang, setLang } = useLang();
  // const [devMode, setDevMode] = useSettingsStore((s) => [s.devMode, s.setDevMode]);

  return (
    <Grid templateColumns={{ base: '1fr', lg: 'minmax(0, 800px) auto' }} gap={{ base: 3, lg: 6 }}>
      <Flex direction="column">
        {user.banner != null ? (
          <Image
            alt="banner"
            src={bannerUrl(user.id, user.banner)}
            css={{ "& aspectRatio": '1100 / 440' }}
            objectFit="cover"
            rounded="2xl"
          />
        ) : (
          <Box bg="brand" rounded="2xl" css={{ "& aspectRatio": '1100 / 440' }} />
        )}
        <VStack mt="-50px" ml="40px" align="start">
          <Avatar
            src={avatarUrl(user)}
            name={user.username}
            w="100px"
            h="100px"
            ringColor="cardBg"
            ring="6px"
          />
          <Text fontWeight="600" fontSize="2xl">
            {user.username}
          </Text>
        </VStack>
      </Flex>
      <Card.Root w="full" rounded="3xl" h="fit-content" variant="primary">
        <Card.Header fontSize="2xl" fontWeight="600">
          {t.settings}
        </Card.Header>
        <Card.Body as={Flex} direction="column" gap={6} mt={3}>
          {/*<SwitchField*/}
          {/*  id="developer-mode"*/}
          {/*  label={t['dev mode']}*/}
          {/*  desc={t['dev mode description']}*/}
          {/*  checked={devMode}*/}
          {/*  onChange={(e) => setDevMode(e.target.check)}*/}
          {/*/>*/}
          <FormControl>
            <Box mb={2}>
              <Form fontSize="md" fontWeight="medium" m={0}>
                {t.language}
              </Form>
              <Text color="textSecondary">{t['language description']}</Text>
            </Box>
            <SelectField
              value={{
                label: names[lang],
                value: lang,
              }}
              onChange={(e) => e != null && setLang(e.value)}
              options={languages.map((lang) => ({
                label: lang.name,
                value: lang.key,
              }))}
            />
          </FormControl>
          <Spacer />
          <Button
            variant="danger"
            loading={logout.isPending}
            onClick={() => logout.mutate()}
          >
            <IoLogOut /> {t.logout}
          </Button>
        </Card.Body>
      </Card.Root>
      <Content />
    </Grid>
  );
};

function Content() {
  return <></>;
}

ProfilePage.getLayout = (p) => <DashLayout>{p}</DashLayout>;
export default ProfilePage;
