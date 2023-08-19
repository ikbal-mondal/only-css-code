import React, { useState } from 'react';
import './Reject.css'
import ReasonForRejection from '../ReasonForRejection/ReasonForRejection';
const Reject = () => {
  const [openReason, setopenReason] = useState("");

    return (
        <div>
           
           
      
            <div className='popup-ContainerReject'>
            {openReason && (
        <ReasonForRejection showPopupState={[openReason, setopenReason]}></ReasonForRejection>
      )}
           <div className="">
            <h1 className='reject-title'>Are you sure you want to <span style={{color:'#FF0000',fontWeight:'600'}}>Reject</span> this KYC ?</h1>
            <div className="btn-contain">
                <button onClick={() => {
                      setopenReason(true)
                    }} className='verify-btn-yes'>Yes</button>
                <button className='verify-btn-no'>No</button>
            </div>
           </div>
        </div>
        </div>
    );
};

export default Reject;