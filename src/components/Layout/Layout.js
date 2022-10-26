import React from 'react'
import Header from './Header'
import Footer from './Footer'

// Mui Components
import Container from '@mui/material/Container';

function Layout({children}) {
  return (
    <>
        <Header />
            <Container children={children} />
        <Footer />
    </>
  )
}

export default Layout