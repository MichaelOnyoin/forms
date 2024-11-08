import React, {useState} from 'react';
import {SmallContent} from './Content';
import { PopupContainer } from './components/PopUp';

export default function Case(){
    const [open, setOpen]= useState(false);
    const [content, setContent]= useState('small');



    return(
        <div>
            <button type='button' onClick={()=>setOpen(!open)}>
                Toggle Container
            </button>
            <button type='button' onClick={()=>setContent('small')}>
                Small Content
            </button>
            <button type='button' onClick={()=>setContent('large')}>
                Large Content
            </button>

            <PopupContainer>
                {content === 'small' && <SmallContent/>}
                {/* {content === 'small' && <LargeContent/>} */}
            </PopupContainer>

        </div>
    )
} 