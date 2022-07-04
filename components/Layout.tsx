import React from 'react'
// import 'react-types'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='bg-backg-dark text-light '>
      <Navbar/ >
        { children }
      <Footer/ >
    </div>
  )
}

export default Layout