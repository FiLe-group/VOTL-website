import {Head} from "vike-react/Head";
import {Box, Text} from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Head>
        <title>Policies | VOTL Bot</title>
      </Head>

      <Text as='h1' fontSize='3xl' fontWeight='semibold' mt={4}>Bot's Source Code License</Text>
      <Text mt={5} as='h3' fontSize='lg' fontWeight='semibold'>MIT License</Text>
      <Box color='white/60'>
        <Text py={2}>Copyright (c) 2025 Kristofer "FileEditor97" (<u>votl@fileeditor.dev</u>)</Text>
        <Text py={2}>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</Text>
        <Text py={2}>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</Text>
        <Text py={2}>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</Text>
      </Box>
    </>
  )
}