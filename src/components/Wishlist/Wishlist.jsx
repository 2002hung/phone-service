//import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import WishlistItem from './WishlistItem/WishlistItem';

function Wishlist({ openWishlist, handleCloseWishlist }) {
  return (
    <Drawer
      disableScrollLock
      anchor='right'
      open={openWishlist}
      onClose={handleCloseWishlist}
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
            onClick={handleCloseWishlist}
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
            <CiHeart style={{ fontSize: '24px', fontWeight: '400', lineHeight: '24px'}}/>
          </Box>
          <Box>
            <Typography sx={{ textTransform: 'uppercase', fontSize: '17px'}}>Wishlist</Typography>
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
              <WishlistItem id='123'/>
            </List>
          </Box>
          <Box sx={{ mt: '15px'}}>
            <Button content='View Wishlist' type='dark' style={{ width: '100%'}} to='/wishlist'/>
            <Button content='Add all to cart' type='primary' style={{ width: '100%', marginTop: '10px' }}/>
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Wishlist