import { Box } from '@mui/material';
import './InvoicesBalances.css'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from './data';


const InvoicesBalances = () => {
  return (
    <Box sx={{ height: 650 , minWidth: '800px', mx: 'auto' , overflowX: 'auto'}}>
      <DataGrid sx={{overflowX: 'auto' , p: 1}}
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}

export default InvoicesBalances;
