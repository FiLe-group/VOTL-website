import {ButtonProps as ChakraCloseButtonProps, useRecipe} from "@chakra-ui/react"
import { IconButton as ChakraIconButton } from "@chakra-ui/react"
import { forwardRef } from "react"
import { LuX } from "react-icons/lu"
import {buttonRecipe} from "@/theme/components/button";

export interface CloseButtonProps extends ChakraCloseButtonProps {}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    const recipe = useRecipe({ recipe: buttonRecipe })
    const styles = recipe({ variant: "ghost" })
    return (
      <ChakraIconButton css={styles} aria-label="Close" ref={ref} {...props}>
        {props.children ?? <LuX />}
      </ChakraIconButton>
    )
  },
)
