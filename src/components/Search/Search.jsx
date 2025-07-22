import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import ButtonCustom from '@components/Button/Button';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function Search({ handleCloseSearch, openSearch }) {
  const [category, setCategory] = useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Drawer
      anchor='top'
      open={openSearch}
      onClose={handleCloseSearch}
    >
      <Box
        sx={{ width: '100%', height: '82vh', p: '25px', position: 'relative' }}
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
            onClick={handleCloseSearch}
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
        <List sx={{
          width: '1230px',
          p: '0 15px',
          ml: 'auto',
          mr: 'auto',
          mb: '40px',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Box>
            <Box sx={{ textAlign: 'center', mb: '20px' }}>
              <Typography sx={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'var(--text-color)'
              }}>
                What Are You Looking For?
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Box sx={{ width: '140px' }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChangeCategory}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField sx={{ width: '450px' }} label="Search" placeholder="Search something..."/>
              <ButtonCustom type='dark' content='Search' style={{ borderRadius: '0'}}/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '25px'}}>
              <Typography sx={{
                textTransform: 'uppercase',
                color: 'var(--third-color)',
                fontWeight: '400',
                fontSize: '16px'
              }}>Trending searches: </Typography>
              <Button sx={{
                m: '3px',
                p: '5px 12px',
                bgcolor: '#f3f3f3',
                color: 'var(--black-color)',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '14px',
                textTransform: 'none'
              }}>Google</Button>
              <Button sx={{
                m: '3px',
                p: '5px 12px',
                bgcolor: '#f3f3f3',
                color: 'var(--black-color)',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '14px',
                textTransform: 'none'
              }}>Smart</Button>
              <Button sx={{
                m: '3px',
                p: '5px 12px',
                bgcolor: '#f3f3f3',
                color: 'var(--black-color)',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '14px',
                textTransform: 'none'
              }}>Headphone</Button>
              <Button sx={{
                m: '3px',
                p: '5px 12px',
                bgcolor: '#f3f3f3',
                color: 'var(--black-color)',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '14px',
                textTransform: 'none'
              }}>Charge</Button>
            </Box>
          </Box>
        </List>
        <List sx={{
          maxHeight: 'calc(82vh - 167px)',
          overflowY: 'auto',
          p: '0 15px',
          ml: 'auto',
          mr: 'auto',
          pb: '30px',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Box>
            <Box sx={{ textAlign: 'center', mb: '30px' }}>
              <Typography sx={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'var(--text-color)'
              }}>
                Popular Categories 
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px'}}>
              <Box sx={{ p: '0 15px', mb: '30px'}}>
                <img src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/13.2-min-600x600.jpg' style={{ width: '166px', height: '166px'}}/>
                <Box sx={{ textAlign: 'center'}}>
                  <Typography sx={{ mb: '2px', fontSize: '14px', fontWeight: '700' }}>GADGETS</Typography>
                  <Typography sx={{ fontSize: '14px', color: 'var(--text-color)' }}>14 products</Typography>
                </Box>
              </Box>
              <Box sx={{ p: '0 15px', mb: '30px'}}>
                <img src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/13.2-min-600x600.jpg' style={{ width: '166px', height: '166px'}}/>
                <Box sx={{ textAlign: 'center'}}>
                  <Typography sx={{ mb: '2px', fontSize: '14px', fontWeight: '700' }}>GADGETS</Typography>
                  <Typography sx={{ fontSize: '14px', color: 'var(--text-color)' }}>14 products</Typography>
                </Box>
              </Box>
              <Box sx={{ p: '0 15px', mb: '30px'}}>
                <img src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/13.2-min-600x600.jpg' style={{ width: '166px', height: '166px'}}/>
                <Box sx={{ textAlign: 'center'}}>
                  <Typography sx={{ mb: '2px', fontSize: '14px', fontWeight: '700' }}>GADGETS</Typography>
                  <Typography sx={{ fontSize: '14px', color: 'var(--text-color)' }}>14 products</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonCustom content='View All Categories' to='/shop' type='primary' style={{ width: '216px'}}/>
            </Box>
          </Box>
        </List>
      </Box>
    </Drawer>
  )
}

export default Search