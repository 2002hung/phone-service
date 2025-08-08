import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarRating from '@components/StarRating/StarRating';

function RatingBreakdown({ ratings = {} }) {
  const total = Object.values(ratings).reduce((a, b) => a + b, 0);

  return (
    <Box sx={{ width: '100%' }}>
      {[5, 4, 3, 2, 1].map((stars) => {
        const count = ratings[stars] || 0;
        const percentage = total > 0 ? (count / total) * 100 : 0;

        return (
          <Box key={stars} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            {/* Dãy sao */}
            <Box sx={{ minWidth: 80 }}>
              <StarRating
                percentage={(stars / 5) * 100}
                sx={{ fontSize: '16px', justifyContent: 'flex-start' }}
              />
            </Box>

            {/* Progress bar */}
            <Box
              sx={{
                flex: 1,
                height: 10,
                backgroundColor: '#f0f0f0',
                borderRadius: 5,
                mx: 1,
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: `${percentage}%`,
                  height: '100%',
                  backgroundColor: 'green',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
            </Box>

            {/* Số lượng */}
            <Typography variant="h6" sx={{
              width: '20px',
              color: 'var(--text-color)',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center'
            }}>
              {count}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default RatingBreakdown
