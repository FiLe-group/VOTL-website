import {Box, Icon} from "@chakra-ui/react";
import {
  FaCrown,
  FaDice, FaInfoCircle,
  FaList,
  FaPhoneAlt,
  FaServer,
  FaShieldAlt,
  FaTicketAlt,
  FaUser,
  FaUserShield
} from "react-icons/fa";
import {FaGear} from "react-icons/fa6";
import {Category, LanguageData} from "./types";
import {HiBadgeCheck} from "react-icons/hi";
import {MdOutlineWebhook} from "react-icons/md";

export function CommandLevel(access: number) {
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

export const categories: Category[] = [
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

export const languages: LanguageData[] = [
  {
    locale: "en-GB",
    name: "English",
    flag: "fi-gb"
  },
  {
    locale: "ru",
    name: 'Русский',
    flag: "fi-ru"
  }
]