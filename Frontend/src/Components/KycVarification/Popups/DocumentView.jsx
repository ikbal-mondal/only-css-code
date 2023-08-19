import React from 'react';
import './DocumentView.css'
import idFont from '../../../images/ID-Front.png'
// import idBack from '../../../images/ID-BACK.png'
// import textFont from '../../../images/TAX-Doc-Front.png'
// import textback from '../../../images/ID-BACK.png'
import addressProp from '../../../images/Address-Proof.png'


const DocumentView = ({showPopupState}) => {
  
    return (
        <div className='popup-Container'>
            <div className="popup-top">
                  <div className="popup-top-text-icon">
                  <div className="">
                   <h1 className='popup-title'>ID FRONT</h1> 
                   </div>
                  <div className="">
                  <i  class="fa-solid fa-xmark"></i>
                  </div>
                  </div>
                </div>

              <div className="document-contain">
             {
                idFont && <>
                <img className='document-image' src={idFont} alt="" />
                </>
             }
             
              </div>
            </div>
       
    );
};

export default DocumentView;