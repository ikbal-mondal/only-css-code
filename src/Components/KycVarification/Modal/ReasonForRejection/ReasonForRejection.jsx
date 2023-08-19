import React from 'react';
import './ReasonForRejection.css'
const ReasonForRejection = ({closeModalReson}) => {
    return (
        <div>
               <div className='popup-ContainerReason'>
           
           <div className="">
            <h1 className='reason-title'>Reason For Rejection !</h1>
            <div className="textAria">
       <textarea className='textInput' name="" id="" cols="45" rows="10" placeholder='Type here....'></textarea>
            </div>
            <div className="btn-contain">
                <button onClick={() => {
    closeModalReson(false)}} className='submit-btn'>Submit</button>
                <button onClick={() => {
    closeModalReson(false)}} className='cancel-btn'>Cancel</button>
            </div>
           </div>
        </div> 
        </div>
    );
};

export default ReasonForRejection;