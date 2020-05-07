import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app/App'

type TProps = NoChildren

const Main: React.FC<TProps> = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
