import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Layout from '../components/layouts/title'

const Contact = () => {
  const formBoxPaddingY = 2.5
  const formBoxPaddingX = 25
  const formBoxWidth = '100%'

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [file, setFile] = useState('')

  const [errors, setErrors] = useState({})
  const [buttonText, setButtonText] = useState('Send')

  return (
    <Layout title={'Contact Us'}>
      <Container maxW={'container.lg'} py={5}>
        <Box p={10} bg={'white'} borderRadius={'lg'}>
          <Box p={5}>
            <Heading as={'h3'} textAlign={'center'}>
              Contact Us:
            </Heading>
          </Box>
          <Box>
            <form>
              <FormControl>
                <Box display={'flex'} flexDir={['column', null, 'row']}>
                  <Box
                    width={formBoxWidth}
                    px={formBoxPaddingX}
                    py={formBoxPaddingY}
                  >
                    <FormLabel htmlFor="first-name">
                      Name <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      id={'firstName'}
                      value={firstName}
                      placeholder={'Your Name'}
                      onChange={(e) => {
                        setFirstName(e.target.value)
                      }}
                    />
                  </Box>
                </Box>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Contact
