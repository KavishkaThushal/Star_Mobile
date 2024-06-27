import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/About Us/AboutUs'
import Services from './Pages/Services/Services'
import Gallery from './Pages/Gallery/Gallery'
import ContactUs from './Pages/ContactUs/ContactUs'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Store from './Pages/Store/Store'
import Item from './Pages/Item/Item'

import Appointment from './Components/Appointment/Appointment'


function App() {
  

  return (
    <MantineProvider>
      <BrowserRouter>
     <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/store'>
          <Route index element={<Store/>}/>
          <Route path=':itemId' element={<Item/>}/>
        </Route>
      </Route>
     </Routes>
    </BrowserRouter>
    </MantineProvider>
  )
}

export default App
