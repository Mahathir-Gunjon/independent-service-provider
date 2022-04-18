import React from 'react';
import main from '../../Images/hero.jpg';
import BestCaptures from '../BestCaptures/BestCaptures';
import CallToActionBlog from '../CallToActionBlog/CallToActionBlog';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <>
            <section className='bg-black hero-section d-flex align-items-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-last">
                            <img className='w-100 img-fluid' src={main} alt="" />
                        </div>
                        <div className="col-md-6 mt-md-5">
                            <div className="mt-5 text-white">
                                <h3 className='display-6'>Welcome to</h3>
                                <h1 className='display-1 md:display-4'><span className='text-danger'>Sz</span> Photographs</h1>
                                <p className='fs-5'>I'm a independent photographer with few services. I'm providing photography services like wedding shoot,out door shoots, product photography etc</p>
                                <button type="button" className="btn btn-danger btn-lg">Check Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service */}
            <Services />
            {/* best clickc */}
            <BestCaptures/>
            {/* call to action */}
            <CallToActionBlog/>
        </>

    );
};

export default Home;