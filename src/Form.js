//'use client'
import React from 'react';
import { useState } from 'react';


export const Form=()=>{
     const [name,setName]=useState('');
     const [age, setAge]=useState('')
     const [profession,setProfession]=useState('')
     const [data1, setData] = useState('');
  
    
    function Submit(){
    document.getElementById('foobar').addEventListener('submit', (e) => {
        e.preventDefault();
      
        const formData = new FormData(e.target);
        const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
          ...memo,
          [key]: value,
        }), {'name':name,'age':age,'profession':profession});
        //
        document.getElementById('output').innerHTML = JSON.stringify(data);
        console.log(data)
       
        setData(data)
        let data2 =JSON.parse(data1)
        localStorage.setItem('data1',data2)
        return data
      });
    }

    return(
        <div>
            <form id='foobar'  style={rootDiv}>
            <label >Name</label>
            <input style={input} type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Age</label>
            <input style={input} type='text' name='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <label>Profession</label>
            <input style={input} type='text' name='profession' value={profession} onChange={(e)=>setProfession(e.target.value)}/>
            <button style={button} type='submit' id='output' onClick={Submit} >
                Submit
            </button>
            </form>
          
          
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