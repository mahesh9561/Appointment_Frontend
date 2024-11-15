import React, { useContext, useEffect, useState } from 'react';
import Sessions from './Sessions';
import Slider from '../Slider';
import axios from 'axios';
import { AppointmentContext } from './Context/AppointmentContext';  

function Appointment() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  // Consume state values from context
  const {
    name, setName,
  } = useContext(AppointmentContext);
  
  // Fetch session data on component mount
  useEffect(() => {
    const fetchSessions = async () => {
      const response = await axios.get('http://localhost:8000/api/appointment/getClassSessions', { withCredentials: true });
      setName(response.data);
    };
    fetchSessions();
  }, [setName]);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div>
      <div>
        <Sessions toggleSlider={toggleSlider} name={name} />
      </div>

      {isSliderOpen && (
        <Slider closeSlider={toggleSlider} />
      )}
    </div>
  );
}

export default Appointment;
