import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ServicesSection from './components/ServicesSection';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <img src={require('./images/convetion.jpeg')} alt="Logo" width="50" height="50" class="d-inline-block align-text-top me-2 rounded-circle" />
                    IgaRwa
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex">
                    <button class="btn btn-login me-2">Login</button>
                    <button class="btn btn-register">Register</button>
                </div>
            </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section class="hero py-5 mb-4">
            <div class="container">
                <div class="row min-vh-75 align-items-center">
                    <div class="col-lg-10 col-xl-8 mx-auto text-center">
                        <div class="hero-content p-4 rounded">
                            <h1 class="display-4 fw-bold mb-2">IgaRWA LMS</h1>
                            <h2 class="h3 mb-4">Empower Your Learning Journey</h2>
                            <p class="lead mb-4">Access courses, track progress, and achieve your educational goals with our comprehensive Learning Management System.</p>
                            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <a href="#" class="btn btn-hero btn-lg px-4 gap-3">Explore Courses</a>
                                <a href="#" class="btn btn-outline-light btn-lg px-4">Student Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ServicesSection />
      </main>

      {/* Footer */}
      <footer class="py-5"> 
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-4 mb-3">
                    <img src={require('./images/convetion.jpeg')} width="60" height="60" alt="Logo" class="mb-3 rounded-circle" />
                    <p>Contact Info: 123 Education St, City, Country</p>
                    <p>Email: info@igarwa.com</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-tiktok"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Home</a></li>
                         <li><a href="#">Courses</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-3">
                    <h5>Contact Us</h5>
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Name" required/>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email" required/>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="3" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-submit">Send</button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <hr/>
                    <p>&copy; 2024 IgaRwa. All rights reserved.</p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;