import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/appointment/register",
                {
                    name,
                    email,
                    mobile,
                    pass: password
                },
            )
            setName('');
            setEmail('');
            setMobile('');
            setPassword('');
        } catch (error) {
            console.log(error, "Error")
        }
    }
    return (
        <div className=' flex justify-center bg-white text-slate-700 mb-10 '>
            <div className=' p-5 border w-1/2 items-center shadow-md rounded-lg -mt-10 bg-white'>
                <div className=' text-center text-2xl font-semibold uppercase py-3'>Register Form</div>
                <form onSubmit={handleSubmit} className=' font-semibold'>
                    <div className=' py-2'>
                        <label>Username:</label>
                        <input type="text" className=' w-full px-3 py-2 border outline-none rounded-md' placeholder='Please enter Username' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className=' py-2'>
                        <label>Email:</label>
                        <input type="text" className=' w-full px-3 py-2 border outline-none rounded-md' placeholder='Please enter Username' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className=' py-2'>
                        <label>Mobile:</label>
                        <input type="text" className=' w-full px-3 py-2 border outline-none rounded-md' placeholder='Please enter Username' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <div className=' py-2'>
                        <label>Password:</label>
                        <input type="password" className=' w-full px-3 py-2 border outline-none rounded-md' placeholder='Please enter Username' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className=' py-2'>
                        <button className=' px-4 py-2 bg-blue-400 rounded-lg text-white'>Register</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register