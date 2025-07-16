import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

function CustomDrawer({ toggleDrawer, openDrawer }) {
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
      <Drawer disableScrollLock open={openDrawer} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 310 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {listItem.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.to}>
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