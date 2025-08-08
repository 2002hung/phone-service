import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './styles.module.scss';

function ProgressBar({ label, value }) {
  const {stripeBar} = styles

  return (
    <Box sx={{ mb: '25px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '6px' }}>
        <Typography sx={{
          fontSize: '17px',
          fontWeight: '500',
          color: 'var(--text-color)'
        }}>{label}</Typography>
        <Typography sx={{
          fontSize: '16px',
          fontWeight: '700',
          color: 'var(--text-color)'
        }}>{value}%</Typography>
      </Box>
      <Box sx={{
        backgroundColor: '#eee',
        borderRadius: '4px',
        overflow: 'hidden',
        height: '20px'
      }}>
        <Box className={stripeBar} sx={{
          width: `${value}%`
        }} />
      </Box>
    </Box>
  );
}

export default ProgressBar