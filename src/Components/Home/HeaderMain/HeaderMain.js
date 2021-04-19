import React from 'react';
import './HeaderMain';
import headerImg from '../../../images/headerImg.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="d-flex align-items-center my-5"> 
            <div className="container">
            <div className="row align-items-center content">
                <div className="col-md-6 col-sm-12 mb-4">
                    <h1 className="text-uppercase">We Will Help You To Become Healthy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis voluptas ipsa vitae, quisquam velit doloremque libero? Quod, magnam voluptatem!</p>
                    <button type="button" class="btn btn-primary">More About Hospital</button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={headerImg} alt="header image" className="img-fluid"/>
                </div>
            </div>
            </div>
        </main>
    );
};

export default HeaderMain;