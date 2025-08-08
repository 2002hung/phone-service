import { useState } from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import MainLayout from '@components/Layout/MainLayout';
import SliderImage from '../SliderImage/SliderImage';
import StarRating from '@components/StarRating/StarRating';
import { FaAngleRight } from "react-icons/fa6";
import { BsSendCheck } from "react-icons/bs";
import { TfiTimer } from "react-icons/tfi";
import { CiGift } from "react-icons/ci";
import { ImArrowRight } from "react-icons/im";
import { CiHeart } from 'react-icons/ci';
import QuantityInput from '@components/QuantityInput/QuantityInput';
import styles from '../styles.module.scss'
import Button from '@components/Button/Button';

function InfoProduct() {
  const { linkItem } = styles
  const [quantity, setQuantity] = useState(1)
  
  return (
    <Box sx={{ mb: '60px' }}>
      <MainLayout>
        <Box sx={{
          mt: '76px'
        }}>
          <Box sx={{
            display: 'flex',
            p: '15px',
            color: '#7e8688',
            alignItems: 'center',
            '& a': {
              display: 'flex',
              justifyContent: 'center',
              color: '#7e8688',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: '26px'
            },
            '& p': {
              fontSize: '15px',
              fontWeight: '700',
              color: '#f56d0d',
              lineHeight: '26px'
            }
          }}>
            <Link to={'/'}>Home</Link>
            <FaAngleRight />
            <Link to={'/shop'}>Accessories</Link>
            <FaAngleRight />
            <p>Dashboard Protector UGreen</p>
          </Box>
          <Box sx={{
            display: 'flex'
          }}>
            <Box sx={{
              width: '45%',
              p: '15px'
            }}>
              <SliderImage/>
            </Box>
            <Box sx={{
              width: '55%',
              p: '15px'
            }}>
              <Box sx={{
                width: '100%',
                mb: '20px'
              }}>
                <Typography variant='h2' sx={{
                  color: 'var(--text-color)',
                  fontSize: '36px',
                  fontWeight: '700',
                  lineHeight: '36px'
                }}>UGreen Dashboard Protector</Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                width: '100%',
                mb: '20px'
              }}>
                <StarRating percentage='100' style={{ marginRight: '8px' }}/>
                <Typography variant='h6' sx={{
                  color: 'var(--text-color)',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '25px'
                }}>(1 customer review)</Typography>
              </Box>
              <Box sx={{ width: '100%', mb: '20px'}}>
                <Typography variant='h6' sx={{
                  color: '#999',
                  fontSize: '21px',
                  fontWeight: '400',
                  lineHeight: '33px'
                }}>$39.50</Typography>
              </Box>
              <Box sx={{ width: '100%', mb: '10px'}}>
                <Box sx={{
                  display: 'flex',
                  width: '100%',
                  gap: '16px',
                  alignItem: 'center',
                  py: '6px'
                }}>
                  <Box sx={{ fontSize: '19px' }}><BsSendCheck/></Box>
                  <Typography variant='h6' sx={{
                    color: 'var(--text-color)',
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '24px'
                  }}>Pickup available Our Store at XStore</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  width: '100%',
                  gap: '16px',
                  alignItem: 'center',
                  py: '6px'
                }}>
                  <Box sx={{ fontSize: '19px' }}><TfiTimer/></Box>
                  <Typography variant='h6' sx={{
                    color: 'var(--text-color)',
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '24px'
                  }}>Usually ready Within 24 hours</Typography>
                </Box>
              </Box>
              <Box sx={{
                width: '100%',
                display: 'flex',
                gap: '4px',
                alignItems: 'center'
              }}>
                <Typography variant='h6' sx={{
                  color: 'var(--text-color)',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '25px'
                }}>Brand: </Typography>
                <Box>
                  <img src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Brand_logo_2.jpeg' alt='brand'/>
                </Box>
              </Box>
              <Box sx={{
                width: '100%',
                py: '20px',
                mb: '20px'
              }}>
                <Typography variant='h6' sx={{
                  color: 'var(--third-color)',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '25px'
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do aeiusfdftemir incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim verniam, new of quistrud exercitation laboris 
                  nisi ut aliquip..
                </Typography>
              </Box>
              <Box sx={{
                position: 'relative',
                p: '30px',
                mb: '20px',
                border: '2px solid #EF7015',
                borderRadius: '3px'
              }}>
                <Box sx={{
                  position: 'absolute',
                  fontSize: '40px',
                  color: 'var(--primary-color)',
                  top: '0',
                  transform: 'translateY(-50%)',
                  p: '15px',
                  bgcolor: 'white',
                }}>
                  <CiGift style={{ display: 'block'}}/>
                </Box>
                <Box>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '15px',
                      fontWeight: '500',
                      lineHeight: '30px',
                      color: 'var(--primary-color)',
                    }}>
                      <ImArrowRight/>
                      <Typography variant='h6' sx={{
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '30px',
                      }}>Estimated Delivery Time</Typography>
                      <Typography variant='h6' sx={{
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '30px',
                        textDecoration: 'underline'
                      }}>14-30 days</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '15px',
                      color: 'var(--primary-color)',
                    }}>
                      <ImArrowRight/>
                      <Typography variant='h6' sx={{
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '30px',
                      }}>Sale 30% Off Use Code:</Typography>
                      <Typography variant='h6' sx={{
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '30px',
                        textDecoration: 'underline'
                      }}>Neoo20</Typography>
                    </Box>
                </Box>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                mb: '10px'
              }}>
                <QuantityInput value={quantity} onChange={setQuantity} />
                <Button type='dark' content='Add To Cart' style={{ flex: 1 }}/>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                mb: '10px'
              }}>
                <Box sx={{ flex: 1, height: '1px', backgroundColor: 'var(--text-color)', opacity: '0.1', fontWeight: '400' }} />
                <Typography variant='h6'
                  sx={{
                    px: 2,
                    fontSize: '11px',
                    fontWeight: '400',
                    lineHeight: '19px'
                  }}
                >
                  OR
                </Typography>
                <Box sx={{ flex: 1, height: '1px', backgroundColor: 'var(--text-color)', opacity: '0.1', fontWeight: '400' }} />
              </Box>
              <Box sx={{ mb: '20px' }}>
                <Button content='Buy Now' type='primary' style={{ width: '100%' }}/>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                mb: '20px',
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '16px'
              }}>
                <CiHeart/>
                <Typography variant='h6' sx={{
                  fontSize: '20px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}>Add to Wishlist</Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <Box sx={{
                  display: 'flex',
                  gap: '10px'
                }}>
                  <Typography variant='span' sx={{
                    color: 'var(--text-color)',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '25px'
                  }}>SKU:</Typography>
                  <Typography variant='span' sx={{
                    color: 'var(--second-color)',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '25px'
                  }}>SF-003-1</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: '10px'
                }}>
                  <Typography variant='span' sx={{
                    color: 'var(--text-color)',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '25px'
                  }}>Category:</Typography>
                  <Link to='/shop' className={linkItem}>Accessories</Link>
                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: '10px'
                }}>
                  <Typography variant='span' sx={{
                    color: 'var(--text-color)',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '25px'
                  }}>Tags:</Typography>
                  <Link to='/shop' className={linkItem}>Accessories</Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </Box>
  )
}

export default InfoProduct