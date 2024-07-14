import { common } from '@/config/translations/common';
import { SidebarItemInfo } from '@/utils/router';

const items: SidebarItemInfo[] = [
  {
    name: <common.T text="dashboard" />,
    path: '/user/home',
    icon: "fa fa-chalkboard",
  },
  {
    name: <common.T text="profile" />,
    path: '/user/profile',
    icon: "fa fa-person",
  },
];

export default items;
