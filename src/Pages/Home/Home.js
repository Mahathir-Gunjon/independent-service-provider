import React from 'react';
import main from '../../Images/hero.jpg';
import './Home.css'

const Home = () => {
    return (
        <section className='bg-black hero-section d-flex align-items-center'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mt-5 text-white">
                            <h3 className='display-6'>Welcome to</h3>
                            <h1 className='display-2 md:display-4'><span className='text-danger'>Sz</span> Photograps</h1>
                            <p className='fs-5'>I'm a independent photographer with few services.</p>
                            <button type="button" class="btn btn-danger btn-lg">Check Services</button>
                        </div>   
                    </div>
                    <div className="col-md-6">
                        <img className='w-100 img-fluid' src={main} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;