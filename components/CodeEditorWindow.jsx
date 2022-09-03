import React, { useState } from 'react'
import Editor from '@monaco-editor/react'

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || '')

  const handleEditorChange = (value) => {
    setValue(value)
    onChange('code', value)
  }

  return (
    <div className={'rounded-md overflow-auto w-full h-full shadow-xl'}>
      <Editor
        height={'85vh'}
        width={'100%'}
        language={language || 'javascript'}
        value={value}
        defaultValue={'// type your code...'}
        theme={theme}
        onChange={handleEditorChange}
      />
    </div>
  )
}

export default CodeEditorWindow
