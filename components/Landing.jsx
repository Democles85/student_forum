import React, { useCallback, useEffect, useState } from 'react'
import CodeEditorWindow from './CodeEditorWindow'
import axios from 'axios'
import { classnames } from '../util/general'
import { languageOptions } from '../constants/languageOptions'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { defineTheme } from '../lib/defineTheme'
import useKeyPress from '../hooks/useKeyPress'
import OutputWindow from './OutputWindow'
import CustomInput from './CustomInput'
import OutputDetails from './OutputDetails'
import ThemeDropdown from './ThemeDropdown'
import LanguageDropdown from './LanguageDropdown'

const cppDefault = `// Language: C++
#include <iostream>

using namespace std;

int main(){
  int a, b, c, d;
  cin >> a >> b;
  cout << a << " + " << b << " = " << a + b << endl;
  cin >> c >> d;
  cout << c << " - " << d << " = " << c - d;
  return 0;
}
`

const Landing = () => {
  const [code, setCode] = useState(cppDefault)
  const [customInput, setCustomInput] = useState('')
  const [outputDetails, setOutputDetails] = useState(null)
  const [processing, setProcessing] = useState(null)
  const [theme, setTheme] = useState('cobalt')
  const [language, setLanguage] = useState(languageOptions[5])

  const enterPress = useKeyPress('Enter')
  const ctrlPress = useKeyPress('Control')

  const onSelectChange = (selected) => {
    // console.log('Selected Option:', selected)
    setLanguage(selected)
  }

  useEffect(() => {
    if (enterPress && ctrlPress) {
      // console.log('enter pressed', enterPress)
      // console.log('ctrl pressed', ctrlPress)
      handleCompile()
    }
  }, [enterPress, ctrlPress])

  const onChange = (action, data) => {
    switch (action) {
      case 'code':
        setCode(data)
        break

      default:
      // console.warn('case not found', action, data)
    }
  }

  const checkStatus = useCallback(async (token) => {
    const options = {
      method: 'GET',
      url: process.env.NEXT_PUBLIC_RAPID_API_URL + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST
      }
    }

    try {
      let response = await axios.request(options)
      let statusID = response.data.status?.id

      if (statusID === 1 || statusID === 2) {
        setTimeout(() => checkStatus(token), 2000)
        return
      } else {
        setProcessing(false)
        setOutputDetails(response.data)
        showSuccessToast(`Compilation Successful`)
        // console.log('response.data', response.data)
        return
      }
    } catch (err) {
      // console.log('error', err)
      setProcessing(false)
      showErrorToast()
    }
  }, [])

  const handleCompile = useCallback(() => {
    setProcessing(true)

    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput)
    }

    const options = {
      method: 'POST',
      url: process.env.NEXT_PUBLIC_RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidApi-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST
      },
      data: formData
    }

    axios
      .request(options)
      .then(function (response) {
        // console.log('res.data', response.data)
        const token = response.data.token
        checkStatus(token)
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err
        setProcessing(false)
        // console.log('catch block...', error)
      })
  }, [checkStatus, code, customInput, language.id])

  function handleThemeChange(currentTheme) {
    const theme = currentTheme
    // console.log('theme: ', theme)

    if (['light', 'vs-dark'].includes(theme.value)) setTheme(theme)
    else defineTheme(theme.value).then((_) => setTheme(theme))
  }

  useEffect(() => {
    defineTheme('slush-and-poppies').then((_) =>
      setTheme({ value: 'slush-and-poppies', label: 'Slush and Poppies' })
    )
  }, [])

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compilation Successful!`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined
    })
  }

  const showErrorToast = (msg) => {
    toast.error(msg || `Something went wrong. Please try again later.`, {
      position: 'top-right',
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex flex-row">
        <div className="px-4 py-2">
          <LanguageDropdown onSelectChange={onSelectChange} />
        </div>
        <div className="px-4 py-2">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>

        <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails} />
          <div className="flex flex-col items-end">
            <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            />
            <button
              onClick={handleCompile}
              disabled={!code}
              className={classnames(
                'mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0',
                !code ? 'opacity-50' : ''
              )}
            >
              {processing ? 'Processing...' : 'Compile and Execute'}
            </button>
          </div>
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </>
  )
}

export default Landing
