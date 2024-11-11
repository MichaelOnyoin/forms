import React,{useState} from 'react';
import { CSVLink } from 'react-csv';


export default function Form(){
    // State to store form data
  const [formData, setFormData] = useState({
    WIG:'Increase service line revenues by UGX 500M during the financial year July 2024 to June 2025',
    Lag:'',
    TLM:'',
    ALM:'',
    previous_week:'',
    current_week:'',
    movement:'',
    c_results:'',
    a_results:'',
   
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
    setFormData({ Lag:'',TLM:'',ALM:'',previous_week:'',current_week:'',movement:'',c_results:'',a_results:'' }); // Reset form after submission
  };

    return (
        <div className='container mx-auto'>
        
        <form onSubmit={handleSubmit} className="bg-white text-gray-900 font-sans border-solid border 1">
            <section>
            <div className="max-w-2xl mx-auto p-8">
                <h1 className="text-2xl font-semibold mb-2"> 1st Section: Widely Important Goal</h1>
                <p className="text-gray-700 mb-8">Increase service line revenues by UGX 500m during the financial year July 2024 to June 2025</p>
                <input type='hidden' name='WIG' value={formData.WIG} />
                <div className="mb-8 hover:bg-gray-200">
                    <h2 className="text-lg font-medium mb-1 flex">1. Lag Measures</h2>
                    <p className="text-gray-700 mb-4 flex">Win new business amounting to UGX 50m in November 2024</p>
                    <input type="text" placeholder="Enter your answer" name='Lag' value={formData.Lag} className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-700 mb-1" onChange={handleChange}/>
                </div>
                
                <div className='mb-8 hover:bg-gray-200'>
                    <h2 className="text-lg font-medium mb-1 flex">2. Lead Measures</h2>
                    <p className="text-gray-700 mb-4 flex">i. Target Lead Measures</p>
                    <input type="text" placeholder="Enter your answer" name='TLM' value={formData.TLM} className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-700" onChange={handleChange}/>
                    <p className="text-gray-700 mb-4 flex">ii. Actual Lead Measures</p>
                    <input type="text" placeholder="Enter your answer" name='ALM'value={formData.ALM} className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-700" onChange={handleChange}/>
                </div>
                <div className="mb-6 ">
                    <h3 className="text-lg font-semibold mb-4 flex">3. Weekly Status</h3>
                    <div className="grid grid-cols-4 gap-4 items-center ">
                        <div></div>
                        <div className="text-center font-semibold">Target Achieved</div>
                        <div className="text-center font-semibold">Partially Achieved</div>
                        <div className="text-center font-semibold">Not Achieved</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center bg-gray-100 p-4 mt-2">
                        <div className="font-semibold">Previous Week</div>
                        <div className="text-center"><input type="radio" name="previous_week" value={'Target Achieved'} onChange={handleChange} /></div>
                        <div className="text-center"><input type="radio" name="previous_week" value={'Partially Achieved'} onChange={handleChange}/></div>
                        <div className="text-center"><input type="radio" name="previous_week" value={'Not Achieved'} onChange={handleChange}/></div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center mt-2 mb-6">
                        <div className="font-semibold">Current Week</div>
                        <div className="text-center"><input type="radio" name="current_week" value={'Target Achieved'} onChange={handleChange} /></div>
                        <div className="text-center"><input type="radio" name="current_week" value={'Partially Achieved'} onChange={handleChange} /></div>
                        <div className="text-center"><input type="radio" name="current_week" value={'Not Achieved'} onChange={handleChange} /></div>
                    </div>
                    <div className='hover:bg-gray-200'>
                        <h3 className="text-lg font-semibold mb-4 flex ">4. Movement</h3>
                        <div className="flex items-center mb-2">
                            <input type="radio" name="movement" value={'Progress'} className="mr-2" onChange={handleChange}/>
                            <label>Progress</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" name="movement" value={'No Progress'} className="mr-2" onChange={handleChange}/>
                            <label>No progress</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" name="movement" value={'Regression'} className="mr-2 " onChange={handleChange} />
                            <label>Down</label>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="mb-6 hover:bg-gray-200">
                        <div className="flex items-center mb-2 font-medium">
                            <span className="mr-2">5.</span>
                            <span className="mr-4">Check</span>
                            <span>(Actual results explanation)</span>
                        </div>
                        <textarea className="w-full h-24 p-2 bg-gray-100 border border-gray-300 rounded" placeholder="Enter your answer" name='c_results' value={formData.c_results} onChange={handleChange}></textarea>
                    </div>
                    <div className='hover:bg-gray-200'>
                        <div className="flex items-center font-medium mb-2">
                            <span className="mr-2">6.</span>
                            <span className="mr-4">Act (Way Forward)</span>
                        </div>
                        <textarea className="w-full h-24 p-2 bg-gray-100 border border-gray-300 rounded" placeholder="Enter your answer" name='a_results' value={formData.a_results} onChange={handleChange}></textarea>
                    </div>
                </div>
            </div>
            </section>
            <section>
            <div className="max-w-2xl mx-auto p-8">
                <h3 className="text-2xl font-semibold mb-2 flex"> 2nd Section: Collect UGX 700m between during the period July 2024 to June 2025</h3>
                {/* <p className="text-gray-700 mb-8">Collect UGX 58m in August 2024.</p> */}
                <input type='hidden' name='WIG' value={'Collect UGX 700m between during the period July 2024 to June 2025'}/>
                <div className="mb-8 hover:bg-gray-200">
                    <h2 className="text-lg font-medium mb-1 flex">1. Lag Measures</h2>
                    <p className="text-gray-700 mb-4 flex">Collect UGX 58m in August 2024.</p>
                    <input type="text" placeholder="Enter your answer" name='Lag' value={'Collect UGX 58M in Aug 2024'} className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-700 mb-1"/>
                </div>
                <div className='mb-8 hover:bg-gray-200'>
                    <h2 className="text-lg font-medium mb-1 flex ">2. Lead Measures</h2>
                    <p className="text-gray-700 mb-4 flex">i. Target Lead Measures</p>
                    <input type="text" placeholder="Enter your answer" name='TLM' value={formData.TLM} className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-700"/>
                    <p className="text-gray-700 mb-4 flex">ii. Actual Lead Measures</p>
                    <input type="text" placeholder="Enter your answer" name='ALM' value={formData.ALM} className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-700"/>
                </div>
            </div>
            </section>
            <button type='submit' style={button} className='right-0' >Submit </button>
        </form>

        {/* <h3>Export Data</h3> */}
      <CSVLink
        data={dataToExport}
        className='btn-primary'
        headers={[
          { label: 'Widely Important Goal (WIG)', key: 'WIG' },
          { label: 'Lag Measures', key: 'Lag' },
          { label: 'Target Lead Measures', key: 'TLM' },
          { label: 'Actual Lead Measures', key: 'ALM' },
          { label: 'Previous Weekly Status', key: 'previous_week' },
          { label: 'Current Week Status', key: 'current_week' },
          { label: 'Movement', key: 'movement' },
          { label: 'Check (Actual results Explanation)', key: 'c_results' },
          { label: 'Act Way forward', key: 'a_results' },
          
        ]}
        filename="weekly_report3.csv"
      >
        Download CSV
      </CSVLink>
        </div>
    )
}

const button = {
    width: 125,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    cursor: "pointer",
    fontSize: 17,
    color: "white",
    backgroundColor: "#2986cc",
    border: "none",
    };

/* <html>
<head>
    <title>Weekly Status and Movement</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body className="bg-white text-gray-800 font-sans">
    <div className="p-8">
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">3. Weekly Status</h3>
            <div className="grid grid-cols-4 gap-4 items-center">
                <div></div>
                <div className="text-center font-semibold">Target Achieved</div>
                <div className="text-center font-semibold">Partially Achieved</div>
                <div className="text-center font-semibold">Not Achieved</div>
            </div>
            <div className="grid grid-cols-4 gap-4 items-center bg-gray-100 p-4 mt-2">
                <div className="font-semibold">Previous Week</div>
                <div className="text-center"><input type="radio" name="previous_week" /></div>
                <div className="text-center"><input type="radio" name="previous_week" /></div>
                <div className="text-center"><input type="radio" name="previous_week" /></div>
            </div>
            <div className="grid grid-cols-4 gap-4 items-center mt-2">
                <div className="font-semibold">Current Week</div>
                <div className="text-center"><input type="radio" name="current_week" /></div>
                <div className="text-center"><input type="radio" name="current_week" /></div>
                <div className="text-center"><input type="radio" name="current_week" /></div>
            </div>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-4">4. Movement</h3>
            <div className="flex items-center mb-2">
                <input type="radio" name="movement" className="mr-2" />
                <label>Progress</label>
            </div>
            <div className="flex items-center mb-2">
                <input type="radio" name="movement" className="mr-2" />
                <label>No progress</label>
            </div>
            <div className="flex items-center">
                <input type="radio" name="movement" className="mr-2" />
                <label>Down</label>
            </div>
        </div>
    </div> 
    
    <html>
<head>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        function App() {
            return (
                <div classNameName="p-4">
                    <div classNameName="mb-6">
                        <div classNameName="flex items-center mb-2">
                            <span classNameName="mr-2">5.</span>
                            <span classNameName="mr-4">Check</span>
                            <span>(Actual results explanation)</span>
                        </div>
                        <textarea classNameName="w-full h-24 p-2 bg-gray-100 border border-gray-300 rounded" placeholder="Enter your answer"></textarea>
                    </div>
                    <div>
                        <div classNameName="flex items-center mb-2">
                            <span classNameName="mr-2">6.</span>
                            <span classNameName="mr-4">Act (Way Forward)</span>
                        </div>
                        <textarea classNameName="w-full h-24 p-2 bg-gray-100 border border-gray-300 rounded" placeholder="Enter your answer"></textarea>
                    </div>
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
    
    
    
    
    
    */