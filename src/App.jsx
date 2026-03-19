import React from 'react'
import Todo from './Todo'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Todo/>
    </div>
  )
}

export default App