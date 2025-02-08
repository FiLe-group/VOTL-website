import {Icon, Link, Text} from '@chakra-ui/react';
import { UserInfo, avatarUrl } from '@/api/discord';
import { common } from '@/config/translations/common';
import { useSelfUser } from '@/api/hooks';
import { useLogoutMutation } from '@/utils/auth/hooks';
import { FaChalkboard, FaRegUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import {MenuContent, MenuItem, MenuRoot, MenuSeparator, MenuTrigger} from "@/components/ui/menu";
import {Avatar} from "@/components/ui/avatar";

export function UserMenu() {
  const user = useSelfUser();

  return (
    <MenuRoot>
      <MenuTrigger _focusVisible={{outline: 'none'}}>
        <Avatar
          _hover={{ cursor: 'pointer' }}
          color="white"
          name={user.username}
          src={avatarUrl(user)}
          w="40px"
          h="40px"
          borderRadius='20px'
        />
      </MenuTrigger>
      <MenuList user={user} />
    </MenuRoot>
  );
}

function MenuList({user}: { user: UserInfo }) {
  const t = common.useTranslations();
  const logout = useLogoutMutation();

  return (
    <MenuContent boxShadow='colors.shadow' mt="4px" borderRadius="14px" bg='#333333' border="none">
      <MenuItem
        _hover={{ bg: 'none', cursor: 'pointer' }}
        _focus={{ bg: 'none' }}
        asChild
        value='text'
        px={3}
        py={2}
        w="100%"
        fontSize="sm"
        fontWeight="700"
        color='textPrimary'
      >
        <Text>
          👋 &nbsp; Hey, {user.username}
        </Text>
      </MenuItem>
      <MenuSeparator borderColor='gray.500' />
      <MenuItem
        _hover={{bg: 'white/10', textDecoration: 'none', cursor: 'pointer'}}
        _focus={{ bg: 'none' }}
        borderRadius="8px"
        color='textPrimary'
        px="14px"
        asChild
        value="go-home"
      >
        <Link href={`/user/home`}>
          <Icon as={FaChalkboard} mr={2} />
          <Text fontSize="sm">{t.dashboard}</Text>
        </Link>
      </MenuItem>
      <MenuItem
        _hover={{bg: 'white/10', textDecoration: 'none', cursor: 'pointer'}}
        _focus={{bg: 'none'}}
        borderRadius="8px"
        color='textPrimary'
        px="14px"
        asChild
        value="go-profile"
      >
        <Link href={`/user/profile`}>
          <Icon as={FaRegUser} mr={2}/>
          <Text fontSize="sm">{t.profile}</Text>
        </Link>
      </MenuItem>
      <MenuSeparator borderColor='gray.500' />
      <MenuItem
        _hover={{bg: 'white/10', textDecoration: 'none', cursor: 'pointer'}}
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
    </MenuContent>
  );
}
