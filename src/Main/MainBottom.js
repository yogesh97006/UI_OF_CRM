import { CChart } from '@coreui/react-chartjs'
import { Expand, ExpandMore, MoreHoriz } from '@mui/icons-material'
import React from 'react'


function MainBottom() {
  return (
    <div style={{margin:'40px 0 0 40px',display:'flex',}}>
    <div style={{width:'300px',margin:'0 15px 0 -10px',padding:'10px' ,borderRadius:'10px',  boxShadow: "0.1px 0.1px 0.1px 1px rgba(0,0,0,0.1)",}}>
        <div className='d-flex justify-content-between m-1'>
            <h6>User Activity</h6>
            <h6>Weekly <ExpandMore /></h6>
        </div>
        <div>
                <p style={{margin:'0 0 0 -160px'}}>This Month</p>
                <h6 style={{margin:'0 0 25px -190px'}}>16,543</h6>
        </div>
        <div>
        <CChart 
  type="line" 
  data={{
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Previous",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderColor: "rgba(255, 0, 0, 0.5)",
        pointBackgroundColor: "rgba(255, 0, 0, 0.5)",
        pointBorderColor: "#fff",
        data: [40,30,60,30,50,40]
      },
      {
        label: "Current",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        borderColor: "rgba(0, 0, 255, 0.5)",
        pointBackgroundColor: "rgba(0, 0, 255, 0.5)",
        pointBorderColor: "#fff",
        data: [20,50,40,80,40,50]
      },
    ],
  }}
/>
        </div>
    </div>
    <div style={{width:'300px',margin:'0 15px 0 15px',padding:'10px' ,borderRadius:'10px',  boxShadow: "0.1px 0.1px 0.1px 1px rgba(0,0,0,0.1)",}}>
        <div className='d-flex justify-content-between m-1'>
            <h6>Order Status</h6>
            <h6><MoreHoriz /></h6>
        </div>
        <div>
        <CChart
  type="doughnut"
  data={{
    datasets: [
      {
        backgroundColor: ['#3B76E1', '#F1F3F7', '#F36E6E'],
        data: [70, 20, 10],
      },
    ],
    labels: ['Completed', 'Pending', 'Cancel']
  }}
/>
 </div>
    </div>

    <div style={{width:'300px',margin:'0 15px 0 15px',padding:'10px' ,borderRadius:'10px',  boxShadow: "0.1px 0.1px 0.1px 1px rgba(0,0,0,0.1)",}}>
        <div className='d-flex justify-content-between m-1'>
            <h6>Top Product</h6>
            <h6>Monthly <ExpandMore /></h6>
        </div>
        <div>
              <div className='d-flex justify-content-between'>
                <div className='d-flex '>
                    <span className='bg-primary text-white p-1 rounded-2  mx-1 ' style={{height:'30px',width:'30px'}}>#1</span>
                    <div>
                        <p>Polo B-Tshirt </p>
                        <p style={{marginTop:'-20px'}}>$ 25.4</p>
                    </div>
                </div>
                <p className='mx-1 p-1 rounded-2 ' style={{backgroundColor:'#F5F6F8'}}>3.82K</p>
              </div>
        </div>
        <div>
              <div className='d-flex justify-content-between'>
                <div className='d-flex '>
                    <span className='bg-primary text-white p-1 rounded-2  mx-1 ' style={{height:'30px',width:'30px'}}>#2</span>
                    <div>
                        <p>Hoodie For Men </p>
                        <p style={{marginTop:'-20px'}}>$ 24.5</p>
                    </div>
                </div>
                <p className='mx-1 p-1 rounded-2 ' style={{backgroundColor:'#F5F6F8'}}>3.14K</p>
              </div>
        </div>
        <div>
              <div className='d-flex justify-content-between'>
                <div className='d-flex '>
                    <span className='bg-primary text-white p-1 rounded-2  mx-1 ' style={{height:'30px',width:'30px'}}>#3</span>
                    <div>
                        <p>Red Color Cap </p>
                        <p style={{marginTop:'-20px'}}>$ 22.5</p>
                    </div>
                </div>
                <p className='mx-1 p-1 rounded-2 ' style={{backgroundColor:'#F5F6F8'}}>2.84K</p>
              </div>
        </div>
        <div>
              <div className='d-flex justify-content-between'>
                <div className='d-flex '>
                    <span className='bg-primary text-white p-1 rounded-2  mx-1 ' style={{height:'30px',width:'30px'}}>#4</span>
                    <div>
                        <p>Pocket T-Shrit </p>
                        <p style={{marginTop:'-20px'}}>$ 22.5</p>
                    </div>
                </div>
                <p className='mx-1 p-1 rounded-2 ' style={{backgroundColor:'#F5F6F8'}}>2.06K</p>
              </div>
        </div>
    </div>
    </div>
  )
}

export default MainBottom