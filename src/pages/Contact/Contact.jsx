import { useState } from 'react';
import MainLayout from '@components/Layout/MainLayout';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@components/Button/Button';
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import ContactOfficesItem from './ContactOfficesItem/ContactOfficesItem';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Contact() {
  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Header/>
      <Box sx={{
        backgroundImage: 'url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/06/Map.jpeg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        mt: '76px'
      }}>
        <MainLayout style={{ height: '100%'}}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '570px',
            width: '100%'
          }}>
            <Box sx={{
              width: '30%',
              p: '50px 40px 45px',
              bgcolor: 'white',
              borderRadius: '10px'
            }}>
              <Typography sx={{
                color: 'var(--text-color)',
                fontSize: '30px',
                fontWeight: '700',
                lineHeight: '38px',
                mb: '32px'
              }}>Contact Us</Typography>
              <Box sx={{
                display: 'flex',
                mb: '18px'
              }}>
                <Box sx={{
                  pt: '5px',
                  mr: '21px',
                  fontSize: '20px',
                  fontWeight: '400',
                  color: 'var(--primary-color)'
                }}>
                  <IoLocationOutline/>
                </Box>
                <Typography variant='h6' sx={{
                  color: 'var(--third-color)',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '25px',
                }}>
                  290 Maryam Springs 260,
                  Courbevoie, Paris, France
                </Typography>
               
              </Box>
              <Box sx={{
                display: 'flex',
                mb: '18px'
              }}>
                <Box sx={{
                  pt: '5px',
                  mr: '21px',
                  fontSize: '20px',
                  fontWeight: '400',
                  color: 'var(--primary-color)'
                }}>
                  <CiMail/>
                </Box>
                <Typography variant='h6' sx={{
                  color: 'var(--third-color)',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '25px',
                }}>
                  Email: helps@xstore.com
                </Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                mb: '18px'
              }}>
                <Box sx={{
                  pt: '5px',
                  mr: '21px',
                  fontSize: '20px',
                  fontWeight: '400',
                  color: 'var(--primary-color)'
                }}>
                  <FiPhoneCall/>
                </Box>
                <Typography variant='h6' sx={{
                  color: 'var(--third-color)',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '25px',
                }}>
                  Phone: +47 213 5941 295
                </Typography>
              </Box>
              <Button content='Visit On Google Maps' type='primary' style={{ width: '100%'}} onClick={scrollToTop}/>
            </Box>
            <Box sx={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center'
            }}>
              <img src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Location-min.png' alt='dot'/>
            </Box>
          </Box>
        </MainLayout>
      </Box>
      <Box sx={{
        my: '75px'
      }}>
        <MainLayout>
          <Box sx={{
            textAlign: 'center'
          }}>
            <Typography variant='span' sx={{
              display: 'block',
              color: 'var(--primary-color)',
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '24px',
              textTransform: 'uppercase',
              mb: '5px'
            }}>
              World’s Most Trusted
            </Typography>
            <Typography variant='h2' sx={{
              color: 'var(--text-color)',
              fontSize: '44px',
              fontWeight: '700',
              lineHeight: '56px',
              mb: '25px'
            }}>
              Our Global Offices
            </Typography>
            <Typography variant='p' sx={{
              display: 'block',
              color: 'var(--text-color)',
              fontSize: '18px',
              fontWeight: '300',
              lineHeight: '28px',
              mb: '20px'
            }}>
              As a partner of corporates, XStore has more than 9,000 offices 
              of all sizes and all potential of session.
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <ContactOfficesItem/>
            <ContactOfficesItem/>
            <ContactOfficesItem/>
            <ContactOfficesItem/>
          </Box>
        </MainLayout>
      </Box>
      <Box sx={{
        minHeight: '500px',
        backgroundImage: 'url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Contact-min.jpeg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <MainLayout>
          <Box sx={{
            display: 'flex',
          }}>
            <Box sx={{
              width: '44%',
              p: '115px 15px 15px 15px'
            }}>
              <Box sx={{ pr: '140px', mb: '40px'}}>
                <Typography variant='h6' sx={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '18px',
                  textTransform: 'uppercase',
                  mb: '5px'
                }}>Contact Us</Typography>
                <Typography variant='h2' sx={{
                  color: 'white',
                  fontSize: '44px',
                  fontWeight: '600',
                  lineHeight: '56px',
                  mb: '25px'
                }}>
                  Need Help?
                  <br/>
                  Send Message Us
                </Typography>
                <Typography variant='h6' sx={{
                  color: '#FFFFFFB5',
                  fontSize: '18px',
                  fontWeight: '300',
                  lineHeight: '28px',
                  mb: '20px'
                }}>
                  Just send us your questions or concerns to
                  starting a new project.
                </Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                mb: '20px'
              }}>
                <Box sx={{ mr: '20px'}}>
                  <Avatar sx={{
                    width: '70px',
                    height: '70px'
                  }}
                  alt='avatar'
                  src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Image-min.png'
                  />
                </Box>
                <Box sx={{ flex: 1}}>
                  <Typography variant='h3' sx={{
                    textTransform: 'uppercase',
                    pt: '10px',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '500',
                    lineHeight: '18px'
                  }}>Have a question?</Typography>
                  <Typography variant='p' sx={{
                    color: 'white',
                    fontSize: '30px',
                    fontWeight: '700',
                    lineHeight: '48px'
                  }}>
                    +88 445 55 678 & 89
                  </Typography>
                </Box>
              </Box>
              <Box sx={{
                p: '15px 0 20px'
              }}>
                <Typography variant='p' sx={{
                  color: '#FFFFFFB5',
                  fontSize: '17px',
                  fontWeight: '500',
                  lineHeight: '28px'
                }}>
                  Monday - Friday:
                  <br/>
                  9.00 - 6.00
                  <br/>
                  Sunday & Public Holidays (Closed)
                </Typography>
              </Box>
              <Box sx={{
                p: '10px 0 90px'
              }}>
                <Box sx={{
                  display: 'inline-flex',
                  gap: '5px',
                  alignItems: 'center',
                  color: 'white',
                  height: '25px',
                  cursor: 'pointer'
                }}
                onClick={scrollToTop}
                >
                  <Typography variant='span' sx={{
                    fontSize: '15px',
                    fontWeight: '700',
                    lineHeight: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.6px'
                  }}>
                    request a call back
                  </Typography>
                  <FaArrowRight/>
                </Box>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              width: '56%',
              height: 'auto',
              p: '15px'
            }}>
              <Box sx={{
                width: '100%',
                height: 'fit-content',
                p: '60px 50px',
                bgcolor: 'white',
                borderRadius: '10px'
              }}>
                <Box sx={{
                  display: 'flex',
                  gap: '30px',
                  mb: '20px'
                }}>
                  <TextField sx={{
                    width: '50%',
                    minHeight: '50px',
                  }}label="First Name" variant="outlined" />
                  <TextField sx={{
                    width: '50%',
                    minHeight: '50px',
                  }}label="Last Name" variant="outlined" />
                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: '30px',
                  mb: '20px'
                }}>
                  <TextField sx={{
                    width: '50%',
                    minHeight: '50px',
                  }}label="Email Address" variant="outlined" />
                  <TextField sx={{
                    width: '50%',
                    minHeight: '50px',
                  }}label="Phone Number" variant="outlined" />
                </Box>
                <Box sx={{ minWidth: 120, mb: '20px' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Discuss About</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      label="Discuss About"
                      onChange={handleChange}
                      MenuProps={{
                        disableScrollLock: true
                      }}
                    >
                      <MenuItem value={'Mobile'}>Mobile</MenuItem>
                      <MenuItem value={'Service'}>Service</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: '100%', mb: '20px'}}>
                  <TextField sx={{
                    width: '100%'
                  }}
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    placeholder='Write somthin...'
                  />
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Button content='Send A Message' type='dark' style={{ width: '100%' }}/>
                </Box>
              </Box>
            </Box>
          </Box>
        </MainLayout>
      </Box>
      <Footer/>
    </>
  )
}

export default Contact