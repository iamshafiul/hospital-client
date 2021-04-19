import React from 'react';
import feature from '../../../images/feature.jpg';

const FeaturesService = () => {
    return (
        <section className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-5">
                   <img src={feature} alt="featured" className="img-fluid"/>
                </div>
                <div className="col-md-7">
                    <h2 className="text-uppercase">Solutions to Complex<br/> Medical Problems</h2>
                    <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis, dolorum accusamus voluptates error nemo! Fugiat, facilis perferendis! Velit numquam beatae rerum aliquid repellat quasi labore id quidem ab sunt!</p>
                    <button type="button" class="btn btn-primary">Find More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesService;