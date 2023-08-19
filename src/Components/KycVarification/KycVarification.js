import React, { useState } from 'react';
import  "./KycVarification.css"
import DocumentView from './Popups/DocumentView';

const KycVarification = () => {

    const [showDocumentView, setDocumentView] = useState('');

    const tableData =[
        {
           SlNO:'1' ,
           NumberID:'VT-123456',
           Country:'india',
           IDTitle:'AadhaarCard',
           IDNumber:'123456789012	',
           IdFront:'View',
           IDBack:'View',
           TaxDocTitle:'PAN CARD',
           TaxDocNumber:'ABCTY1234D',
           TaxDocFront:'View',
           TaxDocBack:'View',
           AddressProof:'View',

        }
    ]

    return (
        <div className='container-wrapper'>
       {showDocumentView && <DocumentView  showPopupState={[showDocumentView, setDocumentView]}></DocumentView>}
     
  <div className="kyc-select-date-contain">
    <h1 className='kyc-title'>KYC VERIFICATION</h1>
    <div className="">

   <span className='date-text'>From Date:</span> <input className='date-input' type="date" />
   <span className='date-text'> To Date :</span> <input className='date-input' type="date" />
    <button className='date-apply-btn'>Apply</button>
    </div>
  </div>
 

            {/* table start */}
            {/* flex border py-1 items-center mb-3 rounded px-[5px] justify-between w-[300px] */}
            <div className="Search-bar">
         <span>Search</span>
          <input style={{border:'none',padding: '3px',}} className="py-1" type="text" />
           <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
         </div>
          <div className="table-container">
          <table id="kycTable">
  <tr>
    <th>SL No:</th>
    <th>Number ID</th>
    <th>Country</th>
    <th>ID Title</th>
    <th>ID Number</th>
    <th>ID Front</th>
    <th>ID Back</th>
    <th>Tax Doc .Title</th>
    <th>Tax Doc . Number</th>
    <th>Tax Doc . Front</th>
    <th>Tax Doc . Back</th>
    <th>Address Proof</th>
    <th className='action-text'>Action</th>
  </tr>
  <tr>
    {
        tableData.map(data => <>
                  <td>{data.SlNO}</td>
    <td>{data.NumberID}</td>
    <td>{data.Country}</td>
    <td>{data.IDTitle}</td>
    <td>{data.IDNumber}</td>	
  <td className='View' onClick={() => {setDocumentView(true)}}>{data.IdFront}</td>
    <td className='View' onClick={() => {setDocumentView(true)}}>{data.IDBack}</td>
    <td>{data.TaxDocTitle}</td>
    <td>{data.TaxDocNumber}</td>
    <td className='View' onClick={() => {setDocumentView(true)}}>{data.TaxDocFront}</td>
    <td className='View' onClick={() => {setDocumentView(true)}}>{data.TaxDocBack}</td>
    <td className='View' onClick={() => {setDocumentView(true)}}>{data.AddressProof}</td>
    <td>
        <button className='Verify-btn'>Verify</button>
        <button className='Reject-btn'>Reject</button>
    </td>

        </>)
    }

    
  </tr>
  
  
  
</table>
{/* table end */}

          </div>
          <div className="Pagination-container">
     <span className="mr-4">
         Showing <strong  style={{color:'#007BFF'}}>1</strong> of 46
       </span>
       <div className="">
          <i className="fa-solid fa-angles-left page-box-arrow px-3  text-[#0388D4]"></i>
         <span style={{background:'#007BFF',color:'white'}} className=" page-box ">1</span>
          <span className="page-box">2</span>
          <span className="page-box">3</span>
        <span className="page-box">4</span>
        <span className="page-box">5</span>
         <i className="fa-solid page-box-arrow px-3 fa-angles-right  text-[#0388D4]"></i>
        </div>
      </div>
      
        </div>
    );
};

export default KycVarification;
