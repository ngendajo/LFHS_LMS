import React from 'react';

function ServicesSection() {
  return (
    <section class="services-section">
        <div class="container">
            <h2 class="text-center mb-5">Our Services</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="icon-circle">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <h5 class="card-title">Course Creation and Management</h5>
                            <p class="card-text">Create, organize, and manage course content. Set objectives, timelines, and assessments.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="icon-circle">
                                <i class="fas fa-user-graduate"></i>
                            </div>
                            <h5 class="card-title">Student Enrollment and Management</h5>
                            <p class="card-text">Enroll students in courses. Track student progress and attendance.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="icon-circle">
                                <i class="fas fa-laptop"></i>
                            </div>
                            <h5 class="card-title">Content Delivery</h5>
                            <p class="card-text">Deliver course content through various formats. Provide tools for interactive learning.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="icon-circle">
                                <i class="fas fa-check-square"></i>
                            </div>
                            <h5 class="card-title">Assessment and Grading</h5>
                            <p class="card-text">Create and administer assessments. Grade student work and provide feedback.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="icon-circle">
                                <i class="fas fa-comments"></i>
                            </div>
                            <h5 class="card-title">Communication Tools</h5>
                            <p class="card-text">Forums, chat rooms, and messaging systems for effective communication.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="icon-circle">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <h5 class="card-title">Reporting and Analytics</h5>
                            <p class="card-text">Generate reports on student performance, course completion rates, and other metrics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ServicesSection;