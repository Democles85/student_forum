import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea
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
  const [file, setFile] = useState(null)

  console.log(file)

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
                  <Box
                    width={formBoxWidth}
                    px={formBoxPaddingX}
                    py={formBoxPaddingY}
                  >
                    <FormLabel htmlFor="email">
                      Email <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      id={'email'}
                      value={email}
                      placeholder={'Your Email'}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  width={formBoxWidth}
                  px={formBoxPaddingX}
                  py={formBoxPaddingY}
                >
                  <FormLabel htmlFor="subject">
                    Subject <span style={{ color: 'red' }}>*</span>
                  </FormLabel>
                  <Input
                    id={'subject'}
                    value={subject}
                    placeholder={'Subject'}
                    onChange={(e) => {
                      setSubject(e.target.value)
                    }}
                  />
                </Box>
                <Box
                  width={formBoxWidth}
                  px={formBoxPaddingX}
                  py={formBoxPaddingY}
                >
                  <FormLabel htmlFor="message">
                    Message <span style={{ color: 'red' }}>*</span>
                  </FormLabel>
                  <Textarea
                    id={'message'}
                    value={message}
                    placeholder={'Message'}
                    onChange={(e) => {
                      setMessage(e.target.value)
                    }}
                  />
                </Box>
                <Box
                  width={formBoxWidth}
                  px={formBoxPaddingX}
                  py={formBoxPaddingY}
                >
                  <FormLabel htmlFor="file">
                    File <span style={{ color: 'red' }}>*</span>
                  </FormLabel>
                  <Input
                    type={'file'}
                    id={'file'}
                    value={file}
                    placeholder={'File'}
                    onChange={(e) => {
                      setFile(e.target.value)
                    }}
                  />
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
