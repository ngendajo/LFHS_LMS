import React from 'react';

function ServicesSection() {
  return (
    <section className="services-section">
        <div className="container">
            <h2 className="text-center mb-5">Our Services</h2>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="icon-circle">
                                <i className="fas fa-book-open"></i>
                            </div>
                            <h5 className="card-title">Course Creation and Management</h5>
                            <p className="card-text">Create, organize, and manage course content. Set objectives, timelines, and assessments.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="icon-circle">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                            <h5 className="card-title">Student Enrollment and Management</h5>
                            <p className="card-text">Enroll students in courses. Track student progress and attendance.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="icon-circle">
                                <i className="fas fa-laptop"></i>
                            </div>
                            <h5 className="card-title">Content Delivery</h5>
                            <p className="card-text">Deliver course content through various formats. Provide tools for interactive learning.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="icon-circle">
                                <i className="fas fa-check-square"></i>
                            </div>
                            <h5 className="card-title">Assessment and Grading</h5>
                            <p className="card-text">Create and administer assessments. Grade student work and provide feedback.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="icon-circle">
                                <i className="fas fa-comments"></i>
                            </div>
                            <h5 className="card-title">Communication Tools</h5>
                            <p className="card-text">Forums, chat rooms, and messaging systems for effective communication.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="icon-circle">
                                <i className="fas fa-chart-bar"></i>
                            </div>
                            <h5 className="card-title">Reporting and Analytics</h5>
                            <p className="card-text">Generate reports on student performance, course completion rates, and other metrics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ServicesSection;