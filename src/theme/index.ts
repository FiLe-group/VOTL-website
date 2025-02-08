import {createSystem, defaultConfig, defineConfig} from "@chakra-ui/react"
import { breakpoints } from "./breakpoints"
import { globalCss } from "./global-css"
import {fonts} from "@/theme/fonts";
import {colors} from "@/theme/colors";
import {avatarSlotRecipe} from "@/theme/components/avatar";
import {cardSlotRecipe} from "@/theme/components/card";
import {inputSlotRecipe} from "@/theme/components/input";
import {menuSlotRecipe} from "@/theme/components/menu";
import {dialogSlotRecipe} from "@/theme/components/dialog";
import {popoverSlotRecipe} from "@/theme/components/popover";
import {selectSlotRecipe} from "@/theme/components/select";
import {sliderSlotRecipe} from "@/theme/components/slider";
import {switchSlotRecipe} from "@/theme/components/switch";
import {tabsSlotRecipe} from "@/theme/components/tabs";
import {buttonRecipe} from "@/theme/components/button";
import {textareaRecipe} from "@/theme/components/textarea";

const themeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: "chakra",
  cssVarsRoot: ":where(:root, :host)",
  globalCss: globalCss,
  theme: {
    breakpoints: breakpoints,
    tokens: {
      fonts,
      colors,
      gradients: {
        global: {value: 'linear-gradient(to bottom, {colors.blue.600}, transparent)'},
      }
    },
    slotRecipes: {
      avatar: avatarSlotRecipe,
      card: cardSlotRecipe,
      menu: menuSlotRecipe,
      dialog: dialogSlotRecipe,
      popover: popoverSlotRecipe,
      select: selectSlotRecipe,
      slider: sliderSlotRecipe,
      switch: switchSlotRecipe,
      tabs: tabsSlotRecipe,
    },
    recipes: {
      button: buttonRecipe,
      textarea: textareaRecipe,
      input: inputSlotRecipe,
    },
  }
})

export const system = createSystem(defaultConfig, themeConfig)
