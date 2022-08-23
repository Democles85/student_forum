import {
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
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
      color={'white'}
      outline={'1px solid #fff'}
    >
      <Box py={2}>
        <Text
          fontSize={'26px'}
          fontWeight={'bold'}
          textShadow={'5px 3px 7px rgba(0, 0, 0, 0.3)'}
        >
          Krijuar nga:
        </Text>
      </Box>
      <Box py={5}>
        <Grid templateColumns={'repeat(4, 1fr)'} gap={'2rem'}>
          <GridItem w={'100%'}>
            <Text
              fontSize={'18px'}
              fontWeight={'semibold'}
              boxShadow={'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'}
              bg={'rgba( 255, 255, 255, 0.25 )'}
              backdropFilter={'blur( 4px )'}
              style={{ WebkitBackdropFilter: 'blur( 4px )' }}
              border={'1px solid rgba( 255, 255, 255, 0.18 )'}
              borderRadius={'lg'}
            >
              Sixhei Tartari
            </Text>
          </GridItem>
          <GridItem w={'100%'}>
            <Text
              fontSize={'18px'}
              fontWeight={'semibold'}
              boxShadow={'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'}
              bg={'rgba( 255, 255, 255, 0.25 )'}
              backdropFilter={'blur( 4px )'}
              style={{ WebkitBackdropFilter: 'blur( 4px )' }}
              border={'1px solid rgba( 255, 255, 255, 0.18 )'}
              borderRadius={'lg'}
            >
              Denis Demaj
            </Text>
          </GridItem>
          <GridItem w={'100%'}>
            <Text
              fontSize={'18px'}
              fontWeight={'semibold'}
              boxShadow={'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'}
              bg={'rgba( 255, 255, 255, 0.25 )'}
              backdropFilter={'blur( 4px )'}
              style={{ WebkitBackdropFilter: 'blur( 4px )' }}
              border={'1px solid rgba( 255, 255, 255, 0.18 )'}
              borderRadius={'lg'}
            >
              Enid Muharemi
            </Text>
          </GridItem>
          <GridItem w={'100%'}>
            <Text
              fontSize={'18px'}
              fontWeight={'semibold'}
              boxShadow={'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'}
              bg={'rgba( 255, 255, 255, 0.25 )'}
              backdropFilter={'blur( 4px )'}
              style={{ WebkitBackdropFilter: 'blur( 4px )' }}
              border={'1px solid rgba( 255, 255, 255, 0.18 )'}
              borderRadius={'lg'}
            >
              Arlind Kojanaj
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box pt={5}>
        <Text fontWeight={'semibold'}>
          &copy; {new Date().getFullYear()} Univlora Student Forum
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
