import React from "react";

const Week=()=>{
    return(
        <div>
            
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
     </div>
    
</body>
    </div>
    )

}

export default Week;