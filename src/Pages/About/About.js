import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className='bg-black about-section d-flex align-items-center py-5'>
            <div className="container">
            <h1 className='text-danger text-center display-3 pb-3'>About me</h1>
                <div className="row">
                    <div className="col-md-5 mt-md-0 mt-5">
                        <img className='w-100 img-fluid rounded-3' src='https://scontent.fdac45-1.fna.fbcdn.net/v/t39.30808-6/268786395_3179276992392645_2900594860479293044_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGg0gYS6nruZVPY2M91ObPQGQGjTzgPMgAZAaNPOA8yAIeHnaXbmhBiINRN32IkfKzmlPDpYdBD03y8Ov9iowIQ&_nc_ohc=zx9v8TcmzHIAX-nJerj&_nc_ht=scontent.fdac45-1.fna&oh=00_AT-4OQ0K7W5WUEWs41FF3_nbf4dcI7lHk2Gr95e1-fb0pg&oe=62627615' alt="" />
                    </div>
                    <div className="col-md-7 mt-md-5">
                        <div className="text-white">
                            <h1 className='display-1 md:display-4'><span className='text-danger'>Mahathir</span> Mohammad</h1>
                            <p className='fs-5'>I'm a Front-end web developer. I have some knowledge of modern website development. I learned some technologies like HTML, CSS, BOOTSTRAP, TAILWIND, MODERN JS or ES6, REACT JS, ROUTER, FIREBASE, etc...
                            <br />
                                My dream is to be a software developer. I want to build large and modern websites and work with my project or services.
                                <br />
                                I'm developing myself day by day to gather more knowledge about the website. I want to be a MERN stack developer and am also interested in learning Python and Django for the back-end... </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;