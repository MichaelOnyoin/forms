import logo from './logo.svg';
import './App.css';
import DownloadCSV from './DownloadCSV';
import CSV from './CSV';
import Form from './Form';

const data = [
  { name: 'Okello ', age: 20, profession: 'Engineer' },
  { name: 'Mary', age: 35, profession: 'Accountant' },
  { name: 'Ivan', age: 45, profession: 'Manager' },
];

//const data1= localStorage.getItem('data1')


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
        <div>
           <h1>Download CSV Example</h1>
           <DownloadCSV data={data} fileName="test" />
           <h1> CSV Example 2</h1>
           <CSV data={data} fileName={'Degen'} />
           <h3>
            Form
           </h3>
           <p>New Form</p>
           <Form/>
           <CSV data={data} fileName={'Form'}/>
        </div>
      </header>
    </div>
  );
}

export default App;
