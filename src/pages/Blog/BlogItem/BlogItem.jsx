import React from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoComment } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import Avatar from '@mui/material/Avatar';

function BlogItem() {
  return (
    <Box component="article">
      <Box sx={{
        position: 'relative',
        width: '380px',
        height: '272px',
        border: '1px solid transparent',
        borderRadius: '10px',
        overflow: 'hidden',
        mb: '25px'
      }}>
        <Link to="/post/123">
          <Box
            component="img"
            src="https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/elementor/thumbs/Image_blog_7-ppae00f0xi6mlg560a4b61lnvfi9i1dnjc1e7wwn00.jpeg"
            alt="image01"
            sx={{
              width: '380px',
              height: '272px',
              border: '1px solid transparent',
              borderRadius: '10px',
              transition: 'all 1s ease',
              '&:hover': {
                transform: 'scale(1.2)'
              }
            }}
          />
        </Link>
        <Box sx={{
          position: 'absolute',
          zIndex: 999,
          top: '15px',
          left: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '65px',
          height: '65px',
          textAlign: 'center',
          borderRadius: '999px',
          bgcolor: 'white',

        }}>
          <Typography variant='h6' sx={{
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '20px',
            color: 'var(--text-color)'
          }}>24</Typography>
          <Typography variant='h6' sx={{
            textTransform: 'uppercase',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '12px',
            color: 'var(--text-color)'
          }}>Mar</Typography>
        </Box>
        <Box sx={{
          position: 'absolute',
          bottom: '15px',
          left: '15px',
          p: '6px 8px',
          bgcolor: 'var(--primary-color)',
          border: '1px solid transparent',
          borderRadius: '4px'
        }}>
          <Typography variant='h6' sx={{
            color: 'white',
            fontSize: '15px',
            lineHeight: '15px'
          }}>Watering</Typography>
        </Box>
      </Box>
      <Box sx={{
        width: '380px'
      }}>
        <Link to='/post/123'>
          <Typography variant='h3' sx={{
            color: 'var(--text-color)',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '28px',
            mb: '20px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>General Tips for Purchasing a Pre- Owned Phone</Typography>
        </Link>
        <Typography variant='h6' sx={{
          fontSize: '16px',
          color: '#777',
          mb: '18px'
        }}>
          Various versions have evolved over then years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Typography>
        <Link to='/post/123'>
          <Box sx={{ color: 'var(--primary-color)', display: 'flex', alignItems: 'center' }}>
            <Typography sx={{
              fontSize: '15px',
              mr: '10px'
            }}>Read More</Typography>
            <FaArrowRightLong />
          </Box>
        </Link>
        <Box sx={{
          display: 'flex',
          mt: '25px',
          py: '10px',
          borderTop: '1px solid #e1e1e1',
          color: 'var(--text-color)'
        }}>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Avatar alt="avatar" src="https://secure.gravatar.com/avatar/a6280f7f23013459511038e00886b0060b0f9988ce085a79d72abe097603402a?s=80&d=mm&r=g" sx={{
              width: '20px',
              height: '20px',
              mr: '10px'
            }}/>
            <Typography sx={{ fontSize: '12px', color: 'var(--text-color)', mr: '4px'}}>by</Typography>
            <Link to='/author/123'><Typography sx={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-color)' }}>Rose Tyler</Typography></Link>
          </Box>
          <Box sx={{
            display: 'flex',
            gap: '10px'
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              fontSize: '12px'
            }}><MdOutlineRemoveRedEye/> 12</Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              fontSize: '12px'
            }}><GoComment /> 3</Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              fontSize: '12px'
            }}><CiShare2 /></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogItem;
