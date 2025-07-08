import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import FloatingActionBtn from './components/FloatingActionBtn/FloatingActionBtn'
import LoadingScreen from './components/Loaders/LoadingScreen'
import { Route, Routes } from 'react-router-dom'

const App = () => {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
    <FloatingActionBtn/>
    <Routes>
      {loading ?
      <Route path='/load' element={<LoadingScreen/>} />
      :
      <Route path='/' element={<Home/>} />
      }
    </Routes>
      
    </div>
  )
}

export default App
