import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css'
const CallToActionBlog = () => {
    return (
        <div className='all-to-action-bg'>
            <div className="service-overly">
                <div className="py-5">
                    <div className='container text-white py-5'>
                        <div className="row g-md-4 ">
                            <div className='col-md-6'>
                                <h1 className='display-1 md:display-4'><span className='text-danger'>Sz</span> Photographs</h1>
                                <p className='fs-5'>Read some Blogs</p>
                            </div>
                            <div className='col-md-6 d-flex justify-content-md-end align-items-center'>
                                <Link className="btn btn-danger btn-lg" to='/blogs'>Check Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToActionBlog;