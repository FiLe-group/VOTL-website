import {ReactNode, useEffect, useMemo, useState} from "react";
import {categories, CommandLevel} from "./cmd-data";
import {
  Box,
  Button,
  Collapsible,
  Flex,
  Icon,
  Span,
  StackSeparator,
  Text,
  VStack
} from "@chakra-ui/react";
import {FaCheck, FaChevronDown} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import {PiArrowBendDownRight} from "react-icons/pi";
import {apiCommands} from "../../../server/client-api";
import {useSuspenseQuery} from "@tanstack/react-query";
import {CategoryBox} from "./CategoryBox";
import {Command} from "./types";
import {withFallback} from "vike-react-query";
import {LoadingCommands} from "./LoadingBox";
import {MainBox} from "./MainBox";
import {useSettingsStore} from "../../store";

export const CommandBox = withFallback(
  (): ReactNode => {
    const query = useSuspenseQuery({
      queryKey: ['commands'],
      queryFn: () => apiCommands(),
      staleTime: 10*60*1000,
      gcTime: 30*60*1000,
    });

    const commands = query.data;

    const {locale} = useSettingsStore();
    const [category, setCategory] = useState('');

    const getFilteredCommandsByCategory = (cat?: string) => {
      return cat ? commands.filter(cmd => cmd.category.name === cat) : commands;
    };

    categories.forEach(cat => {
      cat.size = getFilteredCommandsByCategory(cat.value)?.length;
    });

    const filteredCommands = useMemo(() => getFilteredCommandsByCategory(category), [category]);

    return (
      <MainBox
        categoryBox={<CategoryBox category={category} setCategory={setCategory} />}
        commandBox={<CommandList commands={filteredCommands} category={category} language={locale} />}
      />
    )

  },
  () => {
    return (
      <MainBox
        categoryBox={<CategoryBox category={''} loading={true} />}
        commandBox={LoadingCommands}
      />
    )
  },
  ({ retry }) => {
    return (
      <MainBox
        categoryBox={<CategoryBox category={''} />}
        commandBox={
          <VStack
            bgColor='bg.panel/60'
            rounded='sm'
            p={8}
          >
            <Text fontSize='xl'>An error has occurred while loading the command list, please try again later.</Text>
            <Button
              mt={4}
              size='xl'
              variant='grayGradient'
              onClick={() => retry()}
            >
              Retry
            </Button>
          </VStack>
        }
      />
    )
  }
);

function CommandList({ commands, category, language }: {
  commands: Command[],
  category: string,
  language: string,
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  useEffect(() => setOpenIndex(null), [category]);

  return (
    <VStack
      align="stretch"
      bgColor='bg.panel/60'
      rounded='sm'
      separator={<StackSeparator borderColor='gray.700' />}
      py={2}
      gap={1}
    >
      {commands.map((cmd, idx) => (
        <Collapsible.Root
          key={idx}
          open={openIndex === idx}
          onOpenChange={() => setOpenIndex(openIndex === idx ? null : idx)}
        >
          <Collapsible.Trigger asChild px={6} py={1}>
            <Button
              display='flex'
              justifyContent="space-between"
              alignItems="center"
              textAlign="left"
              w="100%"
              color="white"
              _focus={{ outline: 'none' }}
            >
              <Box flexGrow={1} textAlign='left' fontSize='md'>
                <Box
                  as='span'
                  rounded='lg'
                  bgColor='blue.500/80'
                  border='2px'
                  borderColor='blue.500/80'
                  px={2}
                  py='1px'
                  fontWeight='medium'
                  whiteSpace='nowrap'
                >
                  {`/${cmd.name}`}
                </Box>
                <Span px={1}> -</Span>
                <Span whiteSpace='wrap' textAlign='left'>{cmd.description[language]}</Span>
              </Box>
              <Flex align="center" maxW="56px" justifyContent='end' gap={4}>
                {CommandLevel(cmd.access)}
                <Icon
                  w={3}
                  as={FaChevronDown}
                  transform={openIndex === idx ? "rotate(180deg)" : "rotate(0deg)"}
                  transition="transform 0.4s"
                />
              </Flex>
            </Button>
          </Collapsible.Trigger>

          <Collapsible.Content px={6}>
            <VStack gap={2} align='start'>
              <Box>
                Module:
                <Text display='inline' color='blue.400' pl={1}>{cmd.module[language] === "" ? "-" : cmd.module[language]}</Text>
              </Box>
              <Flex>
                Can be used in DM:
                <Icon pl={1} boxSize='24px' as={cmd.guildOnly?FaXmark:FaCheck} color={cmd.guildOnly?'red.400':'green.400'}/>
              </Flex>
              <Box pb={1}>
                <Text fontWeight='bold' pb={2}>Usage:</Text>
                {cmd.child.length === 0 ? (
                  <Text
                    rounded='md'
                    bgColor='gray.700'
                    m={1}
                    border='2px'
                    borderColor='gray.700'
                    px={2}
                    height='auto'
                    fontFamily='monospace'
                    fontSize='md'
                    display='inline'
                  >
                    {`/${cmd.usage[language]}`}
                  </Text>
                ) : (
                  cmd.child.map((child, idc) => (
                    <Box pb={1} key={idc}>
                      <Text
                        rounded='md'
                        bgColor='gray.700'
                        m={1}
                        border='2px'
                        borderColor='gray.700'
                        px={2}
                        height='auto'
                        fontFamily='monospace'
                        fontSize='md'
                        display='inline'
                      >
                        {`/${cmd.name} ${child.usage[language]}`}
                      </Text>
                      <Flex pl={2}>
                        <Icon as={PiArrowBendDownRight} pr={1} boxSize='24px' />
                        {child.description[language]}
                      </Flex>
                    </Box>
                  ))
                )}
              </Box>
            </VStack>
          </Collapsible.Content>
        </Collapsible.Root>
      ))}
    </VStack>
  );
}
