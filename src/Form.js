//'use client'
import React from 'react';
import { useState } from 'react';
import CSV from './CSV';

export const Form=()=>{
     const [name,setName]=useState('');
     const [age, setAge]=useState('')
     const [profession,setProfession]=useState('')
     const [data1, setData] = useState();
  
    
    function Submit(){
    document.getElementById('foobar').addEventListener('submit', (e) => {
        //e.preventDefault();
      
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
            <form id='foobar' className='flex item-center green' class={rootDiv}>
            <label >Name</label>
            <input class={input} type='text' name='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            {/* <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /> */}
            
            <label>Age</label>
            <input class={input} type='text' name='Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <label>Profession</label>
            <input class={input} type='text' name='Age' value={profession} onChange={(e)=>setProfession(e.target.value)}/>
            <button class={button} type='submit' id='output' onClick={Submit} >
                Submit
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

const input = {
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    outline: "none",
    border: "2px solid grey",
    fontSize: 17,
    };

    const button = {
        width: 325,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        cursor: "pointer",
        fontSize: 17,
        color: "white",
        backgroundColor: "#2986cc",
        border: "none",
        };

        const rootDiv = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            };