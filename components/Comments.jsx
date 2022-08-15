import React, { useState, useEffect } from 'react'
import { Divider } from '@chakra-ui/react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [])

  return (
    <>
      {comments.length > 0 && (
        <div className={'bg-white shadow-lg rounded-lg p-8 pb-12'}>
          <h3 className={'text-xl mb-8 font-semibold border-b pb-4'}>
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className={
                'border-b border-gray-100 mb-4 pb-4 p-4 bg-black bg-opacity-5 rounded-lg'
              }
            >
              <p className={'mb-4'}>
                <span className={'font-semibold'}>{comment.name}</span>{' '}
                <span className={'opacity-60'}>
                  on {moment(comment.createdAt).format('MMMM Do YYYY - h:mm a')}
                </span>
              </p>
              <Divider borderColor={'#202023 !important'} mb={2} mt={-2} />
              <p className={'text-gray-700 w-full'}>{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
