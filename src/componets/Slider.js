import React, { useContext, useState } from 'react';
import closeIcon from '../assets/close.png';
import { AppointmentContext } from './Appointment/Context/AppointmentContext';
import Book_Session from './Appointment/SliderComponet/Book_Session';
import Your_Session from './Appointment/SliderComponet/Your_Session';

const Slider = ({ closeSlider }) => {
  const [activeTab, setActiveTab] = useState('session');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const {
    selectedSessionName
  } = useContext(AppointmentContext);

  const handleBookSessionClick = () => {
    setActiveTab('book');
    setIsCalendarOpen(true);
  };

  const handleYourSessionClick = () => {
    setActiveTab('session');
    setIsCalendarOpen(false);
  }
  return (
    <div className="fixed top-0 right-0 h-full w-1/2 bg-gray-100 shadow-lg transform translate-x-0 transition-transform overflow-y-auto">
      {/* Header with Close Button */}
      <div>
        <div className="px-3 pt-3 rounded-lg flex justify-start text-slate-400">
          <button className="font-bold" onClick={closeSlider}>
            <img src={closeIcon} className='w-5' alt="Close" />
          </button>
          <p className="px-2 font-semibold text-sm">Mock Session</p>
        </div>
        <p className="border-b pb-3 text-slate-700 m-2 px-8 text-xl">{selectedSessionName}</p>
      </div>

      {/* Section to book or view session */}
      <div className="uppercase flex justify-around py-2 border-b-2 text-sm font-medium">
        <p onClick={handleBookSessionClick}
          className={`cursor-pointer ${activeTab === 'book' ? 'text-blue-500 border-b-2' : ''}`}>
          Book Session
        </p>
        <p onClick={handleYourSessionClick}
          className={`cursor-pointer ${activeTab === 'session' ? 'text-blue-500 border-b-2' : ''}`}>
          Your Session
        </p>
      </div>

      <div className="p-6 mt-6 bg-gray-50 rounded-lg mb-10">
        {!isCalendarOpen ? (
          <div className="flex flex-col text-gray-500">
            <Your_Session />
          </div>
        ) : (
          <Book_Session activeTab={activeTab} />
        )}
      </div>


    </div>
  );
};

export default Slider;
