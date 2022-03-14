import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home/Home';
import NavHeader from './Share/NavHeader/NavHeader';
import AOS from 'aos';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import Friends from './page/Friends/Friends/Friends';
import Profile from './page/Profile/Profile/Profile';
import SignIn from './Login/SignIn/SignIn';
import Login from './Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import UserPrivateRoute from './privateRoute/UserPrivateRoute';
import LoginPrivateRoute from './privateRoute/LoginPrivateRoute';
import Peoples from './page/Peoples/Peoples/Peoples';
import Send from './page/Send/Send/Send';
import Receive from './page/Receive/Recive/Receive';

AOS.init();

//#0b5ed7
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
                <Route path="/peoples" element={<Peoples />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/send" element={<Send />} />
                <Route path="/receive" element={<Receive />} />
                <Route path="/profile/:profileEmail" element={<Profile />} />
              </Route>
              <Route element={<LoginPrivateRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signIn" element={<SignIn />} />
              </Route>
            </Routes>
          </div>
        </Box>
      </Box>
    </AuthProvider>
  );
}

export default App;
