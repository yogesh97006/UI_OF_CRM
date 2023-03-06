import React from 'react'
import { ExpandMore } from '@mui/icons-material'
import { Dropdown } from 'react-bootstrap'
import {GrAppsRounded} from 'react-icons/gr'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { grey } from '@mui/material/colors'

function LeftMenu() {
  return (
    <div>
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <div >
           <p className='d-flex mx-2 ' style={{fontSize:'12px',fontWeight:'600'}} >MENU</p>
           <Dropdown>
           <div>
            <Dropdown.Toggle className='d-flex mx-2 ' style={{width:'160px',backgroundColor:'#010422',border:'none'}}>      
            <GrAppsRounded id='iconmenu'  className='m-1 bg-white '/>
            <h6 className='m-1'>Dashboard</h6>
            </Dropdown.Toggle>
            </div>
            <div>
            <Dropdown.Menu style={{backgroundColor:'#010422',color:"#4E4F62"}}>
                <Dropdown.Item><h6>Ecommerce</h6></Dropdown.Item>
                <Dropdown.Item><h6>Saas</h6></Dropdown.Item>
                <Dropdown.Item><h6>Crypto</h6></Dropdown.Item>
            </Dropdown.Menu>
            </div>
            </Dropdown>
        </div>
        </ThemeProvider>
    </div>
  )
}

export default LeftMenu