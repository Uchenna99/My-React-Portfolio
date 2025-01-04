import { Route, Routes } from 'react-router-dom'
import './App.css'
import "./stylesheet.css"
import HomePage from './HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App
