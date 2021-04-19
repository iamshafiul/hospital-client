import React from 'react';


const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2>Appointments date: {appointments}</h2>
        </div>
    );
};

export default AppointmentsByDate;