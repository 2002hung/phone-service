import MainLayout from '@components/Layout/MainLayout';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@components/Button/Button';
import { MdOutlineFlashOn, MdStarOutline } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { FaMedal } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import ProgressBar from '@components/ProgressBar/ProgressBar';
import { getAllBrandAPI } from '@/apis/brandService';
import { useEffect, useState } from 'react';

function AboutUs() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    getAllBrandAPI()
      .then(res => {
        setBrands(res)
      })
  },[])

  return (
    <>
      <Header/>
      <Breadcrumb title={'About Us'} />
      <Box sx={{
        backgroundImage: 'url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/About_image.jpeg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        padding: '80px 0 64px'
      }}>
        <MainLayout>
          <Box sx={{
            p: '15px'
          }}>
            <Typography variant='h2' component='span' sx={{
              fontSize: '44px',
              fontWeight: '700',
              lineHeight: '52px',
              color: 'var(--text-color)'
            }}>About Us</Typography>
            <Typography variant='h6' sx={{
              fontSize: '44px',
              fontWeight: '300',
              lineHeight: '52px',
              color: 'var(--text-color)'
            }}>Your Trusted Tech Experts</Typography>
          </Box>
        </MainLayout>
      </Box>
      <Box sx={{ mt: '75px'}}>
        <MainLayout>
            <Box sx={{ p: '10px', mb: '25px', textAlign: 'center' }}>
              <Typography variant='h6' sx={{
                textTransform: 'uppercase',
                color: 'var(--primary-color)',
                fontSize: '15px',
                mb: '5px'
              }}>How the xstore</Typography>
              <Typography sx={{
                fontSize: '44px',
                fontWeight: '700',
                lineHeight: '56px',
                color: 'var(--text-color)'
              }}>How Our Repair Service Works:</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Box sx={{ p: '15px', width: '41%'}}>
                <Box sx={{ display: 'flex', mb: '48px'}}>
                  <Box sx={{ mr: '50px'}}>
                    <img src="https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Icon-1.jpeg" alt="icon" />
                  </Box>
                  <Box>
                    <Typography sx={{
                      fontSize: '22px',
                      fontWeight: '700',
                      lineHeight: '28px',
                      color: 'var(--text-color)',
                      mb: '15px'
                    }}>Step 1: Tell Us What’s Broken</Typography>
                    <Typography variant='p' sx={{
                      color: 'var(--third-color)',
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '26px'
                    }}>
                      Start a booking by clicking the blue "Repair" button and tell us what's wrong with your device and we'll give you an instant online price.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mb: '48px'}}>
                  <Box sx={{ mr: '50px'}}>
                    <img src="https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Icon2.jpeg" alt="icon" />
                  </Box>
                  <Box>
                    <Typography sx={{
                      fontSize: '22px',
                      fontWeight: '700',
                      lineHeight: '28px',
                      color: 'var(--text-color)',
                      mb: '15px'
                    }}>Step 2: Pick a Time & Place</Typography>
                    <Typography variant='p' sx={{
                      color: 'var(--third-color)',
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '26px'
                    }}>
                      We'll call you within an hour of your booking to confirm a convenient date and time 
                      for your repair everythings here.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mb: '48px'}}>
                  <Box sx={{ mr: '50px'}}>
                    <img src="https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Icon3.jpeg" alt="icon" />
                  </Box>
                  <Box>
                    <Typography sx={{
                      fontSize: '22px',
                      fontWeight: '700',
                      lineHeight: '28px',
                      color: 'var(--text-color)',
                      mb: '15px'
                    }}>Step 3: We Bring The XStore</Typography>
                    <Typography variant='p' sx={{
                      color: 'var(--third-color)',
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '26px'
                    }}>
                      XStore Repair Hero comes to you and completes your phone repair on the spot. It's that easy - 
                      and we also fix tablets! Repairs take 30 minutes or less.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{
                width: '44%',
                height: 'auto',
                p: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Group-237-1.jpeg)',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}>
                <Button content='Start Your Repair' type='primary' style={{ minWidth: '254px' }}/>
              </Box>
            </Box>
        </MainLayout>
      </Box>
      <Box sx={{
        backgroundImage: 'url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Trusted.jpeg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        p: '100px 0 120px'
      }}>
        <MainLayout>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{
              display: 'flex',
              width: '33.333%',
              p: '15px'
            }}>
              <Box sx={{
                mr: '15px',
                fontSize: '40px',
                color: 'white'
              }}>
                <MdOutlineFlashOn />
              </Box>
              <Box>
                <Typography variant='h6' sx={{
                  fontSize: '21px',
                  fontWeight: '700',
                  lineHeight: '25px',
                  color: 'white',
                  mb: '20px'
                }}>Professional</Typography>
                <Typography variant='p' sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '25px',
                  color: 'white',
                }}>
                  Our technicians are knowledgeable and well rounded professionals, who are always on-time, respectful and friendly.
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              width: '33.333%',
              p: '15px'
            }}>
              <Box sx={{
                mr: '15px',
                fontSize: '40px',
                color: 'white'
              }}>
                <GoShieldCheck />
              </Box>
              <Box>
                <Typography variant='h6' sx={{
                  fontSize: '21px',
                  fontWeight: '700',
                  lineHeight: '25px',
                  color: 'white',
                  mb: '20px'
                }}>
                  Certified
                </Typography>
                <Typography variant='p' sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '25px',
                  color: 'white',
                }}>
                  Having trained and passed XStore comprehensive Repair Certification Programme, 
                  every XStore Team member can repair your device faster than a you can wink.
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              width: '33.333%',
              p: '15px'
            }}>
              <Box sx={{
                mr: '15px',
                fontSize: '40px',
                color: 'white'
              }}>
                <FaMedal />
              </Box>
              <Box>
                <Typography variant='h6' sx={{
                  fontSize: '21px',
                  fontWeight: '700',
                  lineHeight: '25px',
                  color: 'white',
                  mb: '20px'
                }}>Verified</Typography>
                <Typography variant='p' sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '25px',
                  color: 'white',
                }}>
                  Having trained and passed XStore comprehensive Repair Certification Programme, 
                  every XStore Team member can repair your device faster than a you can wink.
                </Typography>
              </Box>
            </Box>
          </Box>
        </MainLayout>
      </Box>
      <Box sx={{
        mt: '55px'
      }}>
        <MainLayout>
          <Box sx={{
            display: 'flex',
            mb: '70px'
          }}>
            <Box sx={{
              p: '15px',
              width: '50%'
            }}>
              <Typography variant='h6' sx={{
                textTransform: 'uppercase',
                color: 'var(--primary-color)',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '25px',
                mb: '10px'
              }}>facts about us</Typography>
              <Typography variant='h2' sx={{
                color: 'var(--text-color)',
                fontSize: '44px',
                fontWeight: '700',
                lineHeight: '56px',
                mb: '25px'
              }}>
                We Save Your Time And Money
              </Typography>
              <Typography variant='p' sx={{
                display: 'block',
                color: 'var(--third-color)',
                fontSize: '18px',
                fontWeight: '300',
                lineHeight: '28px',
                mb: '20px'
              }}>
                Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. 
                Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore 
                sed do magna aliqua.
              </Typography>
              <Box sx={{
                display: 'flex'
              }}>
                <Box sx={{
                  p: '10px',
                  mr: '15px',
                  fontSize: '20px',
                  borderRadius: '999px',
                  bgcolor: '#f1f1f1',
                  width: 'fit-content',
                  lineHeight: '20px'
                }}>
                  <CiMail/>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Typography variant='p' sx={{
                    color: 'var(--text-color)',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '26px',
                  }}>
                    xstore@repairing.com
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{
              p: '15px',
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}>
              <ProgressBar value='50' label='Data Backup & Recovery'/>
              <ProgressBar value='92' label='Malware & Virus Removal'/>
              <ProgressBar value='85' label='Repairing Problems'/>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            height: 'auto',
            bgcolor: '#222222',
            borderRadius: '10px'
          }}>
            <Box sx={{
              height: 'auto',
              borderRadius: '10px 0 0 10px',
              overflow: 'hidden'
            }}>
              <img src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Image.png' style={{ display: 'block' }}/>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mx: '30px',
              width: '56%'
            }}>
              <Typography variant='h6' sx={{
                color: '#fff',
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '26px',
                mb: '10px'
              }}>Want to join the XStore Phone Repair team?</Typography>
              <Typography variant='p' sx={{
                color: '#b3b3b3',
                fontSize: '14px',
                fontWeight: '300',
                lineHeight: '20px',
              }}>We are always interested in adding dedicated, hard-working, and talented individuals to the XStore Phone Repair team.</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Button content='Career With Us' type='primary'/>
            </Box>
          </Box>
        </MainLayout>
      </Box>
      <Box sx={{
        backgroundImage: 'url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Awards.jpeg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: 'auto',
        p: '105px 0 120px',
        mt: '80px'
      }}>
        <MainLayout>
          <Box sx={{
            mb: '35px',
            pb: '25px',
            textAlign: 'center'
          }}>
            <Typography variant='h6' sx={{
              color: 'var(--primary-color)',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '25px',
              textTransform: 'uppercase',
              mb: '5px'
            }}>Enjoy our success</Typography>
            <Typography variant='h2' sx={{
              color: 'white',
              fontSize: '44px',
              fontWeight: '700',
              lineHeight: '56px',
              mb: '25px'
            }}>Our Awards & Recognition</Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Box sx={{
              display: 'flex',
              backgroundColor: 'white',
              p: '55px 45px',
              width: '32%',
              borderRadius: '10px'
            }}>
              <Box sx={{
                fontSize: '40px',
                color: 'var(--primary-color)',
                pt: '10px',
                mr: '30px'
              }}>
                <FaMedal/>
              </Box>
              <Box>
                <Typography sx={{
                  mb: '10px',
                  color: '#F56D0D66',
                  fontSize: '44px',
                  fontWeight: '700',
                  lineHeight: '56px'
                }}>2014</Typography>
                <Typography sx={{
                  color: 'var(--third-color)',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '25px'
                }}>
                  Awarded 2014 "Entrepreneur of the Year" by Grand Customer Chamber of Commerce"
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              backgroundColor: 'white',
              p: '55px 45px',
              width: '32%',
              borderRadius: '10px'
            }}>
              <Box sx={{
                fontSize: '40px',
                color: 'var(--primary-color)',
                pt: '10px',
                mr: '30px'
              }}>
                <MdStarOutline/>
              </Box>
              <Box>
                <Typography sx={{
                  mb: '10px',
                  color: '#F56D0D66',
                  fontSize: '44px',
                  fontWeight: '700',
                  lineHeight: '56px'
                }}>2018</Typography>
                <Typography sx={{
                  color: 'var(--third-color)',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '25px'
                }}>
                  Awarded 2018 "Bussiness of the Year" by the Grand XStore Chamber of Reparing"
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              backgroundColor: 'white',
              p: '55px 45px',
              width: '32%',
              borderRadius: '10px'
            }}>
              <Box sx={{
                fontSize: '40px',
                color: 'var(--primary-color)',
                pt: '10px',
                mr: '30px'
              }}>
                <MdOutlineFlashOn/>
              </Box>
              <Box>
                <Typography sx={{
                  mb: '10px',
                  color: '#F56D0D66',
                  fontSize: '44px',
                  fontWeight: '700',
                  lineHeight: '56px'
                }}>2022</Typography>
                <Typography sx={{
                  color: 'var(--third-color)',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '25px'
                }}>
                  Awarded 2022 "Successful of the Year" by the Grand Profit Making of Markets"
                </Typography>
              </Box>
            </Box>
          </Box>
        </MainLayout>
      </Box>
      <Box sx={{ mt: '60px', pb: '90px' }}>
        <MainLayout>
          <Box sx={{
            p: '15px'
          }}>
            <Box sx={{ mb: '20px', px: '160px', textAlign: 'center' }}>
              <Typography sx={{
                color: 'var(--primary-color)',
                fontSize: '15px',
                fontWeight: '500',
                lineHeight: '24px',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                mb: '5px'
              }}>
                10,000+ Company Connected
              </Typography>
              <Typography sx={{
                color: 'var(--text-color)',
                fontSize: '44px',
                fontWeight: '700',
                lineHeight: '56px',
                mb: '25px'
              }}>
                Our Brand Partners
              </Typography>
              <Typography sx={{
                color: 'var(--third-color)',
                fontSize: '18px',
                fontWeight: '300',
                lineHeight: '28px',
                mb: '20px'
              }}>
                We’re the only technology destination you can trust for every repair and style solution imaginable – 
                all from a one-stop shop.
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {brands.map((brand, index) => (
                <Box key={index} sx={{ p: '15px 40px', width: 'fit-content' }}>
                  <img src={brand.logo} alt={brand.name}/>
                </Box>
              ))}
            </Box>
          </Box>
        </MainLayout>
      </Box>
      <Footer/>
    </>
  )
}

export default AboutUs