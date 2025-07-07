import React from 'react'
import Box from '@mui/material/Box'

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function StarRating({ percentage = 60, style }) {
  const fullStars = Math.floor((percentage / 100) * 5);
  const halfStar = (percentage / 100) * 5 - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <Box {...style} sx={{
      fontSize: '14px',
      lineHeight: '20px'
    }}
    >
      {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} color="gold" />)}
      {halfStar && <FaStarHalfAlt color="gold" />}
      {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} color="gold" />)}
    </Box>
  )
}

export default StarRating