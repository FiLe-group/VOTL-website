import {ReactNode} from "react";

export interface NavbarItemInfo {
  name: string;
  icon?: ReactNode;
  activeIcon?: ReactNode;
  href: string;
  external: boolean;
}