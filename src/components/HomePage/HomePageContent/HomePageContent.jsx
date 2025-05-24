import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

//import styles from './styles.module.scss'
import ListItemText from '@mui/material/ListItemText';
import Button from '@components/Button/Button';

function HomePageContent() {
  return (
    <Box sx={{
      p: '0 120px 80px',
    }}>
      <Box sx={{
        mx: '65px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{
          width: '20%',
          zIndex: '10'
        }}>
          <Box>
            <img src='https://xstore.b-cdn.net/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Card.png' atl='coupon'></img>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '80%',
          height: '500px',
          bgcolor: 'var(--primary-color)',
          borderRadius: '5px',
          p: '65px 50px 65px 310px'
        }}>
          <Box sx={{ width: '100%'}}>
            <Typography sx={{
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '40px',
              color: 'var(--white-color)',
              mb: '30px'
            }} variant='h2'>Get $10 e-voucher to use on your first repair of $100 or more!</Typography>
          </Box>
          <Box>
            <Typography sx={{
              color: 'var(--white-color)',
              fontSize: '20px',
              fontWeight: '700',
              lineHeight: '26px',
              letterSpacing: '0.75px'
            }} variant='h2'>Here's How</Typography>
          </Box>
          <Box>
            <List sx={{
              '&.MuiList-root': {
                pt: 0,
                pb: 0
              }
            }}>
              <ListItemText sx={{
                p: '15px 30px',
                color: '#FFFFFFC2',
                '& .MuiTypography-root': {
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '20px',
                },
                '&.MuiListItemText-root': {
                  mt: 0,
                  mb: 0
                }
              }}
              primary="Join our FREE Loyalty Program by registering below."
              />
              <ListItemText sx={{
                p: '15px 30px',
                color: '#FFFFFFC2',
                '& .MuiTypography-root': {
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '20px',
                },
                '&.MuiListItemText-root': {
                  mt: 0,
                  mb: 0
                }
              }}
              primary="Choose your preferred XStore Phone Repair location."
              />
              <ListItemText sx={{
                p: '15px 30px',
                color: '#FFFFFFC2',
                '& .MuiTypography-root': {
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '20px',
                },
                '&.MuiListItemText-root': {
                  mt: 0,
                  mb: 0
                }
              }}
              primary="Our staff will take care of your repair!"
              />
            </List>
          </Box>
          <Box>
            <Typography sx={{
              m: '15px 0 25px',
              fontSize: '20px',
              fontWeight: '700',
              lineHeight: '26px',
              color: 'var(--white-color)',
              letterSpacing: '0.5px'
            }} variant='h2'>That's all you need to do to earn $10 off your first repair of $100 or more!</Typography>
          </Box>
          <Box>
            <Button content='Register Now' type='white' size='small'/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePageContent