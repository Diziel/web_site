import React from 'react'
import {
  Outlet,
  Link,
} from '@tanstack/react-router'

import Footer from './Footer'

const Wrapper: React.FC = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
      <Footer />
    </>
  )
}

export default Wrapper