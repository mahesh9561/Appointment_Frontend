import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import TimeSlots from './TimeSlots';

function Calendar({selectDate,handleChange}) {
   

    return (
        <div className='flex justify-between w-full  text-sm'>
            <div>
                <div className=' mb-3 bg-slate-200 rounded-lg w-auto mx-auto flex items-center justify-center text-center py-2'>
                    <h3>
                        Available Bookings:  Available
                    </h3>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar className='' value={selectDate} onChange={handleChange} />
                </LocalizationProvider>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Calendar;
