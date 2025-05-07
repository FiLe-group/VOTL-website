import {NavbarItemInfo} from "./types";
import {GoHome, GoHomeFill} from "react-icons/go";
import {Icon} from "@chakra-ui/react";
import {IoIosList, IoIosListBox} from "react-icons/io";
import {FaDiscord, FaInfoCircle} from "react-icons/fa";
import {IoLanguage} from "react-icons/io5";

const items: NavbarItemInfo[] = [
  {
    name: "Home",
    icon: <Icon as={GoHome}/>,
    activeIcon: <Icon as={GoHomeFill}/>,
    href: "/",
    external: false
  },
  {
    name: "Commands",
    icon: <Icon as={IoIosList}/>,
    activeIcon: <Icon as={IoIosListBox}/>,
    href: "/commands",
    external: false
  },
  {
    name: "Docs",
    icon: <Icon as={FaInfoCircle}/>,
    href: "https://docs.votl.fileeditor.dev",
    external: true
  },
  {
    name: "Support",
    icon: <Icon as={FaDiscord}/>,
    href: "https://discord.gg/25K5S55wrU",
    external: true
  },
  {
    name: "Translate",
    icon: <Icon as={IoLanguage}/>,
    href: "https://crowdin.com/project/voice-of-the-lord/",
    external: true
  },
]

export default items;