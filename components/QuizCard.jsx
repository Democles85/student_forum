import React from 'react'
import { Box, Link, Text } from '@chakra-ui/react'

import data from '../util/data'

const QuizCard = () => {
  return (
    <div className={'bg-white shadow-lg rounded-lg p-8 mb-8'}>
      <h3 className={'text-lg mb-8 font-semibold border-b pb-4'}>Pyetësor</h3>

      {/* Mapping of the quizzes in the data file created in the util folder with the map() function */}
      {data.quizzes.map((quiz, index) => (
        <Link
          href={`/quizzes/${quiz.slug}`}
          style={{ textDecoration: 'none' }}
          key={index}
        >
          <span
            className={`cursor-pointer block ${
              index === data.quizzes.length - 1 ? 'border-b-0' : 'border-b'
            } pb-3 mb-3 transition duration-500 hover:text-teal-500`}
          >
            <Text key={quiz.id}>{quiz.name}</Text>
          </span>
        </Link>
      ))}
    </div>
  )
}

export default QuizCard
