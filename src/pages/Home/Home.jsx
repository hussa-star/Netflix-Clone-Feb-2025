import React from 'react'
import "./Home.css"
import Header from '../../componenets/Header/Header'
import Banner from '../../componenets/Banner/Banner'
import Footer from '../../componenets/Footer/Footer'
import Rowlist from '../../componenets/Rowlist/Rowlist'

function Home() {
  return (
    <>
    <Header />
    <Banner/>
    <Rowlist/>
    <Footer/>
    
    </>
  )
}

export default Home