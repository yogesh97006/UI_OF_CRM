import React from 'react'
import './Main.css'
import MainLeft from './MainLeft'
import MainRight from './MainRight'
import TopNav from './TopNav'

function Main() {
  return (
    <div className='MC'>
        <TopNav />
        <div className='d-flex'>
        <MainLeft />
        <MainRight />
        </div>
    </div>
  )
}

export default Main