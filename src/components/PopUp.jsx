import React from 'react';


export const PopupContainer=({open,setClose,children})=>{
    return(
        <div
         className={`PopupContainer ${open ? 'open': 'close'}`} 
        >
            <button
             onClick={()=>setClose()}
             className='closeButton'
             type="button">
                <img src="close" alt="" srcset="" height={'15px'} width={'15px'} />
            </button>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}