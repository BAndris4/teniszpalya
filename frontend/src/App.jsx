import './index.css'
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";
import Home from './views/Home';
import Register from './views/Register.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './views/Login.jsx';
import ProfilePage from './views/ProfilePage.jsx';
import ReserveByCourts from './views/ReserveByCourts.jsx';
import ReserveByTime from './views/ReserveByTime.jsx';
import ForgotPassword from './views/ForgotPassword.jsx';
import ResetPassword from './views/ResetPassword.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/reserveByCourt" element={<ReserveByCourts/>} />
            <Route path="/reserveByTime" element={<ReserveByTime/>} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
