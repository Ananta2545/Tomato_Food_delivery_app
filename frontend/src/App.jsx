import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home.jsx'
import Footer from './Components/Footer/Footer.jsx'
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx'
const App = () => {
  const[showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/Cart' element = {<Cart/>}/> */}
      {/* <Route path='/Order' element = {<PlaceOrder/>}/> */}
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App