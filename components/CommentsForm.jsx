import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    storeData: false
  })

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const [buttonText, setButtonText] = useState('Submit')

  const commentElement = useRef()
  const nameElement = useRef()
  const emailElement = useRef()
  const storeDataElement = useRef()

  useEffect(() => {
    setLocalStorage(window.localStorage)
    const initialFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData:
        window.localStorage.getItem('name') ||
        window.localStorage.getItem('email')
    }
    setFormData(initialFormData)
  }, [])

  const onInputChange = (e) => {
    const { target } = e
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value
      }))
    }
  }

  const handleCommentSubmit = () => {
    setError(false)

    const { value: comment } = commentElement.current
    const { value: name } = nameElement.current
    const { value: email } = emailElement.current
    const { checked: storeData } = storeDataElement.current

    if (!comment || !name || !email) {
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 3000)

      return
    }

    const commentObject = { name, email, comment, slug }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
    }

    submitComment(commentObject).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = ''
          formData.email = ''
        }
        formData.comment = ''
        setFormData((prevState) => ({
          ...prevState,
          ...formData
        }))
        setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      }
    })
  }

  return (
    <div className={'bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'}>
      <h3 className={'text-xl mb-8 font-semibold border-b pb-4'}>
        Leave a Reply
      </h3>

      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'}>
        <input
          type={'text'}
          ref={nameElement}
          className={
            'py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-teal-500 bg-gray-100 text-gray-700'
          }
          placeholder={'Name'}
          name={'name'}
          value={formData.name}
          onChange={onInputChange}
        />
        <input
          ref={emailElement}
          onChange={onInputChange}
          type={'email'}
          className={
            'py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-teal-500 bg-gray-100 text-gray-700'
          }
          placeholder={'Email'}
          value={formData.email}
          name={'email'}
        />
      </div>
      <div className={'grid grid-cols-1 gap-4 mb-4'}>
        <textarea
          onChange={onInputChange}
          ref={commentElement}
          className={
            'p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-teal-500 bg-gray-100 text-gray-700'
          }
          value={formData.comment}
          name="comment"
          placeholder={'Comment'}
        />
      </div>
      <div className={'grid grid-cols-1 gap-4 mb-4'}>
        <Box display={'flex'} alignItems={'center'}>
          <Checkbox
            ref={storeDataElement}
            id={'storeData'}
            name={'storeData'}
            value={'true'}
            checked={formData.storeData}
            mr={2}
            colorScheme={'teal'}
            onChange={onInputChange}
          />
          <label
            className={'text-gray-500 cursor-pointer'}
            htmlFor={'storeData'}
          >
            {' '}
            Save my name, email in this browser for the next time I comment.
          </label>
        </Box>
      </div>

      <Box display={'flex'} justifyContent={'center'}>
        <Button
          type={'submit'}
          colorScheme={'linkedin'}
          onClick={handleCommentSubmit}
          width={['50%', '40%']}
        >
          {buttonText}
        </Button>
      </Box>

      <Box py={5}>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, delay: 0.5 }}
              exit={{ y: 10, opacity: 0, duration: 0.5 }}
              transition={'all 0.5s ease-in-out'}
            >
              <Alert status={'error'} className={'mb-4'}>
                <AlertIcon />
                Please fill out all fields.
              </Alert>
            </motion.div>
          )}
          {showSuccessMessage && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, delay: 0.5 }}
              exit={{ y: 10, opacity: 0, duration: 0.5 }}
              transition={'all 0.5s ease-in-out'}
            >
              <Alert status={'success'} className={'mb-4'}>
                <AlertIcon />
                Your comment has been submitted.
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </div>
  )
}

export default CommentsForm
