import React from 'react';
import './Verify.css'
const Verify = () => {
    return (
        <div className='popup-ContainerVerify'>
           
           <div className="">
            <h1 className='Verify-title'>Are you sure you want to <span style={{color:'#029A36',fontWeight:'600'}}>Verify</span> this KYC ?</h1>
            <div className="btn-contain">
                <button className='verify-btn-yes'>Yes</button>
                <button className='verify-btn-no'>No</button>
            </div>
           </div>
        </div>
    );
};

export default Verify;