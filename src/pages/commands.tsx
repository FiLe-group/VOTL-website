import StickyBox from "react-sticky-box";
import { useMemo, useState } from "react";
import { useCollapse } from "react-collapsed";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Head from "next/head";
import { Category, Command, LanguageData } from "@/utils/router";
import Data from '@public/commandlist.json'
import { NextPageWithLayout } from "./_app";
import AppLayout from "@/components/layout/app";
import {
  Icon,
  Box,
  Flex,
  HStack,
  Text,
  List,
  VStack,
  StackSeparator, Separator, RadioGroup
} from "@chakra-ui/react";
import { FaCaretDown, FaCheck, FaCrown, FaDice, FaInfoCircle, FaList, FaPhoneAlt, FaQuestion, FaServer, FaShieldAlt, FaTicketAlt, FaUser, FaUserShield } from "react-icons/fa";
import { FaGear, FaGears, FaXmark } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { MdOutlineWebhook } from "react-icons/md";
import { PiArrowBendDownRight } from "react-icons/pi";
import {Button} from "@/components/ui/button";

const commands = Data;

const categories: Category[] = [
  {
    title: "All",
    value: "",
    icon: <FaList />,
    size: 0
  },
  {
    title: "Moderation",
    value: "moderation",
    icon: <FaShieldAlt />,
    size: 0
  },
  {
    title: "Voice",
    value: "voice",
    icon: <FaPhoneAlt />,
    size: 0
  },
  {
    title: "Server",
    value: "guild",
    icon: <FaServer />,
    size: 0
  },
  {
    title: "Roles",
    value: "roles",
    icon: <FaUser />,
    size: 0
  },
  {
    title: "Verification",
    value: "verification",
    icon: <HiBadgeCheck />,
    size: 0
  },
  {
    title: "Ticketing",
    value: "ticketing",
    icon: <FaTicketAlt />,
    size: 0
  },
  {
    title: "Webhook",
    value: "webhook",
    icon: <MdOutlineWebhook />,
    size: 0
  },
  {
    title: "Game",
    value: "games",
    icon: <FaDice />,
    size: 0
  },
  {
    title: "Other",
    value: "other",
    icon: <FaInfoCircle />,
    size: 0
  }
]
const languages: LanguageData[] = [
  {
    name: "en-GB",
    flag: "fi-gb"
  },
  {
    name:"ru",
    flag:"fi-ru"
  }
]

function CommandLevel(access: number) {
  switch (access) {
    case 2:
      return <Icon as={FaUser} color='green.500' boxSize='20px'/>
    case 3:
      return <Icon as={FaUserShield} color='blue.500' boxSize='20px'/>
    case 5:
      return <Icon as={FaUserShield} color='yellow.400' boxSize='20px'/>
    case 7:
      return <Icon as={FaCrown} color='yellow.600' boxSize='20px'/>
    case 8:
      return <Icon as={FaCrown} color='yellow.600' boxSize='20px'/>
    case 10:
      return <Icon as={FaGear} color='red.500' boxSize='20px'/>
    default:
      return <Box hidden boxSize='20px'/>
  }
}

