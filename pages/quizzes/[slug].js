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
  AlertIcon,
  SimpleGrid
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../../components/layouts/title'
import data from '../../util/data'

const Quiz = () => {
  const router = useRouter()
  const { slug } = router.query
  const quiz = data.quizzes.find((quiz) => quiz.slug === slug)

  const questions = data.quizzes.reduce(
    (prev, next) => prev.concat(next.questions),
    []
  )

  // Get the questions array length for the current quiz slug
  const questionsLength = questions.filter(
    (question) => question.slug === `${slug}-question-${question.id}`
  ).length

  // States
  const [currentAnswer, setCurrentAnswer] = useState([])
  const [colorScheme, setColorScheme] = useState([
    { color: 'gray', id: 0, questionID: 0 }
  ])
  const [score, setScore] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [showScore, setShowScore] = useState(false)

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
              color: 'blue',
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
        { color: 'blue', id: answerID, questionID: questionID }
      ])
    }
  }

  // TODO: Add score to quiz
  const handleScore = (answers) => {
    let score = 0

    if (answers.length < questionsLength) {
      setShowAlert(true)
      setShowScore(true)
      setTimeout(() => {
        setShowScore(false)
      }, 3000)

      setTimeout(() => {
        setShowAlert(false)
      }, 3000)
      return
    }

    setShowScore(true)

    answers.map((answer) => {
      // If the answer is correct, increase the score by 1
      if (answer.correctAnswer === true) {
        score++
      }
    }),
      setScore(score)

    colorScheme.map((color) => {
      // If the answer is correct, change the color to green
      answers.map((answer) => {
        if (answer.correctAnswer === true) {
          if (color.id === answer.answerID) {
            return (color.color = 'green')
          }
        }
      }),
        // If the answer is incorrect, change the color to red
        answers.map((answer) => {
          if (answer.correctAnswer === false) {
            if (color.id === answer.answerID) {
              return (color.color = 'red')
            }
          }
        })
    }),
      setColorScheme(colorScheme)
  }

  // console.log('Answer Array: ', currentAnswer)
  // console.log('Color Array: ', colorScheme)

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
        <Box px={5} p={10} bg={'white'} borderRadius={'lg'} w={'full'}>
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
          <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={'40px'}>
            {questions.map((question) => {
              if (question.slug === `${quiz.slug}-question-${question.id}`) {
                return (
                  <Box key={question.id}>
                    <List>
                      <ListItem>
                        <Box display={'flex'} flexDir={'row'} pb={3}>
                          <Text fontSize={'xl'} fontWeight={'semibold'} pr={2}>
                            {question.id}.
                          </Text>
                          <Text fontSize={'xl'}>{question.question}</Text>
                        </Box>
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
                              w={'100%'}
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
                              <Box
                                display={'flex'}
                                flexDir={'row'}
                                w={'100%'}
                                fontSize={{ sm: 'sm', md: 'md', lg: 'lg' }}
                              >
                                <Text
                                  fontWeight={'semibold'}
                                  pr={2}
                                  w={'fit-content'}
                                >
                                  {answer.letter})
                                </Text>
                                <Text fontWeight={'medium'} w={'fit-content'}>
                                  {answer.answer}
                                </Text>
                              </Box>
                            </Button>
                          </Box>
                        )
                      })}
                    </Box>
                  </Box>
                )
              }
            })}
          </SimpleGrid>
          <Box pt={10} pb={5} align={'center'}>
            <Button
              width={'40%'}
              variant={'solid'}
              size={'lg'}
              fontSize={'26px'}
              colorScheme={'teal'}
              onClick={() => {
                handleScore(currentAnswer)
              }}
            >
              Submit
            </Button>
          </Box>
          <Box py={5} display={'flex'} justifyContent={'center'}>
            <AnimatePresence>
              {showAlert && (
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, delay: 0.5 }}
                  exit={{ y: 10, opacity: 0, duration: 0.5 }}
                  transition={'all 0.5s ease-in-out'}
                >
                  <Alert
                    status={'warning'}
                    variant={'solid'}
                    borderRadius={'lg'}
                    justifyContent={'center'}
                    w={'-moz-fit-content'}
                  >
                    <AlertIcon />
                    You must answer all questions to submit your score.
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
          <Box
            py={5}
            bg={'teal.500'}
            borderRadius={'lg'}
            boxShadow={'0px 0px 5px rgba(0, 0, 0, 0.2)'}
          >
            <Text
              align={'center'}
              fontSize={'24px'}
              fontWeight={'semibold'}
              color={'white'}
            >
              Score:{' '}
              <AnimatePresence>
                {showScore && (
                  <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, delay: 0.5 }}
                    exit={{ y: 10, opacity: 0, duration: 0.5 }}
                    transition={'all 0.5s ease-in-out'}
                  >
                    {score}
                  </motion.span>
                )}
              </AnimatePresence>{' '}
              / {questionsLength}
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Quiz
