import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../../components/layouts/title'
import data from '../../util/data'

const Quiz = () => {
  const router = useRouter()
  const { slug } = router.query
  const quiz = data.quizzes.find((quiz) => quiz.slug === slug)

  // TODO: Add quiz questions
  const questions = data.quizzes.reduce(
    (prev, next) => prev.concat(next.questions),
    []
  )

  const answers = questions.reduce(
    (prev, next) => prev.concat(next.answers),
    []
  )

  const [currentAnswer, setCurrentAnswer] = useState([])
  const [colorScheme, setColorScheme] = useState([
    { color: 'gray', id: 0, questionID: 0 }
  ])
  const [isDisabled, setIsDisabled] = useState(false)

  const handleCurrentAnswer = (
    answerID,
    answerSlug,
    questionID,
    correctAnswer
  ) => {
    // Check if the answer selected is in the same question
    if (currentAnswer.find((answer) => answer.questionID === questionID)) {
      // Add the answer to the current answer array and remove the previous answer from the array
      setCurrentAnswer(
        currentAnswer.map((answer) => {
          if (answer.questionID === questionID) {
            return {
              answerID,
              answerSlug,
              questionID,
              correctAnswer
            }
          } else {
            return answer
          }
        })
      )
    } else
      setCurrentAnswer([
        ...currentAnswer,
        { answerID, answerSlug, questionID, correctAnswer }
      ])

    if (colorScheme.find((color) => color.questionID === questionID)) {
      // Add the color to the color scheme array and remove the previous color if the question id is the same as the current question id
      setColorScheme(
        colorScheme.map((color) => {
          if (color.questionID === questionID) {
            return {
              color: 'teal',
              id: answerID,
              questionID: questionID
            }
          }
          return color
        })
      )
    } else {
      // Add the color to the color scheme array and remove the previous color from the array if the another answer is selected
      setColorScheme([
        ...colorScheme,
        { color: 'teal', id: answerID, questionID: questionID }
      ])
    }
  }

  // TODO: Add score to quiz

  console.log('Answer Array: ', currentAnswer)
  // console.log the currentAnswer colorScheme
  console.log('Color Array: ', colorScheme)

  if (!quiz) {
    return (
      <Layout title={'Quiz Not Found'}>
        <Container
          height={'100vh'}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Heading as="h1">
            <Text textAlign={'center'} color={'white'}>
              Not found
            </Text>
          </Heading>
          <Text textAlign={'center'} color={'white'}>
            The page you&apos;re looking for was not found.
          </Text>
          <Divider my={6} />

          <Box my={6} align="center">
            <NextLink href="/">
              <Button colorScheme="teal">Return to home</Button>
            </NextLink>
          </Box>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout title={`${quiz.name}`}>
      <Box px={12} mb={10}>
        <Box px={5} p={10} bg={'white'} borderRadius={'lg'}>
          <Heading
            as="h1"
            fontSize={'5xl'}
            textAlign={'center'}
            textDecor={'underline'}
            pb={5}
          >
            {quiz.name}
          </Heading>

          {/* Check if the question belongs to the specific quiz */}
          {questions.map((question) => {
            if (question.slug === `${quiz.slug}-question-${question.id}`) {
              return (
                <Box key={question.id}>
                  <List>
                    <ListItem>
                      <Text
                        fontSize={'xl'}
                        fontWeight={'semibold'}
                      >{`${question.id}. ${question.question}`}</Text>
                    </ListItem>
                  </List>
                  <Box>
                    {question.answers.map((answer) => {
                      return (
                        <Box key={answer.id} pb={2} pl={5}>
                          <Button
                            colorScheme={
                              colorScheme.find(
                                (color) => color.id === answer.id
                              )
                                ? colorScheme.find(
                                    (color) => color.id === answer.id
                                  ).color
                                : colorScheme[0].color
                            }
                            variant={'outline'}
                            onClick={() => {
                              handleCurrentAnswer(
                                answer.id,
                                answer.slug,
                                question.id,
                                answer.correct
                              )
                              // console.log(answer.id, answer.slug, question.id, answer.correct)
                            }}
                          >
                            {answer.id}: {answer.answer}
                          </Button>
                        </Box>
                      )
                    })}
                  </Box>
                </Box>
              )
            }
          })}
          <Box pt={10} pb={5} align={'center'}>
            <Button width={'60%'} variant={'outline'} colorScheme={'teal'}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Quiz
