//import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@components/Button/Button';
import { PiHandbagLight } from 'react-icons/pi';
import CartItem from './CartItem/CartItem';

function Cart({ openCart, handleCloseCart }) {
  return (
    <Drawer
      disableScrollLock
      anchor='right'
      open={openCart}
      onClose={handleCloseCart}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', width: '370px', height: '100vh', p: '20px 30px', position: 'relative' }}
        role="presentation"
      >
        <Box
          sx={{
            position: 'absolute',
            top: 15,
            right: 15,
            zIndex: 1301,
          }}
        >
          <IconButton
            onClick={handleCloseCart}
            sx={{
              width: '35px',
              height: '35px',
              '&:hover': {
                backgroundColor: 'rgb(225, 225, 225)'
              }
            }}
          >
            ✕
          </IconButton>
        </Box>
        <Box sx={{ textAlign: 'center'}}>
          <Box sx={{ mb: '5px'}}>
            <PiHandbagLight style={{ fontSize: '24px', fontWeight: '400', lineHeight: '24px'}}/>
          </Box>
          <Box>
            <Typography sx={{ textTransform: 'uppercase', fontSize: '17px'}}>Cart</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex' , flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <Box sx={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            maxHeight: '450px',
            '&::-webkit-scrollbar': {
              width: 0,
              height: 0
            }
          }}>
            <List>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
            </List>
          </Box>
          <Box sx={{ mt: '15px'}}>
            <Box sx={{ mb: '20px', display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant='h6' sx={{ color: 'var(--third-color)', fontSize: '14px', fontWeight: '600'}}>Subtotal:</Typography>
              <Typography variant='h6' sx={{ color: 'var(--third-color)', fontSize: '14px', fontWeight: '300'}}>$310.00</Typography>
            </Box>
            <Button content='View Cart' type='dark' style={{ width: '100%'}}/>
            <Button content='Checkout' type='primary' style={{ width: '100%', marginTop: '10px' }}/>
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Cart