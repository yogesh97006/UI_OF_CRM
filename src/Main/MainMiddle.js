
import { ExpandMore } from "@mui/icons-material";
import Chart from "./Chart";
import './MainLeft.css'

import Example from "./Chart";
 
function MainMiddle() {
 
  return (
    <div
      className="container"
      style={{
        flex: "7",
        width: "1000px",
        margin: "0 0 0 10px",
        boxShadow: "0.1px 0.1px 0.1px 1px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <div className="d-flex justify-content-between my-3">
        <h6> Overview</h6>
        <h6>
          Sort By: Yearly <ExpandMore />
        </h6>
      </div>
      <div className="d-flex">
        <div >
          <div className=" justify-content-start">
            <h6 className="d-flex my-3">This Month</h6>
            <div className="d-flex">
              <h4 className="mx-1">$24,568</h4>
              <p
                className="mx-1 my-2 text-success"
                style={{ fontSize: "12px", fontWeight: "600" }}
              >
                +2.65%
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div style={{ margin: "10px 10px 0 0" }}>
                <p style={{ fontSize: "12px", fontWeight: "600" }}>Orders</p>
                <p style={{ fontWeight: "bold", marginTop: "-15px" }}>5,643</p>
              </div>
              <div style={{ margin: "10px 10px 0 40px" }}>
                <p style={{ fontSize: "12px", fontWeight: "600" }}>Sales</p>
                <p style={{ fontWeight: "bold", marginTop: "-15px" }}>16,273</p>
              </div>
            </div>
            <div className="d-flex">
              <div style={{ margin: "10px 10px 0 0" }}>
                <p style={{ fontSize: "12px", fontWeight: "600" }}>
                  Orders Value
                </p>
                <p style={{ fontWeight: "bold", marginTop: "-15px" }}>12.03%</p>
              </div>
              <div style={{ margin: "10px 10px 0 15px" }}>
                <p style={{ fontSize: "12px", fontWeight: "600" }}>Customers</p>
                <p style={{ fontWeight: "bold", marginTop: "-15px" }}>21,456</p>
              </div>
            </div>
            <div className="d-flex">
              <div style={{ margin: "10px 10px 0 0" }}>
                <p style={{ fontSize: "12px", fontWeight: "600" }}>Income</p>
                <p style={{ fontWeight: "bold", marginTop: "-15px" }}>
                  $35,652
                </p>
              </div>
              <div style={{ margin: "10px 10px 0 20px" }}>
                <p style={{ fontSize: "12px", fontWeight: "600" }}>Expenses</p>
                <p style={{ fontWeight: "bold", marginTop: "-15px" }}>
                  $12,258
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
        {/* <Example /> */}
        <Chart />
        </div>
      </div>
    </div>
    
  );
}

export default MainMiddle;
