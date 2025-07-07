import React from 'react'
import Box from '@mui/material/Box';

import StarRating from '@components/StarRating/StarRating';
import ArrowSlide from '@components/ArrowSlideCustom/ArrowSlide';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Typography } from '@mui/material';
//import styles from './styles.module.scss'

function SlideItem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <ArrowSlide/>,
    prevArrow: <ArrowSlide/>,
    appendDots: dots => (
      <Box
        sx={{
          mt: 3,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          bottom: -40,
          '& ul': {
            display: 'flex',
            listStyle: 'none',
            p: 0,
            m: 0,
            gap: 1
          }
        }}
      >
        <ul>{dots}</ul>
      </Box>
    ),
    customPaging: () => (<Box sx={{
      width: 10,
      height: 10,
      bgcolor: 'white',
      borderRadius: '50%',
    }}/>),
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{
      width: '100%',
      backgroundImage: 'url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Image.jpeg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',

    }}>
      <Box sx={{
        ml: 'auto',
        mr: 'auto',
        minHeight: '700px',
        maxWidth: '1230px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{
          padding: '10px',
          width: '100%'
        }}>
          <Box sx={{
            mb: '25px',
            textAlign: 'center',
            width: '100%'
          }}>
            <Typography sx={{
              display: 'block',
              textTransform: 'uppercase',
              color: 'var(--primary-color)',
              lineHeight: '24px',
              fontSize: '15px',
              fontWeight: '500',
              letterSpacing: '1.5px',
              mb: '5px'
            }} variant='h3'>customer testimonials</Typography>
            <Typography sx={{
              display: 'block',
              color: 'var(--white-color)',
              lineHeight: '56px',
              fontSize: '44px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              mb: '25px'
            }} variant='h3'>What Our Clients Says</Typography>
          </Box>
          
          {/**Slider Comment */}
          <Box sx={{
            position: 'relative',
            '& .slick-prev, & .slick-next': {
              zIndex: 2,
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0,
              transition: 'all 0.3s ease',
            },
            '& .slick-prev': {
              left: '0px',
            },
            '& .slick-next': {
              right: '0px',
            },
            '&:hover .slick-prev': {
              opacity: 1,
              transform: 'translate(-20px, -50%)'
            },
            '&:hover .slick-next': {
              opacity: 1,
              transform: 'translate(20px, -50%)',
            }
          }}>
            <Slider {...settings}>
              <Box sx={{
                px: 1.2,
                borderRadius: '10px'
               }}>
                <Box sx={{
                  backgroundColor: 'rgb(0,0,0,0.3)',
                  p: '50px',
                  display: 'flex',
                  borderRadius: '10px'
                }}>
                  <img src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/avatar.jpeg' alt='avatar-user' style={{ borderRadius: '100px',height: '100px' }}/>
                  <Box sx={{
                    ml: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}>
                    <StarRating percentage='80' style={{
                      m: '10px 0 15px 20px'
                    }}/>
                    <Typography sx={{
                      display: 'block',
                      color: '#C2C2C2',
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '25px',
                      m: '0 0 15px 20px'
                    }}>I had my screen and my battery changed. What a hidden gem this company!!
                      So happy with the result. Very professional 
                      and the work has been done perfectly.
                    </Typography>
                    <Typography sx={{
                      ml: '20px',
                      color: 'var(--white-color)',
                      fontSize: '18px',
                      fontWeight: '500'
                    }}>Flynn Seeger</Typography>
                    <Typography sx={{
                      ml: '20px',
                      color: '#FFFFFF7A',
                      fontSize: '13px'
                    }}>Syrian Arab Republic</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{
                px: 1.2,
                borderRadius: '10px'
               }}>
                <Box sx={{
                  backgroundColor: 'rgb(0,0,0,0.3)',
                  p: '50px',
                  display: 'flex',
                  borderRadius: '10px'
                }}>
                  <img src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/avatar.jpeg' alt='avatar-user' style={{ borderRadius: '100px',height: '100px' }}/>
                  <Box sx={{
                    ml: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}>
                    <StarRating percentage='90' style={{
                      m: '10px 0 15px 20px'
                    }}/>
                    <Typography sx={{
                      display: 'block',
                      color: '#C2C2C2',
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '25px',
                      m: '0 0 15px 20px'
                    }}>I had my screen and my battery changed. What a hidden gem this company!!
                      So happy with the result. Very professional 
                      and the work has been done perfectly.
                    </Typography>
                    <Typography sx={{
                      ml: '20px',
                      color: 'var(--white-color)',
                      fontSize: '18px',
                      fontWeight: '500'
                    }}>Flynn Seeger</Typography>
                    <Typography sx={{
                      ml: '20px',
                      color: '#FFFFFF7A',
                      fontSize: '13px'
                    }}>Syrian Arab Republic</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{
                px: 1.2,
                borderRadius: '10px'
               }}>
                <Box sx={{
                  backgroundColor: 'rgb(0,0,0,0.3)',
                  p: '50px',
                  display: 'flex',
                  borderRadius: '10px'
                }}>
                  <img src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/avatar.jpeg' alt='avatar-user' style={{ borderRadius: '100px',height: '100px' }}/>
                  <Box sx={{
                    ml: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}>
                    <StarRating percentage='100' style={{
                      m: '10px 0 15px 20px'
                    }}/>
                    <Typography sx={{
                      display: 'block',
                      color: '#C2C2C2',
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '25px',
                      m: '0 0 15px 20px'
                    }}>I had my screen and my battery changed. What a hidden gem this company!!
                      So happy with the result. Very professional 
                      and the work has been done perfectly.
                    </Typography>
                    <Typography sx={{
                      ml: '20px',
                      color: 'var(--white-color)',
                      fontSize: '18px',
                      fontWeight: '500'
                    }}>Flynn Seeger</Typography>
                    <Typography sx={{
                      ml: '20px',
                      color: '#FFFFFF7A',
                      fontSize: '13px'
                    }}>Syrian Arab Republic</Typography>
                  </Box>
                </Box>
              </Box>
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SlideItem