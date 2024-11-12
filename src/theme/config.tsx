import { createSystem, defaultConfig } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { colors, dark } from "./colors";

import { avatarSlotRecipe } from "./components/avatar";
import { buttonRecipe } from "./components/button";
import { cardSlotRecipe } from "./components/card";
import { inputSlotRecipe } from "./components/input";
import { menuSlotRecipe } from "./components/menu";
import { dialogSlotRecipe } from "./components/dialog";
import { popoverSlotRecipe } from "./components/popover";
import { selectSlotRecipe } from "./components/select";
import { skeletonRecipe } from "./components/skeleton";
import { sliderSlotRecipe } from "./components/slider";
import { switchSlotRecipe } from "./components/switch";
import { tabsSlotRecipe } from "./components/tabs";
import { textareaRecipe } from "./components/textarea";

export const system = createSystem(defaultConfig, {
  globalCss: {
    "body": {
      fontWeight: 500,
      color: 'TextPrimary',
      bg: 'MainBackground',
    }
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: `'Montserrat', sans-serif`},
        heading: { value: `'Montserrat', sans-serif`},
      },
      breakpoints,
      colors,
    },
    slotRecipes: {
      avatar: avatarSlotRecipe,
      card: cardSlotRecipe,
      input: inputSlotRecipe,
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
      skeleton: skeletonRecipe,
      textarea: textareaRecipe,
    },
    semanticTokens: {
      shadows: {
        normal: {
          DEFAULT: {value: dark.shadow}
        }
      },
      colors: {
        TextPrimary: {
          DEFAULT: {value: dark.textColorPrimary},
        },
        TextSecondary: {
          DEFAULT: {value: dark.textColorSecondary},
        },
        MainBackground: {
          DEFAULT: {value: dark.globalBg},
        },
        InputBackground: {
          DEFAULT: {value: 'gray.900'},
        },
        InputBorder: {
          DEFAULT: {value: 'blackAlpha.200'},
        },
        Brand: {
          DEFAULT: {value: dark.brand},
        },
        CardBackground: {
          DEFAULT: {value: dark.cardBg},
        },
      }
    },
  }
})