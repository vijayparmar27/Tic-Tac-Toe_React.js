import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='main'>
          <Header />
          <Outlet/>
          {/* <Footer/> */}
    </div>
  )
}

export default Root