import { useState } from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@components/Button/Button'
import styles from './styles.module.scss'

function Services() {
  const [value, setValue] = useState('1');
  const {imageBlog} = styles

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box p='80px 0'>
      <Box sx={{ mx: '141px' , Width: '1230px',height: 'auto'}}>
        <Box sx={{ width: '100%', height: 'auto'}}>
          <Box sx={{m: '0 307px 35px', textAlign: 'center'}}>
            <Typography sx={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '500',
              color: 'var(--primary-color)',
              textTransform: 'uppercase',
              mb: '5px'
            }} component='span'>We fixing all problem</Typography>
            <Typography sx={{
              fontSize: '44px',
              fontWeight: '700',
              lineHeight: '56px',
              color: 'var(--text-color)',
              mb: '25px'
            }} component='h2'>What Powerful Services We Offer You.</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: 'auto', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderColor: 'divider'}}>
              <TabList sx={{
                display: 'flex',
                justifyContent: 'space-around',
                '& .MuiTabs-indicator': {
                  display: 'none'
                },
                '& .MuiButtonBase-root': {
                  color: 'var(--text-color)',
                  flexGrow: 1,
                  mb: '10px',
                  '&.Mui-selected': {
                    color: 'var(--white-color)',
                    bgcolor: 'var(--primary-color)',
                    p: '30px 40px'
                  }
                }
              }} onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Mobile Flash" value="1" />
                <Tab label="Screen Repair" value="2" />
                <Tab label="Software Installation" value="3" />
                <Tab label="Country Lock" value="4" />
                <Tab label="Data Recovery" value="5" />
                <Tab label="Hardware Repair" value="6" />
              </TabList>
            </Box>
            <TabPanel sx={{
              display:  value === '1' ? 'flex' : 'none',
              bgcolor: 'var(--white-color)',
              boxShadow: '0px 15px 40px 0px rgba(0, 0, 0, 0.08)',
              p: '15px',
              borderRadius: '5px'
            }} value="1">
              <Box sx={{ p: '15px'}}>
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}>
                  <img className={imageBlog} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/elementor/thumbs/Image_blog_7-ppae00f34g03ejd133xx9kcpnvecu0rplv74vugn8w.jpeg' alt='Image_blog'></img>
                </Box>
              </Box>
              <Box sx={{
                p: '15px',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}>
                <Typography sx={{
                  fontSize: '30px',
                  fontWeight: '700',
                  color: 'var(--text-color)',
                  lineHeight: '40px',
                  mb: '25px',
                  flexBasis: '100%'
                }}
                variant='h2' component='div'>Mobile Flash with The Best Professional</Typography>
                <Typography sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'var(--third-color)',
                  flexBasis: '100%',
                  mb: '5px'
                }} variant='h2'>START FROM</Typography>
                <Typography sx={{
                  color: 'var(--primary-color)',
                  fontSize: '30px',
                  fontWeight: '700'
                }}>$16.00</Typography>
                <Typography sx={{
                  m: '20px 0 5px',
                  fontSize: '18px',
                  fontWeight: '300',
                  lineHeight: '28px',
                  color: 'var(--third-color)'
                }}>
                  Screen repair when an unknown printer took a galley of type and 
                  scrambled computer of last expert engineering Technicians will come to your doorstep.
                </Typography>
                <Box mt='20px'>
                  <Button content='Explore More' type='light' size='normal'/>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel sx={{
              display:  value === '2' ? 'flex' : 'none',
              bgcolor: 'var(--white-color)',
              boxShadow: '0px 15px 40px 0px rgba(0, 0, 0, 0.08)',
              p: '15px',
              borderRadius: '5px'
              }} value="2"
            >
              <Box sx={{ p: '15px'}}>
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}>
                  <img className={imageBlog} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/elementor/thumbs/Image_blog_7-ppae00f34g03ejd133xx9kcpnvecu0rplv74vugn8w.jpeg' alt='Image_blog'></img>
                </Box>
              </Box>
              <Box sx={{
                p: '15px',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}>
                <Typography sx={{
                  fontSize: '30px',
                  fontWeight: '700',
                  color: 'var(--text-color)',
                  lineHeight: '40px',
                  mb: '25px',
                  flexBasis: '100%'
                }}
                variant='h2' component='div'>Screen Repair of Mobile with The Best Professional</Typography>
                <Typography sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'var(--third-color)',
                  flexBasis: '100%',
                  mb: '5px'
                }} variant='h2'>START FROM</Typography>
                <Typography sx={{
                  color: 'var(--primary-color)',
                  fontSize: '30px',
                  fontWeight: '700'
                }}>$20.00</Typography>
                <Typography sx={{
                  m: '20px 0 5px',
                  fontSize: '18px',
                  fontWeight: '300',
                  lineHeight: '28px',
                  color: 'var(--third-color)'
                }}>
                  Screen repair when an unknown printer took a galley of type and 
                  scrambled computer of last expert engineering Technicians will come to your doorstep.
                </Typography>
                <Box mt='20px'>
                  <Button content='Explore More' type='light' size='normal'/>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel sx={{
              display:  value === '3' ? 'flex' : 'none',
              bgcolor: 'var(--white-color)',
              boxShadow: '0px 15px 40px 0px rgba(0, 0, 0, 0.08)',
              p: '15px',
              borderRadius: '5px'
              }} value="3"
            >
              <Box sx={{ p: '15px'}}>
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}>
                  <img className={imageBlog} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/elementor/thumbs/Image_blog_7-ppae00f34g03ejd133xx9kcpnvecu0rplv74vugn8w.jpeg' alt='Image_blog'></img>
                </Box>
              </Box>
              <Box sx={{
                p: '15px',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}>
                <Typography sx={{
                  fontSize: '30px',
                  fontWeight: '700',
                  color: 'var(--text-color)',
                  lineHeight: '40px',
                  mb: '25px',
                  flexBasis: '100%'
                }}
                variant='h2' component='div'>Software Installation for Mobile with The Best Professional</Typography>
                <Typography sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'var(--third-color)',
                  flexBasis: '100%',
                  mb: '5px'
                }} variant='h2'>START FROM</Typography>
                <Typography sx={{
                  color: 'var(--primary-color)',
                  fontSize: '30px',
                  fontWeight: '700'
                }}>$22.00</Typography>
                <Typography sx={{
                  m: '20px 0 5px',
                  fontSize: '18px',
                  fontWeight: '300',
                  lineHeight: '28px',
                  color: 'var(--third-color)'
                }}>
                  Screen repair when an unknown printer took a galley of type and 
                  scrambled computer of last expert engineering Technicians will come to your doorstep.
                </Typography>
                <Box mt='20px'>
                  <Button content='Explore More' type='light' size='normal'/>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel sx={{
              display:  value === '4' ? 'flex' : 'none',
              bgcolor: 'var(--white-color)',
              boxShadow: '0px 15px 40px 0px rgba(0, 0, 0, 0.08)',
              p: '15px',
              borderRadius: '5px'
              }} value="4"
            >
              <Box sx={{ p: '15px'}}>
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}>
                  <img className={imageBlog} src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/elementor/thumbs/Image_blog_7-ppae00f34g03ejd133xx9kcpnvecu0rplv74vugn8w.jpeg' alt='Image_blog'></img>
                </Box>
              </Box>
              <Box sx={{
                p: '15px',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}>
                <Typography sx={{
                  fontSize: '30px',
                  fontWeight: '700',
                  color: 'var(--text-color)',
                  lineHeight: '40px',
                  mb: '25px',
                  flexBasis: '100%'
                }}
                variant='h2' component='div'>Country Lock</Typography>
                <Typography sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'var(--third-color)',
                  flexBasis: '100%',
                  mb: '5px'
                }} variant='h2'>START FROM</Typography>
                <Typography sx={{
                  color: 'var(--primary-color)',
                  fontSize: '30px',
                  fontWeight: '700'
                }}>$13.00</Typography>
                <Typography sx={{
                  m: '20px 0 5px',
                  fontSize: '18px',
                  fontWeight: '300',
                  lineHeight: '28px',
                  color: 'var(--third-color)'
                }}>
                  Screen repair when an unknown printer took a galley of type and 
                  scrambled computer of last expert engineering Technicians will come to your doorstep.
                </Typography>
                <Box mt='20px'>
                  <Button content='Explore More' type='light' size='normal'/>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="5">Item Two</TabPanel>
            <TabPanel value="6">Item Three</TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  )
}

export default Services