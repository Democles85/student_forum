import React, { useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'

import { grpahCMSImageLoader } from '../util'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((data) => setRelatedPosts(data))
    } else {
      getRecentPosts().then((data) => setRelatedPosts(data))
    }
  }, [slug])

  return (
    <div className={'bg-white shadow-lg rounded-lg p-8 mb-8'}>
      <h3 className={'text-xl mb-8 font-semibold border-b pb-4'}>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className={'flex items-center w-full mb-4'}>
          <div className={'w-16 flex-none'}>
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height={'60px'}
              width={'60px'}
              className={'align-middle rounded object-cover'}
              src={post.featuredImage.url}
            />
          </div>
          <div className={'flex-grow ml-4'}>
            <p className={'text-gray-500 font-xs'}>
              {moment(post.createdAt).format('MMM DD, YYYY - h:mm a')} - By{' '}
              {post.author.name}
            </p>
            <div
              className={'text-md transition duration-500 hover:text-teal-600'}
            >
              <Link href={`/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
