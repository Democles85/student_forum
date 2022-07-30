import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Icon,
  Image,
  Link,
  Text
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import React, { useState, useEffect } from 'react'

const Author = ({ author }) => {
  const [avatarBadgeBackground, setAvatarBadgeBackground] = useState([])
  const backgroundColors = ['red.500', 'orange.500', 'green.500']

  // Choose a random background color for the avatar badge
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundColors.length)
    setAvatarBadgeBackground(backgroundColors[randomIndex])
  }, [])

  return (
    <div
      className={
        'text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-40 border-teal-300 border'
      }
    >
      {/* <div className={'absolute left-0 right-2 -top-14'}>
        <Image
          alt={author.name}
          height={'100px'}
          width={'100px'}
          className={'align-middle rounded-full'}
          src={author.photo.url}
        />
      </div> */}
      <Box className={'absolute left-0 right-2 -top-14'}>
        <Avatar
          alt={author.name}
          size={'xl'}
          src={author.photo.url}
          style={{ border: '3px solid #fff' }}
        >
          <AvatarBadge
            boxSize="30px"
            style={{
              border: '3px solid #fff',
              left: '55px'
            }}
            bg={avatarBadgeBackground}
          />
        </Avatar>
      </Box>
      <h3 className={'text-white my-4 text-xl font-bold'}>{author.name}</h3>
      <p className={'text-white text-lg'}>{author.bio}</p>
      <Box display={'flex'} flexDir={'row'} justifyContent={'center'} pt={2}>
        {/* When the button is click it redirects to an external page */}
        <Button
          onClick={() => {
            window.open(author.contact, '_blank')
          }}
          colorScheme={'teal'}
        >
          <Link _hover={{ textDecoration: 'none' }}>
            <Text color={'white'} fontSize={'lg'} fontWeight={'bold'}>
              Contact{' '}
            </Text>
          </Link>

          <Box ml={3}>
            <Icon name="external-link" as={ArrowRightIcon} />
          </Box>
        </Button>
      </Box>
    </div>
  )
}

export default Author
