import { useState } from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import { IoCloseSharp } from "react-icons/io5";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85vw',
  height: '90vh',
  bgcolor: 'background.paper',
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 0
};

function HomePageContent() {
  const [open, setOpen] = useState(false)

  const {modalIconClose} = styles

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  return (
    <Box sx={{
      width: '100%',
      height: 'auto',
      backgroundImage: 'url(https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/Image.jpeg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Box sx={{height: '100%', mx: '141px', display: 'flex', minHeight: '500px', alignItems: 'center'}}>
        <Box sx={{ width: '100%', height: '232px'}}>
          <Box onClick={handleOpen} sx={{ display: 'flex', justifyContent: 'center', mb: '25px', cursor: 'pointer'}}>
            <img src='https://xstore.b-cdn.net/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/video-icon.png'></img>
          </Box>
          <Typography sx={{ fontSize: '15px', fontWeight: '500', color: 'var(--white-color)', textAlign: 'center', textTransform: 'uppercase'}} variant='h2'>How xstore repair service works</Typography>
        </Box>
        {open && <IoCloseSharp className={modalIconClose} onClick={handleClose}/>}
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <iframe
              src="https://www.youtube.com/embed/UAlAkvoilfk"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Modal>
      </Box>
    </Box>
  )
}

export default HomePageContent