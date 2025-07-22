import React from 'react'
import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/MainLayout';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import Footer from '@components/Footer/Footer';
import Box from '@mui/material/Box';
import BlogItem from './BlogItem/BlogItem';

function Blog() {
  return (
    <>
      <Header />
      <Breadcrumb title={'News'} />
      <MainLayout>
        <Box sx={{ p: '25px 15px 0' }}>
          <Box component='section' sx={{
            p: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
          </Box>
        </Box>
      </MainLayout>
      <Footer/>
    </>
  )
}

export default Blog