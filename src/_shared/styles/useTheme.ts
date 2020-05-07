import { useContext } from 'react'
import { ThemeContext } from 'styled-components/macro'

export const useTheme = () => {
  return useContext(ThemeContext)
}
