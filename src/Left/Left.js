
import { BorderColor, Dehaze, ExpandMore, Layers, VerifiedUser, ViewInAr } from '@mui/icons-material'
import React from 'react'
import LeftApplications from './LeftApplications'
import LeftMenu from './LeftMenu'
import './Left.css'


function Left() {
  return (
    <div className='Left' style={{backgroundColor:'#010422',color:"#4E4F62",width:'180px'}} >
    <div style={{margin:'0 0 50px 0'}}>
      <Dehaze style={{margin:"0 -120px 0 0"}}/>
    </div>
        <LeftMenu />
        <LeftApplications />
        <div>
            <p style={{fontSize:'12px',fontWeight:'600'}}  className='d-flex my-3 mx-2 '>LAYOUT</p>
            <div>
                <p style={{fontSize:'12px',fontWeight:'600'}}  className='d-flex my-3 mx-2 '>PAGES</p>
                <div className='d-flex justify-content-between'><div className='d-flex'>
                  <VerifiedUser className='m-1'/>
                  <h6 className='my-2'>Authentication</h6>
                </div>
                <p className='my-2 bg-primary rounded-4 text-white' style={{borderRadius:'50%',width:'25px',fontSize: "12px",
            fontWeight: "600",backgroundColor:'#010422',borderRadius:'50%'}} >8</p>
                </div>
                <div className='d-flex justify-content-between'><div className='d-flex'>
                    <ViewInAr className='m-1'/>
                    <h6 className='my-2'>Utility</h6>
                </div>
                <ExpandMore className='my-2' />
                </div>
            </div>
            <div>
                <p style={{fontSize:'12px',fontWeight:'600'}} className='d-flex my-3 mx-2'  >COMPONENTS</p>
                <div className='d-flex justify-content-between'><div className='d-flex'>
                   <Layers className='m-1'/>
                   <h6 className='my-2'>UI Elements</h6>
                </div>
                <ExpandMore className='my-2' />
                </div>
                <div className='d-flex justify-content-between'><div className='d-flex'>
                    <BorderColor className='m-1'/>
                    <h6 className='my-2'>Forms</h6>
                </div>
                <ExpandMore className='my-2' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Left