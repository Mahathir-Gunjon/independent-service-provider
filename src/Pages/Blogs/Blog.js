import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='bg-black py-5'>
            <Container className='py-5'>
                <h1 className='text-danger text-center display-3'>About Firebase</h1>
            <div className="card rounded-3 border-0 service-bg my-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src='https://lh3.googleusercontent.com/16FwaRpvUmWs1ZfVVsYmoA4gqvNH8kazS9crLGTEZAxKKDuH6d_j_GKsqzt6WWwqHqgIJmmkYOu3Nk6QFotq5l7MdT-BpAOzoTJM8KX6ToS9SZCVIsj1v2wc5YZeg8twRuX34HER' className="img-fluid rounded-start" style={{height: "100%"}} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Difference between authorization and authentication</h5>
                            <p className="card-text">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6>Authentication</h6>
                                            <p>In authentication method, the identity of users square measure checked for providing the access to the system. In authentication method, users or persons square measure verified. It is done before the authorization process. It needs usually user's login details. Authentication determines whether the person is user or not.</p>
                                        </div>
                                        <div className="col-md-6">

                                        </div>
                                    </div>
                                </div>
                            </p>
                            <p className="card-text"><small className="text-muted">gfh</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card rounded-3 border-0 service-bg my-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src='https://pbs.twimg.com/media/D6J6pqTX4AAyA3K.jpg' className="img-fluid rounded-start" style={{height: "100%"}} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio, mollitia cum ipsa sed illum repellat perferendis quis incidunt. Nemo quisquam dignissimos aperiam minima vitae facilis expedita! Ipsam, repellendus quisquam!</p>
                            <p className="card-text"><small className="text-muted">gfh</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card rounded-3 border-0 service-bg my-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src='https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg' className="img-fluid rounded-start" style={{height: "100%"}} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">What other services does firebase provide other than authentication</h5>
                            <p>There are many services which Firebase provides, Most useful of them are:</p>
                            <p className="card-text d-flex flex-wrap gap-2">
                                <span className='text-white bg-danger p-1 fs-6 rounded-3'>Cloud Firestore</span>
                                <span className='text-white bg-danger p-1 fs-6 rounded-3'>Cloud Functions</span>
                                <span className='text-white bg-danger p-1 fs-6 rounded-3'>Authentication</span>
                                <span className='text-white bg-danger p-1 fs-6 rounded-3'>Hosting</span>
                                <span className='text-white bg-danger p-1 fs-6 rounded-3'>Cloud Storage</span>
                                <span className='text-white bg-danger p-1 fs-6 rounded-3'>Google Analytics</span>
                                <span className='text-white bg-danger p-1 fs-6 rounded-3'>Predictions</span>
                                <span className='text-white bg-danger p-1 fs-6 rounded-3'>Cloud Messaging</span>
                            </p>
                            <p className="card-text"><small className="text-muted">gfh</small></p>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
                
        </div>
    );
};

export default Blog;