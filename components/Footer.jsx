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
          Created By:
        </Text>
      </Box>
      <Box py={5}>
        <Grid templateColumns={'repeat(4, 1fr)'} gap={'2rem'}>
          <GridItem w={'100%'}>
            <Text
              fontSize={'18px'}
              fontWeight={'semibold'}
              boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.2)'}
              borderRadius={'lg'}
            >
              Sixhei
            </Text>
          </GridItem>
          <GridItem w={'100%'}>
            <Text
              fontSize={'18px'}
              fontWeight={'semibold'}
              boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.2)'}
              borderRadius={'lg'}
            >
              Denis
            </Text>
          </GridItem>
          <GridItem w={'100%'}>
            <Text
              fontSize={'18px'}
              fontWeight={'semibold'}
              boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.2)'}
              borderRadius={'lg'}
            >
              Enid
            </Text>
          </GridItem>
          <GridItem w={'100%'}>
            <Text
              fontSize={'18px'}
              fontWeight={'semibold'}
              boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.2)'}
              borderRadius={'lg'}
            >
              Arlind
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box
        bg={'white'}
        p={5}
        borderRadius={'lg'}
        boxShadow={'0px 0px 5px rgba(0, 0, 0, 0.2)'}
      >
        <Text fontSize={'20px'} fontWeight={'semibold'} color={'#000'} pb={5}>
          You want to upload your own research?
        </Text>
        {/* Button to direct to /contact page */}
        <Button
          onClick={() => {
            location.href = '/contact'
          }}
          className={
            'transition duration-600 transform hover:-translate-y-1 hover:scale-110'
          }
          colorScheme={'teal'}
        >
          <Link _hover={{ textDecoration: 'none' }}>
            <Text color={'white'} fontSize={'lg'} fontWeight={'bold'}>
              Contact Us{' '}
            </Text>
          </Link>

          <Box ml={3}>
            <Icon name="external-link" as={ArrowRightIcon} />
          </Box>
        </Button>
      </Box>
      <Box pt={5}>
        <Text>&copy; {new Date().getFullYear()} Student Forum</Text>
      </Box>
    </Box>
  )
}

export default Footer
