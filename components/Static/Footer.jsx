import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="py-10">
        <div className="pt-10 mx-auto">
          <div className="md:grid md:grid-cols-5 lg:grid-cols-6 gap-20">
            <div className="lg:col-span-3 col-span-2">
              <div className="flex items-center space-x-5">
                <img src="/img/logo-small.png" className="rounded-full w-12" />
                <p className="font-semibold text-xl text-white">VOTL Bot</p>
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">
                Links
              </p>
              <div>
                <a
                  href="https://discord.gg/25K5S55wrU"
                  target="_blank"
                  className="text-white/50 hover:text-white hover:underline transform duration-200"
                >
                  Support Server
                </a>
              </div>
              <div>
                <a
                  href="https://unionteams.ru/"
                  target="_blank"
                  className="text-white/50 hover:text-white hover:underline transform duration-200"
                >
                  UnionTeam's
                </a>
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">
                Social
              </p>
              <div>
                <Link
                  href="https://discord.gg/25K5S55wrU"
                  className="text-white/50 hover:text-white hover:underline transform duration-200"
                >
                  <i className={`fa-brands fa-discord`} />
                  Discord
                </Link>
              </div>
              <div>
                <Link
                  href="https://github.com/FileEditor97/VOTL"
                  className="text-white/50 hover:text-white hover:underline transform duration-200"
                >
                  <i className={`fa-brands fa-github`} />
                  GitHub
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">
                Important
              </p>
              <div>
                <Link
                  href="/tos"
                  className="text-white/50 hover:text-white hover:underline transform duration-200"
                >
                  Terms Of Service
                </Link>
              </div>
              <div>
                <Link
                  href="/privacy"
                  className="text-white/50 hover:text-white hover:underline transform duration-200"
                >
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link
                  href="/policies"
                  className="text-white/50 hover:text-white hover:underline transform duration-200"
                >
                  Other policies
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <p className="text-white text-center sm:text-left text-opacity-50">
              {new Date().getFullYear()} &copy; VOTL Bot
            </p>
            <div className="hidden md:flex items-center justify-center">
              <p className={"text-xs text-green-400"}> </p>
            </div>
            <div className="text-white text-center sm:text-right text-opacity-50">
              <div>
                Website hosted on <a className="text-amber-400" href="https://pages.dev/">Cloudflare</a>
              </div>
              By GreenLord#0593 (Fork <a className="underline" href="https://github.com/umutxyp/Discord-Bot-Website">Github</a>)
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