function CollapsedCommand({ lang, cmd }: {lang: string, cmd: Command}) {
  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
    easing: "cubic-bezier(0.3, 0.8, 0.5, 1)",
    duration: 300
  })

  return (
    <>
      <Button
        {...getToggleProps()}
        w='full'
        px={6}
        py={3}
        rounded='lg'
        cursor='pointer'
        transition='all'
        transitionDuration='200ms'
        bg='transparent'
        _hover={{bg:'transparent'}}
        color='white'
        display='inline-flex'
        flex={1}
        whiteSpace='wrap'
        _focus={{outline:'none'}}
      >
        <Flex flexGrow={1} display='inherit' align='start'>
          <Box
            as='span'
            rounded='lg'
            bgColor='blue.500/80'
            border='2px'
            borderColor='blue.500/80'
            px={2}
            height='auto'
            fontWeight='medium'
            whiteSpace='nowrap'
          >
            {`/${cmd.name}`}
          </Box>
          <Box as='span' px={1}>-</Box>
          <Box as='span' whiteSpace='wrap' textAlign='left'>{cmd.description[lang]}</Box>
        </Flex>
        <Box justifyContent='end' px={3} minW='56px' justifyItems='center'>
          {CommandLevel(cmd.access)}
        </Box>
        <Icon justifyContent='end' as={FaCaretDown} transform={isExpanded?'rotate(180deg)':'rotate(0deg)'} transitionProperty='transform' transitionDuration='300ms' transitionTimingFunction='ease-in' />
      </Button>
      <Box px={4} {...getCollapseProps()}>
        <VStack pt={1} gap={2} align='left'>
          <Text>
            Module:
            <Text display='inline' color='blue.400' pl={1}>{cmd.module[lang] === "" ? "-" : cmd.module[lang]}</Text>
          </Text>
          <Flex>
            Can be used in DM:
            <Icon pl={1} boxSize='24px' as={cmd.guildOnly?FaXmark:FaCheck} color={cmd.guildOnly?'red.400':'green.400'}/>
          </Flex>
          <Box pb={1}>
            <Text fontWeight='bold' pb={2}>Usage:</Text>
            {cmd.child.length === 0 ? (
              <Text
                rounded='lg'
                bgColor='neutral.700'
                m={1}
                border='2px'
                borderColor='neutral.700'
                px={2}
                height='auto'
                fontFamily='monospace'
                fontSize='md'
                display='inline'
              >
                {`/${cmd.usage[lang]}`}
              </Text>
            ) : (
              cmd.child.map(child => (
                <Box pb={1}>
                  <Text
                    rounded='lg'
                    bgColor='neutral.700'
                    m={1}
                    border='2px'
                    borderColor='neutral.700'
                    px={2}
                    height='auto'
                    fontFamily='monospace'
                    fontSize='md'
                    display='inline'
                  >
                    {`/${cmd.name} ${child.usage[lang]}`}
                  </Text>
                  <Flex pl={2}>
                    <Icon as={PiArrowBendDownRight} pr={1} boxSize='24px' />
                    {child.description[lang]}
                  </Flex>
                </Box>
              ))
            )}
          </Box>
        </VStack>
      </Box>
    </>
  )
}

function HelpBox() {
  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
    easing: "cubic-bezier(0.4, 0, 1, 1)",
  })

  return (
    <Box mt={4} rounded='sm' bgColor='neutral.800'>
      <Button
        {...getToggleProps()}
        py={3}
        px={4}
        w='full'
        bg='transparent'
        _hover={{bg:'transparent'}}
        color='white'
        _focus={{outline:'none'}}
      >
        <HStack gap={0} justifyContent='normal' w='full'>
          <Icon as={FaQuestion} mr={2} fontSize='12px' />
          <Text flexGrow={1} textAlign='left'>Command Help</Text>
          <Icon justifyContent='end' as={FaCaretDown} transform={isExpanded?'rotate(180deg)':'rotate(0deg)'} transitionProperty='transform' transitionDuration='300ms' transitionTimingFunction='ease-in'/>
        </HStack>
      </Button>
      <Box px={4} {...getCollapseProps()}>
        <Box mb={2} pt={1}>
          <Text>Default prefix is <Text _before={{content:`"\\A0"`}} _after={{content:`"\\A0"`}} className="code-blue">/</Text></Text>
          <Separator mt={2}/>
        </Box>
        <Text fontWeight='bold'>Syntax</Text>
        <List.Root as='ul' listStyleType="circle" pb={2} pl={4}>
          <List.Item>
            <Text _before={{content:`"\\A0"`}} _after={{content:`"\\A0"`}} className="code-blue">{'<>'}</Text> - Required parameter
          </List.Item>
          <List.Item>
            <Text _before={{content:`"\\A0"`}} _after={{content:`"\\A0"`}} className="code-blue">{'[]'}</Text> - Optional parameter
          </List.Item>
          <List.Item>
            <Text _before={{content:`"\\A0"`}} _after={{content:`"\\A0"`}} className="code-blue">{'A | B'}</Text> - Provide either
          </List.Item>
        </List.Root>
      </Box>
    </Box>
  );
}

function getFilteredCmdsByCategory(cat: Category) {
  if (!cat.value) {
    return commands;
  }
  return commands.filter(cmd => cmd.category.name === cat.value);
}

