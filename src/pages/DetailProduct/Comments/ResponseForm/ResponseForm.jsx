/* eslint-disable no-unused-vars */
import StarRating from '@components/StarRating/StarRating';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'
import Button from '@components/Button/Button';

function ResponseForm() {
  const {register, handleSubmit, formState: { errors }} = useForm()

  const handleStar = (value) => {
    console.log(value)
  }

  return (
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
        Be the first to review “UGreen Dashboard Protector”
      </Typography>
      <Box>
        <Box sx={{mb: '16px' }}>
          <Typography variant='h6' sx={{
            color: 'var(--text-color)',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '25px',
            mb: '5px'
          }}>Your rating</Typography>
          <StarRating type='input' onChange={handleStar} sx={{ fontSize: '18px', py: '5px' }}/>
        </Box>
        <TextField
          id="outlined-multiline-static"
          label="Your Review"
          multiline
          rows={4}
          placeholder="Write Somethin..."
          sx={{
            width: '100%',
            mb: '20px'
          }}
        />
        <TextField
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          sx={{
            width: '100%',
            mb: '20px'
          }}
        />
        <TextField
          id="outlined-basic"
          label="Your Email"
          variant="outlined"
          sx={{
            width: '100%',
            mb: '20px'
          }}
        />
      </Box>
      <Button type='dark' content='Submit'/>
    </Box>
  )
}

export default ResponseForm