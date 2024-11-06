import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

const WeekReport = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    WIG:'',
    Lag:'',
    TLM:'',
    ALM:'',
    targets:'',
    achieved:'',
    movement:'',
    c_results:'',
    a_results:'',
    name: '',  
    email: '',
    age: '',
  });

  const [dataToExport, setDataToExport] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setDataToExport((prevData) => [...prevData, formData]);
    setFormData({ ALM:'',targets:'',achieved:'',movement:'',c_results:'',a_results:'',name: '', email: '', age: '' }); // Reset form after submission
  };

  return (
    <div>
      <h1>Weekly Accountability Form</h1>
      <form onSubmit={handleSubmit} style={rootDiv}>
        <label>
            Widely Important Goal WIG:
            <input type='text' name='WIG' value={'Increase service line revenues by UGX 500m during the financial year July 2024 to June 2025'} onChange={handleChange}  style={input}  />
        </label>
        <label>
            LAG Measures:
            <input type='text' name='Lag' value={'Win new business amounting to UGX 50m in August 2024'} onChange={handleChange} style={input} />
        </label>
        <label>
            Target Lead Measures :
            <input type='text' name='TLM' value={'•	Contact 2 prospective clients.'} onChange={handleChange}  style={input} />
        </label>
        <label>
            Actual Lead Measures :
            <input type='text' name='ALM' value={formData.ALM} onChange={handleChange} required style={input} />
        </label>
        <label>
            Previous Weekly Status :
            <label>Target Achieved</label>
            <input type='radio' name='targets' value={'Target Achieved'} onChange={handleChange}  />
            <label> Partial Achieved</label>
            <input type='radio' name='targets' value={'Partial Achieved'} onChange={handleChange}  />
            <label>Not Achieved</label>
            <input type='radio' name='targets' value={'Not Achieved'} onChange={handleChange}  />
           
        </label>
        <label>
            Current Week Status :
            <label>Target Achieved</label>
            <input type='radio' name='achieved' value={'Target Achieved'} onChange={handleChange} />
            <label>Partial Achieved</label>
            <input type='radio' name='achieved' value={'Partial Achieved'} onChange={handleChange} />
            <label>Not Achieved</label>
            <input type='radio' name='achieved' value={'Not Achieved'} onChange={handleChange} />
           
        </label>
        <label>
            Movement :
            <input type='text' name='movement' value={formData.movement} onChange={handleChange} style={input} />
        </label>
        <label>
            Check Actual Results Explanation :
            <input type='text' name='c_results' value={formData.c_results} onChange={handleChange} style={input} />
        </label>
        <label>
            Act Way Forward :
            <input type='text' name='a_results' value={formData.a_results} onChange={handleChange} required style={input} />
        </label>

        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required  style={input}/>
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} style={input} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} style={input} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit" style={button} >Submit</button>
      </form>

      <h2>Export Data</h2>
      <CSVLink
        data={dataToExport}
        headers={[
          { label: 'Widely Important Goal (WIG)', key: 'WIG' },
          { label: 'Lag Measures', key: 'Lag' },
          { label: 'Target Lead Measures', key: 'TLM' },
          { label: 'Actual Lead Measures', key: 'ALM' },
          { label: 'Previous Weekly Status', key: 'targets' },
          { label: 'Current Week Status', key: 'achieved' },
          { label: 'Movement', key: 'movement' },
          { label: 'Check Actual result Explanation', key: 'c_results' },
          { label: 'Act Way forward', key: 'a_results' },
          { label: 'Name', key: 'name' },
          { label: 'Email', key: 'email' },
          { label: 'Age', key: 'age' },
        ]}
        filename="weekly_data.csv"
      >
        Download CSV
      </CSVLink>
    </div>
  );
};

export default WeekReport;

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
            height: "200vh",
            };