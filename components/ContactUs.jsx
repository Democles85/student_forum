import { Box, Button, Icon, Link, Text } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import React from 'react'

const ContactUs = () => {
  return (
    <Box py={5}>
      {/* Button to direct to /contact page */}
      <Box display={'flex'} flexDir={'column'} justifyContent={'center'}>
        <Button
          onClick={() => {
            location.href = '/contact'
          }}
          transition={'all 300ms ease-in-out'}
          _hover={{ transform: 'translateY(-4px)' }}
          boxShadow={'0 6px 12px 0 rgba( 0, 0, 0, 0.37 )'}
          backdropFilter={'blur( 4px )'}
          background={'#fff'}
          color={'#000'}
          style={{ WebkitBackdropFilter: 'blur( 4px )' }}
          border={'1px solid rgba( 255, 255, 255, 0.18 )'}
        >
          <Box display={'flex'} alignItems={'center'}>
            <Box>
              <Link _hover={{ textDecoration: 'none' }}>
                <Text fontSize={'lg'} fontWeight={'bold'}>
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
  )
}

export default ContactUs
