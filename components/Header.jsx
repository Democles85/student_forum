import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'
import { TiThMenuOutline } from 'react-icons/ti'

function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((data) => setCategories(data))
  }, [])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <div className={'container mx-auto px-10 mb-8'}>
      <div className={'border-b w-full flex justify-between border-white py-8'}>
        <div className={'md:float-left block'}>
          <Link href={'/'}>
            <Box display={'flex'} alignItems={'center'}>
              <Image
                src={'/Images/uv-logo.png'}
                alt={'University Logo'}
                width={'80px'}
              />
              <a className={'font-bold text-white cursor-pointer ml-4'}>
                <Text
                  fontSize={{
                    base: 'xl',
                    md: '2xl',
                    lg: '3xl'
                  }}
                  display={{ base: 'none', md: 'block' }}
                >
                  Univlora Student Forum
                </Text>
              </a>
            </Box>
          </Link>
        </div>
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          h={'inherit'}
        >
          <div className={'md:float-left md:contents'}>
            <Button leftIcon={<TiThMenuOutline />} onClick={onOpen}>
              Menu
            </Button>
            <Drawer
              isOpen={isOpen}
              placement={'right'}
              onClose={onClose}
              initialFocusRef={firstField}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth={'1px'}>
                  Univlora Student Forum
                </DrawerHeader>

                <DrawerBody>
                  <Stack spacing={'24px'}>
                    <Box pt={2} pb={2} borderBottom={'1px'}>
                      <Text
                        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                        fontWeight={{
                          base: 'semibold',
                          md: 'semibold',
                          lg: 'bold'
                        }}
                      >
                        Categories
                      </Text>
                    </Box>
                    {categories.map((category, index) => (
                      <Link
                        href={`/category/${category.slug}`}
                        key={category.slug}
                      >
                        <span
                          className={`md:float-left align-middle transition duration-500 hover:text-teal-500 cursor-pointer ${
                            index === categories.length - 1
                              ? 'border-b-0'
                              : 'border-b pb-2'
                          }`}
                          onClick={onClose}
                        >
                          {category.name}
                        </span>
                      </Link>
                    ))}
                    <Box pt={2} pb={2} borderBottom={'1px'}>
                      <Text
                        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                        fontWeight={{
                          base: 'semibold',
                          md: 'semibold',
                          lg: 'bold'
                        }}
                      >
                        Contact
                      </Text>
                    </Box>
                    <Box>
                      <Link href={'/contact'}>
                        <span
                          className={
                            'md:float-left align-middle transition duration-500 hover:text-teal-500 cursor-pointer'
                          }
                          onClick={onClose}
                        >
                          Contact Us
                        </span>
                      </Link>
                    </Box>
                    <Box pt={2} pb={2} borderBottom={'1px'}>
                      <Text
                        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                        fontWeight={{
                          base: 'semibold',
                          md: 'semibold',
                          lg: 'bold'
                        }}
                      >
                        Code Editor
                      </Text>
                    </Box>
                    <Box>
                      <Link href={'/code-editor'}>
                        <span
                          className={
                            'md:float-left align-middle transition duration-500 hover:text-teal-500 cursor-pointer'
                          }
                          onClick={onClose}
                        >
                          Multi-Language Code Editor
                        </span>
                      </Link>
                    </Box>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Header
