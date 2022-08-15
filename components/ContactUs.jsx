import { Box, Button, Icon, Link, Text } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import React from 'react'

const ContactUs = () => {
  return (
    <Box py={5}>
      <Box
        fontSize={'18px'}
        fontWeight={'semibold'}
        boxShadow={'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'}
        bg={'rgba( 255, 255, 255, 1 )'}
        backdropFilter={'blur( 4px )'}
        style={{ WebkitBackdropFilter: 'blur( 4px )' }}
        border={'1px solid rgba( 255, 255, 255, 0.18 )'}
        borderRadius={'lg'}
        p={5}
      >
        <Box>
          <Text
            fontSize={'20px'}
            fontWeight={'semibold'}
            pb={5}
            color={'#202023'}
            textAlign={'center'}
          >
            You want to upload your own research?
          </Text>
        </Box>
        {/* Button to direct to /contact page */}
        <Box display={'flex'} flexDir={'column'} justifyContent={'center'}>
          <Button
            onClick={() => {
              location.href = '/contact'
            }}
            transition={'all 300ms ease-in-out'}
            _hover={{ transform: 'translateY(-4px)' }}
            colorScheme={'teal'}
            boxShadow={'0 6px 12px 0 rgba( 31, 38, 135, 0.37 )'}
            backdropFilter={'blur( 4px )'}
            style={{ WebkitBackdropFilter: 'blur( 4px )' }}
            border={'1px solid rgba( 255, 255, 255, 0.18 )'}
          >
            <Box display={'flex'} alignItems={'center'}>
              <Box>
                <Link _hover={{ textDecoration: 'none' }}>
                  <Text color={'white'} fontSize={'lg'} fontWeight={'bold'}>
                    Contact Us{' '}
                  </Text>
                </Link>
              </Box>

              <Box ml={3}>
                <Icon name="external-link" as={ArrowRightIcon} />
              </Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactUs
