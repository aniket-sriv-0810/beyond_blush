import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import FloatingActionBtn from './components/FloatingActionBtn/FloatingActionBtn'
import { Route, Routes } from 'react-router-dom'
import FAQs from './components/FAQs/FAQs'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import AdminLogin from './pages/Admin/Auth/AdminLogin'
import AdminHome from './components/Admin/AdminHome'
import AddTermsForm from './components/TermsAndCond/Terms'

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
     <Route path='/admin' element={<AdminLogin/>} />
     <Route path='/admin/home' element={<AdminHome/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/faqs' element={<FAQs/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/services' element={<Services/>} />
     <Route path='/terms' element={<AddTermsForm/>} />
    </Routes>
      
    </div>
  )
}

export default App
