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
import QuantityInput from '@components/QuantityInput/QuantityInput';
import { useState } from 'react';

const { titleItem, imgItem } = styles

const columns = [
  //{ field: 'id', headerName: 'ID', flex: 1, maxWidth: 50 },
  { field: 'product', headerName: 'PRODUCT', flex: 2, minWidth: 120,
    renderCell: (params) => (
      <Box sx={{
        maxWidth: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 1,
        overflow: 'hidden'
      }}
      onClick={(event) => event.stopPropagation()}
      >
        <img className={imgItem} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/5.1-min.jpg'/>
        <Box sx={{
          minWidth: 0,
          minHeight: 0,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <Link className={titleItem} to='/123'>{params.formattedValue}</Link>
          <Typography variant='span' sx={{
            fontSize: '12px',
            lineHeight: '20px',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
          onClick={() => console.log('Xóa', params.row.id)}
          >remove</Typography>
        </Box>
      </Box>
    )
  },
  { field: 'price', headerName: 'PRICE', align: 'center', headerAlign: 'center', flex: 1, minWidth: 80,
    renderCell: (params) => (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography variant='span'>{`$${params.formattedValue}.00`}</Typography>
      </Box>
    )
  },
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
  { field: 'quantity', headerName: 'QUANTITY', align: 'center', headerAlign: 'center', flex: 1, minWidth: 120,
    renderCell: (params) => (
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%'
      }}
      onClick={(event) => event.stopPropagation()}
      >
        <QuantityInput value={params.formattedValue}/>
      </Box>
     
    )
  },
  { field: 'subTotal', headerName: 'Sub Total', align: 'center', headerAlign: 'center', flex: 1, minWidth: 120,
    renderCell: (params) => (
      <Box sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography variant='h6' sx={{
          color: 'var(--text-color)',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '16px',
        }}>${params.row.price * params.row.quantity}.00</Typography>
      </Box>
    )
  }
];


const rows = [
  { id: 1, product: 'Dashboard Protector UGreen Dashboard Protector UGreen', price: 10, status: 'Sold Out', quantity: 2 },
  { id: 2, product: 'Lannister', price: 10, status: 'In Stock', quantity: 3 },
  { id: 3, product: 'Lannister', price: 10, status: 'In Stock', quantity: 1 },
  { id: 4, product: 'Stark', price: 10, status: 'In Stock', quantity: 1 },
  { id: 5, product: 'Targaryen', price: 10, status: 'In Stock', quantity: 1 },
  { id: 6, product: 'Melisandre', price: null, status: 'In Stock', quantity: 1 },
  { id: 7, product: 'Clifford', price: 10, status: 'In Stock', quantity: 1 },
  { id: 8, product: 'Frances', price: 10, status: 'In Stock', quantity: 1 },
  { id: 9, product: 'Roxie', price: 10, status: 'In Stock', quantity: 1 },
  { id: 10, product: 'Roxie', price: 10, status: 'In Stock', quantity: 1 },
];

const paginationModel = { page: 0, pageSize: 5 };

function CartPage() {
  const {cartItemImg} = styles
  const [checkoutList, setCheckoutList] = useState([])

  console.log(checkoutList);

  return (
    <>
      <Header/>
      <Box sx={{
        mt: '76px'
      }}>
        <Breadcrumb title='Cart'/>
        <MainLayout>
          <Box sx={{
            display: 'flex',
            gap: 3,
            my: '35px',
            px: '15px',
            width: '100%'
          }}>
            <Box sx={{
              width: '70%'
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
                      setCheckoutList(selectedRows)
                    } else if (selection.type === 'exclude') {
                      selectedRows = rows.filter((row) => !selection.ids.has(row.id));
                      setCheckoutList(selectedRows)
                    }
                  }}
                  sx={{ border: 0 }}
                />
              </Paper>
            </Box>
            <Box sx={{
              width: '30%',
              border: '2px solid #000',
              height: 'fit-content',
              p: '30px'
            }}>
              <Typography variant='h3' sx={{
                pb: '14px',
                mb: '20px',
                color: 'var(--text-color)',
                fontSize: '14px',
                fontWeight: '700',
                lineHeight: '16px',
                textTransform: 'uppercase',
                borderBottom: '1px solid #e1e1e1'
              }}>cart total</Typography>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                mb: '12px'
              }}>
                {checkoutList.map((item) => (<Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <img className={cartItemImg} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/5.1-min.jpg'/>
                    <Typography variant='span' sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      color: 'var(--text-color)',
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '15px'
                    }}>{item.product}</Typography>
                  </Box>
                  <Box>
                    <Typography variant='span' sx={{
                      color: 'var(--text-color)',
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '15px'
                    }}>${item.price}.00</Typography>
                  </Box>
                </Box>))
                }
              </Box>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '14px 0 14px',
                mb: '12px'
              }}>
                <Typography variant='h6' sx={{
                  color: 'var(--text-color)',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '32px',
                  textTransform: 'uppercase',
                }}>total</Typography>
                <Typography variant='h6' sx={{
                  color: 'var(--text-color)',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '32px',
                  textTransform: 'uppercase',
                }}>${checkoutList && checkoutList.reduce((i, cur)=> i+=cur.price,0)}.00</Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}>
                <Button type='dark' content='Process To Checkout'/>
                <Button type='light' content='Continue Shopping'/>
              </Box>
            </Box>
          </Box>
        </MainLayout>
      </Box>
      <Footer/>
    </>
  )
}

export default CartPage