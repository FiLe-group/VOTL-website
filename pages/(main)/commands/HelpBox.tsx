import {
  Box,
  Button,
  chakra,
  Collapsible,
  Icon,
  List,
  Span,
  StackSeparator,
  Text,
  VStack
} from "@chakra-ui/react";
import {FaChevronDown, FaQuestion} from "react-icons/fa";
import {useState} from "react";

const Code = chakra(
  'span', {
    base: {
      backgroundColor: "bg.emphasized",
      color: "blue.400",
      px: 2,
      fontFamily: 'monospace',
      fontWeight: '900',
    }
  }
)

export function HelpBox() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={() => setOpen(!open)}
      bgColor='bg.panel/60'
      rounded='sm'
      mt={4}
      py={2}
    >
      <Collapsible.Trigger asChild px={4}>
        <Button
          display='flex'
          justifyContent="space-between"
          alignItems="center"
          textAlign="left"
          w="100%"
          color="white"
          _focus={{ outline: 'none' }}
        >
          <Icon as={FaQuestion} ml={2} w='12px' />
          <Text flexGrow={1} textAlign='left'>Command Help</Text>
          <Icon
            justifyContent='end'
            w={3}
            as={FaChevronDown}
            transform={open ? "rotate(180deg)" : "rotate(0deg)"}
            transition="transform 0.4s"
          />
        </Button>
      </Collapsible.Trigger>

      <Collapsible.Content px={4} asChild>
        <VStack alignItems="left" gap={0}>
          <Box pt={3}>
            <Span>Default prefix is</Span>
            <Code ml={1}>/</Code>
          </Box>
          <StackSeparator borderBottomWidth='1px' color='gray.600' my={2}/>
          <Text fontWeight='bold'>Syntax</Text>
          <List.Root as='ul' listStyleType="circle" pb={2} pl={4}>
            <List.Item>
              <Code>{'<>'}</Code> - Required parameter
            </List.Item>
            <List.Item>
              <Code>{'[]'}</Code> - Optional parameter
            </List.Item>
            <List.Item>
              <Code>{'A | B'}</Code> - Provide either
            </List.Item>
          </List.Root>
        </VStack>

      </Collapsible.Content>
    </Collapsible.Root>
  )
}