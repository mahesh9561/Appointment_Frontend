import React, { useContext, useEffect, useState } from 'react';
import { AppointmentContext } from './Context/AppointmentContext';
import debounce from 'lodash.debounce';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AppointmentForm() {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    selectedSessionName,
    date,
    score,
    time,
    type,
    feedback,
    setFeedback,
    setScore,
    id,
    last_session
  } = useContext(AppointmentContext);

  // Save data whenever the context state changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id || !selectedSessionName || !type) return;

    try {
      // Prepare the data object, only including fields that are updated
      const updatedEntries = [
        {
          score: score || "0",
          last_session: last_session || undefined,
          feedback: feedback || "Need Improvement",
          type: type || undefined,
          date: date || undefined,
          time: time || undefined
        }
      ].filter(entry => Object.values(entry).some(value => value !== undefined)); // Remove undefined fields

      if (updatedEntries.length === 0) return; // No updates to send

      const response = await axios.put(
        'http://localhost:8000/api/appointment/updateSession',
        {
          session_name: selectedSessionName,
          type: type,
          entries: updatedEntries
        },
        { withCredentials: true }
      );
      console.log("Data saved:", response.data);
      alert("Data saved", response.data)
      navigate('/appointment')
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }



  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        console.error("Session ID is missing");
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/appointment/getSessionDetails/${id}`,
          { withCredentials: true }
        );
        setTask(response.data);
      } catch (error) {
        setError("Failed to fetch session details");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // };

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div>
        {task && (
          <div key={task._id}>
            <h2>{task.session_name}</h2>
          </div>
        )}
      </div>
      <div className='flex justify-center bg-white text-slate-700 mb-10'>
        <div className='p-5 border w-1/2 items-center shadow-md rounded-lg bg-white'>
          <div className='text-center text-2xl font-semibold uppercase py-3'>Please fill feedback Form</div>
          <form onSubmit={handleSubmit} className='font-semibold'>
            <div className='py-2'>
              <label>Session Name:</label>
              <input
                type='text'
                className='w-full px-3 py-2 border outline-none rounded-md'
                readOnly
                value={selectedSessionName || ''}
              />
            </div>
            <div className='py-2'>
              <label>Type:</label>
              <input
                type='text'
                className='w-full px-3 py-2 border outline-none rounded-md'
                readOnly
                value={type || ''}
              />
            </div>
            <div className='py-2'>
              <div className='w-full px-3 py-2 border outline-none rounded-md'>
                Date: {date || ''} | Time: {time || ''}
              </div>
            </div>
            <div className='py-2'>
              <label>Score:</label>
              <input
                type='number'
                className='w-full px-3 py-2 border outline-none rounded-md'
                placeholder='Enter score'
                value={score || ''}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
            <div className='py-2'>
              <label>Feedback:</label>
              <input
                type='text'
                className='w-full px-3 py-2 border outline-none rounded-md'
                placeholder='Enter feedback'
                value={feedback || ''}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
            <div className='py-2'>
              <button type='submit' className='px-4 py-2 bg-blue-400 rounded-lg text-white'>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
