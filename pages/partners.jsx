import Head from "next/head";
import Link from "next/link";

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners | VOTL Bot</title>
      </Head>

      <div className="w-full my-10">
        <div className="flex w-full justify-center">
          <img width="150" className="rounded-lg shadow-lg shadow-[#1285f1]/30" src="/img/unionteams.png" />
        </div>
        <h1 className="py-7 text-4xl font-extrabold text-center text-white">
          Union<span className="text-blue-500">Team's</span> 
        </h1>
        <div className="text-center text-white">
          Garry's mod server developer team.
        </div>
        <div className="pt-2 text-lg text-center text-white">
          Learn more at <a className="text-amber-400" href="https://unionteams.ru/">unionteams.ru</a>
        </div>
      </div>
      
      <div className="py-10"></div>
    </>
  );
}
