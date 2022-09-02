import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
      textAlign={'center'}
      padding={'2em'}
      zIndex={1}
      bg={useColorModeValue('#ffffff30', '#20202330')}
      color={'white'}
      outline={'1px solid #fff'}
    >
      <Box>
        <Text fontWeight={'semibold'}>
          &copy; {new Date().getFullYear()} Univlora Student Forum
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
