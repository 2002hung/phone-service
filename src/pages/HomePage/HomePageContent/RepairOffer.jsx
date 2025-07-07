import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import styles from './styles.module.scss'

function RepairOffer() {
  const {decoImage} = styles
  return (
    <Box sx={{
      p: '75px 15px 50px',
      backgroundImage: 'url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/bg-2.jpeg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top right',
      backgroundSize: 'contain'
    }}
    >
      <Box sx={{ mx: '126px' }}>
        <Box sx={{ width: '100%', textAlign: 'center'}}>
          <Typography sx={{
            fontSize: '15px',
            fontWeight: '500',
            lineHeight: '24px',
            color: 'var(--primary-color)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            mb: '5px'
          }} variant='span'>Our repair services</Typography>
          <Typography sx={{
            fontSize: '44px',
            fontWeight: '700',
            lineHeight: '56px',
            color: 'var(--text-color)',
            letterSpacing: '1px',
            mb: '25px'
          }} variant='h2'>4 Types Of Repair We Offer</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
        }}>
          <Box sx={{ width: '25%', mx: '5px', textAlign: 'center'}}>
            <Box sx={{ pb: '10px'}}>
              <img className={decoImage} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Icon-01.jpeg' alt='decoding'/>
            </Box>
            <Box sx={{ textAlign: 'center'}}>
              <Typography sx={{
                display: 'block',
                color: 'var(--text-color)',
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '26px',
                mb: '20px'
              }}
              variant='span'>Drop & Go</Typography>
              <Typography sx={{
                color: 'var(--third-color)',
                fontSize: '16px',
                fontWeight: '300',
                lineHeight: '24px',
              }} variant='p'>You are welcome to walk in to have your device repaired.</Typography>
            </Box>
          </Box>
          <Box sx={{ width: '25%', mx: '5px', textAlign: 'center'}}>
            <Box sx={{ pb: '10px'}}>
              <img className={decoImage} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Icon-02.jpeg' alt='decoding'/>
            </Box>
            <Box sx={{ textAlign: 'center'}}>
              <Typography sx={{
                display: 'block',
                color: 'var(--text-color)',
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '26px',
                mb: '20px'
              }}
              variant='span'>Courier Service</Typography>
              <Typography sx={{
                color: 'var(--third-color)',
                fontSize: '16px',
                fontWeight: '300',
                lineHeight: '24px',
              }} variant='p'>Prepare device to be picked up. We’ll take care of the rest.</Typography>
            </Box>
          </Box>
          <Box sx={{ width: '25%', mx: '5px', textAlign: 'center'}}>
            <Box sx={{ pb: '10px'}}>
              <img className={decoImage} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Icon-03.jpeg' alt='decoding'/>
            </Box>
            <Box sx={{ textAlign: 'center'}}>
              <Typography sx={{
                display: 'block',
                color: 'var(--text-color)',
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '26px',
                mb: '20px'
              }}
              variant='span'>Mail in Service</Typography>
              <Typography sx={{
                color: 'var(--third-color)',
                fontSize: '16px',
                fontWeight: '300',
                lineHeight: '24px',
              }} variant='p'>Pack your device safe & secure and send your device.</Typography>
            </Box>
          </Box>
          <Box sx={{ width: '25%', mx: '5px', textAlign: 'center'}}>
            <Box sx={{ pb: '10px'}}>
              <img className={decoImage} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Icon-2.png' alt='decoding'/>
            </Box>
            <Box sx={{ textAlign: 'center'}}>
              <Typography sx={{
                display: 'block',
                color: 'var(--text-color)',
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '26px',
                mb: '20px'
              }}
              variant='span'>Come & Fix</Typography>
              <Typography sx={{
                color: 'var(--third-color)',
                fontSize: '16px',
                fontWeight: '300',
                lineHeight: '24px',
              }} variant='p'>Our technician will come to your location & fix your device.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RepairOffer