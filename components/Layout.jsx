import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <Box as={'main'}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Sixhei Tartari" />
        <meta name="author" content="sixhei tartari" />
        <meta name="description" content="A student forum / blog website" />
        <meta
          name="keywords"
          content="sixhei, sixhei tartari, sixhei tartari blog, sixhei tartari blog website, sixhei tartari blog website, student blog, blog, forum, student, forum"
        />
        <title>Student Forum</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout
