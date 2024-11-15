import React, { useState, useEffect } from 'react'

function ViewTodo({ todo, setTodo }) {
    const [isEditted, setIsEddited] = useState(null);
    const [editData, setEditData] = useState({ name: '', email: '', date: '', status: '' });
    const [filterData, setFilterData] = useState(todo || []);
    const [searchData, setSearchData] = useState(null);

    useEffect(() => {
        setFilterData(todo);
    }, [todo]);

    const handleDelete = (index) => {
        const delteTask = filterData.filter((item, i) => index !== i);
        setTodo(delteTask)
    }
    const handleEdit = (index) => {
        setIsEddited(index);
        setEditData(filterData[index]);
    }

    const handleSave = (index) => {
        const updateData = [...todo];
        updateData[index] = editData;
        setTodo(updateData)
        setIsEddited(null);
    }
    const handleCancel = () => {
        setIsEddited(null);
    }
    const handleFilter = (status) => {
        if (status === "all") {
            setFilterData(todo)
        }
        else {
            const newFilter = todo.filter((item) => item.status === status);
            setFilterData(newFilter);
        }
    }
    

    const handleSearch = (search) => {
        setSearchData(search); // Update search query
        const newSearch = todo.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        setFilterData(newSearch); // Update filtered data
    }
    return (
        <div>
            <div className='grid grid-cols-2 gap-4 items-center mx-7 mt-5'>
                <div className='col-span-1 flex justify-end'>
                    <select className=' outline-none border rounded-md px-4 py-2' onChange={(e) => handleFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="complete">complete</option>
                        <option value="uncomplete">uncomplete</option>
                    </select>
                </div>
                <div className='px-4 py-2 rounded-lg '>
                    <input type="text" className=' border px-4 py-2 rounded-lg outline-none w-full' placeholder='Search ...' onChange={(e) => handleSearch(e.target.value)} value={searchData} />
                </div>
            </div>

            <div className=' grid grid-cols-3 p-5 '>
                {filterData.map((item, index) => (
                    <div key={index} className=' border p-5 m-3 rounded-md shadow-lg'>
                        {isEditted === index ?
                            (
                                <div className=' p-5 border shadow-lg rounded-md'>
                                    <div className=' items-center text-center font-semibold text-xl uppercase'>
                                        <h2 >Add Todo</h2>
                                    </div>
                                    <div className=' py-2'>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" placeholder='Please Enter name' className=' p-2 w-full border outline-none rounded-md' value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} id='name' />
                                    </div>
                                    <div className=' py-2'>
                                        <label htmlFor="email">Email</label>
                                        <input type="text" placeholder='Please Enter Email Id' className=' p-2 w-full border outline-none rounded-md' value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} id='email' />
                                    </div>
                                    <div className=' py-2'>
                                        <label htmlFor="date">Data</label>
                                        <input type="date" placeholder='Please Enter date' className=' p-2 w-full border outline-none rounded-md' value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} id='date' />
                                    </div>
                                    <div className=' py-2'>
                                        <label htmlFor="status">Status</label>
                                        <select className=' p-2 w-full border outline-none rounded-md'
                                            value={editData.status} onChange={(e) => setEditData({ ...editData, status: e.target.value })} id='status'>
                                            <option value="complete">Complete</option>
                                            <option value="uncomplete">Uncomplete</option>
                                        </select>
                                    </div>
                                    <div className=' flex justify-around pt-5'>
                                        <button onClick={(e) => handleSave(index)} className=' border px-4 py-2 rounded-lg shadow-md bg-orange-500-400'>Save</button>
                                        <button onClick={(e) => handleCancel(index)} className=' border px-4 py-2 rounded-lg shadow-md bg-orange-500-400'>Cancel</button>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div>
                                    <h1>{item.name}</h1>
                                    <h1>{item.email}</h1>
                                    <h1>{item.date}</h1>
                                    <h1>{item.status}</h1>
                                    <div className="flex justify-around pt-5">
                                        <button onClick={() => handleDelete(index)} className="border px-4 py-2 rounded-lg shadow-md bg-orange-500-400">
                                            Delete
                                        </button>
                                        <button onClick={() => handleEdit(index)} className="border px-4 py-2 rounded-lg shadow-md bg-orange-500-400">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            )}
                    </div>

                ))}
            </div>
        </div>
    )
}
export default ViewTodo