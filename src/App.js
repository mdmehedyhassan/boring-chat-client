import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home/Home';
import NavHeader from './Share/NavHeader/NavHeader';
import AOS from 'aos';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import Friends from './page/Friends/Friends/Friends';
import Message from './page/Message/Message/Message';
import Profile from './page/Profile/Profile/Profile';
import SignIn from './Login/SignIn/SignIn';
import Login from './Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import UserPrivateRoute from './privateRoute/UserPrivateRoute';

AOS.init();

//#00facd
function App() {
  return (
    <AuthProvider>
      <Box sx={{ display: 'flex' }}>
        <NavHeader />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - 150px)` } }}
        >
          <Toolbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<UserPrivateRoute />}>
                <Route path="/friends" element={<Friends />} />
                <Route path="/message" element={<Message />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signIn" element={<SignIn />} />
            </Routes>
          </div>
        </Box>
      </Box>
    </AuthProvider>
  );
}

export default App;
