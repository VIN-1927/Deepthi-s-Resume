import React from 'react'
import { Outlet } from 'react-router-dom';

import SideMenu from '../SideMenu';
import Footer from '../layout/footer'

const Layout = () => (
<div>

<SideMenu />

    <div className="contentWindow">
      <Outlet />

    </div>
    
<Footer/>
    </div>
  )


export default Layout
