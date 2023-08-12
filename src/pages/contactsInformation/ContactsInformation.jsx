import { Box } from '@mui/material';
import './ContactsInformation.css'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from './data';

const ContactsInformation = () => {
  return (
    <Box sx={{ height: 600 , minWidth: '800px', mx: 'auto' , overflowX: 'auto'}}>
      <DataGrid sx={{overflowX: 'auto' , p: 1}}
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

export default ContactsInformation;
