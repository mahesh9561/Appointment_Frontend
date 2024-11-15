import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AddTodo({ todo, setTodo }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setData] = useState('');
    const [status, setStatus] = useState('uncomplete');
    const handleSubmit = () => {
        const newTodo = { name, email, date, status };
        setTodo([...todo, newTodo])
        setName('');
        setEmail('')
        setData('')
        setStatus('uncomplete')
    }
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' p-5 border shadow-lg rounded-md w-1/2'>
                <div className=' items-center text-center font-semibold text-xl uppercase'>
                    <h2 >Add Todo</h2>
                </div>
                <div className=' py-2'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Please Enter name' className=' p-2 w-full border outline-none rounded-md' value={name} onChange={(e) => setName(e.target.value)} id='name' />
                </div>
                <div className=' py-2'>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Please Enter Email Id' className=' p-2 w-full border outline-none rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} id='email' />
                </div>
                <div className=' py-2'>
                    <label htmlFor="date">Data</label>
                    <input type="date" placeholder='Please Enter date' className=' p-2 w-full border outline-none rounded-md' value={date} onChange={(e) => setData(e.target.value)} id='date' />
                </div>
                <div className=' py-2'>
                    <label htmlFor="statuss">Status</label>
                    <select className=' p-2 w-full border outline-none rounded-md' value={status} onChange={(e) => setStatus(e.target.value)} id='statuss'>
                        <option value="complete">Complete</option>
                        <option value="uncomplete">Uncomplete</option>
                    </select>
                </div>
                <div className=' flex justify-around'>
                    <button onClick={handleSubmit} className=' px-4 py-2 rounded-lg shadow-md bg-orange-500-400'>Add Todo</button>
                    <Link to='/list' className=' px-4 py-2 rounded-lg shadow-md bg-blue-400' >View Todo</Link>
                </div>
            </div>
        </div>
    )
}

export default AddTodo