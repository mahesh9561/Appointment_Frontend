import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './componets/Auth/Register';
import Login from './componets/Auth/Login';
import Navbar from './componets/Appointment/Navbar';
import HomePage from './pages/HomePage';
import PrivateRoute from './componets/Auth/PrivateRouter';
import Appointment from './componets/Appointment/Appointment';
import AppointmentForm from './componets/Appointment/AppointmentForm';
import AppointmentList from './componets/Appointment/AppointmentList';
import "@fontsource/roboto";
import { AppointmentProvider } from './componets/Appointment/Context/AppointmentContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppointmentProvider>
          
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />

            <Route element={<PrivateRoute />}>
              <Route path='/home' element={<HomePage />} />
              <Route path='/appointment' element={<Appointment />} />
              <Route path='/feedback' element={<AppointmentForm />} />
              <Route path='/appointment-list' element={<AppointmentList />} />
            </Route>
          </Routes>
        </AppointmentProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
