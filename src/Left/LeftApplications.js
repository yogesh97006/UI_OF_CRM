import {
  Chat,
  Event,
  InsertDriveFile,
  Inventory,
  LocalMall,
  Mail,
  Wifi,
  Work,ExpandMore
} from "@mui/icons-material";
import React from "react";

function LeftApplications() {
  return (
    <div>
      <div>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "600",
            margin: "130px 0 10px 0",
          }}
          className="d-flex mx-2 "
        >
          APPLICATIONS
        </p>
        <div className="d-flex">
          <Event className="m-1" />
          <h6 className="my-2">Calendar</h6>
        </div>
        <div className='d-flex justify-content-between'>
        <div className="d-flex">
          <Chat className="m-1" />
          <h6 className="my-2">Chat</h6>
        </div>
        <p className="text-danger mx-1"  style={{
            fontSize: "12px",
            fontWeight: "600",
          }}>Hot</p></div>
        <div className="d-flex">
          <Inventory className="m-1" />
          <h6 className="my-2">File Manager</h6>
        </div>
        <div className='d-flex justify-content-between' >
          <div className="d-flex">
            <LocalMall className="m-1" />
            <h6 className="my-2">Ecommerce</h6>
          </div>
          <ExpandMore  className='my-1' />
        </div>
        <div className='d-flex justify-content-between' >
          <div className="d-flex">
            <Mail className="m-1" />
            <h6 className="my-2">Email</h6>
          </div>
          <ExpandMore className='my-1' />
        </div>
        <div className='d-flex justify-content-between' >
          <div className="d-flex">
            <InsertDriveFile className="m-1" />
            <h6 className="my-2">Invoices</h6>
          </div>
          <ExpandMore  className='my-1' />
        </div>
        <div className='d-flex justify-content-between' >
          <div className="d-flex">
            <Work className="m-1" />
            <h6 className="my-2">Work</h6>
          </div>
          <ExpandMore  className='my-1' />
        </div>
        <div className='d-flex justify-content-between' >
          <div className="d-flex">
            <Wifi className="m-1" />
            <h6 className="my-2">Contacts</h6>
          </div>
          <ExpandMore  className='my-1' />
        </div>
      </div>
    </div>
  );
}

export default LeftApplications;
