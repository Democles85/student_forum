import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
      width={'100%'}
      marginTop={'auto 0'}
      textAlign={'center'}
      padding={'2em'}
      zIndex={1}
      bg={useColorModeValue('#ffffff30', '#20202330')}
    >
      <Text pb={5}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularized in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      &copy; {new Date().getFullYear()} Student Forum
    </Box>
  )
}

export default Footer
