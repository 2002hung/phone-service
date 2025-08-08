import Box from '@mui/material/Box';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainLayout from '@components/Layout/MainLayout';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from './styles.module.scss';
import { Typography } from '@mui/material';

function RelatedProducts() {
  const { fullWidth } = styles
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  const products = [
    {
      _id: '1',
      name: 'iPhone Charger',
      price: 29.99,
      imagesURL: ['https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/3.2-min.jpg'],
    },
    {
      _id: '2',
      name: 'USB-C Cable',
      price: 12.5,
      imagesURL: ['https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/3.2-min.jpg'],
    },
    {
      _id: '3',
      name: 'USB-C Cable',
      price: 12.5,
      imagesURL: ['https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/3.2-min.jpg'],
    },
    {
      _id: '4',
      name: 'USB-C Cable',
      price: 12.5,
      imagesURL: ['https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/3.2-min.jpg'],
    },
    {
      _id: '5',
      name: 'USB-C Cable',
      price: 12.5,
      imagesURL: ['https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/3.2-min.jpg'],
    }
  ]

  return (
    <Box sx={{
      minHeight: '500px',
      my: '20px 30px'
    }}>
      <MainLayout>
        <Box sx={{
          textAlign: 'center',
          mb: '20px'
        }}>
          <Typography variant='h2' sx={{
            color: 'var(--text-color)',
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '29px'
          }}>
            Related products
          </Typography>
        </Box>
        <Box className="slider-container">
          <Slider {...settings}>
            {products.map((item) => (
              <Box key={item._id} sx={{
                p: '6px 12px'
              }}>
                <ProductItem data={item} className={fullWidth}/>
              </Box>
            ))}
          </Slider>
        </Box>
      </MainLayout>
    </Box>
  )
}

export default RelatedProducts