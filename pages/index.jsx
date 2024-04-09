import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center pb-3">
          <img width="200" className="brightness-125" src="/img/logo-old.png" />
        </div>
        <p className="text-4xl font-extrabold text-center text-white">
          Voice of the Lord
        </p>
        <p className="text-white text-opacity-50 text-center mt-5">
          Discord bot with multipurpose features for server moderation, management, ticketing and much more!
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4">
          <Link
            href={"https://discord.com/oauth2/authorize?client_id=916830010290085978&permissions=8&scope=applications.commands+bot"}
            className={
              "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-blue-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-blue-700 to-blue-500 hover:opacity-80 transition duration-200 text-white "
            }
          >
            Invite VOTL Bot
          </Link>
        </div>
      </div>
    </>
  );
}
