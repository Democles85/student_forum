import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/title'

const NotFound = () => {
  return (
    <Layout title={'Not Found'}>
      <Container
        height={'63.5vh'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading as="h1">
          <Text textAlign={'center'} color={'white'}>
            Not found
          </Text>
        </Heading>
        <Text textAlign={'center'} color={'white'}>
          The page you&apos;re looking for was not found.
        </Text>
        <Divider my={6} />

        <Box my={6} align="center">
          <NextLink href="/">
            <Button colorScheme="teal">Return to home</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound
