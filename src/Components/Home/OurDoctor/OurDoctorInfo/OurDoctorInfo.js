import React from "react";

const OurDoctorInfo = ({ doctor }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div class="card">
        <img src={doctor.img} class="card-img-top" style={{ height: "300px" }} alt="our doctor" />
        <div class="card-body">
          <h4 class="card-title">{doctor.name}</h4>
          <h5 class="card-subtitle mb-2 text-primary">{doctor.title}</h5>
          <h6>{doctor.number}</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
};

export default OurDoctorInfo;
