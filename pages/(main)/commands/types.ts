import {ReactNode} from "react";

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
  locale: string;
  name: string;
  flag: string;
}