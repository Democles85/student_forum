import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import { Layout } from '../components'

import React, { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
