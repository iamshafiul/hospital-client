import React, { useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetch("http://localhost:5000/appointmentsByDate",{
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({date})
    })
    .then(res =>res.json())
    .then(data => setAppointments(data))

  };


  return (
    <section style={{ backgroundColor: "#F4fDFB", height: "100%" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-5">
            <h1>Appointment</h1>
            <Calendar onChange={handleDateChange} value={new Date()} />
          </div>
          <div className="col-md-5">
            <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
