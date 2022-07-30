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
        <div className={'md:float-left block'}>
          <Link href={'/'}>
            <a className={'text-4xl font-bold text-white cursor-pointer'}>
              Universiteti "Ismail Qemali"
            </a>
          </Link>
        </div>
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
      </div>
    </div>
  )
}

export default Header
