import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import FloatingActionBtn from './components/FloatingActionBtn/FloatingActionBtn'
import LoadingScreen from './components/Loaders/LoadingScreen'
import { Route, Routes } from 'react-router-dom'
import FAQs from './components/FAQs/FAQs'
import About from './pages/About'

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
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/faqs' element={<FAQs/>} />
     <Route path='/' element={<Home/>} />
     <Route path='/' element={<Home/>} />
    </Routes>
      
    </div>
  )
}

export default App
