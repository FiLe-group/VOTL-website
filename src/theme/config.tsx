import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from '../styles/global';
import { breakpoints } from "./breakpoints";
import { colors, dark } from "./colors";
import { avatarStyles } from "./components/avatar";
import { buttonStyles } from "./components/button";
import { cardStyles } from "./components/card";
import { inputStyles } from "./components/input";
import { menuTheme } from "./components/menu";
import { sliderStyles } from "./components/slider";
import { modalStyles } from "./components/modal";
import { popoverStyles } from "./components/popover";
import { selectStyles } from "./components/select";
import { skeletonStyles } from "./components/skeleton";
import { switchStyles } from "./components/switch";
import { tabsStyles } from "./components/tabs";
import { textareaStyles } from "./components/textarea";

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
	breakpoints,
  colors,
	styles: {
		global: globalStyles,
	},
	components: {
    Avatar: avatarStyles,
    Button: buttonStyles,
    Card: cardStyles,
    Input: inputStyles,
    Menu: menuTheme,
    Modal: modalStyles,
    Popover: popoverStyles,
    Select: selectStyles,
    Skeleton: skeletonStyles,
    RangeSlider: sliderStyles,
    Switch: switchStyles,
    Tabs: tabsStyles,
    Textarea: textareaStyles,
	},
	semanticTokens: {
		shadows: {
			normal: {
				default: dark.shadow
			}
		},
		colors: {
			TextPrimary: {
        default: dark.textColorPrimary,
      },
      TextSecondary: {
        default: dark.textColorSecondary,
      },
      MainBackground: {
        default: dark.globalBg,
      },
      InputBackground: {
        default: 'secondaryGray.300',
      },
      InputBorder: {
        default: 'blackAlpha.200',
      },
      Brand: {
        default: dark.brand,
      },
      CardBackground: {
        default: dark.cardBg,
      },
		}
	},
})