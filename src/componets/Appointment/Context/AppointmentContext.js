import { createContext, useState } from "react";

// Create the context
export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
    const [id, setId] = useState([]);
    const [name, setName] = useState([]);
    const [selectedSessionName, setSelectedSessionName] = useState(null);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [score, setScore] = useState('');
    const [last_session, setLast_session] = useState('');
    const [type, setType] = useState('');
    const [feedback, setFeedback] = useState('');

    return (
        <AppointmentContext.Provider
            value={{
                id,
                setId,
                name,
                setName,
                selectedSessionName, //session name
                setSelectedSessionName,
                last_session, // session date
                setLast_session,
                score, //score
                setScore,
                type, //type
                setType,
                feedback, //feedback
                setFeedback,
                setDate, //date
                date,
                setTime, //time
                time,
            }}
        >
            {children}
        </AppointmentContext.Provider>
    );
};
