import { NavbarItemInfo } from "@/utils/router";

const items: NavbarItemInfo[] = [
	{
		name: "Home",
		icon: "fal fa-home",
  	activeIcon: "fa fa-home",
    href: "/",
		external: false
	},
	{
		name: "Commands",
		icon: "fal fa-list-alt",
  	activeIcon: "fa fa-list-alt",
    href: "/commands",
		external: false
	},
	{
		name: "Docs",
		icon: "fal fa-circle-info",
    href: "https://docs.votl.fileeditor.dev",
		external: true
	},
	{
		name: "Support",
		icon: "fab fa-discord",
    href: "https://discord.gg/25K5S55wrU",
		external: true
	},
	{
		name: "UnionTeam's",
		icon: "fal fa-handshake",
  	activeIcon: "fa fa-handshake",
    href: "/partners",
		external: false
	},
	{
		name: "Translate",
		icon: "fal fa-language",
    href: "https://crowdin.com/project/voice-of-the-lord/",
		external: true
	},
]

export default items;