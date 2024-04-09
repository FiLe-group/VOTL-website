import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const MobileNavbar = ({ open, setOpen, NavItems }) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`${
          open ? "" : "hidden"
        } w-full h-full z-50 fixed overflow-none top-0 backdrop-blur-sm lg:hidden`}
      />
      <div
        className={`transform ${
          open ? "" : "translate-x-full"
        } transition-all duration-300 bg-black bg-opacity-90 text-white w-80 fixed rounded-l-xl z-60 right-0 top-0 h-full lg:translate-x-full`}
      >
        <div className="relative w-full h-full">
          <div className="flex justify-between border-b border-white/20 items-center px-5 py-4">
            <div className="flex items-center">
              <img
                width="32"
                className="rounded-full icon-glow"
                src="/img/logo.png"
              />
              <p className=" font-extrabold ml-1 text-2xl">VOTL bot</p>
            </div>
            <button onClick={() => setOpen(!open)}>
              <i className="cursor-pointer fa fa-times text-xl mr-2" />
            </button>
          </div>
          {NavItems.filter((a) => a.link).map((item, itemIndex) => (
            <Link href={item.href} key={itemIndex} legacyBehavior>
              <div
                key={itemIndex}
                className={`${
                  router.asPath === item.href ? "bg-white bg-opacity-5" : ""
                } my-2 cursor-pointer p-4 opacity-75 hover:opacity-100 hover:underline transition-all duration-150 block`}
              >
                <i
                  className={`${
                    router.asPath === item.href ? item.activeIcon : item.icon
                  } mr-2`}
                />
                {item.name}
              </div>
            </Link>
          ))}
          {NavItems.filter((a) => !a.link).map((item, itemIndex) => (
            <a href={item.href} key={itemIndex}>
              <div
                key={itemIndex}
                className={`my-2 cursor-pointer p-4 opacity-75 hover:opacity-100 hover:underline transition-all duration-150 block`}
              >
                <i
                  className={`${
                    router.asPath === item.href ? item.activeIcon : item.icon
                  } mr-2`}
                />
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
const Header = ({ $, NavItems }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <header>
        <div className="max-w-7xl px-5 mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <img
                src="/img/logo-small.png"
                className="rounded-full"
                width="48"
                height="48"
              />
              <p className="invisible sm:visible text-xl text-white font-semibold">
                <a href="/">
                  <span className="text-blue-400">VOTL</span> Bot
                </a>
              </p>
            </div>
            <ul className="hidden lg:flex items-center space-x-6">
              {NavItems.filter((a) => a.link).map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={item.href}
                    className={`border-b-2 ${
                      router.asPath === item.href
                        ? "text-blue-500 border-blue-500"
                        : "border-black/0 text-white/75 hover:text-white"
                    } transition-all duration-200 font-medium pb-3`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {NavItems.filter((a) => !a.link).map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a target="_blank" href={item.href}>
                    <div
                      className={`border-b-2 ${
                        router.asPath === item.href
                          ? "text-blue-500 border-blue-500"
                          : "border-black/0 text-white/75 hover:text-white"
                      } transition-all duration-200 font-medium`}
                    >
                      {item.name}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-2 relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-transparent py-2 px-3 text-white rounded-md text-center lg:hidden hover:bg-blue-400 hover:bg-opacity-20"
            >
              <i className={`fa ${open ? "fa-times" : "fa-bars"} text-lg`} />
            </button>
            <Link
              href="https://discord.com/oauth2/authorize?client_id=916830010290085978&permissions=8&scope=applications.commands+bot"
              className="w-auto flex items-center justify-center shadow-lg gap-x-2 shadow-blue-600/20 rounded-xl py-2.5 font-medium px-10 bg-gradient-to-tl from-blue-500 to-blue-700 text-white hover:opacity-80 transition duration-200"
            >
              Invite
            </Link>
          </div>
        </div>
      </header>

      <MobileNavbar
        open={open}
        setOpen={setOpen}
        NavItems={NavItems}
        Menu={() => setOpen(!open)}
      />
    </>
  );
};

export default Header;
