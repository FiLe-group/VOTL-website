import { common } from '@/config/translations/common';
import { SidebarItemInfo } from '@/utils/router';
import { Icon } from '@chakra-ui/react';
import { IoPerson } from "react-icons/io5";
import { FaChalkboard } from "react-icons/fa";

const items: SidebarItemInfo[] = [
  {
    name: <common.T text="dashboard" />,
    path: '/user/home',
    icon: <Icon as={FaChalkboard} />,
  },
  {
    name: <common.T text="profile" />,
    path: '/user/profile',
    icon: <Icon as={IoPerson} />,
  },
];

export default items;
