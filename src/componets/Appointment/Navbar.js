import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuthenticate, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/appointment/checkAuth', { withCredentials: true });
                setIsAuthenticated(response.data.isAuthenticated);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuthStatus();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/appointment/logout', {}, { withCredentials: true });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=' bg-gradient-to-tr from-blue-600 to-blue-400 h-[33vh]'>
            <div className=' py-5 text-center font-semibold text-white text-xl'>
                <h1>
                    {/* {location.pathname === '/login' ? 'Please Login' : 'Please Register' || location.pathname == '/appointment' ? 'Please Book session' : 'Please Fill Feedback Form'}</h1> */}

                    {location.pathname === '/login' ? 'Please Login'
                        : location.pathname === '/' ? 'Please Register'
                            : location.pathname === '/appointment' ? 'Please Book Session'
                                : 'Please Fill Feedback Form'}
                </h1>

            </div>
            <div className='flex justify-around text-white text-xl font-semibold'>
                {isAuthenticate ? (
                    <>
                        <Link to="/feedback">Appointment Form</Link>
                        {/* <Link to="/appointment-list">Appointment List</Link> */}
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
