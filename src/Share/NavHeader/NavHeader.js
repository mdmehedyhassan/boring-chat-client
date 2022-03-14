import * as React from 'react';
import './NavHeader.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faUserGroup, faUsers } from '@fortawesome/free-solid-svg-icons';
import { darkTheme, GlobalStyles, lightTheme } from '../../globalStye/globalStye';
import { faEnvelope, faLightbulb, faMoon, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import useAuth from '../../hooks/useAuth';

const drawerWidth = 150;

function NavHeader(props) {
    const { user, logoutHandler } = useAuth();

    const location = useLocation();
    const path = location.pathname;
    const [isLightTheme, setIsLightTheme] = React.useState(true);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ minHeight: '200%' }} className={`text-center ${isLightTheme ? 'bg-light' : "bg-dark"}`}>
            {/* <Toolbar /> */}
            <Link to={`/profile/${user?.email}`} style={{ textDecoration: 'none' }}>
                <div className="d-flex justify-content-center m-1 ">
                    <div style={{ height: 55, width: 55, overflow: 'hidden', background: '#3f71cc', textAlign: 'center', borderRadius: '50%', color: 'white' }}>
                        {
                            user?.photoURL ?
                                <img style={{ width: 55, borderRadius: '50%' }} src={user?.photoURL} alt="" />
                                :
                                <div style={{ fontSize: '50px' }}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                        }
                    </div>
                </div>
                <h5 className="fw-bolder">{user?.displayName}</h5>
            </Link>
            <br />
            <div className="text-start">
                <Link style={{ textDecoration: 'none' }} to="/">
                    <List className={`link-hover-style ps-2 ${path === '/' ? "active-link-style" : ""}`}>
                        <FontAwesomeIcon icon={faHouse} /> Home
                    </List>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/peoples">
                    <List className={`link-hover-style ps-2 ${path === '/peoples' ? "active-link-style" : ""}`}>
                        <FontAwesomeIcon icon={faUsers} /> Peoples
                    </List>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/friends">
                    <List className={`link-hover-style ps-2 ${path === '/friends' ? "active-link-style" : ""}`}>
                        <FontAwesomeIcon icon={faUserGroup} /> Following
                    </List>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/send">
                    <List className={`link-hover-style ps-2 ${path === '/send' ? "active-link-style" : ""}`}>
                        <FontAwesomeIcon icon={faPaperPlane} /> Send
                    </List>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/receive">
                    <List className={`link-hover-style ps-2 ${path === '/receive' ? "active-link-style" : ""}`}>
                        <FontAwesomeIcon icon={faEnvelope} /> Receive
                    </List>
                </Link>
            </div>

            {
                user?.email ?
                    <List className="m-2">
                        <button onClick={logoutHandler} className="btn fw-bold btn-outline-primary form-control">
                            Logout
                        </button>
                    </List>
                    :
                    <Link style={{ textDecoration: 'none' }} to="/login">
                        <List className={`link-hover-style ${path === '/login' ? "active-link-style" : ""}`}>
                            Login
                        </List>
                    </Link>
            }
            <List className="m-2">
                <button onClick={() => setIsLightTheme(!isLightTheme)} className={`btn fw-bold rounded-circle ${isLightTheme ? 'btn-dark' : 'btn-light'}`}>
                    {
                        isLightTheme ?
                            <FontAwesomeIcon icon={faMoon} />
                            :
                            <FontAwesomeIcon icon={faLightbulb} />
                    }
                </button>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box >
            <GlobalStyles theme={isLightTheme ? lightTheme : darkTheme} />
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <span className="fw-bolder"> Boring Chat</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}


export default NavHeader;