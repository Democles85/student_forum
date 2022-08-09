import { Box, Text } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { motion } from 'framer-motion'

const FileInput = (props) => {
  const { name, label = name } = props
  const { register, unregister, setValue, watch } = useFormContext()
  const files = watch(name)

  const onDrop = useCallback(
    (droppedFiles) => {
      setValue(name, droppedFiles, { shouldValidate: true })
    },
    [setValue, name]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: props.accept
  })

  useEffect(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])

  return (
    <>
      <label
        className={'mb-2 block text-sm font-bold capitalize text-gray-700'}
        htmlFor={name}
      >
        {label}
      </label>
      <div {...getRootProps()} className={'mb-8'}>
        <input
          {...props}
          className={
            'focus:shadow-outline w-full hidden rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
          }
          id={name}
          {...getInputProps}
        />
        <div
          className={
            'w-full border border-dashed border-gray-900 p-2' +
            (isDragActive ? 'bg-gray-400' : 'bg-gray-200')
          }
        >
          {isDragActive ? (
            <p className={'m-2 text-center'}>Drop the files here...</p>
          ) : (
            <p className={'my-2 text-center'}>
              Drag 'n' drop some files here, or click to select files.
            </p>
          )}
        </div>
      </div>
      <Box>
        <Text>Uploaded File: </Text>
      </Box>
      <Box pb={5}>
        {!!files?.length && (
          <AnimatePresence>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, delay: 0.5 }}
              exit={{ y: 10, opacity: 0, duration: 0.5 }}
              transition={'all 0.5s ease-in-out'}
            >
              <Box align={'center'} width={'100%'}>
                {files.map((file) => {
                  return (
                    <div key={file.name}>
                      <Text fontWeight={'bold'} align={'left'}>
                        {file.name}
                      </Text>
                    </div>
                  )
                })}
              </Box>
            </motion.div>
          </AnimatePresence>
        )}
      </Box>
    </>
  )
}

export default FileInput
