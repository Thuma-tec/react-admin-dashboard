import { Box, colors, useTheme, Typography } from "@mui/material";
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";
import { DataGrid} from "@mui/x-data-grid";
import Header from "../../components/Header";

const Invoices = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex:0.5 },
        { field: "registrarId", headerName: "Register ID"},
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left"
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1
        },
        {
            field: "city",
            headerName: "City",
            flex: 1
        },
        {
            field: "zipCode",
            headerName: "ZipCode",
            flex: 1
        },
       
    ];

    return (

        <Box m="20px">
            <Header
                title="CONTACTS"
                subtitle="List of contacts for future preferences"
            />

            <Box
                m="40px 0 0 0"
                height="71vh"
                sx={{
                    "& .MuiDataGrid-root:": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name.column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`
                }
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{Toolbar: GridToolbar}}  // filter option
                />
            </Box>

        </Box>
    );
};

export default Invoices;