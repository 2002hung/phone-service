import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Box from '@mui/material/Box';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import MainLayout from '@components/Layout/MainLayout';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FaCheck, FaRegTrashAlt  } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from '@components/Button/Button';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

const { titleItem, imgItem } = styles

const columns = [
  //{ field: 'id', headerName: 'ID', flex: 1, maxWidth: 50 },
  { field: 'product', headerName: 'PRODUCT', flex: 3, minWidth: 150,
    renderCell: (params) => (
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 1
      }}
      onClick={(event) => event.stopPropagation()}
      >
        <img className={imgItem} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/5.1-min.jpg'/>
        <Link className={titleItem} to='/123'>{params.formattedValue}</Link>
      </Box>
    )
  },
  { field: 'price', headerName: 'PRICE', align: 'center', headerAlign: 'center', flex: 1, minWidth: 80 },
  { field: 'status', headerName: 'STOCK STATUS', align: 'center', headerAlign: 'center', flex: 1, minWidth: 120,
    renderCell: (params) => (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        color: params.formattedValue == 'In Stock' ? 'green' : 'red' 
      }}>
        {params.formattedValue == 'In Stock' ? <FaCheck /> : <IoMdClose />}
        <Typography variant="span">{params.formattedValue}</Typography>
      </Box>
    )
  },
  { field: 'action', headerName: 'ACTION', align: 'right', headerAlign: 'right', flex: 3, minWidth: 150,
    renderCell: (params) => (
      <Box sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 1
      }}>
        {params.row.status == 'In Stock' ? <Button type='dark' content='Add To Card' style={{ padding: '16px', fontSize: '14px'}}
          onClick={(event) => {
            event.stopPropagation();
            console.log(params.id)
          }}
        /> : null}
        <Button type='light' icon={<FaRegTrashAlt/>} style={{ padding: '16px', fontSize: '14px'}}
          onClick={(event) => {
            event.stopPropagation();
            console.log(params.id);
          }}
        />
      </Box>
    )
  },
];


const rows = [
  { id: 1, product: 'Dashboard Protector UGreen Dashboard Protector UGreen', price: '$10.00', status: 'Sold Out' },
  { id: 2, product: 'Lannister', price: '$10.00', status: 'In Stock' },
  { id: 3, product: 'Lannister', price: '$10.00', status: 'In Stock' },
  { id: 4, product: 'Stark', price: '$10.00', status: 'In Stock' },
  { id: 5, product: 'Targaryen', price: '$10.00', status: 'In Stock' },
  { id: 6, product: 'Melisandre', price: null, status: 'In Stock' },
  { id: 7, product: 'Clifford', price: '$10.00', status: 'In Stock' },
  { id: 8, product: 'Frances', price: '$10.00', status: 'In Stock' },
  { id: 9, product: 'Roxie', price: '$10.00', status: 'In Stock' },
  { id: 10, product: 'Roxie', price: '$10.00', status: 'In Stock' },
];

const paginationModel = { page: 0, pageSize: 5 };

function WishlistPage() {
  return (
    <>
      <Header/>
      <Box sx={{
        mt: '76px'
      }}>
        <Breadcrumb title='Wishlist'/>
        <MainLayout>
          <Box sx={{
            my: '35px',
            px: '15px',
            width: '100%'
          }}>
            <Paper sx={{ minHeight: 400, width: '100%', overflowX: 'auto' }}>
              <DataGrid
                rows={rows}
                rowHeight={110}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelectionVisibleOnly={false}
                checkboxSelection
                onRowSelectionModelChange={(selection) => {
                  console.log(selection)
                  let selectedRows = [];
                  if (selection.type === 'include') {
                    selectedRows = rows.filter((row) => selection.ids.has(row.id));
                  } else if (selection.type === 'exclude') {
                    selectedRows = rows.filter((row) => !selection.ids.has(row.id));
                  }
                  console.log(selectedRows);
                }}
                sx={{ border: 0 }}
              />
            </Paper>
          </Box>
        </MainLayout>
      </Box>
      <Footer/>
    </>

  )
}

export default WishlistPage