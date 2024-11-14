import {
  Icon, IconButton,
  Input,
  InputProps, useRecipe,
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

  const recipe = useRecipe({ key: "input" })
  const styles = recipe({variant:"search"})

  return (
    <InputGroup
      {...rest}
      startElement={
        <IconButton
          color="colorPalette.fg"
          bgColor={{
            _hover: "colorPalette.subtle",
            _expanded: "colorPalette.subtle"
          }}
          aria-label="search"
          bg="inherit"
          borderRadius="inherit"
          _active={{}}
          onClick={onSearch}
        >
          <Icon as={SearchIcon} color="TextPrimary" width="15px" height="15px" />
        </IconButton>
      }
      endElement={
        <IconButton
          color="colorPalette.fg"
          bgColor={{
            _hover: "colorPalette.subtle",
            _expanded: "colorPalette.subtle"
          }}
          aria-label="search"
          bg="inherit"
          borderRadius="inherit"
          _active={{}}
          onClick={onSearch}
        >
          <Icon as={SearchIcon} color="TextPrimary" width="15px" height="15px" />
        </IconButton>
      }
    >
      <Input
        css={styles}
        fontSize="sm"
        bg="navy.900"
        color="TextPrimary"
        fontWeight="500"
        _placeholder={{ color: 'gray.400', fontSize: '14px' }}
        borderRadius="30px"
        placeholder={`${t.search}...`}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch?.();
        }}
        {...input}
      />
    </InputGroup>
  );
}
