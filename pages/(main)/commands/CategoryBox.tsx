import {SetStateAction} from "react";
import {Box, HStack, Icon, RadioCard, Skeleton} from "@chakra-ui/react";
import {categories} from "./cmd-data";

export function CategoryBox({ category, setCategory, loading }: {
  category: string;
  setCategory?: (language: SetStateAction<string>) => void;
  loading?: boolean;
}) {
  return (
    <RadioCard.Root
      flexDirection='column'
      name='lang'
      onValueChange={(details) => {
        if (!!setCategory) {
          setCategory(details.value!);
        }
      }}
      rounded='sm'
      p={2}
      bg='bg.panel/60'
    >
      {categories.map((cat, idx) => (
        <RadioCard.Item
          key={idx}
          value={cat.value}
          _hover={{
            bgColor: 'fg.subtle/30'
          }}
          bg={category === cat.value?'fg.subtle/60':'transparent'}
          p={2}
          rounded='sm'
          disabled={cat.size === 0}
        >
          <HStack gap={2} flexGrow={1}>
            <Icon mr={5} fontSize='18px'>
              {cat.icon}
            </Icon>
            <Box flexGrow={1}>
              {cat.title}
            </Box>
            <Box justifyContent='flex-end' textAlign='right' minW='30px'>
              {loading ? <Skeleton w='30px' h='20px' /> : cat.size}
            </Box>
          </HStack>
          <RadioCard.ItemHiddenInput />
        </RadioCard.Item>
      ))}
    </RadioCard.Root>
  )
}