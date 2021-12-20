import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Link} from "react-router-dom";

const columns = [
    {
        field: 'img',
        headerName: 'Detail Button',
        width: 180,
        editable: true,
        renderCell: (params) => <div>
            <Link to={`/${params.value[1]}`} style={{ width: "100%", display: 'flex', justifyContent: 'center' }}><img src={params.value[0]} width="50" /></Link>
        </div>
    },
    { field: 'id', headerName: 'ID' },
    { field: 'price', headerName: 'Price', width: 150 }
]

function CryptoGrid(props) {
    return (
        
            <div style={{ height: 400, width: '35%', marginLeft: 'auto', marginRight: 'auto' }}>
                <h1>CryptoCoins Table</h1>
                {/* {props.data.RAW && <p>{Object.keys(props.data.RAW)}</p>} */}
                <DataGrid
                    rows={props.data}
                    columns={columns}
                    
                />
                
            </div>
    );
}

// function CryptoGrid(){
//     return (
//         <div style={{ height: 300, width: '100%' }}>
//           <DataGrid rows={rows} columns={columns} />
//         </div>
//       );
// }

export default CryptoGrid;

