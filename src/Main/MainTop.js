import { People, PieChart,ShoppingBag } from "@mui/icons-material";
import React from "react";

function MainTop() {
  return (
    <div className="d-flex">
      <div style={{width:'250px',border:'0.1px solid white',borderRadius:'10px',boxShadow:'0.1px 0.1px 0.1px 1px rgba(0,0,0,0.1)',padding:'0 5px'}} className='d-flex justify-content-between mx-5 my-3'>
        <div className="d-flex">
          <div className="bg-primary align-items-center rounded-2 my-2" style={{width:'40px',height:"40px"}}>
            <PieChart className="text-white" fontSize="large"/>
          </div>
          <div className="mx-1 my-2" >
            <p >Revenue</p>
            <h6 style={{margin:'-15px 0 0 0'}}>$21,456</h6>
          </div>
        </div>
        <p className="my-4 text-success" >+2.56%</p>
      </div>
      <div style={{width:'250px',border:'0.1px solid white',borderRadius:'10px',boxShadow:'0.1px 0.1px 0.1px 1px rgba(0,0,0,0.1)',padding:'0 5px'}} className='d-flex justify-content-between mx-5 my-3'>
        <div className="d-flex">
          <div className="bg-primary align-items-center rounded-2 my-2" style={{width:'40px',height:"40px"}}>
            <ShoppingBag className="text-white" fontSize="large"/>
          </div>
          <div className="mx-1 my-2" >
            <p >Orders</p>
            <h6 style={{margin:'-15px 0 0 0'}}>5,643</h6>
          </div>
        </div>
        <p className="my-4 text-danger" >-0.82%</p>
      </div>
      <div style={{width:'250px',border:'0.1px solid white',borderRadius:'10px',boxShadow:'0.1px 0.1px 0.1px 1px rgba(0,0,0,0.1)',padding:'0 5px'}} className='d-flex justify-content-between mx-5 my-3'>
        <div className="d-flex">
          <div className="bg-primary align-items-center rounded-2 my-2" style={{width:'40px',height:"40px"}}>
            <People className="text-white" fontSize="large"/>
          </div>
          <div className="mx-1 my-2" >
            <p >Customers</p>
            <h6 style={{margin:'-15px 0 0 -20px'}}>45,254</h6>
          </div>
        </div>
        <p className="my-4 text-danger" >-1.04%</p>
      </div>
    </div>
  );
}

export default MainTop;
