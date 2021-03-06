import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="servuce-bg">
            <div className="service-overly">
                <div className="py-5">
                    <div className='container'>
                        <h1 className='text-danger text-center display-3 py-5'>Services</h1>
                        <div className="row g-md-4">
                            {
                                services.map(service => <Service
                                    key={service.id}
                                    service={service}
                                >
                                </Service>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;