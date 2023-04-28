import { RadioGroup } from "@headlessui/react";
import Data from "../data/commandlist.json";
import StickyBox from "react-sticky-box";
import { useMemo, useState } from "react";
import { useCollapse } from "react-collapsed";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Head from "next/head";

const commands = Object.values( Data );
const categories = [
  {
    name: "All",
    value: "",
    icon: "fa fa-list",
    size: 0
  },
  {
    name: "Moderation",
    value: "moderation",
    icon: "fa fa-shield",
    size: 0
  },
  {
    name: "Voice",
    value: "voice",
    icon: "fa fa-phone-office",
    size: 0
  },
  {
    name: "Server",
    value: "guild",
    icon: "fa fa-server",
    size: 0
  },
  {
    name: "Webhook",
    value: "webhook",
    icon: "fa fa-share-nodes",
    size: 0
  },
  {
    name: "Owner",
    value: "owner",
    icon: "fa fa-screwdriver-wrench",
    size: 0
  },
  {
    name: "Other",
    value: "other",
    icon: "fa fa-circle-info",
    size: 0
  }
]
const languages = [{name: "en-GB", flag: "fi-gb"},{name:"ru",flag:"fi-ru"}]

function CollapsedCommand({name, value}) {
  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
    easing: "cubic-bezier(0.3, 0.8, 0.5, 1)",
    duration: 300
  })

  return (
    <>
      <button className="w-full px-6 py-3 rounded-lg cursor-pointer transition-all duration-200" {...getToggleProps()}>
        <div className="flex flex-row items-center">
          <div className="grow text-left break-words">
            <span className="rounded-lg bg-amber-500/80 m-1 border-2 border-amber-500/80">
              <span className="px-2 height-auto">
                {`/${value.name}`}
              </span>
            </span>
            <span className="px-1">-</span>
            <span className="break-words">{value.description[name]}</span>
          </div>
          <div className="justify-end px-3 min-w-[56px] items-center">
            <i className={`fa ${value.access === 1 ? 'fa-user-shield text-green-400' : (value.access === 4 ? 'fa-gear text-red-500' : (value.access >= 2 ? 'fa-user-shield text-yellow-500' : 'text-transparent'))}`} />
          </div>
          <div className="justify-end">
            <i className={`fa fa-caret-down translation-transform duration-300 ease-out ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </button>
      <section className="px-4" {...getCollapseProps()}>
        <div className="pt-1 pb-3">
          <div>
            Module:
            <span className="text-amber-400 pl-1">{value.module[name] === "" ? "-" : value.module[name]}</span>
          </div>
          <div className="pt-2">
            Can be used in DM:
            <i className={`pl-1 text-lg fa ${value.guildOnly ? 'text-red-400 fa-xmark' : 'text-green-400 fa-check'}`} />
          </div>
          <div className="pt-2">
            <div className="font-bold pb-2">Usage:</div>
            {value.child?.length === 0 ? (
              <span className="rounded-lg bg-neutral-700 mx-1 border-2 border-neutral-700">
                <span className="px-2 height-auto font-mono">
                  {`/${value.usage[name]}`}
                </span>
              </span>
            ) : (
              value.child.map(child => (
                <div className="pb-1">
                  <span className="rounded-lg bg-neutral-700 mx-1 border-2 border-neutral-700">
                    <span className="px-2 height-auto font-mono">
                      {`/${value.name} ${child.usage[name]}`}
                    </span>
                  </span>
                  <div className="pl-2">
                    <i className="fa fa-arrow-turn-down-right pr-2" />
                    {child.description[name]}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className=""></div>
      </section>
    </>
  )
}

function getFilteredCmdsByCategory(cat) {
  if (!cat.value) {
    return commands;
  }
  return commands.filter(cmd => cmd.category["name"] === cat.value);
}

export default function Commands() {
  categories.forEach(cat => cat.size = getFilteredCmdsByCategory(cat).length);
   
  const [category, setCategory] = useState(categories[0]);
  const [language, setLanguage] = useState(languages[0]);
  
  function getFilteredCmds() {
    if (!category.value) {
      return commands;
    }
    return commands.filter(cmd => cmd.category["name"] === category.value);
  }
  var filteredCmds = useMemo(getFilteredCmds, [category, commands]);

  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
    easing: "cubic-bezier(0.4, 0, 1, 1)",
  })

  return (
    <>
      <Head>
        <title>Commands | VOTL Bot</title>
      </Head>

      <div className="text-white">
        <p className="text-xl font-medium">
          <i className="fal fa-cogs text-amber-400 mr-2" />
          Commands
        </p>
        <p className="text-sm text-white/50 mb-5">
          You can get information about the commands of the VOTL bot.
        </p>

        <div className="flex flex-wrap">
          <div className="basis-full lg:basis-1/4 md:basis-1/3 h-10">
            Select category to filter out commands
          </div>
          <div className="basis-full lg:basis-3/4 md:basis-2/3 grow self-center md:pl-4">
            <div className="flex flex-row items-center justify-end">
              <div>
                Description language:
              </div>
              <RadioGroup as="span" value={language} onChange={setLanguage} className="ml-2 py-2 bg-neutral-800/50 rounded-sm bg-origin-padding">
                {languages.map(lang => (
                  <RadioGroup.Option key={lang.name} value={lang} as="span" className="border-r-2 border-transparent  ">
                    {({checked}) => (
                      <span className={`${checked ? 'bg-neutral-600/50 rounded-sm' : ''} hover:bg-neutral-600/30 p-2`}>
                        <span className={`fi ${lang.flag}`} />
                      </span>
                    )}
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="basis-full lg:basis-1/4 md:basis-1/3 mt-4">
            <StickyBox>
              <RadioGroup value={category} onChange={setCategory} className="rounded-sm bg-neutral-800/50 py-1">
                {categories.map(cat => (
                  <RadioGroup.Option key={cat.name} value={cat}>
                    {({checked}) => (
                      <div className={`${checked ? 'bg-origin-padding bg-neutral-600/50 rounded-sm' : ''} hover:bg-neutral-600/30 px-3 mx-2 my-1 h-10 cursor-pointer`}>
                        <div className="flex flex-row h-full items-center">
                          <div className="min-w-[56px]">
                            <i className={`${cat.icon} text-[18px]`} />
                          </div>
                          <div className="grow truncate">
                            {cat.name}
                          </div>
                          <div className="justify-end min-w-[56px] text-right">
                            {cat.size}
                          </div>
                        </div>
                      </div>
                    )}
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
              <div className="mt-4 rounded-sm bg-neutral-800/50">
                <button className="py-3 px-6 w-full" {...getToggleProps()}>
                  <div className="flex flex-row">
                    <div className="grow truncate text-left">
                      <i className="fa fa-question mr-2" />
                      <span>Command Help</span>
                    </div>
                    <div className="justify-end">
                      <i className={`fa fa-caret-down translation-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </button>
                <section className="pb-2 px-4" {...getCollapseProps()}>
                  <div className="mb-2 pt-1">
                    <div>Default prefix is <span className="code after:content-['\A0'] before:content-['\A0'] text-amber-400">/</span></div>
                    <hr className="mt-2 border-neutral-600"/>
                  </div>
                  <b>Syntax</b>
                  <ul className="list-disc list-inside">
                    <li>
                      <span className="code after:content-['\A0'] before:content-['\A0'] text-amber-400">{'<>'}</span> - Required parameter
                    </li>
                    <li>
                      <span className="code after:content-['\A0'] before:content-['\A0'] text-amber-400">{'[]'}</span> - Optional parameter
                    </li>
                    <li>
                      <span className="code after:content-['\A0'] before:content-['\A0'] text-amber-400">{'A | B'}</span> - Required parameter
                    </li>
                  </ul>
                </section>
              </div>
            </StickyBox>
          </div>
          <div className="basis-full lg:basis-3/4 md:basis-2/3 grow md:pl-4 mt-4">
            <div className="rounded-sm bg-neutral-800/50 grid grid-cols-1 divide-y divide-neutral-600">
              {filteredCmds.map(cmd => (
                <div key={cmd.name} className="divide-y-6">
                  <CollapsedCommand name={language.name} value={cmd} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
