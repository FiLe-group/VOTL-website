import "../public/css/global.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

import Header from "../components/Static/Header.jsx";
import Footer from "../components/Static/Footer.jsx";

import { ThemeProvider } from "next-themes";

export default function VotlApp({ Component, pageProps }) {
  const NavItems = [
    {
      link: true,
      name: "Home",
      icon: "fal fa-home",
      activeIcon: "fa fa-home",
      href: "/",
    },
    {
      link: true,
      name: "Commands",
      icon: "fal fa-list-alt",
      activeIcon: "fa fa-list-alt",
      href: "/commands",
    },
    {
      link: false,
      name: "Docs",
      icon: "fal fa-circle-info",
      activeIcon: "fal fa-circle-info",
      href: "https://docs.votl.fileeditor.dev",
    },
    {
      link: false,
      name: "Support",
      icon: "fab fa-discord",
      activeIcon: "fab fa-discord",
      href: "https://discord.gg/25K5S55wrU",
    },
    {
      link: true,
      name: "UnionTeam's",
      icon: "fal fa-handshake",
      activeIcon: "fa fa-handshake",
      href: "/partners",
    },
    {
      link: false,
      name: "Translate",
      icon: "fal fa-language",
      activeIcon: "fal fa-language",
      href: "https://crowdin.com/project/voice-of-the-lord/"
    }
  ];

  return (
    <ThemeProvider defaultTheme="blue">
      <div className="h-screen relative border-t-4 border-blue-600">
        <div
          className="bg-gradient-to-b z-10 opacity-[25%] absolute top-0 w-full from-blue-600 to-transparent"
          style={{ height: "500px" }}
        />
        <Head>
          <title>{`Voice of the Lord`}</title>
        </Head>
        <main className="transition-all duration-200 z-10 absolute inset-0 px-5 h-screen max-w-7xl w-full mx-auto">
          <Header NavItems={NavItems} />
          <div className="block px-5 md:px-0">
            <Component {...pageProps} />
          </div>
          <Footer />
        </main>
        <div>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
          <script src="/js/main.js?i=2" />
        </div>
      </div>
    </ThemeProvider>
  );
}
