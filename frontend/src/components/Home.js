import React from 'react';
import { Link } from 'react-router-dom';
import ServicesSection from './ServicesSection';
// import logo from '../images/convetion.jpeg';
const Home = () => {
    return (
        <div className="App">
          {/* Header */}
          <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={require('../images/convetion.jpeg')} alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2 rounded-circle" />
                        IgaRwa
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-login me-2">Login</button>
                        <button className="btn btn-register">Register</button>
                    </div>
                </div>
            </nav>
          </header>
    
          {/* Main Content */}
          <main>
            <section className="hero py-5 mb-4">
                <div className="container">
                    <div className="row min-vh-75 align-items-center">
                        <div className="col-lg-10 col-xl-8 mx-auto text-center">
                            <div className="hero-content p-4 rounded">
                                <h1 className="display-4 fw-bold mb-2">IgaRWA LMS</h1>
                                <h2 className="h3 mb-4">Empower Your Learning Journey</h2>
                                <p className="lead mb-4">Access courses, track progress, and achieve your educational goals with our comprehensive Learning Management System.</p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <a href="#" className="btn btn-hero btn-lg px-4 gap-3">Explore Courses</a>
                                    <a href="#" className="btn btn-outline-light btn-lg px-4">Student Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServicesSection />
          </main>
          
          {/* Footer */}
          <footer className="py-5"> 
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                        <img src={require('../images/convetion.jpeg')} width="60" height="60" alt="Logo" className="mb-3 rounded-circle" />
                        <p>Contact Info: 123 Education St, City, Country</p>
                        <p>Email: info@igarwa.com</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                             <li><a href="#">Courses</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Contact Us</h5>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Name" required/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" required/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="3" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-submit">Send</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <hr/>
                        <p>&copy; 2024 IgaRwa. All rights reserved.</p>
                    </div>
                </div>
            </div>
          </footer>
        </div>
    )
};

export default Home;
