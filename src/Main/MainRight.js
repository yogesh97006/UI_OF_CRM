import { Info } from '@mui/icons-material'
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './MainLeft.css'
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Profile from "../img/Profile.png"


function MainRight(props) {
  const [progress, setProgress] = useState(10);

 useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

MainRight.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};


  return (
    <div className='MainRight' style={{width:'90px',margin:'0 0 0 -30px'}}>
    <div>
         <img src='' alt='' />
         <div>
         <img src={Profile} style={{width:'100px'}} alt='' />
         <h6>Goku</h6>
         <p>Product Designer</p>
         <div className='d-flex justify-content-between'>
         <div>
         <h6>1,269</h6>
            <p>Products</p>
         </div>
         <div>
         <h6>5.2k</h6>
            <p>Followers</p>
         </div>
         </div>
         </div>
    </div>
    <hr />
    <div>
        <div>
            <h6>Earning</h6>
            <Info />
        </div>
       <h6>76%</h6>
       <h6>$26,256</h6>
       <p>Earning This Month</p>
       <div className='d-flex justify-content-between'>
        <p className='text-success'>+2.56%</p>
        <p>From Previous period</p>
       </div>
    </div>
    <hr />
    <div>
      <h6 style={{margin:'0 0 25px -180px'}}>Recent Activity</h6>
      <div className='d-flex'>
        <p style={{width:'30px',backgroundColor:'grey',opacity:'0.5',padding:'5px'}}>12
          sep 
        </p>
        <p>Responded to Need 'Volunteer Activites'</p>
      </div>
            <div className='d-flex'>
        <p style={{width:'30px',backgroundColor:'grey',opacity:'0.5',padding:'5px'}}>11
          sep 
        </p>
        <p>Everyone would be disirable</p>
      </div>
            <div className='d-flex'>
        <p style={{width:'30px',backgroundColor:'grey',opacity:'0.5',padding:'5px'}}>10
          sep 
        </p>
        <p>Joined the group board manish formued</p>
      </div>
    </div>
    </div>
  )
}

export default MainRight