import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import data from '../../Data/data';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';

const history = createBrowserHistory({forceRefresh:true});

export default function MaterialTableDemo() {
    const initialState = {
      id: '',
    }
    const [state, setState] = useState(initialState)
    const columns = ["Clinic","DOI","Last","First","Address","City","ST","ZIP","Phone","Email","DOB","Attorney","Marketer","LOP","First Visit","Visits","Last Visit","Comments","Status","Account","XRAYS","MD","MRI","ORTHO","Neuro","PPE","Others"]
    const data1 = data.filter(e=>e[0] ==="Irving")
    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      onRowClick: (row, id)=>{
        console.log(id)
        setState(state=>state.id=id)
        // <Link href='/patientdetails' 
        history.push(`/patientdetails/${id.dataIndex}`) 
        
         
      },
      
    };

  return (
    <React.Fragment>
      
      <MUIDataTable
          title={"ACT Patients List"}
          
          data={data1}
          columns={columns}
          options={options}
        />
      
    </React.Fragment>
  );
}
