import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Button from '@components/Button/Button'
import { keyframes } from '@mui/system'
import Tooltip from '@mui/material/Tooltip'
import './styles.module.scss' 

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.3);
  }
  60% {
    box-shadow: 0 0 0 21px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
`

const Banner = () => {
    return <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '800px'
      }}
    >
      <Box sx={{display: 'flex', bgcolor: 'white', height: '100%', width: '45%'}}>
        <Box sx={{
          m: '30% 3% 30% 29%',
          alignContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
          <Box mb={'20px'}>
            <Typography variant='h7' sx={{ fontSize: '44px' ,fontWeight: 'bold'}}>Your All-in-One Technology </Typography>
            <Typography variant='h7' sx={{ fontSize: '44px' ,fontWeight: 'bold', color: 'var(--primary-color)'}}>Phone Repair. </Typography>
          </Box>
          <Box mb={'20px'}>
            <Typography component="p" sx={{
              fontSize: '18px',
              color: '#555555',
              lineHeight: '28px'
            }}>
              Regardless of whether you need a device repair or a new phone case, you’ve come to the right place.
              <br/>
              <Typography sx={{fontSize: '18px', fontWeight: '700', color: '#A4004F'}} component='span'>X</Typography>
              <Typography sx={{display: 'inline-block',fontSize: '18px', fontWeight: '700', color: '#222222'}}>Store.</Typography>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2}}>
            <Button content='Book A Repair' type='dark' size='normal'/>
            <Button content='Get An Estimate' type='primary' size='normal'/>
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: '100%', width: '55%'}}>
        <Box sx={{position: 'relative' }}>
          <Box sx={{ height: '100%', width: '100%'}}>
            <img style={{ 
              'width': '100%',
              'height': '100vh',
              'object-fit': 'cover' }} src='https://xstore.b-cdn.net/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Image123.jpeg' alt='banner'
              />
          </Box>
            <Tooltip
              placement='right'
              componentsProps={{
                tooltip: {
                  sx: {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  padding: 0,
                },
              },
              }}
              title={
              <Box sx={{width: '255px', height: '180px', bgcolor: '#fff', p: '20px 20px',borderRadius: '5px'}}>
                <Box>
                  <Typography sx={{color: '#000',fontSize: '17px', fontWeight: '500', textAlign: 'center', mb: '8px'}}>Add a battery replacement to your phone repair</Typography>
                  <Box sx={{color: '#000', textAlign: 'center', fontSize: '44px', fontWeight: '600 '}}>
                    <Typography sx={{color: 'var(--primary-color)',fontSize: '14px', fontWeight: '400',textTransform: 'uppercase',textAlign: 'center', mb: '8px'}}>Staring at</Typography>
                    $39.00
                  </Box>
                </Box>
              </Box>
            }>
              <Box sx={{
                position: 'absolute',
                borderRadius: '50%',
                border: '12px solid var(--primary-color)',
                top: '44%',
                left: '25%',
                animation: `${pulse} 1.5s infinite`,
                cursor: 'pointer'
              }}></Box>
            </Tooltip>
            <Tooltip
              placement='left'
              componentsProps={{
                tooltip: {
                  sx: {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  padding: 0,
                },
              },
              }}
              title={
              <Box sx={{width: '255px', height: '180px', bgcolor: '#fff', p: '20px 20px',borderRadius: '5px'}}>
                <Box>
                  <Typography sx={{color: '#000',fontSize: '17px', fontWeight: '500', textAlign: 'center', mb: '8px'}}>Add a battery replacement to your phone repair</Typography>
                  <Box sx={{color: '#000', textAlign: 'center', fontSize: '44px', fontWeight: '600 '}}>
                    <Typography sx={{color: 'var(--primary-color)',fontSize: '14px', fontWeight: '400',textTransform: 'uppercase',textAlign: 'center', mb: '8px'}}>Staring at</Typography>
                    $29.00
                  </Box>
                </Box>
              </Box>
            }>
              <Box sx={{
                position: 'absolute',
                borderRadius: '50%',
                border: '12px solid var(--primary-color)',
                top: '41%',
                right: '25%',
                animation: `${pulse} 1.5s infinite`,
                cursor: 'pointer'
              }}></Box>
            </Tooltip>
        </Box>
      </Box>
    </Box>;
};

export default Banner;
