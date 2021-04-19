import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contactUs mt-5 py-5 text-center">
            <div className="container">
                <div className="contactUs-text">
            <h4>ContactUs</h4>
            <h2>Always Contact With us</h2>
            <form action="#" className="mt-5">
                <div className="mb-2">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"></input>
                </div>
                <div className="mb-2">
                <input type="text" class="form-control" id="exampleInputSubject" aria-describedby="emailHelp" placeholder="Subject"></input>
                </div>
                <div className="mb-2">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Messsge"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
        </section>
    );
};

export default ContactUs;