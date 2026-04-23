import LayoutBase from "../layouts/LayoutBase";
import vikeReact from "vike-react/config";
import type {Config} from "vike/types";
import vikeReactQuery from "vike-react-query/config";
import vikeReactZustand from "vike-react-zustand/config";

const config: Config = {
  Layout: LayoutBase,
  extends: [vikeReact, vikeReactQuery, vikeReactZustand],
  prerender: true,
  ssr: false,

  queryClientConfig: {
    defaultOptions: {
      mutations: {
        retry: false
      },
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 2*60*1000,
        //experimental_prefetchInRender: true
      },
    },
  }
};

export default config;