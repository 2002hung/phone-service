import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/user/userSlice';
import { AiOutlineSearch } from 'react-icons/ai';
import Logo from '@/assets/images/LogoXstore.png';


function CustomDrawer({ handleCloseDrawer, openDrawer }) {
  const user = useSelector(selectCurrentUser)

  const listItem = [
    {
      content: 'Home',
      to: '/'
    },
        {
      content: 'Shop',
      to: '/shop'
    },
        {
      content: 'Services',
      to: '/service'
    },
        {
      content: 'Blog',
      to: '/'
    },
        {
      content: 'About us',
      to: '/'
    }
  ]
  return (
    <div>
      <Drawer
        disableScrollLock
        open={openDrawer}
        onClose={handleCloseDrawer}
      >
        <Box sx={{ width: 370, p: '30px' }} role="presentation">
          <Box
            sx={{
              position: 'absolute',
              top: 15,
              right: 15,
              zIndex: 1301,
            }}
          >
            <IconButton
              onClick={handleCloseDrawer}
              sx={{
                width: '35px',
                height: '35px',
                '&:hover': {
                  backgroundColor: 'rgb(225, 225, 225)'
                }
              }}
            >
              ✕
            </IconButton>
          </Box>
          <List>
            {user ? <Box sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <Avatar alt={user?.userName} src={user.avatar}/>
                <Typography sx={{
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '20px',
                  ml: '10px'
                }}
                variant='h6'>
                  {user.displayName}
                </Typography>
              </Box> : 
              <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <img src={Logo} alt='logo'/>
              </Box>
            }
            <Box sx={{
              m: '20px 0'
            }}>
              <TextField sx={{
                width: '100%',
                '& .MuiOutlinedInput-input': {
                  pt: '6px',
                  pb: '6px'
                },
                '& .MuiOutlinedInput-root': {
                  pr: 0,
                },
                '& .MuiInputLabel-root': {
                  fontSize: '15px',
                  transform: 'translate(14px, 7px) scale(1)',
                },
                '& .MuiInputLabel-shrink': {
                  transform: 'translate(14px, -9px) scale(0.75)' // khi label co lại
                }
              }}
              InputProps={{
                endAdornment: (
                  <IconButton><AiOutlineSearch size={20} style={{ color: '#222222' }}/></IconButton>
                )
              }}
              id="outlined-basic"
              label="Search"
              variant="outlined"
            />
            </Box>
          </List>
          <Divider />
          <List>
            {listItem.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ pl: '0' }} component={Link} to={item.to}>
                  <ListItemText primary={item.content} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>  
        </Box>
      </Drawer>
    </div>
  )
}

export default CustomDrawer