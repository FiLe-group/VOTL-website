import {
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import { UserInfo, avatarUrl } from '@/api/discord';
import { common } from '@/config/translations/common';
import { useSelfUser } from '@/api/hooks';
import { useLogoutMutation } from '@/utils/auth/hooks';
import { FaChalkboard, FaRegUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import {MenuContent, MenuItem, MenuRoot, MenuSeparator, MenuTrigger} from "@/components/ui/menu";
import {Avatar} from "@/components/ui/avatar";

export function UserMenu({bgColor}: { bgColor: string }) {
  const user = useSelfUser();

  return (
    <MenuRoot>
      <MenuTrigger p="0px">
        <Avatar
          _hover={{ cursor: 'pointer' }}
          color="white"
          name={user.username}
          src={avatarUrl(user)}
          bg="#11047A"
          w="40px"
          h="40px"
        />
      </MenuTrigger>
      <List user={user} bgColor={bgColor} />
    </MenuRoot>
  );
}

function List({user, bgColor}: { user: UserInfo, bgColor: string }) {
  const t = common.useTranslations();
  const borderColor = 'rgba(135, 140, 189, 0.3)';
  const logout = useLogoutMutation();

  return (
    <MenuContent boxShadow='colors.shadow' p="0px" mt="10px" borderRadius="20px" bg={bgColor} border="none">
      <Flex w="100%" mb="0px">
        <Text
          ps="20px"
          pt="16px"
          pb="10px"
          w="100%"
          borderBottom="1px solid"
          borderColor={borderColor}
          fontSize="sm"
          fontWeight="700"
          color='colors.textPrimary'
        >
          <span aria-label="Hi" role="img">
            👋
          </span>
          &nbsp; Hey, {user.username}
        </Text>
      </Flex>
      <Flex flexDirection="column" p="10px">
        <MenuItem
          _hover={{ bg: 'none' }}
          _focus={{ bg: 'none' }}
          borderRadius="8px"
          px="14px"
          asChild
          value="go-home"
        >
          <link href={`/user/home`}>
            <Icon as={FaChalkboard} mr={2} />
            <Text fontSize="sm">{t.dashboard}</Text>
          </link>
        </MenuItem>
        <MenuItem
          _hover={{bg: 'none'}}
          _focus={{bg: 'none'}}
          borderRadius="8px"
          px="14px"
          asChild
          value="go-profile"
        >
          <link href={`/user/profile`}>
            <Icon as={FaRegUser} mr={2}/>
            <Text fontSize="sm">{t.profile}</Text>
          </link>
        </MenuItem>
        <MenuSeparator />
        <MenuItem
          _hover={{bg: 'none'}}
          _focus={{bg: 'none'}}
          color="red.400"
          borderRadius="8px"
          onClick={() => logout.mutate()}
          px="14px"
          value="go-logout"
        >
          <Icon as={FiLogOut} mr={2} />
          <Text fontSize="sm">{t.logout}</Text>
        </MenuItem>
      </Flex>
    </MenuContent>
  );
}
