export interface NavbarItemInfo {
	name: string;
	icon?: string;
	activeIcon?: string;
	href: string;
	external: boolean;
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
  name: string;
  value: string;
  icon: string;
  size: number;
}

export interface LanguageData {
	name: string;
	flag: string;
}