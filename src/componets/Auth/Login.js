import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/appointment/login', {
                email: email,
                pass: password
            }, { withCredentials: true })
            console.log(response.data)
            navigate('/appointment')
        } catch (error) {
            console.log("Error")
        }
    }
    return (
        <div className=' flex justify-center bg-white text-slate-700 mb-10 '>
            <div className=' p-5 border w-1/2 items-center shadow-md rounded-lg -mt-10 bg-white'>
                <div className=' text-center text-2xl font-semibold uppercase py-3'>Register Form</div>
                <form onSubmit={handleSubmit} className=' font-semibold'>

                    <div className=' py-2'>
                        <label>Email:</label>
                        <input type="text" className=' w-full px-3 py-2 border outline-none rounded-md' placeholder='Please enter Username' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className=' py-2'>
                        <label>Password:</label>
                        <input type="password" className=' w-full px-3 py-2 border outline-none rounded-md' placeholder='Please enter Username' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className=' py-2'>
                        <button className=' px-4 py-2 bg-blue-400 rounded-lg text-white'>Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login