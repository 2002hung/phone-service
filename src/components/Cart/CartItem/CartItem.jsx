import { useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase  from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { IoCloseSharp } from "react-icons/io5";
import QuantityInput from '@components/QuantityInput/QuantityInput';

function CartItem() {
  const [quantity, setQuantity] = useState(1)

  return (
    <Box sx={{
      display: 'flex',
      position: 'relative',
      gap: '20px',
      width: '100%',
      p: '20px 12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        bgcolor: '#f7f7f7',
        '& .icon-btn': {
          opacity: 1,
          transform: 'translateX(0)',
          visibility: 'visible',
          transition: 'all 0.3s ease-in-out',
        }
      }
    }}>
      <IconButton className='icon-btn' sx={{
        opacity: 0,
        visibility: 'hidden',
        position: 'absolute',
        transform: 'translateX(100%)',
        top: '0',
        right: '0',
        fontSize: '12px',
      }}>
        <IoCloseSharp/>
      </IconButton>
      <img style={{
        display: 'block',
        height: '70px',
        width: '70px'
      }}
      src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/1.1-min-600x600.jpg'
      />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography sx={{
          fontSize: '15px',
          fontWeight: '700',
          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>Kingston IP660 Headphone White Optics Cable</Typography>
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <QuantityInput value={quantity} onChange={setQuantity} />
          <Box>
            <Typography> x 25.00$</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CartItem