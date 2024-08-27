import items from "@/config/sidebar-items";
import { useRouter } from "next/router";
import { ReactNode, useMemo } from "react";

export interface NavbarItemInfo {
	name: string;
	icon?: ReactNode;
	activeIcon?: ReactNode;
	href: string;
	external: boolean;
}

export function useActiveSidebarItem(): SidebarItemInfo | null {
  const route = useRouter().route;

  return useMemo(() => {
    for (const item of items) {
      if (item.path === route) return item;
    }

    return null;
  }, [route]);
}

export interface SidebarItemInfo {
  name: ReactNode;
  icon?: ReactNode;
  path: string;
  hidden?: boolean;
}

export interface Command {
  name: string;
  description: {
		[key: string]: string;
	};
  child: {
		description: {
			[key: string]: string;
		};
		usage: {
			[key: string]: string;
		};
	}[];
  access: number;
  guildOnly: boolean;
  usage: {
		[key: string]: string;
	};
  module: {
		[key: string]: string;
	};
	category: {
		name: string;
		[key: string]: string;
	}
}

export interface Category {
  title: string;
  value: string;
  icon: ReactNode;
  size: number;
}

export interface LanguageData {
	name: string;
	flag: string;
}