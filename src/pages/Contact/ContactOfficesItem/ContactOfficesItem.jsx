import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ContactOfficesItem() {
  return (
    <Box sx={{
      width: '23%',
      p: '40px',
      bgcolor: '#F7F7F7',
      borderRadius: '10px'
    }}>
      <Box>
        <Typography variant='h3' sx={{
          color: 'var(--text-color)',
          fontSize: '24px',
          fontWeight: '400',
          lineHeight: '29px',
          mb: '18px'
        }}>
          London
        </Typography>
        <Typography variant='h6' sx={{
          color: 'var(--third-color)',
          fontSize: '16px',
          fontWeight: '300',
          lineHeight: '25px',
          mb: '27px'
        }}>
          82 Bernie Greens Apt. London, UK
        </Typography>
        <Typography variant='h3' sx={{
          color: 'var(--primary-color)',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '16px'
        }}>
          +47 213 5941 295
        </Typography>
      </Box>
    </Box>
  )
}

export default ContactOfficesItem