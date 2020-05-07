// import original module declaration
import 'styled-components'

import { TTheme } from '../styles/CustomThemeProvider'

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