const CommandsPage: NextPageWithLayout = () => {
  const [language, setLanguage] = useState('en-GB');
  const [category, setCategory] = useState('');
  
  function LanguageBox() {
    return (
      <RadioGroup.Root
        asChild
        name='lang'
        onValueChange={(value) => {
          setLanguage(value.value)
        }}
      >
        <HStack gap='4px'>
          {languages.map((lang) => (
            <RadioGroup.Item
              key={lang.name}
              value={lang.name}
              _hover={{
                bgColor: '#52525244'
              }}
              bg={language === lang.name?'#52525288':'transparent'}
              cursor='pointer'
              p={2}
            >
              <RadioGroup.ItemText asChild fontSize='16px'>
                <span className={`fi ${lang.flag}`}/>
              </RadioGroup.ItemText>
              <RadioGroup.ItemHiddenInput />
            </RadioGroup.Item>
          ))}
        </HStack>
      </RadioGroup.Root>
    )
  }

  function CategoryBox() {
    return (
      <RadioGroup.Root
        asChild
        orientation="horizontal"
        name='category'
        onValueChange={(value) => {
          setCategory(value.value)
        }}
      >
        <VStack rounded='sm' bgColor='#26262688' py={2} gap='6px' align='inherit' >
          {categories.map((cat) => (
            <RadioGroup.Item
              key={cat.value}
              value={cat.value}
              mx={2}
              px={3}
              py={2}
              _hover={{
                bgColor: '#52525244'
              }}
              bg={category === cat.value?'#52525288':'transparent'}
              cursor='pointer'
            >
              <RadioGroup.ItemText asChild>
                <HStack gap={3} flexGrow={1}>
                  <Icon mr={6} fontSize='18px'>
                    {cat.icon}
                  </Icon>
                  <Box flexGrow={1}>
                    {cat.title}
                  </Box>
                  <Box justifyContent='flex-end' textAlign='right' minW='56px'>
                    {cat.size}
                  </Box>
                </HStack>
              </RadioGroup.ItemText>
              <RadioGroup.ItemHiddenInput />
            </RadioGroup.Item>
          ))}
        </VStack>
      </RadioGroup.Root>
    )
  }

  categories.forEach(cat => cat.size = getFilteredCmdsByCategory(cat).length);
  
  function getFilteredCmds() {
    if (!category) {
      return commands;
    }
    return commands.filter(cmd => cmd.category.name === category);
  }
  const filteredCmds = useMemo(getFilteredCmds, [category, commands]);

  return (
    <>
      <Head>
        <title>Commands | VOTL bot</title>
      </Head>

      <Box>
        <HStack className="text-xl font-medium">
          <Icon as={FaGears} boxSize='20px' color='blue.400' mr={2}/>
          <Text fontSize='xl'>Commands</Text>
        </HStack>
        <Text fontSize='sm' color='white/50' mb={5}>
          You can get information about the commands of the VOTL bot.
        </Text>

        <Flex wrap='wrap'>
          <Text h={10} flexBasis={{base:'100%', md:'33%', lg:'25%'}}>
            Select category to filter out commands
          </Text>
          <HStack flexBasis={{base:'100%', md:'67%', lg:'75%'}} flexGrow='1' alignSelf='center' pl={{md:4}} justify='end'>
            <Text>
              Description language:
            </Text>
            <Box py={1} bgColor='#26262688' rounded='sm'>
              <LanguageBox />
            </Box>
          </HStack>
        </Flex>
        <Flex wrap='wrap'>
          <Box flexBasis={{base:'100%', md:'33%', lg:'25%'}} mt={4} flexShrink={0}>
            <StickyBox>
              <CategoryBox />
              <HelpBox />
            </StickyBox>
          </Box>
          <Box flexBasis={{base:'100%', md:'67%', lg:'75%'}} flexGrow={1} mt={4} pl={{md:4}}>
            <VStack rounded='sm' bgColor='#26262688' align='inherit' py={2} separator={<StackSeparator borderColor='#828282' />}>
              {filteredCmds.map((fcmd, i) => (
                <Box key={i} borderY={6}>
                  <CollapsedCommand key={fcmd.name} lang={language} cmd={fcmd} />
                </Box>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

CommandsPage.getLayout = (p) => <AppLayout>{p}</AppLayout>;
export default CommandsPage;
