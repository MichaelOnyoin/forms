import logo from './logo.svg';
import './App.css';
import CSV from './CSV';
import Form from './Form';
import FormToCSV from './FormtoCSV';
import WeekReport from './WeekReport';
//import Case from './Pop';
import Week from './Form2';

const data = [
  { name: 'Okello ', age: 20, profession: 'Engineer' },
  { name: 'Mary', age: 35, profession: 'Accountant' },
  { name: 'Ivan', age: 45, profession: 'Manager' },
];


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  
        <div>
           
           <h1> CSV Example 2</h1>
           <CSV data={data} fileName={'Report2'} />
           <h3>
            Form
           </h3>
          
           
           <h4>
            CSV To Form
           </h4>
           <FormToCSV/>
        </div>
        <div>
          <h4>Weekly Report</h4>
          <WeekReport/>
        </div>
        {/* <div>
          <p>Pop up</p>
          <Case/>
        </div> */}
      <Form/>

      

    </div>
  );
}

export default App;
