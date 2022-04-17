import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className="container">
                <footer className="py-5">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-2">
                            <h5>Quick links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">Home</p></li>
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">Checkout</p></li>
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <h5>Services</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">Wedding Shoot</p></li>
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">Out door shoot</p></li>
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">Product Shoot</p></li>
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <h5>Othera</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">About</p></li>
                                <li className="nav-item mb-2"><p href="#" className="nav-link p-0 text-muted">Blogs</p></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <form>
                                <h5>Subscribe to SZ</h5>
                                <p>For monthly updated services in future</p>
                                <div className="d-flex w-100 gap-2">
                                    <label className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                        <button className="btn btn-danger" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end py-4 my-4 border-top">
                        <p>&copy; 2022 Sz. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;