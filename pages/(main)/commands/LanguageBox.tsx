import {languages} from "./cmd-data";
import {RadioCard} from "@chakra-ui/react";
import {useSettingsStore} from "../../store";

export function LanguageBox() {
  const { locale, setLocale } = useSettingsStore();

  return (
    <RadioCard.Root
      flexDirection='row'
      name='lang'
      onValueChange={(details) => {
        setLocale(details.value!);
      }}
      rounded='sm'
      p={1}
      bg='bg.panel/60'
    >
      {languages.map((lang, idx) => (
        <RadioCard.Item
          key={idx}
          value={lang.locale}
          _hover={{
            bgColor: 'fg.subtle/30'
          }}
          bg={locale === lang.locale?'fg.subtle/60':'transparent'}
          p={2}
          rounded='sm'
        >
          <RadioCard.ItemText asChild fontSize='16px'>
            <span className={`fi ${lang.flag}`}/>
          </RadioCard.ItemText>
          <RadioCard.ItemHiddenInput />
        </RadioCard.Item>
      ))}
    </RadioCard.Root>
  )
}