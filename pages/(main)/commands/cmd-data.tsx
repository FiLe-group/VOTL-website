import {Box, Icon} from "@chakra-ui/react";
import {
  FaChartLine,
  FaCrown,
  FaDice, FaInfoCircle,
  FaList,
  FaPhoneAlt,
  FaServer,
  FaShieldAlt,
  FaTicketAlt,
  FaTools,
  FaUser,
  FaUserShield
} from "react-icons/fa";
import {Category, LanguageData} from "./types";
import {HiBadgeCheck} from "react-icons/hi";
import {MdOutlineWebhook} from "react-icons/md";

const PERMISSION_NAME_OVERRIDES: {[key: string]: string} = {
  ADMIN: "Administrator",
  OWNER: "Guild Owner",
  DEV: "Developer",
};

export function formatPermissionName(permission: string): string {
  if (!permission || permission === "none") return "Everyone";
  if (PERMISSION_NAME_OVERRIDES[permission]) return PERMISSION_NAME_OVERRIDES[permission];

  return permission
    .replace(/^CMD_/, "")
    .toLowerCase()
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function CommandLevel(permission: string) {
  if (!permission || permission === "none") {
    return <Box hidden boxSize='20px'/>
  }

  const label = formatPermissionName(permission);

  let icon;
  switch (permission) {
    case "OWNER":
      icon = <Icon as={FaCrown} color='yellow.600' boxSize='20px'/>
      break;
    case "ADMIN":
      icon = <Icon as={FaUserShield} color='yellow.400' boxSize='20px'/>
      break;
    default:
      icon = <Icon as={FaUserShield} color='blue.500' boxSize='20px'/>
  }

  return <Box as='span' title={label}>{icon}</Box>
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
    title: "Levels",
    value: "levels",
    icon: <FaChartLine />,
    size: 0
  },
  {
    title: "Tools",
    value: "tools",
    icon: <FaTools />,
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