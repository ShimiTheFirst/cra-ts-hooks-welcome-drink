import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './GlobalStyles'
import { Colors } from './styling'

type TProps = {
  children: React.ReactElement
}

export const CustomThemeProvider: React.FC<TProps> = ({ children }) => {
  const theme = getTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

// dynamic colors (and potential style values) based on selected branch
// define default theme (colors) used throughout the app
function getTheme() {
  const primary = '#F21D41'
  const secondary = '#EBEBBC'
  const tertiary = '#230F2B'

  const appText = Colors.black.main
  const appBg = Colors.white.main

  return {
    primary,
    secondary,
    tertiary,
    appText,
    appBg,
  }
}

export type TTheme = ReturnType<typeof getTheme>
