import React from 'react';



const CSV=({data,fileName})=>{
    const exportCSV=()=>{
        var csvRow=[];
        var A=[['name','age','profession']];
        var re=data;

        for(var item=0;item<re.length;item++){
            A.push([re[item].name,re[item].age,re[item].profession])
        
        }

        for(var i=0;i<A.length;i++){
            csvRow.push(A[i].join(","));
        }
        var csvString=csvRow.join('\r\n');
        return csvString;

       
       };
       const download=()=>{
        const csvData = new Blob([exportCSV(data)], { type: 'text/csv' });
        const csvURL = URL.createObjectURL(csvData);
        const link = document.createElement('a');
        link.href = csvURL;
        link.target="_blank";
        link.download = `${fileName}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <button onClick={download}> CSV</button>
     );

}

export default CSV;