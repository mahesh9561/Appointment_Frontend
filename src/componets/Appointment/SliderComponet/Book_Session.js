import React, { useContext, useState } from 'react';
import Calendar from '../Calender';
import TimeSlots from '../TimeSlots';
import { AppointmentContext } from '../Context/AppointmentContext';

const Book_Session = ({ activeTab }) => {
    const [selectDate, setSelectDate] = useState(null);
    const [bookedSlots, setBookedSlots] = useState({});
    const [sessionBook, setSessionBook] = useState(null);
    const [isDuplicate, setIsDuplicate] = useState(false);
    const { setDate, setTime, setLast_session, date, time, name } = useContext(AppointmentContext);

    const handleChange = (date) => {
        setSelectDate(date);
        setDate(date.format('YYYY-MM-DD'));
        setLast_session(date.format('YYYY-MM-DD'));
    };
    const dateKey = selectDate ? selectDate.format('YYYY-MM-DD') : null;
    const slotsBookedForDate = bookedSlots[dateKey] || [];
    console.log("slotsBookedForDate", slotsBookedForDate)
    const handleBook = () => {
        setSessionBook({ date: selectDate.format('DD/MM/YYYY'), slots: slotsBookedForDate });
    };
    console.log("Booking confirmed:", sessionBook);

    const handleBookSlot = (timeSlot) => {
        if (selectDate) {
            const dateKey = selectDate.format('YYYY-MM-DD');
            if (slotsBookedForDate.includes(timeSlot)) {
                setIsDuplicate(true);
                console.log("Duplicate slot detected:", timeSlot);
            } else {
                // Add slot if it does not exist
                setTime(timeSlot);
                setBookedSlots((prev) => ({
                    ...prev,
                    [dateKey]: [...slotsBookedForDate, timeSlot],
                }));
                setIsDuplicate(false);
            }
        }
    };
    console.log(name);

    return (
        <div className="items-start space-y-6 md:space-y-0 md:space-x-6">
            <div className='flex flex-col md:flex-row justify-between'>
                <div className="w-full md:w-1/2">
                    <Calendar selectDate={selectDate} handleChange={handleChange} bookedSlots={bookedSlots} />
                </div>
                {selectDate && (
                    <div className="w-full md:w-1/2">
                        <div className="mb-4 bg-blue-100 rounded-lg px-4 py-2 text-center font-semibold text-blue-700">
                            Select time-slot
                        </div>
                        <TimeSlots
                            slotsBookedForDate={slotsBookedForDate}
                            onBookSlot={handleBookSlot}
                        />
                        {isDuplicate && (
                            <div className="text-red-500 text-center mt-2">
                                This slot is already booked. Please choose a different time.
                            </div>
                        )}
                    </div>
                )}
            </div>
            {activeTab === 'book' ? (
                <div className="flex justify-around mb-4">
                    <div>
                        {sessionBook ? (
                            <div>
                                <h2 className='text-[12px] text-slate-500 font-medium'>Session Booked for</h2>
                                <h2>{date}, {time}</h2>
                            </div>
                        ) : (
                            <h2>Available Slots for Booking</h2>
                        )}
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <button
                                className='text-white p-2 border bg-blue-400 rounded-xl'
                                onClick={handleBook}
                            >
                                Book Session
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className='text-center'>PLEASE BOOK SESSION</p>
            )}
        </div>
    );
};

export default Book_Session;
