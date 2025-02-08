"use client"

import { Avatar as ChakraAvatar } from "@chakra-ui/react"
import React, { forwardRef } from "react"

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export interface AvatarProps extends ChakraAvatar.RootProps {
  name?: string
  src?: string
  srcSet?: string
  loading?: ImageProps["loading"]
  icon?: React.ReactElement
  fallback?: React.ReactNode
  borderRadius?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, borderRadius, ...rest } =
      props
    return (
      <ChakraAvatar.Root ref={ref} shape='rounded' {...rest}>
        <ChakraAvatar.Fallback name={name}>
          {fallback || icon}
        </ChakraAvatar.Fallback>
        <ChakraAvatar.Image borderRadius={borderRadius} src={src} srcSet={srcSet} loading={loading} />
        {children}
      </ChakraAvatar.Root>
    )
  },
)
