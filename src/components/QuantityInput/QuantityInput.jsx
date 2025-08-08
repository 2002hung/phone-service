import { useState } from 'react'
import { IconButton, InputBase, Box } from '@mui/material'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

function QuantityInput({ value, onChange, min = 1 }) {
  const [internalValue, setInternalValue] = useState(value || min)

  const handleChange = (val) => {
    const newVal = Math.max(min, val)
    setInternalValue(newVal)
    onChange?.(newVal)
  }

  const handleDecrease = () => handleChange(internalValue - 1)
  const handleIncrease = () => handleChange(internalValue + 1)

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "28px",
        width: "fit-content",
        overflow: "hidden"
      }}
    >
      <IconButton
        onClick={handleDecrease}
        size="small"
        sx={{
          p: '4px',
          minWidth: '28px',
          height: '28px',
          border: "0.5px solid #ccc",
          borderRadius: 0
        }}
      >
        <AiOutlineMinus size={14} />
      </IconButton>

      <InputBase
        value={internalValue}
        onChange={(e) => {
          const val = parseInt(e.target.value)
          handleChange(Number.isNaN(val) ? min : val)
        }}
        type="number"
        inputProps={{ min }}
        sx={{
          width: '28px',
          height: '28px',
          padding: 0,
          border: "0.5px solid #ccc",
          '& input': {
            textAlign: 'center',
            fontSize: 14,
            height: '28px',
            width: '28px',
            appearance: 'textfield',
            MozAppearance: 'textfield',
            WebkitAppearance: 'none',
          },
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          }
        }}
      />

      <IconButton
        onClick={handleIncrease}
        size="small"
        sx={{
          p: '4px',
          minWidth: '28px',
          height: '28px',
          border: "0.5px solid #ccc",
          borderRadius: 0
        }}
      >
        <AiOutlinePlus size={14} />
      </IconButton>
    </Box>
  )
}

export default QuantityInput
