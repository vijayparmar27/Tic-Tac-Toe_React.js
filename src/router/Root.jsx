import React from 'react'
import Header from '../pages/Header/Header'
import { Outlet } from 'react-router-dom'
import Socketfunction from '../socket/socket'

function Root() {
  // Socketfunction()

  return (
    <div className='main'>
          <Header />
          <Outlet/>
          {/* <Footer/> */}
    </div>
  )
}

export default Root