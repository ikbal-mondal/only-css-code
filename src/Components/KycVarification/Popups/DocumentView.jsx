import React, { useState } from 'react';
import './DocumentView.css'
import idFont from '../../../images/ID-Front.png'



const DocumentView = ({showPopupState,closeModal}) => {



    return (
        <div className='popup-Container'>
            <div className="popup-top">
                  <div className="popup-top-text-icon">
                  <div className="">
                   <h1 className='popup-title'>ID FRONT</h1> 
                   </div>
                  <div className="">
                  <i onClick={() => {
                    closeModal(false);
                  }}   class="fa-solid fa-xmark"></i>
                  </div>
                  </div>
                </div>

              <div className="document-contain">
             
                <img className='document-image' src={idFont} alt="" />
                
             
              </div>
            </div>
       
    );
};

export default DocumentView;