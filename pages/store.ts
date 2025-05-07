import {defaultLocale, LocaleType} from "../locales/localeType";
import {create} from "vike-react-zustand";
import {createJSONStorage, persist} from "zustand/middleware";

interface SettingsStore {
  locale: LocaleType;
  setLocale: (locale: string) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, _get) => ({
      locale: defaultLocale,
      setLocale: (value)=> {
        set((state) => ({
          ...state,
          locale: parseLocale(value),
        }))
      }
    }),
    {
      name: 'settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

function parseLocale(locale: string): LocaleType {
  switch (locale) {
    case 'en-GB':
    case 'ru':
      return locale as LocaleType;
    default:
      return defaultLocale
  }
}