import {
  AbsoluteCenter,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps, Span,
  Spinner,
} from "@chakra-ui/react"
import { forwardRef } from "react"

interface ButtonLoadingProps {
  loading?: boolean
  loadingText?: React.ReactNode
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { loading, disabled, loadingText, children, ...rest } = props
    return (
      <ChakraButton disabled={loading || disabled} ref={ref} {...rest}>
        {loading && !loadingText ? (
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner color="inherit" />
            </AbsoluteCenter>
            <Span opacity={0}>{children}</Span>
          </>
        ) : loading && loadingText ? (
          <>
            <Spinner color="inherit" />
            {loadingText}
          </>
        ) : (
          children
        )}
      </ChakraButton>
    )
  },
)
