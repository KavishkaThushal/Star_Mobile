import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Headroom from "react-headroom";

function Layout() {
  return (
    <div>

      <Headroom>
        <Header className="nav-header" />
      </Headroom>
      <Outlet />
      <Footer />

    </div>
  )
}

export default Layout