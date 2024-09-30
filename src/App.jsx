import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Dashbord from './pages/Dashbord'
import { Routes,Route } from 'react-router-dom'
import Header from './pages/Components/Header'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import View from './pages/Components/View'
import Edit from './pages/Components/Edit'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/dash' element={<Dashbord/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
  </Routes>
  <ToastContainer/>
  
    </>
  )
}

export default App
