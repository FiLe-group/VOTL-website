import {StackSeparator, VStack, Skeleton} from "@chakra-ui/react";

export const LoadingCommands = (
  <>
    <VStack
      align="stretch"
      bgColor='bg.panel/60'
      rounded='sm'
      separator={<StackSeparator color='gray.600' />}
      py={2}
    >
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
    </VStack>
  </>
)

export function RowSkeleton() {
  return (
    <Skeleton
      my={1}
      mx={4}
      h='22px'
      rounded='lg'
    />
  )
}