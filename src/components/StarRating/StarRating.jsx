import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function StarRating({
  type = 'view',
  percentage = 60,
  defaultValue = 0,
  onChange,
  sx,
  color = 'gold',
  totalStars = 5,
}) {
  const [hoverValue, setHoverValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const handleClick = (value) => {
    setCurrentValue(value);
    if (onChange) onChange(value);
  };

  if (type === 'view') {
    const fullStars = Math.floor((percentage / 100) * totalStars);
    const halfStar = (percentage / 100) * totalStars - fullStars >= 0.5;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          lineHeight: '20px',
          ...sx,
        }}
      >
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} color={color} />
        ))}
        {halfStar && <FaStarHalfAlt color={color} />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} color={color} />
        ))}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        ...sx,
      }}
    >
      {[...Array(totalStars)].map((_, i) => {
        const starIndex = i + 1;
        const isFilled = hoverValue >= starIndex || (!hoverValue && currentValue >= starIndex);

        return (
          <Box
            key={i}
            onMouseEnter={() => setHoverValue(starIndex)}
            onMouseLeave={() => setHoverValue(0)}
            onClick={() => handleClick(starIndex)}
            sx={{ transition: 'color 0.2s' }}
          >
            <FaStar color={isFilled ? color : '#ccc'} />
          </Box>
        );
      })}
    </Box>
  );
}

export default StarRating;
