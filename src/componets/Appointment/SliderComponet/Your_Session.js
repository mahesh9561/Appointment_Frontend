import React, { useContext, useEffect, useState } from 'react'
import { AppointmentContext } from '../Context/AppointmentContext';
import axios from 'axios';


function Your_Session() {
    const [items, setItems] = useState([]);
    const { id } = useContext(AppointmentContext);

    const [date, setDate] = useState('')
    // console.log(id)
    useEffect(() => {
        const handleYourSessionClick = async () => {
            if (!id || !date) {
                console.log("Id and date not available")
            }
            try {
                const response = await axios.get(`http://localhost:8000/api/appointment/getSessionDetails/${id}?date=${date}`, {
                    withCredentials: true
                });
                setItems(response.data.entries);

            } catch (error) {
                console.log(error);
            }
        }
        handleYourSessionClick();
    }, [id, date])

    const handleDate = (value) => {
        setDate(value);
    }


    return (
        <div className="flex flex-col text-gray-500">
            <div className="bg-white rounded-lg border w-full p-3 items-center text-center">
                {items && items.length > 0 ? (
                    <>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Session:</h3>
                        <select onChange={(e) => handleDate(e.target.value)} className="px-4 py-2 bg-gray-100 rounded-lg border focus:outline-none focus:border-blue-500 hover:bg-gray-200 transition w-full max-w-xs">
                            {items.map((item) => (
                                <option key={item._id} value={item.date} >
                                    {item.date}
                                </option>
                            ))}
                        </select>
                    </>
                ) : (
                    <p className="text-gray-400">No sessions available</p>
                )}
            </div>

            <div>
                <div className="bg-white rounded-lg border w-full p-3 my-2">
                    {items && items.length > 0 ? (
                        <>
                            <div className='border-b text-gray-500 text-sm mb-1'>
                                <h3>Session details</h3>
                            </div>
                            <div>
                                {items.map((item) => {
                                    return (
                                        <div key={item._id}>
                                            {item.date},{item.time}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="border-t pt-2 mt-2 text-gray-500 text-sm">
                                <h3>View Recording</h3>
                            </div>

                        </>
                    ) : (
                        <p className="text-gray-400">No sessions available</p>
                    )}
                </div>
                <div className="bg-white rounded-lg border w-full p-3 my-2">
                    {items && items.length > 0 ? (
                        <>
                            <div className='border-b text-gray-500 text-sm mb-1'>
                                <h3>Section Wise Analysis</h3>
                            </div>
                            <div>
                                {items.map((item) => {
                                    return (
                                        <div key={item._id}>
                                            {item.score ?
                                                <div className=' flex justify-between'>
                                                    <div>Score:</div>
                                                    <div className=' float-end text-green-600 text-5xl px-3'>{item.score}</div>
                                                </div>
                                                :
                                                "Score not available"}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="border-t pt-2 mt-2 text-gray-500 text-sm">
                                <h3>View Recording</h3>
                            </div>

                        </>
                    ) : (
                        <p className="text-gray-400">No sessions available</p>
                    )}
                </div>
            </div>
            <div className="bg-white rounded-lg border w-full p-3 my-2">
                {items && items.length > 0 ? (
                    <>
                       
                        <div>
                            {items.map((item) => {
                                return (
                                    <div key={item._id}>
                                        {item.score ?
                                            <div className=' grid col-span-2 gap-3 '>
                                                <div className=' text-sm text-slate-300'>Let’s see what our Mentor has to say about the Interview!</div>
                                                <div className=' '>{item.feedback}</div>
                                            </div>
                                            :
                                            "Score not available"}
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <p className="text-gray-400">No sessions available</p>
                )}
            </div>

        </div>
    )



}

export default Your_Session