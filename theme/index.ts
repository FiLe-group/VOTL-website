import {createSystem, defaultBaseConfig, defineConfig} from "@chakra-ui/react";
import {globalCss} from "./global-css";
import { breakpoints } from "./breakpoints";
import {keyframes} from "./tokens/keyframes";
import { fonts } from "./tokens/fonts";
import { animations } from "./tokens/animation";
import { blurs } from "./tokens/blurs";
import { borders } from "./tokens/borders";
import {colors} from "./colors";
import { cursor } from "./tokens/cursor";
import { durations } from "./tokens/durations";
import {easings} from "./tokens/easings";
import { fontSizes } from "./tokens/font-sizes";
import { fontWeights } from "./tokens/font-weights";
import { radii } from "./tokens/radius";
import { sizes } from "./tokens/sizes";
import { spacing } from "./tokens/spacing";
import {zIndices} from "./tokens/z-indices";
import {semanticShadows} from "./semantic-tokens/shadows";
import {semanticRadii} from "./semantic-tokens/radii";
import { animationStyles } from "./motion-styles";
import {textStyles} from "./text-styles";
import { recipes } from "./recipes";
import { slotRecipes } from "./slot-recipes";

const themeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: "chakra",
  cssVarsRoot: ":where(html, .chakra-theme)",
  globalCss,
  theme: {
    breakpoints,
    keyframes,
    tokens: {
      fonts,
      gradients: {
        global: {value: 'linear-gradient(to bottom, {colors.blue.600/30}, transparent)'},
      },
      animations,
      blurs,
      borders,
      colors,
      cursor,
      durations,
      easings,
      fontSizes,
      fontWeights,
      radii,
      sizes,
      spacing,
      zIndex: zIndices
    },
    semanticTokens: {
      shadows: semanticShadows,
      radii: semanticRadii
    },
    textStyles,
    animationStyles,
    recipes,
    slotRecipes
  }
})

export const system = createSystem(defaultBaseConfig, themeConfig);