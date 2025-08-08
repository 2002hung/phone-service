/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import MainLayout from '@components/Layout/MainLayout';
import styles from '../styles.module.scss'
import StarRating from '@components/StarRating/StarRating';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ResponseForm from './ResponseForm/ResponseForm';

function Comments() {
  return (
    <Box sx={{
      mb: '60px'
    }}>
      <MainLayout>
        <Box sx={{
          p: '9px 15px',
          textAlign: 'center',
          borderBottom: '1px solid #e1e1e1'
        }}>
          <Typography variant='h6' sx={{
            color: 'var(--primary-color)',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '25px'
          }}>
            Review
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          pt: '20px'
        }}>
          <Box sx={{
            flex: 1
          }}>
            <Box sx={{
              p: '30px',
              textAlign: 'center',
              bgcolor: '#f7f7f7',
              mb: '30px'
            }}>
              <Typography variant='h2' sx={{
                color: 'var(--text-color)',
                fontWeight: '700',
                fontSize: '42px',
                lineHeight: '58px'
              }}>
                5.00
              </Typography>
              <Box sx={{
                textAlign: 'center'
              }}>
                <StarRating percentage='100' sx={{ justifyContent: 'center', fontSize: '16px' }}/>
                <Typography variant='h6' sx={{
                  color: 'var(--text-color)',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '25px',
                  m: '10px 0 15px'
                }}>
                  Based on 1 reviews
                </Typography>
              </Box>
              <RatingBreakdown  ratings={{ 5: 3, 4: 1, 3: 0, 2: 0, 1: 1 }}/>
            </Box>
            <Box>
              <Typography variant='h6' sx={{
                color: 'var(--text-color)',
                fontSize: '14px',
                fontWeight: '700',
                lineHeight: '20px',
                textTransform: 'uppercase',
                mb: '14px',
                pb: '14px',
                borderBottom: '1px solid #e1e1e1'
              }}>
                1 review for UGreen Dashboard Protector
              </Typography>
              <Box>
                There are no reviews yet.
              </Box>
            </Box>
          </Box>
          <Box sx={{
            flex: 1
          }}>
            <ResponseForm/>
          </Box>
        </Box>
      </MainLayout>
    </Box>
  )
}

export default Comments