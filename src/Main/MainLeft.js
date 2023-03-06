import React from 'react'
import MainBottom from './MainBottom'
import './MainLeft.css'
import MainMiddle from './MainMiddle'
import MainTop from './MainTop'

function MainLeft() {
  return (
    <div className='MainLeft'>
        <MainTop />
        <MainMiddle />
        <MainBottom />
    </div>
  )
}

export default MainLeft