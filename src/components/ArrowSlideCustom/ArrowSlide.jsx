import React from 'react'
import Box from '@mui/material/Box';

function ArrowSlide({ className, style, onClick }) {
  return (
    <Box
      className={className}
      sx={{ 
        ...style,
        display: "block",
        width: '55px',
        height: '55px',
        zIndex: 10,
        opacity: 0,
        '&::before': {
          fontSize: '55px',
          lineHeight: '55px'
        },
        '&:hover::before': {
          color: 'var(--primary-color)',
        }
      }}
      onClick={onClick}
    />
  );
}

export default ArrowSlide