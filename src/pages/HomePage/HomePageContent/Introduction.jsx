import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './styles.module.scss' 

function Introduction() {
  const {iconBox} = styles

  console.log(styles)

  return (
    <Box sx={{
      width: '100%',
      minHeight: '600px',
      p: '80px 15px',
      backgroundImage: `url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/BG.jpeg)`,
      backgroundPosition: 'top-left',
      backgroundRepeat: 'no-repeat'
    }}>
      <Box sx={{
        m: '0 126px'
      }}>
        <Box sx={{
          p: '0 190px 15px',
          textAlign: 'center'}}>
          <Typography sx={{ textTransform: 'uppercase', color: 'var(--primary-color)', fontWeight: '500', mb: '5px', display: 'block'}} component='span'>World’s Most Trusted</Typography>
          <Typography sx={{ fontSize: '44px', fontWeight: '700', color: 'var(--text-color)', lineHeight: '56px', mb: '10px'}} component='h1'>XStore Elementor Phone Service Demo</Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: '300', color: 'var(--third-color)', mb: '20px'}} component='p'>We’re the only technology destination you can trust for every repair and style solution imaginable –
            all from a one-stop shop. WooCommerce Theme.
          </Typography>
        </Box>
        <Box sx={{ width: '100%', display: 'flex',gap: 1, justifyContent: 'space-between'}}>
          <Box sx={{
            width: '30%',
            p: '25px 30px 10px',
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.08)',
            transition: 'background .3s, box-shadow .3s, transform .3s',
            cursor: 'pointer',
            '&:hover' : { 
              bgcolor: 'rgba(245, 109, 13, 0.1)',
              transform: 'translateY(-5px)',
              boxShadow: '0px 15px 45px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            <img className={iconBox}  src='https://xstore.b-cdn.net/elementor/demos/phone-service/wp-content/uploads/sites/79/2024/04/phone-service-icon.png' alt='icon'></img>
            <Box>
              <Typography sx={{
                fontSize: '20px',
                fontWeight: '600',
                lineHeight: '26px',
                mb: '20px',
                color: 'var(--text-color)'
              }} component='h3'>One Stop Solution</Typography>
              <Typography sx={{
                mb: '20px',
                color: 'var(--third-color)'
              }} component='p'>Secure Environment + Professional Grade Equipment.</Typography>
            </Box>
          </Box>
          <Box sx={{
            width: '30%',
            p: '25px 30px 10px',
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.08)',
            transition: 'background .3s, box-shadow .3s, transform .3s',
            cursor: 'pointer',
            '&:hover' : { 
              bgcolor: 'rgba(245, 109, 13, 0.1)',
              transform: 'translateY(-5px)',
              boxShadow: '0px 15px 45px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            <img className={iconBox}  src='https://xstore.b-cdn.net/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/06/value_for_money.png' alt='icon'></img>
            <Box>
              <Typography sx={{
                fontSize: '20px',
                fontWeight: '600',
                lineHeight: '26px',
                mb: '20px',
                color: 'var(--text-color)'
              }} component='h3'>Value For Money</Typography>
              <Typography sx={{
                mb: '20px',
                color: 'var(--third-color)'
              }} component='p'>Overnight Repairs with Our Team of Experts.</Typography>
            </Box>
          </Box>
          <Box sx={{
            width: '30%',
            p: '25px 30px 10px',
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.08)',
            transition: 'background .3s, box-shadow .3s, transform .3s',
            cursor: 'pointer',
            '&:hover' : { 
              bgcolor: 'rgba(245, 109, 13, 0.1)',
              transform: 'translateY(-5px)',
              boxShadow: '0px 15px 45px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            <img className={iconBox}  src='https://xstore.b-cdn.net/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/06/instant-services.png' alt='icon'></img>
            <Box>
              <Typography sx={{
                fontSize: '20px',
                fontWeight: '600',
                lineHeight: '26px',
                mb: '20px',
                color: 'var(--text-color)'
              }} component='h3'>Instant Service</Typography>
              <Typography sx={{
                mb: '20px',
                color: 'var(--third-color)'
              }} component='p'>Carrying the Latest Limited Edition Styles + Designs.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Introduction