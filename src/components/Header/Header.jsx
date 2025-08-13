//import MainLayout from '@components/Layout/MainLayout';
import styles from './styles.module.scss';
import { dataMenu } from './constants';
import Menu from './Menu/Menu';
import { CiSearch } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { PiHandbagLight } from 'react-icons/pi';
import Logo from '../../assets/images/LogoXstore.png';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, logoutUserAPI } from '@/redux/user/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@components/Button/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';
import MenuMui from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Headroom from 'react-headroom';
import { Box, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { MdMenu } from 'react-icons/md';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomDrawer from '@/components/Drawer/CustomDrawer';
import Search from '@components/Search/Search';
import Cart from '@components/Cart/Cart';
import Wishlist from '@components/Wishlist/Wishlist';
import { useLocation } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid transparent',
  borderRadius: '10px',
  boxShadow: 24,
  p: '20px',
};

const Header = () => {
    const { wrappHeader, left, imgLogo, between, right, iconRight } = styles;
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSearch, setOpenSearch] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [openWishlist, setOpenWishlist] = useState(false)
    const navigate = useNavigate()
    const location = useLocation();

    //Modal confirm logout
    const [openModalLogout, setOpenModalLogout] = useState(false);
    const handleOpenModalLogout = () => setOpenModalLogout(true);
    const handleCloseModalLogout = () => {
        setOpenModalLogout(false);
        setAnchorEl(null);
    }
    
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch()

    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');

    const [anchorEl, setAnchorEl] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
            if (anchorEl) {
            setAnchorEl(null);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [anchorEl]);
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        dispatch(logoutUserAPI())
        setOpenModalLogout(false);
        setAnchorEl(null);
        navigate('/login')
    }

    //Drawer
    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    };
    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    };

    //Open Search
    const handleOpenSearch = () => {
        setOpenSearch(true);
    };
    const handleCloseSearch = () => {
        setOpenSearch(false);
    };
    
    //Open Cart 
    const handleOpenCart = () => {
        if(location.pathname === '/cart-detail') {
            return
        } else {
            setOpenCart(true)
        }
    }
    const handleCloseCart = () => {
        setOpenCart(false)
    }

    //Open Wishlist 
    const handleOpenWishlist = () => {
        if(location.pathname === '/wishlist') {
            return
        } else {
            setOpenWishlist(true)
        }
    }
    const handleCloseWishlist = () => {
        setOpenWishlist(false)
    }

    return (
        <>
            {!isTablet && <Headroom
                disableInlineStyles // để dùng CSS riêng của bạn
                style={{}}
                downTolerance={10} // độ trễ khi scroll xuống
                upTolerance={5} // độ trễ khi scroll lên
                pinStart={1} // chỉ bắt đầu khi scroll qua 20px
            >
                <div className={wrappHeader}>
                        <div className={left}>
                            <img className={imgLogo} src={Logo} alt='logo' />
                        </div>
                        <div className={between}>
                            {dataMenu.map((data, index) => (
                                <Menu
                                    key={index}
                                    content={data.content}
                                    href={data.href}
                                />
                            ))}
                        </div>
                        <div className={right}>
                            <CiSearch className={iconRight} onClick={handleOpenSearch} />
                            <Search handleCloseSearch={handleCloseSearch} openSearch={openSearch}/>
                            {!user ? 
                            <>
                                <Button style={{ margin: 'auto'}} content='Log In' size='small' to='/login' type='primary'/>
                                <Button style={{ margin: 'auto'}} content='Sign Up' size='small' to='/register' type='white'/>
                            </>                 
                            : <>
                                <CiHeart className={iconRight} onClick={handleOpenWishlist}/>
                                <Wishlist handleCloseWishlist={handleCloseWishlist} openWishlist={openWishlist}/>
                                <PiHandbagLight className={iconRight} onClick={handleOpenCart}/>
                                <Cart handleCloseCart={handleCloseCart} openCart={openCart}/>
                                <Tooltip title={user.displayName}>
                                    <Avatar
                                        sx={{ m: '10px', cursor: 'pointer'}}
                                        src={user?.avatar}
                                        alt={user?.userName}
                                        onClick={handleClick}
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    />
                                </Tooltip>
                                <MenuMui
                                    id="basic-menu"
                                    disableScrollLock
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby': 'basic-button',
                                        },
                                        paper: {
                                            sx: {
                                                mt: 1.5,
                                            }
                                        }
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleOpenModalLogout}>Logout</MenuItem>
                                </MenuMui>
                            </>}
                        </div>
                </div>
            </Headroom>}
            {isTablet && 
                <>
                    <Headroom
                        disableInlineStyles // để dùng CSS riêng của bạn
                        downTolerance={10} // độ trễ khi scroll xuống
                        upTolerance={5} // độ trễ khi scroll lên
                        pinStart={1} // chỉ bắt đầu khi scroll qua 20px
                    >
                        <AppBar sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            bgcolor: 'white',
                            boxShadow: 'none'
                        }}
                        position="static"
                        >
                            <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, color: 'black' }}
                                onClick={handleOpenDrawer}
                            >
                                <MdMenu />
                            </IconButton>
                            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                                <img className={imgLogo} src={Logo} alt='logo' />
                            </Box>
                            <Typography sx={{ color: 'black'}}>Login</Typography>
                            </Toolbar>
                        </AppBar>
                    </Headroom>
                    <CustomDrawer handleCloseDrawer={handleCloseDrawer} openDrawer={openDrawer}/>
                    {/* {openDrawer && (
                        <IconButton
                            onClick={handleCloseDrawer}
                            sx={{
                                position: 'fixed',
                                top: 15,
                                left: 380,
                                zIndex: 1301,
                                width: '35px',
                                height: '35px',
                                bgcolor: 'white',
                                border: '1px solid transparent',
                                boxShadow: 3,
                                '&:hover':{
                                    backgroundColor: 'rgb(225, 225, 225)'
                                }
                            }}
                        >
                            ✕
                        </IconButton>
                    )} */}
                </>
            }
            <Modal
                open={openModalLogout}
                onClose={handleCloseModalLogout}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ fontWeight: '600' }} id="modal-modal-title" variant="h6" component="h2">
                        Confirm Logout
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to Logout?
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        mt: '30px',
                        justifyContent: 'flex-end',
                        gap: '8px'
                    }}>
                        <Button content='Confirm' type='primary' onClick={handleLogout}/>
                        <Button content='Cancel' onClick={handleCloseModalLogout}/>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default Header;
