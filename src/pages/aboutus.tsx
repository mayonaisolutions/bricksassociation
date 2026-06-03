import React, { useEffect } from 'react';

export const Aboutus = () => {
    useEffect(() => {
        document.title = "About Us | Tamilnadu Fly Ash Bricks Association";
        
        // Add or update meta description dynamically
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Learn about the Tamilnadu Fly Ash Bricks Association, our mission for sustainable paving solutions, and our commitment to eco-friendly interlocking fly ash paver block manufacturing.");
        }
    }, []);

    return (
        <div className="about-page-wrapper">
            {/* Hero Header Section */}
            <div className="about-us-header">
                <div className="header-inner-container">
                    <span className="about-us-badge">Who We Are</span>
                    <h1>Pioneering Sustainable Paving Solutions, Block by Block</h1>
                    <p className="about-us-text">
                        Welcome to the Tamilnadu Fly Ash Bricks Association — your gateway to premium, eco-friendly paving solutions. We bring together manufacturers, landscape designers, and contractors to promote interlocking fly ash paver blocks that combine strength, durability, and ecological responsibility.
                    </p>
                    <div className="about-slogo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        Paving the way for a greener, sustainable future
                    </div>
                </div>
            </div>

            <div className="about-content-wrapper">
                {/* Split Vision Section */}
                <div className="about-container">
                    <div className="about-content-left">
                        <h2 className="about-us-heading">Our Vision & Commitment</h2>
                        <div className="about-us-body-text">
                            <p>
                                Established with a vision to lead the transition toward sustainable landscaping and paving, our association promotes high-performance interlocking fly ash paver blocks. We bring together industry leaders, manufacturers, and engineers committed to creating eco-friendly pathways, driveways, and pavements.
                            </p>
                            <p>
                                By advocating for the use of fly ash in paver block manufacturing, we actively help reduce industrial by-products while preserving natural sand and topsoil resources. Our paving solutions provide exceptional load-bearing capacity, versatile design layouts, and long-term durability for residential, commercial, and industrial yards across Tamil Nadu.
                            </p>
                        </div>
                    </div>
                    
                    <div className="about-image-right">
                        <img 
                            src="/concrete_pavers.png" 
                            alt="Eco-friendly interlocking concrete paver blocks pathway" 
                        />
                        <div className="image-badge">Empowering Sustainable Landscaping</div>
                    </div>
                </div>

                {/* Core Objectives Section */}
                <div className="about-objectives-section">
                    <div className="objectives-header">
                        <h2>Our Core Objectives</h2>
                        <p>Focusing on environmental advocacy, technical collaboration, and paving sector prosperity.</p>
                    </div>
                    
                    <div className="objectives-grid">
                        <div className="objective-card">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7.5 7.5 0 0 1-9 10z" />
                                    <path d="M9 22v-6" />
                                    <path d="M12 22v-5" />
                                </svg>
                            </div>
                            <h3>Sustainable Paving</h3>
                            <p>Advocating for the widespread adoption of fly ash interlocking paver blocks to reduce carbon footprints and protect natural river sand reserves.</p>
                        </div>

                        <div className="objective-card">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 6.1H3" />
                                    <path d="m21 10-4-4 4-4" />
                                    <path d="M7 17.9h14" />
                                    <path d="m3 14 4 4-4 4" />
                                </svg>
                            </div>
                            <h3>Technical Excellence</h3>
                            <p>Fostering research and knowledge sharing on interlocking design, load-bearing capacities, water runoff solutions, and advanced curing methods.</p>
                        </div>

                        <div className="objective-card">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>Infrastructure Growth</h3>
                            <p>Empowering paver manufacturers across Tamil Nadu by driving quality standards, expanding industrial demand, and creating safer walkways and driveways.</p>
                        </div>
                    </div>
                </div>

                {/* Statistics Ribbon */}
                <div className="about-stats-section">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-val">Heavy</span>
                            <span className="stat-label">Duty Traffic</span>
                            <span className="stat-desc">Engineered for high load-bearing capacity</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">100%</span>
                            <span className="stat-label">Eco-Friendly</span>
                            <span className="stat-desc">Preserves river sand & topsoil resources</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">M40+</span>
                            <span className="stat-label">Grade Quality</span>
                            <span className="stat-desc">Superior compressive strength & durability</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">100+</span>
                            <span className="stat-label">Manufacturers</span>
                            <span className="stat-desc">Unified paving network across Tamil Nadu</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
