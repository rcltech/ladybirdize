import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LadybirdProvider, { useApolloClient } from '@rcltech/ladybird'

const Index = () => {
  return (
    <LadybirdProvider authURL={'https://localhost:3001'}>
      <App />
    </LadybirdProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
