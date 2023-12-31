import React, { useState } from 'react';
import './Reject.css'
import ReasonForRejection from '../ReasonForRejection/ReasonForRejection';
const Reject = ({closeModal}) => {
  const [openReason, setopenReason] = useState("");

  const closeModalReson = () => {
    setopenReason(false);
  
  };

  return (
        <div>
            <div className='popup-ContainerReject'>
            {openReason && (
        <ReasonForRejection closeModalReson={closeModalReson} showPopupState={[openReason, setopenReason]}></ReasonForRejection>
      )}
           <div className="">
            <h1 className='reject-title'>Are you sure you want to <span style={{color:'#FF0000',fontWeight:'600'}}>Reject</span> this KYC ?</h1>
            <div className="btn-contain">
                <button  onClick={() => {
                      setopenReason(true); 
                      // closeModal(false) 
                    }} className='verify-btn-yes'>Yes</button>
                <button onClick={() => {
         closeModal(false)}} className='verify-btn-no'>No</button>
            </div>
           </div>
        </div>
        </div>
    );
};

export default Reject;