import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Result from './components/Result'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path='/result' element={<Result/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
