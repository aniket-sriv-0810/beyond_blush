import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import FloatingActionBtn from './components/FloatingActionBtn/FloatingActionBtn'
import { Route, Routes } from 'react-router-dom'
import FAQs from './components/FAQs/FAQs'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import AdminLogin from './pages/Admin/Auth/AdminLogin'
import AdminHome from './pages/Admin/AdminHome'
import AddTermsForm from './components/TermsAndCond/Terms'
import AddFaqForm from './components/FAQs/AddFAQForm'
import AddService from './pages/Admin/Service/AddService'
import AdminService from './pages/Admin/Service/AdminService'
import AdminPricingForm from './components/Admin/Pricing/AddPricing'
import AdminPricing from './pages/Admin/Pricing/AdminPricing'
import AdminPricingTable from './components/Admin/Pricing/AdminPricingTable'
import AddPricing from './components/Admin/Pricing/AddPricing'
import EditPricing from './components/Admin/Pricing/EditPricing'
import AdminUserDetails from './components/Admin/AdminPanel/AdminUserDetails'
import AdminEdit from './pages/Admin/AdminEdit/AdminEdit'
import AdminChangePassword from './pages/Admin/AdminChangePassword/AdminChangePassword'
import AdminEditService from './pages/Admin/Service/AdminEditService'

const App = () => {
   const [loading, setLoading] = useState(true);
const userId = "6876ab259d8e94f3fd3422d3";
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
     <Route path='/add-faqs' element={<AddFaqForm/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/services' element={<Services/>} />
     <Route path='/terms' element={<AddTermsForm/>} />

     <Route path='/admin/add-service' element={<AddService/>} />
     <Route path='/admin/add-pricing' element={<AddPricing/>} />
     <Route path='/admin/pricing/:id/edit' element={<EditPricing/>} />
    <Route path='/admin' element={<AdminLogin/>} /> 
    <Route path='/admin/:id/edit' element={<AdminEdit/>} /> 
     <Route path='/admin/:id/change-password' element={<AdminChangePassword/>} />
     <Route path='/admin/service/:id/edit' element={<AdminEditService/>} />
    <Route path='/admin/dashboard' element={<AdminHome/>} > 
     <Route path='profile' element={<AdminUserDetails userId={userId}/>} />
     <Route path='services' element={<AdminService/>} />
     <Route path='pricing' element={<AdminPricingTable/>} />
    </Route>

    </Routes>
      
    </div>
  )
}

export default App
