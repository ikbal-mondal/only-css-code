import React from 'react';
import './ReasonForRejection.css'
const ReasonForRejection = () => {
    return (
        <div>
               <div className='popup-ContainerReason'>
           
           <div className="">
            <h1 className='reason-title'>Reason For Rejection !</h1>
            <div className="textAria">
       <textarea className='textInput' name="" id="" cols="45" rows="10" placeholder='Type here....'></textarea>
            </div>
            <div className="btn-contain">
                <button className='submit-btn'>Submit</button>
                <button className='cancel-btn'>Cancel</button>
            </div>
           </div>
        </div> 
        </div>
    );
};

export default ReasonForRejection;