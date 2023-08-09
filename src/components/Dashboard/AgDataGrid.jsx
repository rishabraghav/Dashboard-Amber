import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AgDataGrid = ({ data, loading }) => {
    const cellStyle = {
        fontSize: '10px', // Adjust font size
        height: '40px',  // Adjust cell height
        justifyContent: "center",
        alignItems: "center",
    };
    const cellStyleForStatus = {
        fontSize: '12px', // Adjust font size
        fontWeight: '600',
        height: '40px',  // Adjust cell height
        justifyContent: "center",
        alignItems: "center",
        width: "50px !important",
    }

    const [columnDefs] = useState([
        { field: 'invoiceId', cellStyle, filter: true },
        { field: 'date', cellStyle, filter: true },
        { field: 'description', cellStyle, filter: true },
        {
            field: 'status',
            cellStyle: cellStyleForStatus,
            cellClassRules: {
                'text-green-500': (params) => params.value === 'Paid',
                'text-red-500': (params) => params.value === 'Pending',
            },
            filter: true,
        },
        { field: 'amount', cellStyle, filter: true }
    ]);


    return (
        <div id='agDataGrid' className="ag-theme-alpine h-full w-full" >
            {loading ? <p>Loading...</p> : (

                <AgGridReact
                    rowData={data}
                    columnDefs={columnDefs}>
                </AgGridReact>

            )}

        </div>
    );
}

export default AgDataGrid;