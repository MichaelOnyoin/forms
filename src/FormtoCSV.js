import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

const FormToCSV = () => {
  // State to store form data
  const [formData, setFormData] = useState({
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
    setFormData({ name: '', email: '', age: '' }); // Reset form after submission
  };

  return (
    <div>
      <h1>Form to CSV</h1>
      <form onSubmit={handleSubmit} style={rootDiv}>
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
          { label: 'Name', key: 'name' },
          { label: 'Email', key: 'email' },
          { label: 'Age', key: 'age' },
        ]}
        filename="form_data.csv"
      >
        Download CSV
      </CSVLink>
    </div>
  );
};

export default FormToCSV;

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
            height: "80vh",
            };
