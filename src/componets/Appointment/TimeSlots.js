import React from 'react';

function TimeSlots({ onBookSlot, slotsBookedForDate = [] }) {

    const timeSlots = [
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
        '5:00 PM', '6:00 PM', '7:00 PM'
    ];

    return (
        <div>
            <div className='texts'>
                {timeSlots.map((slot, index) => (
                    <button
                        className='rounded-lg text-sm'
                        key={index}
                        onClick={() => onBookSlot(slot)}
                        disabled={slotsBookedForDate.includes(slot) || slotsBookedForDate.length >= 1}
                        style={{
                            fontSize: '12px',
                            margin: '5px',
                            padding: '7px',
                            backgroundColor: slotsBookedForDate.includes(slot) ? '#d3d3d3' : '#4789F4',
                            color: 'white',
                            cursor: slotsBookedForDate.includes(slot) || slotsBookedForDate.length >= 2 ? 'not-allowed' : 'pointer',
                        }}
                    >
                        {slot}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TimeSlots;
