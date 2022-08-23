import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((data) => setCategories(data))
  }, [])
  return (
    <div className={'container mx-auto px-10 mb-8'}>
      <div className={'border-b w-full inline-block border-blue-400 py-8'}>
        <Box>
          <div className={'md:float-left block'}>
            <Link href={'/'}>
              <Box display={'flex'} alignItems={'center'}>
                <Image
                  src={'/Images/uv-logo.png'}
                  alt={'University Logo'}
                  width={'80px'}
                />
                <a
                  className={
                    'text-4xl font-bold text-white cursor-pointer ml-4'
                  }
                >
                  Univlora Student Forum
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
            <div className={'hidden md:float-left md:contents'}>
              {categories.map((category) => (
                <Link href={`/category/${category.slug}`} key={category.slug}>
                  <span
                    className={
                      'md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'
                    }
                  >
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Header
