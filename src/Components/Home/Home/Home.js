import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import FeaturesService from '../FeaturesService/FeaturesService';
import Header from '../Header/Header';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturesService></FeaturesService>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <OurDoctor></OurDoctor>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;