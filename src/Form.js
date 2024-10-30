//'use client'
import React from 'react';
import { useState } from 'react';

export const Form=()=>{
     const [name,setName]=useState('');
     const [age, setAge]=useState('')
     const [profession,setProfession]=useState('')
     const [, setData] = useState();
  
    
    function Submit(){
    document.getElementById('foobar').addEventListener('submit', (e) => {
        e.preventDefault();
      
        const formData = new FormData(e.target);
        const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
          ...memo,
          [key]: value,
        }), {});
        document.getElementById('output').innerHTML = JSON.stringify(data);
        console.log(data)
       // localStorage.setItem('data1',data)
        setData(data)
        return data
      });
    }

    return(
        <div>
            <form id='foobar'>
            <label>Name</label>
            <input type='text' name='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            {/* <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /> */}
            
            <label>Age</label>
            <input type='text' name='Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <label>Profession</label>
            <input type='text' name='Age' value={profession} onChange={(e)=>setProfession(e.target.value)}/>
            <button type='submit' id='output' onClick={Submit} >
                Send
            </button>
            </form>
          {/* <pre id='output'>Input some value and submit</pre> */}
          {/* <p>
            {data1}
          </p> */}
        </div>

    )

}
export default Form