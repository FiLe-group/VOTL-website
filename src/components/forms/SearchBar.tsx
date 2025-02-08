import {
  Icon, IconButton,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import { common } from '@/config/translations/common';
import {InputGroup, InputGroupProps} from "@/components/ui/input-group";

export function SearchBar(
  props: {
    input?: InputProps;
    onSearch?: () => void;
  } & InputGroupProps
) {
  const t = common.useTranslations();
  const { input, onSearch, ...rest } = props;

  return (
    <InputGroup
      {...rest}
      endElement={
        <IconButton
          color="blue.500"
          aria-label="search"
          bg="inherit"
          borderRadius="inherit"
          onClick={onSearch}
          _hover={{bgColor:"white/10"}}
          rounded='3xl'
        >
          <Icon as={SearchIcon} color="textPrimary" width="15px" height="15px" />
        </IconButton>
      }
    >
      <Input
        outline="4px solid"
        outlineColor="whiteAlpha.400"
        _focus={{outlineColor: 'whiteAlpha.700'}}
        rounded="xl"
        fontSize="sm"
        bg="navy.900"
        color="textPrimary"
        fontWeight="500"
        _placeholder={{ color: 'gray.400', fontSize: '14px' }}
        placeholder={`${t.search}...`}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch?.();
        }}
        {...input}
      />
    </InputGroup>
  );
}
