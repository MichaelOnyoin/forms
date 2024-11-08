import React from 'react';


export default function Form(){
    return (
        <div className='container mx-auto'>
        <head>
            <h1>Widely Important Goal</h1>
            {/* <script src="https://cdn.tailwindcss.com"></script> */}
        </head>
        <body class="bg-white text-gray-900 font-sans">
            <div class="max-w-2xl mx-auto p-8">
                <h1 class="text-2xl font-semibold mb-2">Widely Important Goal</h1>
                <p class="text-gray-700 mb-8">Increase service line revenues by UGX 500m during the financial year July 2024 to June 2025</p>
                
                <div class="mb-8">
                    <h2 class="text-lg font-medium mb-1">1. Lag Measures</h2>
                    <p class="text-gray-700 mb-4">Win new business amounting to UGX 50m in November 2024</p>
                    <input type="text" placeholder="Enter your answer" class="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-700"/>
                </div>
                
                <div>
                    <h2 class="text-lg font-medium mb-1">2. Target Lead Measures</h2>
                    <p class="text-gray-700 mb-4">Actual Lead Measures</p>
                    <input type="text" placeholder="Enter your answer" class="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-700"/>
                </div>
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-4">3. Weekly Status</h3>
                    <div class="grid grid-cols-4 gap-4 items-center">
                        <div></div>
                        <div class="text-center font-semibold">Target Achieved</div>
                        <div class="text-center font-semibold">Partially Achieved</div>
                        <div class="text-center font-semibold">Not Achieved</div>
                    </div>
                    <div class="grid grid-cols-4 gap-4 items-center bg-gray-100 p-4 mt-2">
                        <div class="font-semibold">Previous Week</div>
                        <div class="text-center"><input type="radio" name="previous_week" /></div>
                        <div class="text-center"><input type="radio" name="previous_week" /></div>
                        <div class="text-center"><input type="radio" name="previous_week" /></div>
                    </div>
                    <div class="grid grid-cols-4 gap-4 items-center mt-2">
                        <div class="font-semibold">Current Week</div>
                        <div class="text-center"><input type="radio" name="current_week" /></div>
                        <div class="text-center"><input type="radio" name="current_week" /></div>
                        <div class="text-center"><input type="radio" name="current_week" /></div>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-4">4. Movement</h3>
                        <div class="flex items-center mb-2">
                            <input type="radio" name="movement" class="mr-2" />
                            <label>Progress</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input type="radio" name="movement" class="mr-2" />
                            <label>No progress</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" name="movement" class="mr-2" />
                            <label>Down</label>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </div>
    )
}

{/* <html>
<head>
    <title>Weekly Status and Movement</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-800 font-sans">
    <div class="p-8">
        <div class="mb-6">
            <h3 class="text-lg font-semibold mb-4">3. Weekly Status</h3>
            <div class="grid grid-cols-4 gap-4 items-center">
                <div></div>
                <div class="text-center font-semibold">Target Achieved</div>
                <div class="text-center font-semibold">Partially Achieved</div>
                <div class="text-center font-semibold">Not Achieved</div>
            </div>
            <div class="grid grid-cols-4 gap-4 items-center bg-gray-100 p-4 mt-2">
                <div class="font-semibold">Previous Week</div>
                <div class="text-center"><input type="radio" name="previous_week" /></div>
                <div class="text-center"><input type="radio" name="previous_week" /></div>
                <div class="text-center"><input type="radio" name="previous_week" /></div>
            </div>
            <div class="grid grid-cols-4 gap-4 items-center mt-2">
                <div class="font-semibold">Current Week</div>
                <div class="text-center"><input type="radio" name="current_week" /></div>
                <div class="text-center"><input type="radio" name="current_week" /></div>
                <div class="text-center"><input type="radio" name="current_week" /></div>
            </div>
        </div>
        <div>
            <h3 class="text-lg font-semibold mb-4">4. Movement</h3>
            <div class="flex items-center mb-2">
                <input type="radio" name="movement" class="mr-2" />
                <label>Progress</label>
            </div>
            <div class="flex items-center mb-2">
                <input type="radio" name="movement" class="mr-2" />
                <label>No progress</label>
            </div>
            <div class="flex items-center">
                <input type="radio" name="movement" class="mr-2" />
                <label>Down</label>
            </div>
        </div>
    </div> */}