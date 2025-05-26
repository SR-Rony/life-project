import React from 'react'
import Nevbar from '../components/Nevbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
        <Nevbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout