import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { Box, Button, Text } from '@chakra-ui/react'

const PostDetail = ({ post }) => {
  return (
    <div className={'bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'}>
      <div className={'relative overflow-hidden shadow-md mb-6'}>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className={'object-top h-full w-full rounded-t-lg '}
        />
      </div>
      <div className={'px-4 lg:px-0'}>
        <div className={'flex items-center mb-8 w-full'}>
          <div
            className={'flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'}
          >
            <img
              alt={post.author.name}
              height={'30px'}
              width={'30px'}
              className={'align-middle rounded-full'}
              src={post.author.photo.url}
            />
            <p className={'inline align-middle text-gray-700 ml-2 text-lg'}>
              {post.author.name}
            </p>
          </div>
          <div className={'font-medium text-gray-700 text-center'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format('MMMM Do YYYY')}</span>
          </div>
        </div>
        <h1 className={'mb-8 text-3xl font-semibold'}>{post.title}</h1>
        <div className={'text-justify'}>
          <RichText
            content={post.content.raw.children}
            renderers={{
              img: ({ src, alt, title }) => (
                <Box display={'flex'} justifyContent={'center'}>
                  <img src={src} alt={alt} title={title} className={''} />
                </Box>
              ),
              p: ({ children }) => <Box className={'my-2'}>{children}</Box>,
              h3: ({ children }) => (
                <h3 className={'text-xl font-semibold mb-4'}>{children}</h3>
              ),
              h1: ({ children }) => (
                <h1 className={'text-3xl font-semibold mb-4'}>{children}</h1>
              ),
              table: ({ children }) => (
                <table
                  className={
                    'border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm'
                  }
                >
                  {children}
                </table>
              ),
              table_header_cell: ({ children }) => (
                <th
                  className={
                    'w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left text-lg'
                  }
                >
                  {children}
                </th>
              ),
              table_cell: ({ children }) => (
                <td
                  className={
                    'border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400'
                  }
                >
                  {children}
                </td>
              ),
              code: ({ children }) => (
                <code
                  className={
                    'bg-gray-100 text-gray-900 dark:text-gray-200 p-1 rounded-md font-semibold'
                  }
                >
                  {children}
                </code>
              ),
              code_block: ({ children }) => (
                <Box py={3}>
                  <pre
                    className={
                      'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-4 rounded-lg'
                    }
                  >
                    {children}
                  </pre>
                </Box>
              ),
              a: ({ href, children, title }) => (
                <Box display={'flex'} justifyContent={'center'} w={'full'}>
                  <Button onClick={() => (location.href = `${href}`)}>
                    <a href={href} className={'text-teal-500'} title={title}>
                      {children}
                    </a>
                  </Button>
                </Box>
              ),
              ul: ({ children }) => (
                <ul className={'list-disc ml-8'}>{children}</ul>
              )
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PostDetail
