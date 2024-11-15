import React, { useContext } from 'react';
import { AppointmentContext } from './Context/AppointmentContext';

function Sessions({ toggleSlider }) {
    const {
        name, setSelectedSessionName, setType, setId
    } = useContext(AppointmentContext);
    // console.log(selectedSessionName)
    return (
        <div className="border rounded-xl text-sm mt-10 mx-5">
            {/* Header with tabs */}
            <div className="flex justify-between items-center px-5 py-3 border-b">
                <div className="flex space-x-6">
                    <button className="font-semibold text-blue-500 border-b-2 border-blue-500">Mock Sessions</button>
                    <button className="font-semibold text-gray-400">Mentorship Sessions</button>
                </div>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm border rounded-full">Placement Mocks</button>
                    <button className="px-3 py-1 text-sm border rounded-full">Others</button>
                    <button className="px-3 py-1 text-sm border rounded-full">HR Expert Sessions</button>
                    <button className="px-3 py-1 text-sm border rounded-full">Fundamentals</button>
                    <button className="px-3 py-1 text-sm border rounded-full">Frontend</button>
                    <button className="px-3 py-1 text-sm border rounded-full">DSA</button>
                    <button className="px-3 py-1 text-sm border rounded-full">Backend</button>
                </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-3 px-5 py-3 text-gray-500 text-sm font-semibold border-b">
                <div>Session Name</div>
                <div>Score</div>
                <div>Last session</div>
            </div>

            {/* Session List */}
            {name.map((session) => (
                <div key={session._id} className="grid grid-cols-3 px-5 py-3 items-center border-b">
                    <div className="flex items-center space-x-3">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${session.type === "FND" ? "bg-blue-400" :
                                session.type === "BD" ? "bg-red-400" :
                                    "bg-green-500"}`}
                        >
                            {session.type}
                        </div>
                        <span>{session.session_name}</span>
                    </div>
                    <div>
                        <span
                            className={`px-4 py-1 rounded-lg font-semibold ${session.entries[session.entries.length - 1].score >= 8
                                    ? 'bg-green-100 text-green-600'
                                    : session.entries[session.entries.length - 1].score >= 6
                                        ? 'bg-yellow-100 text-yellow-600'
                                        : session.entries[session.entries.length - 1].score != null
                                            ? 'bg-red-100 text-red-600'
                                            : ''
                                }`}
                        >
                            {session.entries[session.entries.length - 1].score != '' 
                                ? session.entries[session.entries.length - 1].score
                                : "Wait for result"}
                        </span>

                    </div>

                    <div className="flex items-center justify-between">
                        <span>{session.entries[session.entries.length - 1].last_session}</span>

                        <div onClick={() => {
                            setSelectedSessionName(session.session_name);
                            setType(session.type);
                            setId(session._id)
                        }}
                            className="flex space-x-2">
                            <button className="text-blue-400 font-semibold border-l-2 px-5" onClick={toggleSlider}>View details</button>
                        </div>

                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default Sessions;
