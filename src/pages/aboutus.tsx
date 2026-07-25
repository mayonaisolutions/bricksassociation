import React, { useEffect } from 'react';

export const Aboutus = () => {
    useEffect(() => {
        document.title = "About Us | Tamilnadu Fly Ash Bricks Association";
        
        // Add or update meta description dynamically
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Learn about the Tamilnadu Fly Ash Bricks Association, our mission for sustainable building practices, and our commitment to eco-friendly fly ash brick manufacturing.");
        }
    }, []);

    return (
        <div className="about-page-wrapper">
            {/* Hero Header Section */}
            <div className="about-us-header">
                <div className="header-inner-container">
                    <span className="about-us-badge">Who We Are</span>
                    <h1>Pioneering Sustainable Construction, Brick by Brick</h1>
                    <p className="about-us-text">
                        Welcome to the Tamilnadu Fly Ash Bricks Association – your gateway to sustainable construction practices and a greener future for Tamil Nadu.
                    </p>
                    <div className="about-slogo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        Building eco-friendly foundations for a brighter, greener future
                    </div>
                </div>
            </div>

            <div className="about-content-wrapper">
                {/* About Us Section */}
                <div className="about-container">
                    <div className="about-content-left">
                        <h2 className="about-us-heading">About Us</h2>
                        <div className="about-us-body-text">
                            <p>
                                Welcome to the Tamilnadu Fly Ash Bricks Association – your gateway to sustainable construction practices and a greener future for Tamil Nadu.
                            </p>
                            <p>
                                Established with a vision to lead the way in sustainable building practices, our association brings together industry professionals, manufacturers, suppliers, builders, and enthusiasts who share a common commitment to transforming the construction sector.
                            </p>
                        </div>
                    </div>
                    
                    <div className="about-image-right">
                        <img 
                            src="concrete_pavers.png" 
                            alt="Eco-friendly interlocking paver blocks" 
                        />
                        <div className="image-badge">Sustainable Foundations</div>
                    </div>
                </div>

                {/* Our Vision & Commitment Section */}
                <div className="about-container reverse">
                    <div className="about-image-left">
                        <img 
                            src="eco_building.png" 
                            alt="Eco-friendly construction and green building" 
                        />
                        <div className="image-badge">Empowering Sustainable Construction</div>
                    </div>
                    
                    <div className="about-content-right">
                        <h2 className="about-us-heading">Our Vision & Commitment</h2>
                        <div className="about-us-body-text">
                            <p>
                                By advocating for the use of fly ash in brick manufacturing, we actively help reduce industrial by-products while preserving natural resources and topsoil. Our brick solutions provide exceptional durability, thermal insulation, and long-term strength for eco-friendly buildings and infrastructures across Tamil Nadu.
                            </p>
                            <p>
                                We strive to create a circular economy where industrial waste is converted into high-performance, eco-friendly building materials, minimizing environmental degradation and maximizing energy efficiency in construction.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Objectives Section */}
                <div className="about-objectives-section">
                    <div className="objectives-header">
                        <h2>Our Core Objectives</h2>
                        <p>Focusing on environmental advocacy, technical collaboration, and brick manufacturing sector prosperity.</p>
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
                            <h3>Sustainable Construction</h3>
                            <p>Advocating for the widespread adoption of fly ash bricks to reduce carbon footprints, minimize topsoil excavation, and promote eco-friendly building practices.</p>
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
                            <p>Fostering research and knowledge sharing on structural load capacity, thermal insulation, water absorption standards, and advanced curing methods.</p>
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
                            <p>Empowering brick manufacturers across Tamil Nadu by driving quality standards, expanding commercial demand, and building stronger, greener infrastructures.</p>
                        </div>
                    </div>
                </div>

                {/* Statistics Ribbon */}
                <div className="about-stats-section">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-val">High</span>
                            <span className="stat-label">Strength</span>
                            <span className="stat-desc">Engineered for superior structural durability</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">100%</span>
                            <span className="stat-label">Eco-Friendly</span>
                            <span className="stat-desc">Reduces carbon footprint & saves topsoil</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">Class 10+</span>
                            <span className="stat-label">Grade Quality</span>
                            <span className="stat-desc">Exceeding national standards for structural masonry</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">100+</span>
                            <span className="stat-label">Manufacturers</span>
                            <span className="stat-desc">Unified brick manufacturing network across Tamil Nadu</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
