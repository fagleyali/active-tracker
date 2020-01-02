import React from 'react';
import MUIDataTable from "mui-datatables";
import data from '../../Data/data';

export default function MaterialTableDemo() {
    const columns = ["Clinic","DOI","Last","First","Address","City","ST","ZIP","Phone","Email","DOB","Attorney","Marketer","LOP","First Visit","Visits","Last Visit","Comments","Status","Account","XRAYS","MD","MRI","ORTHO","Neuro","PPE","Others"]
    
    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

  return (
    <MUIDataTable
        title={"ACT Patients List"}
        data={data}
        columns={columns}
        options={options}
      />
  );
}
