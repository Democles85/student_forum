import React from 'react'
import Select from 'react-select'
import monacoThemes from 'monaco-themes/themes/themelist.json'
import { customStyles } from '../constants/customStyles'

const ThemeDropdown = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder={'Select Theme'}
      options={Object.entries(monacoThemes).map(([themeID, themeName]) => ({
        label: themeName,
        value: themeID,
        key: themeID
      }))}
      value={theme}
      styles={customStyles}
      onChange={handleThemeChange}
    />
  )
}

export default ThemeDropdown
