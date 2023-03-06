import { Notifications, Search, Settings} from '@mui/icons-material'
import {GrAppsRounded} from 'react-icons/gr'
import React from 'react'
import flag from '../img/flag.jfif' 
import Profile from "../img/Profile.png"


function TopNav() {
  return (
    <div className='d-flex justify-content-between'>
        <div>
            <h5 className='my-2 mx-3'>Dashboard</h5>
        </div>
        <div className='d-flex'>
            <Search className='m-1'/>
            <img className='m-1' src={flag} alt='img' style={{width:'20px',height:'20px',objectFit:"cover"}}/>
            <GrAppsRounded  className='m-2' fontSize='large'/>
            <div>
                <Notifications className='m-1'  />
                <p style={{fontSize:'12px',fontWeight:'600',backgroundColor:'orange',borderRadius:'50%',width:'15px',height:'18px',margin:'-32px 0 0 0 '}}>4</p>
            </div>
            <Settings className='m-1'  />
            <img src={Profile} style={{width:'40px',height:'40px',objectFit:'cover'}} alt='' className='mx-3'/>
        </div>
    </div>
  )
}

export default TopNav