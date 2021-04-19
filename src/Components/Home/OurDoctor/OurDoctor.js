import React from 'react';
import matthew from '../../../images/matthew.png';
import hannah from '../../../images/hannah.png';
import jonathan from '../../../images/jonathan.png';
import OurDoctorInfo from './OurDoctorInfo/OurDoctorInfo';

const OurDoctor = () => {
    const doctorsData = [
        {
           
            name : " D.M Jonathan",
            title : "Chief Medical Officer",
            img : matthew,
        },
        {
           
            name : " D.M Hannah",
            title : "Anesthesiologist",
            img : hannah,
        },
        {
           
            name : "D.M Anderson",
            title : "Cardiology",
            img : jonathan,
        },
       
    ]

    return (
        <section className="container mt-5">
            <div className="text-center mb-5">
            <h2>Our Doctors</h2>
            </div>
            <div className="row">
            {
          doctorsData.map(doctor => <OurDoctorInfo doctor={doctor}></OurDoctorInfo>) 
      }
      </div>
        </section>
    );
};

export default OurDoctor;