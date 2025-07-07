import { useState } from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductItem from '@components/ProductItem/ProductItem';

function ItemListHome() {
  const [value, setValue] = useState('charger');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m='70px 0 55px 0'>
      <Box sx={{ mx: '141px' , Width: '1230px',height: 'auto'}}>
        <Box sx={{ width: '100%', height: 'auto', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderColor: 'divider', display: 'flex', justifyContent: 'space-between'}}>
              <Typography sx={{
                fontSize: '44px',
                fontWeight: '700',
                lineHeight: '56px',
                color: 'var(--text-color)',
                mb: '25px'
              }} component='h2'>Mobile Accessories</Typography>
              <TabList sx={{
                display: 'flex',
                justifyContent: 'space-around',
                '& .MuiTabs-indicator': {
                  display: 'none'
                },
                '& .MuiButtonBase-root': {
                  textTransform: 'none',
                  color: 'var(--third-color)',
                  flexGrow: 1,
                  mb: '10px',
                  fontSize: '18px',
                  fontWeight: '500',
                  p: '10px 15px',
                  m: '5px',
                  '&.Mui-selected': {
                    color: 'var(--primary-color)',
                    '&:hover': {
                      color: 'var(--primary-color)',
                      bgcolor: 'var(--white-color)',
                    }
                  },
                  '&:hover': {
                    bgcolor: 'var(--primary-color)',
                    borderRadius: '999px',
                    transition: 'background-color 0.3s',
                  }
                }
              }} onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Charger" value="charger" />
                <Tab label="Screen Guard" value="screenGuard" />
                <Tab label="Data Cable" value="dataCable" />
                <Tab label="Battery" value="battery" />
              </TabList>
            </Box>
            <TabPanel sx={{
              display:  value === 'charger' ? 'flex' : 'none',
              bgcolor: 'var(--white-color)',
              boxShadow: '0px 15px 40px 0px rgba(0, 0, 0, 0.08)',
              p: '15px',
              borderRadius: '5px'
            }} value="charger">
              <ProductItem/>
              <ProductItem/>
              <ProductItem/>
              <ProductItem/>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  )
}

export default ItemListHome