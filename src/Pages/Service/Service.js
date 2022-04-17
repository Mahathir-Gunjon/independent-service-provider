import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, description, image, price } = service;

    return (
        <div className='col-md-6'>
            <div className="card mb-3 rounded-3 border-0 service-bg">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={image} className="img-fluid rounded-start" style={{height: "100%"}} alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{price}</small></p>
                            <button className='btn btn-danger btn-sm shadow'><Link to='/checkout' className='btn btn-danger'>Book Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;